"use client";

import { motion } from "framer-motion";
import { experiences, education, certifications } from "@/lib/data";
import { Award, GraduationCap, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="page-wrapper py-12 sm:py-20">
      <div className="mb-12">
        <p
          className="text-sm font-semibold mb-2"
          style={{ color: "var(--accent-amber)" }}
        >
          Career & Qualifications
        </p>
        <h1 className="section-heading text-[var(--text-primary)]">
          Work <span className="gradient-text-ai">Experience</span>
        </h1>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div
          className="absolute left-6 top-0 bottom-0 w-px hidden sm:block opacity-35"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--accent-indigo) 15%, var(--accent-emerald) 85%, transparent 100%)",
          }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="relative flex gap-8"
            >
              <div className="hidden sm:flex shrink-0 w-12 justify-center pt-6">
                <div
                  className={`w-3 h-3 rounded-full mt-0.5 ${
                    i === 0
                      ? "bg-[var(--accent-indigo)]"
                      : "bg-[var(--bg-elevated)]"
                  }`}
                  style={
                    i === 0
                      ? {
                          boxShadow: "0 0 12px var(--accent-indigo)",
                          border: "2px solid var(--accent-indigo)",
                        }
                      : { border: "2px solid var(--accent-indigo)" }
                  }
                />
              </div>

              <div className="flex-1 glass-card p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      {i === 0 && (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(16,185,129,0.2)",
                            color: "#6ee7b7",
                          }}
                        >
                          Internship
                        </span>
                      )}
                    </div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--accent-indigo)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right sm:text-left">
                    <p className="text-sm text-[var(--text-secondary)]">
                      {exp.period}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {exp.location}
                    </p>
                    <span
                      className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "var(--bg-elevated)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Key Contributions & Responsibilities
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <span
                          className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--accent-emerald)" }}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-7"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="font-bold text-lg text-[var(--text-primary)]">
                  {education.degree}
                </h3>
                <span className="text-sm text-[var(--text-muted)] font-mono">
                  {education.period}
                </span>
              </div>
              <p
                className="font-semibold text-sm mb-2"
                style={{ color: "var(--accent-indigo)" }}
              >
                {education.institution}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4">
                <span>Academic Record: CGPA {education.cgpa}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-white/5"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 glass-card p-7"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-[var(--text-primary)] mb-1">
                Professional Certifications
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">
                Verified industry certifications in Generative AI and Data Science
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-violet-400">
                        {cert.issuer}
                      </span>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mt-1">
                        {cert.name}
                      </h4>
                    </div>
                    {cert.badge && (
                      <span className="text-[11px] text-[var(--text-muted)] mt-2">
                        ✓ {cert.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
