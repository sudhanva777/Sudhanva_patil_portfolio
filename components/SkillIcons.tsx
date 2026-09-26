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
  const key = name
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s+/g, "-")
    .trim();
  const icon = SKILL_ICONS[key] ?? SKILL_ICONS[name.toLowerCase()];
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
  pytorch: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#ee4c2c"
        d="M15.533 3.515v17.01l5.467-2.828V6.343l-5.467-2.828zm-5.467 0v17.01L4.6 17.697V6.343L10.066 3.515zM9.233 6.658v10.656l4.534 2.347V9.005L9.233 6.658z"
      />
    </svg>
  ),
  tensorflow: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#ff6f00" d="M1.73 10.42h4.28v3.28H1.73z" />
      <path fill="#ff6f00" d="M1.73 14.7h4.28v3.28H1.73z" />
      <path fill="#ff6f00" d="M6.01 14.7h4.28v3.28H6.01z" />
      <path fill="#ff6f00" d="M6.01 10.42h4.28v3.28H6.01z" />
      <path fill="#ff6f00" d="M10.29 10.42h4.28v3.28h-4.28z" />
      <path fill="#ff6f00" d="M10.29 6.14h4.28v3.28h-4.28z" />
      <path fill="#ff6f00" d="M14.57 6.14h4.28v3.28h-4.28z" />
      <path fill="#ff6f00" d="M18.85 6.14h4.28v3.28h-4.28z" />
      <path fill="#ff6f00" d="M18.85 10.42h2.14v7.56h-2.14z" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#2496ed"
        d="M13.983 10.344h2.119v2.144h-2.119zm-2.523 0h2.124v2.144h-2.124zm-2.527 0h2.124v2.144H8.933zm-2.527 0h2.124v2.144H6.406zm-2.527 0h2.119v2.144H3.879zm2.527-2.523h2.124v2.124H6.406zm2.527 0h2.124v2.124H8.933zm2.523 0h2.119v2.124h-2.119zm2.527 0h2.124v2.124h-2.124zm2.527 0h2.119v2.124h-2.119zm-12.596 5.047h2.124v2.124H3.879zm2.527 0h2.124v2.124H6.406zm2.527 0h2.124v2.124H8.933zm2.523 0h2.119v2.124h-2.119zm2.527 0h2.124v2.124h-2.124zm2.527 0h2.119v2.124h-2.119zm2.523 0h2.124v2.124h-2.124zM24 13.741v-2.21h-2.124v-2.124h-2.119v-2.124h-2.124V5.159h-2.124V3.034h-2.523V.909H8.933V0H6.406v.909H3.383V3.034H.859V5.159H0v8.48h.859v2.124h2.524v2.124h2.124v2.124h2.124v2.124h2.124v2.124h2.124v2.119h2.124v2.124h2.119v2.124h2.124v2.119h4.248v-2.119h2.124v-2.124h2.119v-2.124h2.124v-2.124h2.124v-2.119h2.124v-4.248zm-2.124 8.482h-2.124v-2.124h-2.119v-2.124h-2.124v-2.124h-2.124v-2.124h-2.124v-2.124h-2.124v-2.119h-2.119v-2.124h-2.124v-2.124h-2.124v-2.124h2.124v2.124h2.124v2.124h2.119v2.124h2.124v2.119h2.124v2.124h2.124v2.124h2.124v2.124h2.124v2.124h2.119v2.124h-2.119v2.124h-2.124v2.119h-4.248v-2.119h-2.124v-2.124h-2.119v-2.124h-2.124v-2.124h-2.124v-2.124h-2.124v-2.119h-2.124v-2.124H8.933v-2.124H6.406v-2.124H4.283v-2.124H2.159v-2.119H.859v-2.124h1.3v-2.124h1.524v-2.124h2.124v-2.124h2.124V5.159h2.124V3.034h2.523V5.16h-2.523v2.124h-2.124v2.124h-2.124v2.124H2.159v2.124H.859v2.124h1.3v2.124h1.524v2.124h2.124v2.124h2.124v2.124h2.124v2.124h2.124v2.119h2.124v2.124h2.119v2.124h2.124v2.124h4.248v-2.124h2.124v-2.124h2.119v-2.124h2.124v-2.119h2.124v-2.124h2.124v-4.248z"
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
  git: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#f05032" d="M23.5 11l-10.5-10v5.5L18.5 12 13 17.5V23l10.5-10zM12.5 6.5V2L2 12l10.5 10v-4.5L6.5 12l6-5.5z" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path
        fill="#336791"
        d="M4.5 4v16h15V4H4.5zm3 3h2v2h-2V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"
      />
    </svg>
  ),
  pandas: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#150458" d="M6 6h4v12H6V6zm8 0h4v12h-4V6z" />
    </svg>
  ),
  "scikit-learn": (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#f89939" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  huggingface: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#ffd21e" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#336791" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#3178c6" d="M3 3h18v18H3V3zm10.5 14.5v-3h-3v-1.5h3v-3h1.5v3h3V14.5h-3v3h-1.5z" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#f7df1e" d="M3 3h18v18H3V3zm10 14l5-3-3 2-2-4 5 2-5 3 3-2 2 4-5-2z" />
    </svg>
  ),
  redis: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#dc382d" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  ),
  opencv: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <circle cx="8" cy="12" r="2" fill="#5c3ee8" />
      <circle cx="16" cy="12" r="2" fill="#00ff00" />
      <circle cx="12" cy="12" r="2" fill="#ff0000" fillOpacity="0.7" />
    </svg>
  ),
  xgboost: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#3776ab" d="M6 4v16h4V4H6zm8 0v16h4V4h-4z" />
    </svg>
  ),
  shap: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#e74c3c" d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
    </svg>
  ),
  streamlit: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#ff4b4b" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#000" d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
    </svg>
  ),
  numpy: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#013243" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 4l7 3.5v7L12 19V6z" />
    </svg>
  ),
  matplotlib: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#11557c" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  seaborn: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#2779bd" d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" />
    </svg>
  ),
  onnx: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path fill="#005ced" d="M6 4v16h12V4H6zm4 10v-4h4v4h-4z" />
    </svg>
  ),
};
