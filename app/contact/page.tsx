"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, FileDown, Github, Linkedin, Loader2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      if (document.queryCommandSupported?.("copy")) {
        const input = document.createElement("input");
        input.value = personalInfo.email;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    setSubmitting(true);
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  }, []);

  return (
    <div className="page-wrapper py-12 sm:py-20">
      <div className="mb-12 max-w-2xl">
        <p
          className="text-sm font-semibold mb-2"
          style={{ color: "var(--accent-amber)" }}
        >
          Get In Touch
        </p>
        <h1 className="section-heading text-[var(--text-primary)]">
          Let&apos;s{" "}
          <span className="gradient-text-hero">work together</span>
        </h1>
        <p className="text-[var(--text-secondary)] mt-3">
          Open to full-time roles, contract work, and collaboration on
          interesting AI / data problems. I reply within 24 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 rounded-xl flex items-center gap-3"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <span
              className="w-3 h-3 rounded-full animate-pulse shrink-0"
              style={{ background: "var(--accent-emerald)" }}
            />
            <span className="text-sm font-medium text-[#6ee7b7]">
              Open to opportunities
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="glass-card p-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(99,102,241,0.15)" }}
              >
                <Mail size={18} style={{ color: "var(--accent-indigo)" }} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[var(--text-muted)]">Email</p>
                <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                  {personalInfo.email}
                </p>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="btn-ghost text-sm shrink-0 px-3 py-1.5"
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </motion.div>

          <a
            href={`tel:${personalInfo.phoneTel}`}
            aria-label="Call Sudhanva Patil"
            className="glass-card p-4 flex items-center gap-3 group"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(99,102,241,0.15)" }}
            >
              <Phone size={18} style={{ color: "var(--accent-indigo)" }} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-[var(--text-muted)]">Phone</p>
              <p className="text-sm font-medium text-[var(--text-primary)]">
                {personalInfo.phone}
              </p>
            </div>
            <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-indigo)] transition-colors ml-auto">
              →
            </span>
          </a>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <a
              href={personalInfo.resumePath}
              download="Sudhanva_Patil_Resume.pdf"
              className="btn-primary w-full justify-center"
            >
              <FileDown size={18} />
              Download Resume ↓ PDF
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-3"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <Github size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </div>
              <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-indigo)] transition-colors">
                →
              </span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </div>
              <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-indigo)] transition-colors">
                →
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="glass-card p-8">
            {!submitted ? (
              <div role="form" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, name: e.target.value }))
                      }
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, email: e.target.value }))
                      }
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, subject: e.target.value }))
                    }
                    className="input-field"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, message: e.target.value }))
                    }
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="button"
                  disabled={submitting}
                  onClick={handleSubmit}
                  className="btn-primary w-full justify-center"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  Message sent!
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
