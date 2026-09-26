"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="page-wrapper py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="section-heading text-[var(--text-primary)]">
            <span className="gradient-text-hero">Resume</span>
          </h1>
          <a
            href="/Resume_sudhanva.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Sudhanva_Patil_Resume.pdf"
            className="btn-primary shrink-0"
          >
            Download Resume
          </a>
        </div>

        <div className="glass-card p-4 sm:p-6 overflow-hidden">
          <iframe
            src="/Resume_sudhanva.pdf"
            title="Sudhanva Patil - Resume"
            className="w-full h-[80vh] min-h-[500px] rounded-xl border-0"
            style={{
              border: "1px solid rgba(99, 102, 241, 0.12)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
