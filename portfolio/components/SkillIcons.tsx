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
  const normalizedKey = name
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, "-")
    .trim();
  const rawKey = name
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s+/g, "-")
    .trim();
  const icon =
    SKILL_ICONS[normalizedKey] ??
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
  /* ── Frontend Development ──────────────────────────── */
  html: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#e34f26"
        d="M1.5 0h21l-1.91 21.56L11.97 24l-8.72-2.44L1.5 0zm7.09 9.65l-.27-2.98h7.37l.27-2.98H5.82l.8 8.93h8.49l-.34 3.78-2.8.75-2.79-.75-.18-2H6.04l.36 4.04 5.58 1.55 5.57-1.55.73-8.17.08-.62H8.59z"
      />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#1572b6"
        d="M1.5 0h21l-1.91 21.56L11.97 24l-8.72-2.44L1.5 0zm14.38 6.67H6.04l.26 2.98h9.32l-.5 5.52-3.14.85-3.15-.85-.2-2.28h-2.96l.4 4.46 5.91 1.64 5.9-1.64.82-9.16.08-.54H8.33l-.27-2.98h10.09l.27-2.98z"
      />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect fill="#f7df1e" width="24" height="24" rx="2" />
      <path
        fill="#323330"
        d="M16.08 18.55c.44.72 1.01 1.25 2.02 1.25.85 0 1.39-.42 1.39-1.01 0-.7-.56-0.95-1.49-1.36l-.51-.22c-1.48-.63-2.46-1.42-2.46-3.09 0-1.54 1.17-2.71 3-2.71 1.3 0 2.24.45 2.91 1.64l-1.59 1.02c-.35-.63-.73-.88-1.32-.88-.6 0-.98.38-.98.88 0 .61.38.86 1.27 1.24l.51.22c1.74.75 2.72 1.51 2.72 3.22 0 1.85-1.45 2.86-3.4 2.86-1.91 0-3.14-.91-3.74-2.1l1.67-.96zM6.73 18.75c.32.57.62 1.06 1.33 1.06.68 0 1.11-.26 1.11-1.3v-7.02h2.08v7.05c0 2.14-1.26 3.12-3.09 3.12-1.66 0-2.62-.86-3.11-1.89l1.68-1.02z"
      />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
      <g stroke="#61dafb" fill="none" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  "three.js": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#ffffff"
        d="M3.5 2L12 22l8.5-20h-17zm2.42 1.5h11.16L12 18.46 5.92 3.5z"
      />
    </svg>
  ),

  /* ── Backend Development ───────────────────────────── */
  python: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#3776ab"
        d="M11.92 0C5.88 0 6.25 2.6 6.25 2.6l.01 2.69h5.76v.81H3.93S0 5.54 0 11.94s3.43 6.17 3.43 6.17h2.05v-2.97s-.11-3.43 3.37-3.43h5.81s3.27.05 3.27-3.16V3.26S18.42 0 11.92 0zm-3.22 1.89a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1z"
      />
      <path
        fill="#ffd43b"
        d="M12.08 24c6.04 0 5.67-2.6 5.67-2.6l-.01-2.69h-5.76v-.81h8.09S24 18.46 24 12.06s-3.43-6.17-3.43-6.17h-2.05v2.97s.11 3.43-3.37 3.43H9.34s-3.27-.05-3.27 3.16v5.29S5.58 24 12.08 24zm3.22-1.89a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z"
      />
    </svg>
  ),
  fastapi: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#009688"
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm-.72 4.5h3.84L10.56 13.5h3.36L9.12 19.5l.96-6.75H6.96L11.28 4.5z"
      />
    </svg>
  ),
  "node.js": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#68a063"
        d="M12 1.85c-.27 0-.53.07-.77.2L3.5 6.36a1.54 1.54 0 00-.77 1.33v9.62c0 .55.29 1.06.77 1.33l7.73 4.31c.24.14.5.2.77.2s.53-.07.77-.2l7.73-4.31c.48-.27.77-.78.77-1.33V7.69c0-.55-.29-1.06-.77-1.33l-7.73-4.31a1.54 1.54 0 00-.77-.2z"
      />
      <path
        fill="#fff"
        d="M12 6.5v11l-4.5-2.5V9l4.5-2.5zm1 0L17.5 9v6l-4.5 2.5V6.5z"
        opacity="0.3"
      />
    </svg>
  ),
  "rest-apis": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#6366f1" d="M4 4h16v3H4zm0 5h16v3H4zm0 5h16v3H4z" opacity="0.8" />
      <circle cx="20" cy="5.5" r="1.5" fill="#10b981" />
      <circle cx="20" cy="10.5" r="1.5" fill="#10b981" />
      <circle cx="20" cy="15.5" r="1.5" fill="#f59e0b" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#94a3b8"
        d="M9 2h6v5l4.5 12.5c.5 1.4-.5 2.5-1.9 2.5H6.4c-1.4 0-2.4-1.1-1.9-2.5L9 7V2zm2 1v4.5l-4 11h10l-4-11V3h-2z"
      />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#2496ed"
        d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43-.28 0-.56.03-.84.08-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17-.18.28c-.23.36-.4.76-.49 1.17-.18.79-.07 1.53.3 2.17-.45.25-1.18.31-1.33.32H2.27c-.31 0-.56.25-.57.56-.04 1.04.14 2.08.52 3.05.44 1.07 1.1 1.85 1.94 2.33.97.55 2.55.86 4.32.86.81 0 1.62-.07 2.41-.22a9.84 9.84 0 003.09-1.26 8.08 8.08 0 002.01-1.98c.96-1.22 1.53-2.6 1.93-3.77h.17c1.04 0 1.68-.42 2.03-.77.24-.22.42-.49.54-.79l.07-.21-.18-.12zM3.49 11.64h1.8c.09 0 .16-.07.16-.16V9.82c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16zm2.63 0h1.8c.09 0 .16-.07.16-.16V9.82c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16zm2.66 0h1.8c.09 0 .16-.07.16-.16V9.82c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16zm2.64 0h1.8c.09 0 .16-.07.16-.16V9.82c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16zm-5.3-2.53h1.8c.09 0 .16-.07.16-.16V7.29c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16zm2.66 0h1.8c.09 0 .16-.07.16-.16V7.29c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16zm2.64 0h1.8c.09 0 .16-.07.16-.16V7.29c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16zm0-2.53h1.8c.09 0 .16-.07.16-.16V4.76c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16zm2.64 2.53h1.8c.09 0 .16-.07.16-.16V7.29c0-.09-.07-.16-.16-.16h-1.8c-.09 0-.16.07-.16.16v1.66c0 .09.07.16.16.16z"
      />
    </svg>
  ),

  /* ── Full-Stack Development ────────────────────────── */
  "full-stack-application-development": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M8 21h8M12 17v4" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 8l3 2-3 2M12 12h4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "frontend-backend-integration": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect x="1" y="4" width="9" height="7" rx="1.5" fill="none" stroke="#61dafb" strokeWidth="1.3" />
      <rect x="14" y="4" width="9" height="7" rx="1.5" fill="none" stroke="#10b981" strokeWidth="1.3" />
      <path d="M10 7.5h4" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 7.5l-1.5-1.2M12 7.5l-1.5 1.2" stroke="#8b5cf6" strokeWidth="1" strokeLinecap="round" />
      <path d="M5.5 15v3M12 15v3M18.5 15v3" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 18h18" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "frontend–backend-integration": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect x="1" y="4" width="9" height="7" rx="1.5" fill="none" stroke="#61dafb" strokeWidth="1.3" />
      <rect x="14" y="4" width="9" height="7" rx="1.5" fill="none" stroke="#10b981" strokeWidth="1.3" />
      <path d="M10 7.5h4" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 7.5l-1.5-1.2M12 7.5l-1.5 1.2" stroke="#8b5cf6" strokeWidth="1" strokeLinecap="round" />
      <path d="M5.5 15v3M12 15v3M18.5 15v3" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 18h18" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "api-integration": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="6" cy="12" r="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
      <circle cx="18" cy="12" r="3" fill="none" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M9 12h6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M12 6v2M12 16v2" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "end-to-end-application-development": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M2 12h3l2.5-4 3 8 2.5-6 2 4 3-2h5" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="2" cy="12" r="1.5" fill="#10b981" />
      <circle cx="22" cy="12" r="1.5" fill="#6366f1" />
    </svg>
  ),

  /* ── AI & Agentic AI ───────────────────────────────── */
  "agentic-ai": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="12" cy="8" r="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
      <path d="M12 4v-2M8.5 5.5L7 4M15.5 5.5L17 4" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1" fill="#8b5cf6" />
      <path d="M6 16c0-3.3 2.7-5 6-5s6 1.7 6 5" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 20l2-4M20 20l-2-4" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="4" cy="20" r="1.5" fill="#10b981" />
      <circle cx="20" cy="20" r="1.5" fill="#10b981" />
    </svg>
  ),
  "ai-agents": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect x="5" y="3" width="14" height="10" rx="3" fill="none" stroke="#6366f1" strokeWidth="1.5" />
      <circle cx="9" cy="8" r="1.2" fill="#10b981" />
      <circle cx="15" cy="8" r="1.2" fill="#10b981" />
      <path d="M9 17v3M15 17v3" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 20h4M13 20h4" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 13v4M15 13v4" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "large-language-models": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect x="3" y="2" width="18" height="20" rx="3" fill="none" stroke="#6366f1" strokeWidth="1.3" />
      <path d="M7 6h10M7 9h8M7 12h10M7 15h6" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="18" cy="18" r="2.5" fill="#10b981" />
      <path d="M17 18l1 1 2-2" stroke="#0a0a0f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "retrieval-augmented-generation": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM9 14h6v6H9z" fill="none" stroke="#6366f1" strokeWidth="1.3" />
      <path d="M7 10v1.5c0 1 1 2.5 5 2.5s5-1.5 5-2.5V10" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="7" r="1" fill="#f59e0b" />
      <circle cx="17" cy="7" r="1" fill="#f59e0b" />
      <circle cx="12" cy="17" r="1" fill="#8b5cf6" />
    </svg>
  ),
  "generative-ai": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8 2.4-7.2-6-4.8h7.6z" fill="none" stroke="#8b5cf6" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="#6366f1" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="1" fill="#10b981" />
    </svg>
  ),
  "machine-learning": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="6" cy="6" r="2" fill="none" stroke="#6366f1" strokeWidth="1.3" />
      <circle cx="18" cy="6" r="2" fill="none" stroke="#8b5cf6" strokeWidth="1.3" />
      <circle cx="6" cy="18" r="2" fill="none" stroke="#10b981" strokeWidth="1.3" />
      <circle cx="18" cy="18" r="2" fill="none" stroke="#f59e0b" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="#6366f1" strokeWidth="1.5" />
      <path d="M8 8l2.5 2.5M14 8l-2.5 2.5M8 16l2.5-2.5M14 16l-2.5-2.5" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  pytorch: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#ee4c2c"
        d="M12 2.5l-8.5 5v9l8.5 5 8.5-5v-9L12 2.5zm0 2.31l5.78 3.33v6.72L12 18.19l-5.78-3.33V8.14L12 4.81z"
      />
      <circle cx="15" cy="7" r="1.2" fill="#ee4c2c" />
    </svg>
  ),
  "scikit-learn": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#f89939" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  xgboost: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#3776ab" d="M6 4v16h4V4H6zm8 0v16h4V4h-4z" />
    </svg>
  ),
  lightgbm: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#2ca02c" d="M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z" />
    </svg>
  ),
  onnx: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#005ced" d="M6 4v16h12V4H6zm4 10v-4h4v4h-4z" />
    </svg>
  ),
  opencv: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="8" cy="14" r="3.5" fill="none" stroke="#ff0000" strokeWidth="1.8" />
      <circle cx="16" cy="14" r="3.5" fill="none" stroke="#00ff00" strokeWidth="1.8" />
      <circle cx="12" cy="8" r="3.5" fill="none" stroke="#5c3ee8" strokeWidth="1.8" />
    </svg>
  ),

  /* ── Database & Data Engineering ────────────────────── */
  postgresql: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#336791"
        d="M17.13 2.24c-1.2-.16-2.18.02-2.98.38-.26-.08-.55-.13-.88-.14h-.06c-.7-.01-1.33.14-1.86.39a6.07 6.07 0 00-2.66-.42c-1.16.08-2.18.52-2.93 1.23C4.53 4.83 3.9 6.48 3.66 8.78c-.24 2.3.05 5.28.93 7.85.43 1.27.97 2.16 1.66 2.63.34.23.72.36 1.1.36.27 0 .54-.06.79-.2l.14-.08c.3.36.67.58 1.1.65.24.04.5.02.77-.05.33.46.77.7 1.3.7h.05c.64-.02 1.13-.38 1.46-.88.13.01.26.01.38 0 .68-.07 1.19-.43 1.52-1.01.56.5 1.2.66 1.84.52.96-.2 1.68-1.05 2.1-2.34.66-2.02 1.28-3.84 1.06-7.05-.11-1.65-.52-3.28-1.41-4.52a4.87 4.87 0 00-2.96-2.12z"
      />
      <path
        fill="#fff"
        d="M16.76 3.6c.96.23 1.7.8 2.27 1.69.72 1.1 1.08 2.54 1.17 4.02.2 2.98-.38 4.74-1 6.63-.3.92-.77 1.5-1.33 1.62-.37.08-.74-.05-1.11-.38l-.49-.44.11-.61c.37-2.04.38-3.52.25-5.35l-.01-.11c-.07-1.02-.3-1.84-.66-2.43a2.66 2.66 0 00-.38-.47c.14-.53.1-1.08-.07-1.59a3.6 3.6 0 00-.63-1.09c.49-.26 1.14-.4 1.88-.49zm-4.42-.03h.05c.42.01.73.13.96.23-.3.24-.56.52-.77.83-.37.03-.73.1-1.08.2-.34-.44-.78-.78-1.31-1a4.28 4.28 0 011.15-.25v-.01zm-3.78.42c.72-.05 1.33.08 1.81.37a3.11 3.11 0 012.14-.34c.53.81.82 1.85.88 3.09l.01.11c.12 1.72.12 3.12-.22 5.04l-.03.18c-.03.15-.05.29-.07.44-.06.48-.1.93-.05 1.44.05.51.2.92.45 1.28-.21.42-.51.63-.95.67a2.1 2.1 0 01-.3 0c.13-.59.12-1.24-.06-1.88a3.81 3.81 0 00-1.07-1.74.47.47 0 00-.06-.05c-.24-.22-.38-.28-.59-.25-.2.03-.38.17-.37.4.01.22.07.3.25.46.6.56.95 1.23 1.09 2.05.1.57.04 1.08-.13 1.46-.22.5-.6.76-1.04.8h-.04c-.4 0-.65-.22-.87-.6-.04-.06-.07-.13-.1-.2.03-.18.07-.35.13-.53.19-.54.36-1.14.2-1.92-.12-.6-.4-1.05-.79-1.36-.4-.32-.87-.43-1.33-.42-.3.01-.56.09-.8.18 0-.17.01-.34.03-.51l.02-.17c.3-.06.6-.17.88-.34.53-.33.95-.85 1.17-1.56.07-.24.12-.5.13-.78.04-.66-.14-1.24-.45-1.72-.15-.24-.33-.44-.52-.61a4.59 4.59 0 01.82-2.98zm3.14 2.14c.3-.07.59-.1.86-.1.2.15.37.34.52.56.27.45.44 1.07.5 1.83l.01.11-.1-.06a3.57 3.57 0 00-1.88-.6c-.02-.71-.09-1.31-.2-1.79.1.02.2.03.29.05z"
        opacity="0.9"
      />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#4479a1"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8z"
      />
      <path
        fill="#4479a1"
        d="M7 10h2v6H7zm4-2h2v8h-2zm4 3h2v5h-2z"
      />
    </svg>
  ),
  sqlite: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#0f80cc"
        d="M12 1C6.48 1 2 5.48 2 11v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4v-8c0-5.52-4.48-10-10-10z"
      />
      <path
        fill="#fff"
        d="M8 8h8v2H8zm0 3h8v2H8zm0 3h6v2H8z"
        opacity="0.85"
      />
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#dc382d"
        d="M22.5 12.7c0 .8-2.3 2.3-6.5 2.3s-8-1-10-2.3c-1.3-.8-2-1.5-2-2.1v3.8c0 .5.7 1.3 2 2.1 2 1.3 5.8 2.3 10 2.3s6.5-1.5 6.5-2.3v-3.8zM22.5 8.3c0 .8-2.3 2.3-6.5 2.3s-8-1-10-2.3C4.7 7.5 4 6.8 4 6.2v3.8c0 .5.7 1.3 2 2.1 2 1.3 5.8 2.3 10 2.3s6.5-1.5 6.5-2.3V8.3zM16 3c-4.2 0-8 1-10 2.3C4.7 6 4 6.7 4 7.3v-.1c0 .5.7 1.3 2 2.1 2 1.3 5.8 2.3 10 2.3s6.5-1.5 6.5-2.3v.1c0-.5-.7-1.3-2-2.1C18.5 6 18 5.5 16 3z"
      />
    </svg>
  ),

  /* ── Data Analytics & Visualization ────────────────── */
  "power-bi": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect x="14" y="4" width="4" height="16" rx="1" fill="#f2c811" />
      <rect x="9" y="8" width="4" height="12" rx="1" fill="#f2c811" opacity="0.7" />
      <rect x="4" y="12" width="4" height="8" rx="1" fill="#f2c811" opacity="0.45" />
    </svg>
  ),
  "python-data-analysis": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#3776ab" d="M11.92 1C7.56 1 7.86 3.08 7.86 3.08l.01 2.15h4.12v.58H5.2S2.5 5.4 2.5 9.97s2.36 4.41 2.36 4.41h1.41v-2.12s-.08-2.36 2.32-2.36h4v-2.1l.02-2.1S12.94 1 11.92 1z" opacity="0.5" />
      <path d="M4 16l3-4 3 5 3-3 4 6" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="16" r="1" fill="#10b981" />
      <circle cx="7" cy="12" r="1" fill="#10b981" />
      <circle cx="10" cy="17" r="1" fill="#10b981" />
      <circle cx="13" cy="14" r="1" fill="#10b981" />
      <circle cx="17" cy="20" r="1" fill="#10b981" />
    </svg>
  ),
  pandas: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#150458" d="M7 2h3v7H7zm0 9h3v11H7zm7-9h3v11h-3zm0 13h3v7h-3z" />
      <path fill="#e70488" d="M12 10h3v3h-3z" />
    </svg>
  ),
  numpy: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#4dabcf" d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path fill="#013243" d="M12 2L2 7l10 5 10-5L12 2z" />
      <path fill="#4dabcf" d="M12 12v10l10-5V7l-10 5z" opacity="0.7" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="#336791" strokeWidth="1.5" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#336791" strokeWidth="1.5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" fill="none" stroke="#336791" strokeWidth="1.2" opacity="0.5" />
    </svg>
  ),
  matplotlib: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#11557c" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path
        d="M5 17l3-5 3 3 4-6 4 8"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  seaborn: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#2779bd" d="M3 20h18v-2H3v2zm2-4h3V8H5v8zm5 0h3V4h-3v12zm5 0h3v-6h-3v6z" />
    </svg>
  ),
  plotly: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M3 20l5-7 4 4 5-9 4 6" fill="none" stroke="#3f4f75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="3" cy="20" r="1.5" fill="#636efa" />
      <circle cx="8" cy="13" r="1.5" fill="#ef553b" />
      <circle cx="12" cy="17" r="1.5" fill="#00cc96" />
      <circle cx="17" cy="8" r="1.5" fill="#ab63fa" />
      <circle cx="21" cy="14" r="1.5" fill="#ffa15a" />
    </svg>
  ),
  shap: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#e74c3c" d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
    </svg>
  ),
  tableau: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#e97627" d="M11 2h2v4h-2zm-4 4h2v4H7zm8 0h2v4h-2zm-4 4h2v4h-2zM3 10h2v4H3zm16 0h2v4h-2zM7 14h2v4H7zm8 0h2v4h-2zm-4 4h2v4h-2z" />
    </svg>
  ),

  /* ── Cloud & MLOps ─────────────────────────────────── */
  "aws": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#ff9900" d="M6.76 14.89c-3.21-2.37-3-6.65.48-8.93 2.8-1.83 6.97-2 10.1-.43.42.21.84.47 1.22.76-3.9-1.69-8.36-1.39-11.03.59-2.84 2.11-2.44 5.38.53 7.12-.43.31-.87.61-1.3.89z" />
      <path fill="#ff9900" d="M19.46 16c.88-.68 1.42-1.45 1.63-2.37.04-.2.09-.4.07-.61-.05-.6-.45-1.07-.93-1.37l-.19-.1c.43.53.63 1.14.42 1.85-.28.94-1.13 1.69-2.29 2.22l1.29.38z" />
      <path fill="#252f3e" d="M7.5 9l1.5 5h1l1.5-3.5L13 14h1l1.5-5h-1.2l-.9 3.5L12 9h-1l-1.4 3.5L8.7 9z" />
    </svg>
  ),
  gcp: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#4285f4" d="M14.5 4l2.25 3.75H21L18.75 4z" />
      <path fill="#ea4335" d="M3 15.75L5.25 19.5h4.5L7.5 15.75z" />
      <path fill="#34a853" d="M14.25 19.5h4.5L21 15.75h-4.5z" />
      <path fill="#fbbc04" d="M5.25 4L3 7.75h4.5L9.75 4z" />
      <path fill="#4285f4" d="M9.75 4l-2.25 3.75h9L14.25 4z" opacity="0.3" />
      <path fill="#ea4335" d="M3 7.75v8h4.5V7.75z" opacity="0.3" />
    </svg>
  ),
  mlflow: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M4 12a8 8 0 1116 0" fill="none" stroke="#0194e2" strokeWidth="2" />
      <path d="M12 4v8l5 5" fill="none" stroke="#0194e2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "apache-airflow": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#017cee" fill="none" strokeWidth="1.5" />
    </svg>
  ),
  dbt: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#ff694a" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l6 4.5v5L12 19l-6-4.5v-5L12 5z" />
    </svg>
  ),
  "github-actions": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" fill="none" stroke="#2088ff" strokeWidth="1.5" />
      <path d="M12 6v4l3 2" fill="none" stroke="#2088ff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 14l2 2 4-4" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  /* ── AI Coding Assistants & Developer Tools ─────── */
  "claude-code": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#d97706" opacity="0.15" />
      <path d="M8 9l-3 3 3 3" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 9l3 3-3 3" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 7l-2 10" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "openai-codex": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#10a37f" strokeWidth="1.5" />
      <path d="M12 7v5l3.5 2" fill="none" stroke="#10a37f" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.5" fill="#10a37f" />
    </svg>
  ),
  "google-antigravity": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M12 3l-1.5 6H5l5 4-2 6 5-4 5 4-2-6 5-4h-5.5z" fill="none" stroke="#4285f4" strokeWidth="1.3" />
      <path d="M12 8v5" stroke="#ea4335" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.5 14h5" stroke="#fbbc04" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="11" r="2" fill="none" stroke="#34a853" strokeWidth="1.2" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#f05032"
        d="M23.55 10.85L13.15.45a1.53 1.53 0 00-2.17 0l-2.16 2.16 2.73 2.73a1.82 1.82 0 012.3 2.32l2.63 2.63a1.82 1.82 0 11-1.08 1.02l-2.45-2.45v6.45a1.82 1.82 0 11-1.5-.08V9.65a1.82 1.82 0 01-.99-2.39L8.04 4.64.45 12.23a1.53 1.53 0 000 2.17l10.4 10.4a1.53 1.53 0 002.17 0l10.53-10.53a1.53 1.53 0 000-2.17v-.25z"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#e6edf3"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  ),

  /* ── Existing kept icons ───────────────────────────── */
  streamlit: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#ff4b4b" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
};
