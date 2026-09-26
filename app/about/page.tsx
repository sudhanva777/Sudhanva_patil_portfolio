"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

const values = [
  {
    icon: "🏗️",
    title: "Engineer First",
    desc: "I care about models that run reliably in production — not just in notebooks. Clean code, proper testing, monitoring.",
  },
  {
    icon: "📊",
    title: "Data-Driven",
    desc: "Every decision should be backed by evidence. I let the data tell the story — then build systems to act on it.",
  },
  {
    icon: "🚀",
    title: "Ship It",
    desc: "Perfectionism is the enemy of progress. I move fast, iterate, and improve based on real feedback and metrics.",
  },
  {
    icon: "📚",
    title: "Always Learning",
    desc: "ML moves fast. I dedicate time weekly to reading papers, building experiments, and keeping my skills current.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper py-12 sm:py-20">
      <div className="mb-12">
        <p
          className="text-sm font-semibold mb-2"
          style={{ color: "var(--accent-violet)" }}
        >
          About Me
        </p>
        <h1 className="section-heading text-[var(--text-primary)]">
          The person behind the{" "}
          <span className="gradient-text-hero">models</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-6 flex items-center gap-5 mb-6">
            <div className="relative shrink-0">
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-40 scale-90"
                style={{
                  background: "var(--gradient-hero)",
                }}
              />
              <Image
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                width={100}
                height={100}
                className="relative rounded-2xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                {personalInfo.name}
              </h2>
              <div className="flex gap-2 flex-wrap mb-2">
                <span className="badge-ai">AI Engineer</span>
                <span className="badge-ds">Data Scientist</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                📍 {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {personalInfo.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center"
              >
                <span className="gradient-text-ai text-xl font-bold">
                  {stat.value}
                </span>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-card p-5 flex items-center justify-between">
            <p className="text-sm text-[var(--text-secondary)]">
              Download my resume
            </p>
            <a
              href={personalInfo.resumePath}
              download="Sudhanva_Patil_Resume.pdf"
              className="btn-primary"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          {personalInfo.bio.map((para, i) => (
            <p
              key={i}
              className="text-[var(--text-secondary)] leading-[1.85]"
            >
              {para}
            </p>
          ))}
          <div className="flex gap-2 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost p-2 rounded-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost p-2 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-ghost p-2 rounded-lg"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <hr className="gradient-divider my-12" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-[var(--text-primary)] mb-8">
          How I{" "}
          <span className="gradient-text-ai">approach</span> work
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5"
            >
              <span className="text-2xl mb-3 block">{v.icon}</span>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
