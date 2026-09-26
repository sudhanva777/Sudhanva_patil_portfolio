"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";
import {
  projects,
  type Project,
  type Domain,
} from "@/lib/data";

const BADGE: Record<Domain, string> = {
  "AI Engineering": "badge-ai",
  "Backend Development": "badge-ml",
  "Data Science": "badge-ds",
  "Data Analytics": "badge-analytics",
};

const COMPLEXITY: Record<string, string> = {
  Advanced: "complexity-advanced",
  Intermediate: "complexity-intermediate",
  Foundation: "complexity-foundation",
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Domain | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.domain === activeFilter);

  return (
    <div className="page-wrapper py-12 sm:py-20">
      <div className="mb-12">
        <p
          className="text-sm font-semibold mb-2"
          style={{ color: "var(--accent-indigo)" }}
        >
          Portfolio
        </p>
        <h1 className="section-heading text-[var(--text-primary)]">
          Projects &{" "}
          <span className="gradient-text-hero">Case Studies</span>
        </h1>
        <p className="text-[var(--text-secondary)] mt-2 max-w-xl">
          Click any card to explore the full case study.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {(["All", "AI Engineering", "Backend Development", "Data Science", "Data Analytics"] as const).map(
          (domain) => (
            <button
              key={domain}
              onClick={() => setActiveFilter(domain)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === domain
                  ? "text-white"
                  : "text-[var(--text-secondary)]"
              }`}
              style={{
                background:
                  activeFilter === domain
                    ? "var(--accent-indigo)"
                    : "var(--bg-tertiary)",
              }}
            >
              {domain}
            </button>
          )
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
            >
              <div className="glass-card relative overflow-hidden h-full p-6 transition-all duration-300 group-hover:-translate-y-1">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "var(--gradient-hero)" }}
                />
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={BADGE[project.domain]}>
                    {project.domain}
                  </span>
                  <span className={COMPLEXITY[project.complexity]}>
                    {project.complexity}
                  </span>
                </div>
                <h2 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-indigo)] transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] flex-1 mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="tech-pill text-[var(--text-muted)]">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
                {project.impact && (
                  <p className="text-xs text-[#6ee7b7] mb-4">📈 {project.impact}</p>
                )}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm font-medium text-[var(--accent-indigo)] group-hover:text-[var(--accent-violet)] group-hover:translate-x-1 transition-all inline-block">
                    View Details →
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailPanel
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectDetailPanel({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed top-0 right-0 z-50 h-full w-full max-w-xl overflow-y-auto no-scrollbar"
        style={{
          background: "rgba(14,14,20,0.98)",
          backdropFilter: "blur(32px)",
          borderLeft: "1px solid rgba(99,102,241,0.15)",
        }}
      >
        <div className="p-6 sm:p-8 space-y-7">
          <div className="flex items-center justify-between sticky top-0 z-10 py-2 bg-[rgba(14,14,20,0.95)]">
            <div className="flex items-center gap-2">
              <span className={BADGE[project.domain]}>{project.domain}</span>
              <span className={COMPLEXITY[project.complexity]}>
                {project.complexity}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Close panel"
            >
              <X size={20} />
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              {project.title}
            </h2>
            <p className="text-[var(--text-secondary)]">{project.shortDesc}</p>
          </div>

          {project.impact && (
            <div
              className="p-4 rounded-xl flex items-center gap-3"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <span className="text-2xl">📈</span>
              <div>
                <p className="text-xs font-semibold text-[#6ee7b7] uppercase tracking-wider">
                  Impact
                </p>
                <p className="text-[var(--text-primary)] font-medium text-[#6ee7b7]">
                  {project.impact}
                </p>
              </div>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Project Overview
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
              Key Highlights
            </p>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-[var(--text-secondary)] text-sm"
                >
                  <span
                    className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--accent-indigo)" }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github size={18} />
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </motion.aside>
    </>
  );
}
