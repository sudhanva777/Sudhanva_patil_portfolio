"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ORBITAL_CATEGORIES, type OrbitalCategory, type OrbitalSkill } from "@/lib/orbitalSkills";
import { getSkillIcon } from "@/components/SkillIcons";

/* ──────────────────────────────────────────────────────────
   ORBITAL SKILLS – Continuously-rotating tech-icon universe
   ────────────────────────────────────────────────────────── */

export default function OrbitalSkills() {
  const [activeCatIdx, setActiveCatIdx] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<OrbitalSkill | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const category = ORBITAL_CATEGORIES[activeCatIdx];
  const theme = category.theme;

  const handleCategoryChange = useCallback((idx: number) => {
    setActiveCatIdx(idx);
    setSelectedSkill(null);
  }, []);

  const handleSkillClick = useCallback((skill: OrbitalSkill) => {
    setSelectedSkill((prev) => (prev?.id === skill.id ? null : skill));
  }, []);

  /* Split skills into rings when > 6 items */
  const { outerRing, innerRing } = useMemo(() => {
    const skills = category.skills;
    if (skills.length <= 6) {
      return { outerRing: skills, innerRing: [] as OrbitalSkill[] };
    }
    const outerCount = Math.ceil(skills.length / 2);
    return {
      outerRing: skills.slice(0, outerCount),
      innerRing: skills.slice(outerCount),
    };
  }, [category.skills]);

  /* Center display: selected skill or category info */
  const centerSkill = selectedSkill ?? category.skills[0];

  return (
    <section className="orbital-skills-section">
      {/* Dynamic inline styles for CSS custom properties */}
      <style>{`
        /* ── KEYFRAMES ──────────────────────────────────── */
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes centerPulse {
          0%, 100% { box-shadow: 0 0 40px var(--orbital-glow), 0 0 80px var(--orbital-glow); }
          50%      { box-shadow: 0 0 60px var(--orbital-glow), 0 0 120px var(--orbital-glow); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.25; }
          50%      { opacity: 0.5; }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50%      { transform: translateY(-20px) scale(1.5); opacity: 0.7; }
        }

        /* ── SECTION ───────────────────────────────────── */
        .orbital-skills-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 3rem 1.5rem;
          background: var(--bg-primary);
        }

        /* ── BG GLOW ───────────────────────────────────── */
        .orbital-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 700px;
          height: 700px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          transition: background 0.6s ease;
        }

        /* ── CATEGORY TABS ─────────────────────────────── */
        .orbital-tabs {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          position: relative;
          z-index: 10;
        }
        .orbital-tab {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .orbital-tab:hover {
          background: rgba(255,255,255,0.06);
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.15);
        }
        .orbital-tab.active {
          color: #fff;
          border-color: var(--orbital-accent);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 20px var(--orbital-glow);
        }
        .orbital-tab-icon {
          font-size: 1rem;
        }

        /* ── UNIVERSE CONTAINER ────────────────────────── */
        .orbital-universe {
          position: relative;
          width: 660px;
          height: 660px;
          margin: 0 auto;
          z-index: 5;
        }

        /* ── ORBIT RINGS ───────────────────────────────── */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ringPulse 4s ease-in-out infinite;
        }
        .orbit-ring--outer {
          width: 580px;
          height: 580px;
        }
        .orbit-ring--inner {
          width: 380px;
          height: 380px;
        }

        /* ── SPINNING TRACK ────────────────────────────── */
        .orbit-track {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center center;
          width: 0;
          height: 0;
        }
        .orbit-track--outer {
          animation: orbitSpin 45s linear infinite;
        }
        .orbit-track--inner {
          animation: orbitSpinReverse 35s linear infinite;
        }
        .orbit-track.paused {
          animation-play-state: paused;
        }

        /* ── ICON NODES ────────────────────────────────── */
        .orbit-node {
          position: absolute;
          width: 60px;
          height: 60px;
          transform-origin: center center;
          cursor: pointer;
          transition: filter 0.3s ease;
        }
        .orbit-node:hover {
          filter: brightness(1.3);
        }
        .orbit-node-inner {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(18,18,25,0.9);
          border: 1.5px solid rgba(255,255,255,0.12);
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .orbit-node-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .orbit-node:hover .orbit-node-inner {
          border-color: var(--orbital-accent);
          box-shadow: 0 4px 24px var(--orbital-glow), 0 0 40px var(--orbital-glow);
          transform: scale(1.15);
        }
        .orbit-node:hover .orbit-node-inner::before {
          opacity: 0.15;
        }
        .orbit-node.selected .orbit-node-inner {
          border-color: var(--orbital-accent);
          box-shadow: 0 4px 30px var(--orbital-glow), 0 0 60px var(--orbital-glow);
          transform: scale(1.2);
        }
        .orbit-node-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .orbit-node-icon > * {
          width: 100% !important;
          height: 100% !important;
        }

        /* Counter-rotation to keep icons upright */
        .orbit-counter-outer {
          animation: orbitSpinReverse 45s linear infinite;
        }
        .orbit-counter-inner {
          animation: orbitSpin 35s linear infinite;
        }
        .orbit-counter-outer.paused,
        .orbit-counter-inner.paused {
          animation-play-state: paused;
        }

        /* ── ICON LABEL (tooltip below icon) ───────────── */
        .orbit-node-label {
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.6rem;
          font-weight: 700;
          color: var(--text-secondary);
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
        }
        .orbit-node:hover .orbit-node-label {
          opacity: 1;
        }

        /* ── CENTER HUB ────────────────────────────────── */
        .orbital-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 220px;
          height: 220px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, rgba(18,18,25,0.95) 0%, rgba(10,10,15,0.98) 100%);
          border: 2px solid;
          z-index: 20;
          animation: centerPulse 3s ease-in-out infinite;
          transition: border-color 0.4s ease;
          text-align: center;
          padding: 1rem;
          gap: 0.5rem;
        }
        .orbital-center-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .orbital-center-icon > * {
          width: 100% !important;
          height: 100% !important;
        }
        .orbital-center-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .orbital-center-role {
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: color 0.3s ease;
        }

        /* ── DETAIL PANEL (below orbit) ────────────────── */
        .orbital-detail {
          position: relative;
          z-index: 10;
          max-width: 600px;
          margin: 2rem auto 0;
          text-align: center;
          padding: 1.5rem 2rem;
          background: rgba(18,18,25,0.6);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(12px);
        }
        .orbital-detail-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .orbital-detail-count {
          margin-top: 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* ── FLOATING PARTICLES ────────────────────────── */
        .orbital-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          animation: floatParticle 4s ease-in-out infinite;
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 768px) {
          .orbital-skills-section {
            padding: 2rem 1rem;
          }
          .orbital-tabs {
            gap: 0.35rem;
            margin-bottom: 2rem;
          }
          .orbital-tab {
            padding: 0.4rem 0.7rem;
            font-size: 0.7rem;
          }
          .orbital-tab-icon {
            font-size: 0.85rem;
          }
          .orbital-universe {
            width: 340px;
            height: 340px;
          }
          .orbit-ring--outer {
            width: 300px;
            height: 300px;
          }
          .orbit-ring--inner {
            width: 200px;
            height: 200px;
          }
          .orbit-node {
            width: 42px;
            height: 42px;
          }
          .orbit-node-inner {
            border-radius: 12px;
          }
          .orbit-node-icon {
            width: 22px;
            height: 22px;
          }
          .orbital-center {
            width: 130px;
            height: 130px;
            padding: 0.5rem;
            gap: 0.25rem;
          }
          .orbital-center-icon {
            width: 36px;
            height: 36px;
          }
          .orbital-center-name {
            font-size: 0.75rem;
          }
          .orbital-center-role {
            font-size: 0.5rem;
          }
          .orbital-detail {
            padding: 1rem 1.25rem;
          }
          .orbital-detail-desc {
            font-size: 0.8rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .orbital-universe {
            width: 520px;
            height: 520px;
          }
          .orbit-ring--outer {
            width: 460px;
            height: 460px;
          }
          .orbit-ring--inner {
            width: 300px;
            height: 300px;
          }
          .orbit-node {
            width: 52px;
            height: 52px;
          }
          .orbit-node-icon {
            width: 28px;
            height: 28px;
          }
          .orbital-center {
            width: 180px;
            height: 180px;
          }
          .orbital-center-icon {
            width: 46px;
            height: 46px;
          }
          .orbital-center-name {
            font-size: 0.9rem;
          }
        }

        /* ── REDUCED MOTION ────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .orbit-track--outer,
          .orbit-track--inner,
          .orbit-counter-outer,
          .orbit-counter-inner {
            animation: none !important;
          }
          .orbital-center {
            animation: none !important;
          }
          .orbit-ring {
            animation: none !important;
            opacity: 0.3;
          }
          .orbital-particle {
            animation: none !important;
            opacity: 0.3;
          }
        }
      `}</style>

      {/* Background glow blob */}
      <div
        className="orbital-bg-glow"
        style={{ background: theme.bgGradient }}
      />

      {/* Floating particles */}
      {useMemo(() => {
        const particles = [];
        for (let i = 0; i < 12; i++) {
          particles.push(
            <div
              key={`p-${i}`}
              className="orbital-particle"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                background: theme.accent,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          );
        }
        return particles;
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [activeCatIdx])}

      {/* Section header */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", marginBottom: "1.5rem" }}>
        <p
          className="text-sm font-semibold mb-2"
          style={{ color: theme.accent }}
        >
          Technology Universe
        </p>
        <h1 className="section-heading text-[var(--text-primary)]">
          Skills &{" "}
          <span style={{
            background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.secondary} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Technologies
          </span>
        </h1>
      </div>

      {/* Category tabs */}
      <div
        className="orbital-tabs"
        style={{ "--orbital-accent": theme.accent, "--orbital-glow": theme.glow } as React.CSSProperties}
      >
        {ORBITAL_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.id}
            className={`orbital-tab ${idx === activeCatIdx ? "active" : ""}`}
            onClick={() => handleCategoryChange(idx)}
            style={
              idx === activeCatIdx
                ? { "--orbital-accent": cat.theme.accent, "--orbital-glow": cat.theme.glow, borderColor: cat.theme.accent } as React.CSSProperties
                : undefined
            }
          >
            <span className="orbital-tab-icon">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Orbital visualization */}
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ "--orbital-accent": theme.accent, "--orbital-glow": theme.glow, "--orbital-border": theme.border } as React.CSSProperties}
        >
          <div
            className="orbital-universe"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Outer orbit ring (visual) */}
            <div
              className="orbit-ring orbit-ring--outer"
              style={{ borderColor: theme.border }}
            />

            {/* Inner orbit ring (visual, if applicable) */}
            {innerRing.length > 0 && (
              <div
                className="orbit-ring orbit-ring--inner"
                style={{ borderColor: theme.border }}
              />
            )}

            {/* Outer ring spinning track */}
            <div className={`orbit-track orbit-track--outer ${isPaused ? "paused" : ""}`}>
              {outerRing.map((skill, i) => {
                const angle = (360 / outerRing.length) * i;
                return (
                  <OrbitNode
                    key={skill.id}
                    skill={skill}
                    angle={angle}
                    radius={290}
                    radiusTablet={230}
                    radiusMobile={150}
                    counterClass={`orbit-counter-outer ${isPaused ? "paused" : ""}`}
                    isSelected={selectedSkill?.id === skill.id}
                    onClick={() => handleSkillClick(skill)}
                    accentColor={theme.accent}
                  />
                );
              })}
            </div>

            {/* Inner ring spinning track */}
            {innerRing.length > 0 && (
              <div className={`orbit-track orbit-track--inner ${isPaused ? "paused" : ""}`}>
                {innerRing.map((skill, i) => {
                  const angle = (360 / innerRing.length) * i;
                  return (
                    <OrbitNode
                      key={skill.id}
                      skill={skill}
                      angle={angle}
                      radius={190}
                      radiusTablet={150}
                      radiusMobile={100}
                      counterClass={`orbit-counter-inner ${isPaused ? "paused" : ""}`}
                      isSelected={selectedSkill?.id === skill.id}
                      onClick={() => handleSkillClick(skill)}
                      accentColor={theme.accent}
                    />
                  );
                })}
              </div>
            )}

            {/* Center hub */}
            <div
              className="orbital-center"
              style={{
                borderColor: theme.border,
                "--orbital-glow": theme.glow,
              } as React.CSSProperties}
            >
              <motion.div
                key={centerSkill.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem" }}
              >
                <div className="orbital-center-icon">
                  {getSkillIcon(centerSkill.name)}
                </div>
                <div className="orbital-center-name">{centerSkill.name}</div>
                <div className="orbital-center-role" style={{ color: theme.accent }}>
                  {centerSkill.shortRole}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Detail panel below */}
          <motion.div
            className="orbital-detail"
            key={`detail-${centerSkill.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <p className="orbital-detail-desc">{centerSkill.description}</p>
            <p className="orbital-detail-count" style={{ color: theme.accent }}>
              {category.skills.length} technologies in {category.name}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-sm text-[var(--text-secondary)] text-center"
        style={{ position: "relative", zIndex: 10 }}
      >
        Always learning. Currently exploring:{" "}
        <span style={{ color: "var(--accent-indigo)" }}>Agentic Workflows</span> ·{" "}
        <span style={{ color: "var(--accent-emerald)" }}>High-Performance REST APIs</span> ·{" "}
        <span style={{ color: "var(--accent-violet)" }}>Cloud Architecture</span>
      </motion.p>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   ORBIT NODE – Individual skill positioned on orbit ring
   ────────────────────────────────────────────────────────── */

interface OrbitNodeProps {
  skill: OrbitalSkill;
  angle: number;
  radius: number;
  radiusTablet: number;
  radiusMobile: number;
  counterClass: string;
  isSelected: boolean;
  onClick: () => void;
  accentColor: string;
}

function OrbitNode({
  skill,
  angle,
  radius,
  radiusTablet,
  radiusMobile,
  counterClass,
  isSelected,
  onClick,
  accentColor,
}: OrbitNodeProps) {
  /* Use CSS calc with viewport-responsive radius.
     Since CSS custom properties can't be set conditionally on viewport
     in JS, use a simpler approach: render 3 versions with media queries
     or use a single radius and scale via CSS. Here, we use the main
     radius and rely on the container scaling. */

  return (
    <div
      className={`orbit-node ${isSelected ? "selected" : ""}`}
      style={{
        /* Position the node at the correct angle on the circle */
        transform: `rotate(${angle}deg) translateY(-${radius}px)`,
        /* Adjust position so it's centered on the orbit ring */
        marginLeft: "-30px",
        marginTop: "-30px",
      }}
      onClick={onClick}
      title={skill.name}
    >
      {/* Counter-rotate to keep icon upright */}
      <div className={counterClass}>
        <div
          className="orbit-node-inner"
          style={{
            "--orbital-accent": accentColor,
            "--orbital-glow": `${accentColor}40`,
          } as React.CSSProperties}
        >
          <div className="orbit-node-icon">
            {getSkillIcon(skill.name)}
          </div>
        </div>
        <div className="orbit-node-label">{skill.name}</div>
      </div>
    </div>
  );
}
