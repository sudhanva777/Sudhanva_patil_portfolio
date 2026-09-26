import type { ReactNode } from "react";

const ACCENT_COLORS = [
  "var(--accent-indigo)",
  "var(--accent-violet)",
  "var(--accent-emerald)",
  "var(--accent-teal)",
  "var(--accent-amber)",
  "var(--accent-rose)",
  "#3b82f6",
  "#8b5cf6",
];

export function getSkillIcon(name: string): ReactNode {
  const normalized = name
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .trim();

  const rawKey = name
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s+/g, "-")
    .trim();

  const icon =
    SKILL_ICONS[normalized] ??
    SKILL_ICONS[rawKey] ??
    SKILL_ICONS[name.toLowerCase()];

  if (icon) return icon;

  const fallback = name.slice(0, 2).toUpperCase();
  const colorIndex = name.charCodeAt(0) % ACCENT_COLORS.length;
  return (
    <div
      className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold"
      style={{
        background: ACCENT_COLORS[colorIndex],
        color: "#0a0a0f",
      }}
    >
      {fallback}
    </div>
  );
}

const SKILL_ICONS: Record<string, ReactNode> = {
  // Frontend
  html: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#e34f26"
        d="M2 2l1.7 18L12 22l8.3-2L22 2H2zm15.5 6H8l.3 3h9l-.5 5.5L12 18l-4.8-1.5L7 13h3l.2 2 1.8.5 1.8-.5.2-2H7.5L7 7h10l-.5 1z"
      />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#1572b6"
        d="M2 2l1.7 18L12 22l8.3-2L22 2H2zm13.5 6H8.3l.2 3h6.8l-.5 5.5L12 18l-2.8-1.5L9 13h2l.2 2 .8.5.8-.5.2-2H8l-.5-6h9l-.5 1z"
      />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect fill="#f7df1e" width="24" height="24" rx="2" />
      <path
        fill="#323330"
        d="M6 18.5l1.5-1c.3.5.6.9 1.2.9.6 0 1-.3 1-1.2V11h2v6.3c0 2-1.2 2.8-2.8 2.8-1.5 0-2.4-.8-2.9-1.6zm6.5-.4l1.5-.9c.4.6.9 1.1 1.8 1.1.8 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8s-.8.3-.8.7c0 .5.3.7 1.1 1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.7-3.1 2.7-1.8 0-2.9-.8-3.3-1.7z"
      />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
      <g fill="none" stroke="#61dafb" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  "three.js": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#ffffff" d="M3 3l18 3-3 15L3 18V3zm3 3v10l10 2 2-10L6 6z" />
    </svg>
  ),

  // Backend
  python: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#3776ab"
        d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.28-.33.34-.27.38-.2.42-.15.44-.1.44-.07.42-.04.38-.02.32v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.57-.12.63-.1.68-.06.74-.04.79-.02 1.27.05z"
      />
      <path
        fill="#ffd43b"
        d="M14.25.18l-.05.99-.02 1.25.06 1.23.14 1.06.21.88.28.73.32.59.35.46.36.36.36.26.35.18.32.12.28.07.21.03h2.61v.82h-8.15l-.16-.01-.24.01-.32.05-.36.1-.4.16-.42.24-.42.33-.4.44-.36.57-.32.71-.24.87-.16 1.04-.06 1.22.05 1.23.14 1.05.21.88.28.73.32.59.35.46.36.36.36.26.35.18.32.12.28.07.21.03h5.84v.83h-2.61l-.21.03-.28.07-.32.12-.35.18-.36.26-.36.36-.35.46-.32.59-.28.73-.21.88-.14 1.05-.05 1.23.06 1.22.16 1.04.24.87.32.71.36.57.4.44.42.33.42.24.4.16.36.1.32.05.26.04.21.02.13.01h.09l-.01 2.76v.82h.82V24h.82v-2.43h.82v-2.43h.82v-2.43h.82v-2.43h.82V9.86h-.82v2.43h-.82v2.43h-.82v2.43h-.82v2.43h-.82v2.43h-.01l.01-2.43v-2.43h.01v-2.44h.01V9.86h-.82V7.43h-.82V5h-.82V2.57h-.82V.18h-2.46z"
      />
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#009688"
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm-1.5 4.5h3l-4.5 15h-3l4.5-15zm3 0h3l-4.5 15h-3l4.5-15z"
      />
    </svg>
  ),
  "node.js": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#339933"
        d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.27 1.1.27 1.56 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3a1.56 1.56 0 00-.78-.2z"
      />
    </svg>
  ),
  "rest-apis": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#6366f1"
        d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h6v2H8v-2z"
      />
    </svg>
  ),

  // Databases
  postgresql: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#336791"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
      <circle cx="9" cy="11" r="1.5" fill="#336791" />
      <circle cx="15" cy="11" r="1.5" fill="#336791" />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#4479a1"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"
      />
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#dc382d"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
      <path fill="#ffffff" d="M8 8h8v2H8zm0 3h8v2H8zm0 3h8v2H8z" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#00758f"
        d="M4.5 4v16h15V4H4.5zm3 3h2v2h-2V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"
      />
    </svg>
  ),

  // AI & Agentic
  "generative-ai": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#8b5cf6"
        d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 4l7 3.5v7L12 19l-7-2.5v-7L12 6z"
      />
    </svg>
  ),
  llms: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#a78bfa"
        d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2h6v2H9V8zm0 3h4v2H9v-2zm0 3h6v2H9v-2z"
      />
    </svg>
  ),
  rag: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#7c3aed"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
      />
    </svg>
  ),
  "ai-agents": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#6366f1"
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"
      />
    </svg>
  ),
  "agentic-ai": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#818cf8"
        d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7 3.5v7.64l-7 3.5-7-3.5V7.68l7-3.5z"
      />
    </svg>
  ),

  // Data Science & Analytics
  pandas: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#150458" d="M6 6h4v12H6V6zm8 0h4v12h-4V6z" />
    </svg>
  ),
  numpy: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#013243"
        d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 4l7 3.5v7L12 19V6z"
      />
    </svg>
  ),
  "scikit-learn": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#f89939"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
      />
    </svg>
  ),
  "power-bi": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#f2c811"
        d="M10 4h4v16h-4V4zm-5 6h4v10H5V10zm10-2h4v12h-4V8z"
      />
    </svg>
  ),

  // Tools & Workflow
  git: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#f05032"
        d="M23.5 11l-10.5-10v5.5L18.5 12 13 17.5V23l10.5-10zM12.5 6.5V2L2 12l10.5 10v-4.5L6.5 12l6-5.5z"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#ffffff"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#2496ed"
        d="M13 4h2v2h-2V4zm-3 0h2v2h-2V4zM7 4h2v2H7V4zm6 3h2v2h-2V7zm-3 0h2v2h-2V7zM7 7h2v2H7V7zm-3 0h2v2H4V7zm6 3h2v2h-2v-2zm-3 0h2v2H7v-2zm-3 0h2v2H4v-2zM22.6 10.8c-.5-.3-1.6-.4-2.5-.3-.2-1.3-1.1-2.5-2.1-3.2l-.4-.3-.3.4c-.5.7-.7 1.6-.6 2.4.1.5.2 1 .5 1.4-.8.4-2.1.6-3.2.6H.5l-.1.6c-.2 1.5.1 3.1 1 4.4 1 1.4 2.5 2.1 4.5 2.1 4.3 0 7.5-2 9-5.5.6 0 1.9 0 2.5-1.3l.1-.2-.4-.2-.5-.2z"
      />
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#fcc624"
        d="M12 2C8 2 6 5 6 8c0 2 .5 3 1 4l1 2c-1 1-3 2-3 3 0 2 3 3 5 3h4c2 0 5-1 5-3 0-1-2-2-3-3l1-2c.5-1 1-2 1-4 0-3-2-6-6-6zm-2 7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 4h4l-2 3-2-3z"
      />
    </svg>
  ),
  "claude-code": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#d97706"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
      />
    </svg>
  ),
  codex: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#10b981"
        d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2h6v2H9V8zm0 3h4v2H9v-2zm0 3h6v2H9v-2z"
      />
    </svg>
  ),
  antigravity: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#4285f4"
        d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7 3.5v7.64l-7 3.5-7-3.5V7.68l7-3.5z"
      />
    </svg>
  ),

  // Core Computer Science
  "data-structures-and-algorithms": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#6366f1"
        d="M4 4h16v16H4V4zm2 2v5h5V6H6zm7 0v5h5V6h-5zm-7 7v5h5v-5H6zm7 0v5h5v-5h-5z"
      />
    </svg>
  ),
  "data-structures-&-algorithms": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#6366f1"
        d="M4 4h16v16H4V4zm2 2v5h5V6H6zm7 0v5h5V6h-5zm-7 7v5h5v-5H6zm7 0v5h5v-5h-5z"
      />
    </svg>
  ),
  "object-oriented-programming": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#8b5cf6"
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"
      />
    </svg>
  ),
  "software-engineering": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#3b82f6"
        d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
      />
    </svg>
  ),
};
