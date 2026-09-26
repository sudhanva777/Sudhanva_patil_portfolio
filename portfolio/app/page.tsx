"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, projects } from "@/lib/data";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard fallback */
    }
  }, []);

  return (
    <button onClick={copy} className="btn-ghost text-sm">
      {copied ? "✓ Copied!" : "📋 Copy Email"}
    </button>
  );
}

function TypingAnimation() {
  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = personalInfo.taglines;

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const typingSpeed = 55;
    const deletingSpeed = 35;
    const pauseAtEnd = 2200;

    if (!isDeleting) {
      if (display.length < phrase.length) {
        const timer = setTimeout(
          () => setDisplay(phrase.slice(0, display.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAtEnd);
        return () => clearTimeout(timer);
      }
    } else {
      if (display.length > 0) {
        const timer = setTimeout(
          () => setDisplay(phrase.slice(0, display.length - 1)),
          deletingSpeed
        );
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setPhraseIndex((p) => (p + 1) % phrases.length);
      }
    }
  }, [display, phraseIndex, isDeleting, phrases]);

  return (
    <span className="inline-flex items-center gap-1 min-h-[2.5rem]">
      <span className="text-xl sm:text-2xl text-[var(--text-secondary)]">
        {display}
      </span>
      <span
        className="w-0.5 h-7 block animate-pulse shrink-0"
        style={{ background: "var(--accent-indigo)" }}
      />
    </span>
  );
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const BADGE: Record<string, string> = {
    "AI Engineering": "badge-ai",
    "Backend Development": "badge-ml",
    "Data Science": "badge-ds",
    "Data Analytics": "badge-analytics",
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        <div
          className="glow-blob w-[400px] h-[400px] -top-32 -left-32"
          style={{ background: "var(--accent-indigo)", opacity: 0.15 }}
        />
        <div
          className="glow-blob w-[350px] h-[350px] bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          style={{ background: "var(--accent-emerald)", opacity: 0.12 }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(var(--accent-indigo) 1px, transparent 1px),
              linear-gradient(90deg, var(--accent-indigo) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative inline-block md:-ml-16 lg:-ml-24 before:absolute before:-inset-4 before:rounded-full before:bg-gradient-to-tr before:from-indigo-500/25 before:to-emerald-400/15 before:blur-2xl before:-z-10">
              <div className="relative p-1.5 rounded-full bg-gradient-to-br from-indigo-500/50 via-violet-500/40 to-emerald-500/30">
                <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden">
                  <Image
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 320px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <span
                className="absolute bottom-2 right-2 w-3 h-3 rounded-full animate-pulse"
                style={{
                  background: "var(--accent-emerald)",
                  boxShadow: "0 0 12px var(--accent-emerald)",
                }}
              />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.1)] px-3 py-1.5 text-xs font-medium text-[#6ee7b7]">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent-emerald)" }}
              />
              Available for opportunities
            </div>

            <h1 className="text-hero">
              <span className="text-[var(--text-primary)]">
                {personalInfo.name.split(" ")[0]}
              </span>{" "}
              <span className="gradient-text-hero">
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              {personalInfo.roles.map((role, i) => (
                <span key={role} className="inline-flex items-center gap-1">
                  {i > 0 && (
                    <span className="text-[var(--text-muted)]">×</span>
                  )}
                  <span
                    className={
                      role === "AI Engineer"
                        ? "badge-ai"
                        : role === "Backend Engineer"
                          ? "badge-ml"
                          : role === "Full-Stack Developer"
                            ? "badge-cv"
                            : "badge-ds"
                    }
                  >
                    {role}
                  </span>
                </span>
              ))}
            </div>

            <div className="flex justify-center min-h-[3rem]">
              <TypingAnimation />
            </div>

            <p
              className="text-[var(--text-muted)] max-w-xl mx-auto text-sm leading-relaxed"
              style={{ fontSize: "0.95rem" }}
            >
              Computer Science graduate building full-stack applications, REST APIs,
              and database-driven systems using Python, FastAPI, React, JavaScript, SQL, and PostgreSQL.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={personalInfo.resumePath}
                download="Sudhanva_Patil_Resume.pdf"
                className="btn-primary"
              >
                ↓ Download Resume
              </a>
              <Link href="/projects" className="btn-secondary">
                View Projects →
              </Link>
              <CopyEmailButton />
              <a
                href={`tel:${personalInfo.phoneTel}`}
                aria-label="Call Sudhanva Patil"
                className="btn-ghost text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-8">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <span
                    className={`text-xl sm:text-2xl font-bold ${
                      i === 0 ? "gradient-text-ai" : i === 1 ? "gradient-text-ds" : ""
                    }`}
                    style={
                      i === 2
                        ? {
                            background: "var(--gradient-cta)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : undefined
                    }
                  >
                    {stat.value}
                  </span>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
            scroll
          </span>
          <div
            className="w-px h-12 rounded-full opacity-50"
            style={{
              background: "linear-gradient(to bottom, var(--accent-indigo), transparent)",
            }}
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="page-wrapper py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="section-heading text-[var(--text-primary)]">
            Recent{" "}
            <span className="gradient-text-ai">Projects</span>
          </h2>
          <Link
            href="/projects"
            className="btn-ghost text-sm shrink-0 w-fit"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href="/projects" className="block group">
                <div className="glass-card p-6 h-full transition-all duration-300 group-hover:border-[var(--glass-border-hover)] group-hover:shadow-[var(--shadow-glow-ai)]">
                  <div
                    className="h-[2px] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "var(--gradient-hero)" }}
                  />
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={BADGE[project.domain] ?? "badge-ai"}>
                      {project.domain}
                    </span>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-indigo)] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] flex-1 mb-3 line-clamp-2">
                    {project.shortDesc}
                  </p>
                  {project.impact && (
                    <p className="text-xs text-[#6ee7b7]">📈 {project.impact}</p>
                  )}
                  <span className="inline-block mt-4 text-sm font-medium text-[var(--accent-indigo)] group-hover:translate-x-1 transition-transform">
                    View case study →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="page-wrapper py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative glass-card p-10 sm:p-14 text-center overflow-hidden"
        >
          <div
            className="glow-blob w-64 h-64 -top-20 -right-20 opacity-40"
            style={{ background: "var(--accent-indigo)" }}
          />
          <div className="relative z-10">
            <h2 className="section-heading text-[var(--text-primary)] mb-4">
              Let&apos;s build something{" "}
              <span className="gradient-text-hero">meaningful</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <a
                href={personalInfo.resumePath}
                download="Sudhanva_Patil_Resume.pdf"
                className="btn-secondary"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
