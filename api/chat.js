/**
 * POST /api/chat — GitaGPT backend (Vercel Node.js serverless function).
 *
 * - The OpenRouter key is read from process.env.OPENROUTER_API_KEY on the server only.
 * - The system prompt lives in ./_lib/systemPrompt.js; the browser can only send
 *   user/assistant turns, so it can never override it.
 * - Streams the reply to the browser as newline-delimited JSON events:
 *     {"t":"d","v":"text chunk"}   a piece of the answer
 *     {"t":"done"}                 finished normally
 *     {"t":"e","code":"..."}       failed after the stream started
 *   Failures before the stream starts are plain JSON with an HTTP status:
 *     {"error":{"code":"...","message":"..."}}
 */
import { GITAGPT_SYSTEM_PROMPT, CRISIS_ADDENDUM, VERSE_CONTEXT_HEADER } from "./_lib/systemPrompt.js";
import { verseContextFor } from "./_lib/scripture.js";

// OPENROUTER_API_URL is optional and only meant for local testing against a stub server.
const DEFAULT_OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
// Verified as a listed OpenRouter model ID (Anthropic: Claude Sonnet 5). Override with OPENROUTER_MODEL.
const DEFAULT_MODEL = "anthropic/claude-sonnet-5";

const LIMITS = {
  maxMessageChars: 2000, // one user message
  maxHistoryMessages: 20, // turns sent to the model (most recent kept)
  maxHistoryChars: 14000, // total characters across history
  maxBodyBytes: 120_000,
  maxOutputTokens: 1400,
  upstreamTimeoutMs: 55_000,
  ratePerMinute: 12, // per IP, best effort (see note below)
};

/* ---- Best-effort rate limiting --------------------------------------------
   In-memory, so it is per warm serverless instance, not global. It stops
   casual hammering; for hard guarantees use Vercel Firewall rate limiting or
   a shared store (e.g. Upstash/Vercel KV). Documented in the README. */
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowStart = now - 60_000;
  const arr = (hits.get(ip) || []).filter((t) => t > windowStart);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => t > windowStart)) hits.delete(k);
  return arr.length > LIMITS.ratePerMinute;
}

const CRISIS_RE = new RegExp(
  [
    "suicid", "kill\\s+myself", "end\\s+my\\s+life", "end\\s+it\\s+all", "take\\s+my\\s+(own\\s+)?life",
    "want\\s+to\\s+die", "wanna\\s+die", "don'?t\\s+want\\s+to\\s+(live|be\\s+alive|exist)",
    "no\\s+reason\\s+to\\s+live", "better\\s+off\\s+(dead|without\\s+me)", "hurt\\s+myself",
    "harm\\s+myself", "self[-\\s]?harm", "cut\\s+myself", "overdos", "kill\\s+me\\b", "life\\s+is\\s+not\\s+worth",
    "not\\s+worth\\s+living", "can'?t\\s+go\\s+on", "end\\s+everything",
  ].join("|"),
  "i"
);

function sendJson(res, status, code, message, extraHeaders = {}) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  for (const [k, v] of Object.entries(extraHeaders)) res.setHeader(k, v);
  res.end(JSON.stringify({ error: { code, message } }));
}

async function readBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === "string") return req.body;
    if (Buffer.isBuffer(req.body)) return req.body.toString("utf8");
    return JSON.stringify(req.body);
  }
  const chunks = [];
  let size = 0;
  for await (const c of req) {
    size += c.length;
    if (size > LIMITS.maxBodyBytes) throw Object.assign(new Error("too large"), { code: "too_large" });
    chunks.push(c);
  }
  return Buffer.concat(chunks).toString("utf8");
}

function validate(payload) {
  if (!payload || typeof payload !== "object" || !Array.isArray(payload.messages)) {
    return { error: "Send a JSON body with a messages array." };
  }
  const cleaned = [];
  for (const m of payload.messages) {
    if (!m || typeof m !== "object") return { error: "Each message must be an object." };
    // Only user/assistant roles are accepted. Anything else (e.g. "system") is rejected,
    // which is what prevents the client from injecting or replacing instructions.
    if (m.role !== "user" && m.role !== "assistant") return { error: "Invalid message role." };
    if (typeof m.content !== "string") return { error: "Message content must be text." };
    const content = m.content.replace(/\u0000/g, "").trim();
    if (!content) continue; // drop blank turns (e.g. a failed, empty assistant reply)
    if (m.role === "user" && content.length > LIMITS.maxMessageChars) {
      return { error: `Please keep each message under ${LIMITS.maxMessageChars} characters.`, code: "message_too_long" };
    }
    cleaned.push({ role: m.role, content: m.role === "assistant" ? content.slice(0, 8000) : content });
  }
  if (!cleaned.length || cleaned[cleaned.length - 1].role !== "user") {
    return { error: "The last message must be a non-empty message from you." , code: "empty_message" };
  }
  // keep most recent turns within count and character budgets
  let trimmed = cleaned.slice(-LIMITS.maxHistoryMessages);
  let total = trimmed.reduce((n, m) => n + m.content.length, 0);
  while (trimmed.length > 1 && total > LIMITS.maxHistoryChars) {
    total -= trimmed[0].content.length;
    trimmed = trimmed.slice(1);
  }
  // most providers want the first turn to be from the user
  while (trimmed.length > 1 && trimmed[0].role !== "user") trimmed = trimmed.slice(1);
  return { messages: trimmed };
}

function clientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  const first = (Array.isArray(xf) ? xf[0] : xf || "").split(",")[0].trim();
  return first || req.socket?.remoteAddress || "unknown";
}

function ndjson(res, obj) {
  res.write(JSON.stringify(obj) + "\n");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return sendJson(res, 405, "method_not_allowed", "Use POST.", { Allow: "POST" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    // Do not reveal configuration details to visitors; the real cause goes to server logs.
    console.error("[gitagpt] OPENROUTER_API_KEY is not set on the server.");
    return sendJson(res, 503, "not_configured", "GitaGPT is not available right now. Please try again later.");
  }

  if (rateLimited(clientIp(req))) {
    return sendJson(res, 429, "rate_limited", "You're sending messages quickly. Please wait a moment and try again.", { "Retry-After": "30" });
  }

  const type = String(req.headers["content-type"] || "");
  if (!type.includes("application/json")) {
    return sendJson(res, 415, "bad_request", "Content-Type must be application/json.");
  }

  let payload;
  try {
    const raw = await readBody(req);
    if (raw.length > LIMITS.maxBodyBytes) return sendJson(res, 413, "too_large", "That request is too large.");
    payload = JSON.parse(raw);
  } catch (e) {
    if (e && e.code === "too_large") return sendJson(res, 413, "too_large", "That request is too large.");
    return sendJson(res, 400, "bad_request", "The request could not be read.");
  }

  const v = validate(payload);
  if (v.error) return sendJson(res, 400, v.code || "bad_request", v.error);

  const lastUser = v.messages[v.messages.length - 1].content;
  const recentUserText = v.messages.filter((m) => m.role === "user").slice(-2).map((m) => m.content).join("\n");

  // Compose the trusted system prompt entirely on the server.
  let system = GITAGPT_SYSTEM_PROMPT;
  if (CRISIS_RE.test(lastUser)) system += "\n\n" + CRISIS_ADDENDUM;
  const verseCtx = verseContextFor(recentUserText);
  if (verseCtx) system += "\n\n" + VERSE_CONTEXT_HEADER + "\n\n" + verseCtx;

  const model = (process.env.OPENROUTER_MODEL || DEFAULT_MODEL).trim();
  const referer = process.env.SITE_URL || "https://bluegen.vercel.app";

  const controller = new AbortController();
  const timeoutMs = Number(process.env.OPENROUTER_TIMEOUT_MS) || LIMITS.upstreamTimeoutMs;
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  req.on?.("close", () => { if (!res.writableEnded) controller.abort(); });

  let upstream;
  try {
    upstream = await fetch(process.env.OPENROUTER_API_URL || DEFAULT_OPENROUTER_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": referer,
        "X-Title": "BlueGen GitaGPT",
      },
      body: JSON.stringify({
        model,
        stream: true,
        max_tokens: LIMITS.maxOutputTokens,
        temperature: 0.7,
        messages: [{ role: "system", content: system }, ...v.messages],
      }),
    });
  } catch (e) {
    clearTimeout(timer);
    if (e && e.name === "AbortError") return sendJson(res, 504, "timeout", "GitaGPT took too long to respond. Please try again.");
    console.error("[gitagpt] network error contacting OpenRouter:", e && e.name);
    return sendJson(res, 502, "network", "Couldn't reach the AI service. Please try again in a moment.");
  }

  if (!upstream.ok) {
    clearTimeout(timer);
    // Log only the status and OpenRouter's short error text, never headers or the key.
    let detail = "";
    try { detail = (await upstream.text()).slice(0, 300); } catch { /* ignore */ }
    console.error(`[gitagpt] OpenRouter responded ${upstream.status}: ${detail.replace(apiKey, "[redacted]")}`);
    if (upstream.status === 401 || upstream.status === 403) {
      return sendJson(res, 503, "not_configured", "GitaGPT is not available right now. Please try again later.");
    }
    if (upstream.status === 402) {
      return sendJson(res, 503, "unavailable", "GitaGPT is temporarily unavailable. Please try again later.");
    }
    if (upstream.status === 429) {
      return sendJson(res, 429, "rate_limited", "GitaGPT is busy right now. Please wait a moment and try again.", { "Retry-After": "20" });
    }
    if (upstream.status === 400 || upstream.status === 404) {
      return sendJson(res, 502, "provider_error", "GitaGPT is misconfigured at the moment. Please try again later.");
    }
    return sendJson(res, 502, "provider_error", "The AI service had a problem. Please try again.");
  }

  // ---- Stream OpenRouter's SSE → our NDJSON -------------------------------------------------
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, no-transform");
  res.setHeader("X-Accel-Buffering", "no");
  res.flushHeaders?.();

  const decoder = new TextDecoder();
  let buf = "";
  let sent = 0;
  let finishReason = null;
  let providerError = false;

  const handleLine = (line) => {
    if (!line.startsWith("data:")) return; // comments such as ": OPENROUTER PROCESSING"
    const data = line.slice(5).trim();
    if (!data || data === "[DONE]") return;
    let json;
    try { json = JSON.parse(data); } catch { return; }
    if (json.error) { providerError = true; return; }
    const choice = json.choices && json.choices[0];
    if (!choice) return;
    const piece = choice.delta && typeof choice.delta.content === "string" ? choice.delta.content : "";
    if (piece) { sent += piece.length; ndjson(res, { t: "d", v: piece }); }
    if (choice.finish_reason) finishReason = choice.finish_reason;
    if (choice.finish_reason === "error") providerError = true;
  };

  try {
    for await (const chunk of upstream.body) {
      buf += decoder.decode(chunk, { stream: true });
      let nl;
      while ((nl = buf.indexOf("\n")) !== -1) {
        handleLine(buf.slice(0, nl).replace(/\r$/, ""));
        buf = buf.slice(nl + 1);
      }
    }
    if (buf.trim()) handleLine(buf.trim());
  } catch (e) {
    providerError = true;
    console.error("[gitagpt] stream interrupted:", e && e.name);
  } finally {
    clearTimeout(timer);
  }

  if (!sent) ndjson(res, { t: "e", code: providerError ? "provider_error" : "empty" });
  else if (providerError) ndjson(res, { t: "e", code: "interrupted" });
  else ndjson(res, { t: "done", truncated: finishReason === "length" });
  res.end();
}
