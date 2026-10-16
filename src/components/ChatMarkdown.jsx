import React from "react";

/* A tiny, dependency-free renderer for the Markdown subset GitaGPT is told to
   use: **bold**, *italic*, "- " and "1. " lists, "> " verse quotes and "#"
   headings. It builds React elements directly (never innerHTML), so model
   output can't inject markup or scripts. */

const INLINE = /(\*\*[^*]+?\*\*|\*[^*\s][^*]*?\*|_[^_\s][^_]*?_)/g;

function renderInline(text, keyPrefix) {
  const parts = text.split(INLINE).filter((p) => p !== "");
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (
      (part.startsWith("*") && part.endsWith("*") && part.length > 2) ||
      (part.startsWith("_") && part.endsWith("_") && part.length > 2)
    ) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }
    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

const HEADING_ONLY_BOLD = /^\*\*(.+?)\*\*:?\s*$/;

export function parseBlocks(source) {
  const lines = String(source || "").replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) { i++; continue; }

    const heading = trimmed.match(/^#{1,6}\s+(.+)$/);
    if (heading) { blocks.push({ type: "heading", text: heading[1].replace(/\*\*/g, "") }); i++; continue; }

    const boldOnly = trimmed.match(HEADING_ONLY_BOLD);
    if (boldOnly) { blocks.push({ type: "heading", text: boldOnly[1] }); i++; continue; }

    if (trimmed.startsWith(">")) {
      const quote = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quote.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", text: quote.join("\n") });
      continue;
    }

    if (/^[-*•]\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^[-*•]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*•]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+[.)]\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^\d+[.)]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+[.)]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const para = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,6}\s|>|[-*•]\s|\d+[.)]\s)/.test(lines[i].trim()) &&
      !HEADING_ONLY_BOLD.test(lines[i].trim())
    ) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }
  return blocks;
}

const ChatMarkdown = ({ text }) => {
  const blocks = parseBlocks(text);
  return (
    <div className="gpt-md">
      {blocks.map((b, i) => {
        const k = `b${i}`;
        switch (b.type) {
          case "heading":
            return <h4 key={k} className="gpt-md__h">{renderInline(b.text, k)}</h4>;
          case "quote":
            return (
              <blockquote key={k} className="gpt-md__verse">
                {b.text.split("\n").map((l, j) => (
                  <p key={`${k}-${j}`}>{renderInline(l, `${k}-${j}`)}</p>
                ))}
              </blockquote>
            );
          case "ul":
            return <ul key={k}>{b.items.map((t, j) => <li key={`${k}-${j}`}>{renderInline(t, `${k}-${j}`)}</li>)}</ul>;
          case "ol":
            return <ol key={k}>{b.items.map((t, j) => <li key={`${k}-${j}`}>{renderInline(t, `${k}-${j}`)}</li>)}</ol>;
          default:
            return <p key={k}>{renderInline(b.text, k)}</p>;
        }
      })}
    </div>
  );
};

export default ChatMarkdown;
