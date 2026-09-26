"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-white/5 py-12 bg-bg-secondary/50">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Sudhanva<span className="text-primary">.P</span>
            </Link>
            <p className="text-sm text-text-tertiary max-w-xs">
              AI Engineer specializing in production-ready machine learning systems and intelligent agentic pipelines.
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <Link
              href="https://github.com/sudhanva-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/5 hover:border-primary/50 text-text-secondary hover:text-primary hover:scale-110 active:scale-95"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/sudhanva-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/5 hover:border-primary/50 text-text-secondary hover:text-primary hover:scale-110 active:scale-95"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:sudhanvapatil2004@gmail.com"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/5 hover:border-primary/50 text-text-secondary hover:text-primary hover:scale-110 active:scale-95"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest text-text-tertiary hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </div>
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
          <p>© 2025 Sudhanva Patil. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
