import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { OmMark, MandalaMotif, PeacockFeatherMotif } from "../components/Motifs.jsx";
import { Reveal } from "../components/Reveal.jsx";
import ChatMarkdown from "../components/ChatMarkdown.jsx";
import "./ChatPage.css";

const SUGGESTIONS = [
  "I feel like a failure and I'm afraid of disappointing my family.",
  "What was Arjuna's dilemma, and how did Krishna guide him?",
  "How can I control my anger and restless mind?",
  "I can't decide between two paths and I'm afraid of choosing wrong.",
  "What does Gita 2.47 really mean for my everyday work?",
  "How can I find peace during a difficult time?",
];

const MAX_CHARS = 2000;
const API_URL = "/api/chat";

let idCounter = 0;
const nextId = () => `m${Date.now().toString(36)}${(idCounter++).toString(36)}`;

/* Read the NDJSON stream from /api/chat and report pieces as they arrive. */
async function streamChat(messages, { signal, onDelta }) {
  let response;
  try {
    response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
      signal,
    });
  } catch (err) {
    if (err && err.name === "AbortError") throw err;
    const e = new Error("Couldn't reach GitaGPT. Please check your connection and try again.");
    e.code = "network";
    throw e;
  }

  if (!response.ok) {
    let message = "Something went wrong. Please try again.";
    let code = "server_error";
    try {
      const data = await response.json();
      if (data && data.error) { message = data.error.message || message; code = data.error.code || code; }
    } catch { /* non-JSON error body */ }
    const e = new Error(message);
    e.code = code;
    throw e;
  }

  if (!response.body) {
    const e = new Error("Your browser couldn't read the reply. Please try again.");
    e.code = "stream_unsupported";
    throw e;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let finished = false;
  let truncated = false;

  const handle = (line) => {
    if (!line.trim()) return;
    let ev;
    try { ev = JSON.parse(line); } catch { return; }
    if (ev.t === "d") onDelta(ev.v);
    else if (ev.t === "done") { finished = true; truncated = Boolean(ev.truncated); }
    else if (ev.t === "e") {
      const e = new Error(
        ev.code === "interrupted"
          ? "The reply was interrupted."
          : "GitaGPT couldn't complete a reply. Please try again."
      );
      e.code = ev.code || "provider_error";
      throw e;
    }
  };

  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      let nl;
      while ((nl = buffer.indexOf("\n")) !== -1) {
        handle(buffer.slice(0, nl));
        buffer = buffer.slice(nl + 1);
      }
    }
    if (buffer.trim()) handle(buffer);
  } catch (err) {
    if (err && err.name === "AbortError") throw err;
    if (err && err.code) throw err;
    const e = new Error("The connection dropped before the reply finished.");
    e.code = "interrupted";
    throw e;
  }

  if (!finished) {
    const e = new Error("The connection dropped before the reply finished.");
    e.code = "interrupted";
    throw e;
  }
  return { truncated };
}

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null); // { message, retryable }
  const [copiedId, setCopiedId] = useState("");
  const [atBottom, setAtBottom] = useState(true);

  const scrollerRef = useRef(null);
  const textareaRef = useRef(null);
  const abortRef = useRef(null);
  const stickRef = useRef(true);

  /* ---- scrolling inside the conversation panel ---- */
  const scrollToLatest = useCallback((smooth = true) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "auto" });
  }, []);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const near = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    stickRef.current = near;
    setAtBottom(near);
  };

  useEffect(() => {
    if (stickRef.current) scrollToLatest(false);
  }, [messages, busy, scrollToLatest]);

  /* ---- composer auto-grow ---- */
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 180)}px`;
  }, [input]);

  useEffect(() => {
    if (!copiedId) return undefined;
    const t = setTimeout(() => setCopiedId(""), 2200);
    return () => clearTimeout(t);
  }, [copiedId]);

  useEffect(() => () => abortRef.current?.abort(), []);

  /* ---- sending ---- */
  const run = useCallback(
    async (history) => {
      // history: the conversation up to and including the latest user message
      const assistantId = nextId();
      setError(null);
      setBusy(true);
      stickRef.current = true;
      setMessages([...history, { id: assistantId, role: "assistant", content: "" }]);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const result = await streamChat(
          history.map(({ role, content }) => ({ role, content })),
          {
            signal: controller.signal,
            onDelta: (piece) =>
              setMessages((prev) =>
                prev.map((m) => (m.id === assistantId ? { ...m, content: m.content + piece } : m))
              ),
          }
        );
        if (result.truncated) {
          setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, truncated: true } : m)));
        }
      } catch (err) {
        if (err && err.name === "AbortError") return;
        setMessages((prev) => {
          const partial = prev.find((m) => m.id === assistantId);
          // Drop an empty placeholder; keep a partial answer but flag it.
          if (!partial || !partial.content.trim()) return prev.filter((m) => m.id !== assistantId);
          return prev.map((m) => (m.id === assistantId ? { ...m, interrupted: true } : m));
        });
        const retryable = !["not_configured", "message_too_long", "bad_request"].includes(err && err.code);
        setError({ message: (err && err.message) || "Something went wrong.", retryable });
      } finally {
        if (abortRef.current === controller) abortRef.current = null;
        setBusy(false);
      }
    },
    []
  );

  const send = useCallback(
    (text) => {
      const content = (text ?? input).trim();
      if (!content || busy) return;
      if (content.length > MAX_CHARS) {
        setError({ message: `Please keep your message under ${MAX_CHARS} characters.`, retryable: false });
        return;
      }
      setInput("");
      run([...messages.filter((m) => m.content.trim()), { id: nextId(), role: "user", content }]);
    },
    [input, busy, messages, run]
  );

  const retry = () => {
    if (busy) return;
    // Remove any partial/failed assistant reply, then resend up to the last user message.
    const trimmed = [...messages];
    while (trimmed.length && trimmed[trimmed.length - 1].role !== "user") trimmed.pop();
    if (trimmed.length) run(trimmed);
  };

  const newConversation = () => {
    abortRef.current?.abort();
    setMessages([]);
    setInput("");
    setError(null);
    setBusy(false);
    stickRef.current = true;
    textareaRef.current?.focus();
  };

  const copyReply = async (m) => {
    try {
      await navigator.clipboard.writeText(m.content);
      setCopiedId(m.id);
    } catch {
      setCopiedId("");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };

  const hasConversation = messages.length > 0;
  const lastMsg = messages[messages.length - 1];
  const showTyping = busy && lastMsg && lastMsg.role === "assistant" && !lastMsg.content;
  const nearLimit = input.length > MAX_CHARS * 0.85;

  return (
    <div className="chat-page">
      <section className="chat-hero bg-divine-saffron">
        <MandalaMotif size={640} className="deco spin-slow chat-hero__mandala" stroke="#fff0c9" opacity={0.14} />
        <div className="container chat-hero__inner">
          <Reveal className="chat-hero__avatar">
            <span className="chat-avatar">
              <OmMark size={40} strokeWidth={1.3} />
            </span>
          </Reveal>

          <Reveal delay={80} className="chat-hero__copy">
            <p className="eyebrow eyebrow--both">GitaGPT</p>
            <h1 className="chat-hero__title">Namaste. What is on your mind?</h1>
            <p className="chat-hero__lead">
              Share what you are going through. GitaGPT listens, connects it to the Bhagavad Gita&rsquo;s
              conversations and teachings, and helps you take a practical next step.
            </p>
          </Reveal>

          <Reveal delay={160} className="chat-hero__feather" aria-hidden="true">
            <PeacockFeatherMotif height={140} className="deco" />
          </Reveal>
        </div>
      </section>

      <section className="chat-body bg-krishnas-wisdom">
        <div className="container">
          <Reveal className="chat-surface gpt" delay={60}>
            <div className="chat-surface__bar">
              <span className="chat-surface__title">
                <OmMark size={18} strokeWidth={1.6} /> GitaGPT · Bhagavad Gita companion
              </span>
              <button
                type="button"
                className="gpt-newchat"
                onClick={newConversation}
                disabled={!hasConversation && !input}
              >
                + New conversation
              </button>
            </div>

            <div className="gpt-stage">
              <div
                className="gpt-scroll"
                ref={scrollerRef}
                onScroll={onScroll}
                role="log"
                aria-live="polite"
                aria-label="Conversation with GitaGPT"
              >
                {!hasConversation ? (
                  <div className="gpt-welcome">
                    <span className="gpt-welcome__om" aria-hidden="true">{"\u0950"}</span>
                    <h2 className="gpt-welcome__title">Ask, and reflect together</h2>
                    <p className="gpt-welcome__text">
                      Describe a worry, a decision, or a question about the Gita. GitaGPT will try to understand
                      your situation first, then bring in the verse or the moment between Shri Krishna and
                      Arjuna that fits it best.
                    </p>
                    <p className="gpt-welcome__label">Try one of these</p>
                    <div className="chat-suggestions__chips gpt-welcome__chips">
                      {SUGGESTIONS.map((q) => (
                        <button type="button" key={q} className="chip" onClick={() => send(q)} disabled={busy}>
                          <span className="chip__om" aria-hidden="true">{"\u0950"}</span>
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ol className="gpt-thread">
                    {messages.map((m) => {
                      if (m.role === "assistant" && !m.content) return null;
                      return (
                        <li key={m.id} className={`gpt-msg gpt-msg--${m.role}`}>
                          {m.role === "assistant" ? (
                            <span className="gpt-msg__avatar" aria-hidden="true">
                              <OmMark size={18} strokeWidth={1.6} />
                            </span>
                          ) : null}
                          <div className="gpt-msg__body">
                            <span className="gpt-msg__who">{m.role === "user" ? "You" : "GitaGPT"}</span>
                            <div className="gpt-bubble">
                              {m.role === "assistant" ? (
                                <ChatMarkdown text={m.content} />
                              ) : (
                                <p className="gpt-plain">{m.content}</p>
                              )}
                              {m.truncated ? (
                                <p className="gpt-note">This reply reached its length limit. Ask me to continue if you&rsquo;d like more.</p>
                              ) : null}
                              {m.interrupted ? (
                                <p className="gpt-note">This reply was cut off.</p>
                              ) : null}
                            </div>
                            {m.role === "assistant" && !(busy && m === lastMsg) ? (
                              <div className="gpt-actions">
                                <button type="button" className="gpt-action" onClick={() => copyReply(m)}>
                                  {copiedId === m.id ? "Copied ✓" : "Copy"}
                                </button>
                              </div>
                            ) : null}
                          </div>
                        </li>
                      );
                    })}

                    {showTyping ? (
                      <li className="gpt-msg gpt-msg--assistant" aria-label="GitaGPT is reflecting">
                        <span className="gpt-msg__avatar" aria-hidden="true">
                          <OmMark size={18} strokeWidth={1.6} />
                        </span>
                        <div className="gpt-msg__body">
                          <span className="gpt-msg__who">GitaGPT</span>
                          <div className="gpt-bubble gpt-typing" role="status">
                            <span /><span /><span />
                            <em>Reflecting&hellip;</em>
                          </div>
                        </div>
                      </li>
                    ) : null}
                  </ol>
                )}
              </div>

              {hasConversation && !atBottom ? (
                <button type="button" className="gpt-jump" onClick={() => { stickRef.current = true; scrollToLatest(); }}>
                  ↓ Latest
                </button>
              ) : null}
            </div>

            {error ? (
              <div className="gpt-error" role="alert">
                <span>{error.message}</span>
                {error.retryable ? (
                  <button type="button" className="gpt-error__retry" onClick={retry} disabled={busy}>
                    Try again
                  </button>
                ) : null}
              </div>
            ) : null}

            <form
              className="gpt-composer"
              onSubmit={(e) => { e.preventDefault(); send(); }}
            >
              <label htmlFor="gpt-input" className="sr-only">Message GitaGPT</label>
              <textarea
                id="gpt-input"
                ref={textareaRef}
                className="gpt-input"
                rows={1}
                value={input}
                maxLength={MAX_CHARS + 200}
                placeholder="Share what's on your mind…"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
              />
              <button
                type="submit"
                className="gpt-send"
                disabled={busy || !input.trim() || input.length > MAX_CHARS}
                aria-label="Send message"
              >
                {busy ? <span className="gpt-send__spin" aria-hidden="true" /> : <span aria-hidden="true">➤</span>}
              </button>
            </form>
            <div className="gpt-composer__meta">
              <span>Enter to send · Shift+Enter for a new line</span>
              <span className={nearLimit ? "gpt-count gpt-count--warn" : "gpt-count"}>
                {input.length}/{MAX_CHARS}
              </span>
            </div>

            <p className="chat-surface__note">
              GitaGPT is an AI guide that explains Shri Krishna&rsquo;s teachings. It is not Shri Krishna, and
              it can make mistakes, so please verify verse references in the chapters. It is not a doctor,
              therapist or emergency service. If you may be in danger or thinking about harming yourself,
              contact your local emergency number right away (in India, 112) or a trusted person near you.
              Your messages are sent to an AI provider to generate replies.
            </p>
          </Reveal>

          <Reveal className="chat-crosslinks" delay={140}>
            <Link to="/books" className="btn btn--ghost">Read the chapters</Link>
            <Link to="/quotes" className="btn btn--ghost">Browse quotes</Link>
            <Link to="/about" className="btn btn--ghost">About BlueGen</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ChatPage;
