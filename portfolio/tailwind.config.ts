import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "Sora", "system-ui", "sans-serif"],
        mono: ["Fira Code", "JetBrains Mono", "monospace"]
      },
      colors: {
        accent: {
          indigo: "var(--accent-indigo)",
          violet: "var(--accent-violet)",
          emerald: "var(--accent-emerald)",
          teal: "var(--accent-teal)",
          amber: "var(--accent-amber)",
          rose: "var(--accent-rose)",
        },
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          elevated: "var(--bg-elevated)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
        },
        glass: {
          bg: "var(--glass-bg)",
          border: "var(--glass-border)",
        }
      },
      backgroundImage: {
        "gradient-ai": "var(--gradient-ai)",
        "gradient-ds": "var(--gradient-ds)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-cta": "var(--gradient-cta)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "glow-ai": "var(--shadow-glow-ai)",
        "glow-ds": "var(--shadow-glow-ds)",
        amber: "var(--shadow-amber)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      transitionTimingFunction: {
        fast: "cubic-bezier(0.4, 0, 0.2, 1)",
        base: "cubic-bezier(0.4, 0, 0.2, 1)",
        slow: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "var(--transition-bounce)"
      }
    }
  },
  plugins: []
};

export default config;

