import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="border-t border-[rgba(99,102,241,0.1)]"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="page-wrapper py-12 sm:py-16">
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 mb-10">
          <div>
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center text-sm font-bold mb-3"
              style={{
                background: "var(--gradient-hero)",
                color: "#0a0a0f",
              }}
            >
              SP
            </div>
            <p className="font-semibold text-[var(--text-primary)]">
              {personalInfo.name}
            </p>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Backend Engineer · Software Engineer
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Building scalable web applications, REST APIs, and database systems.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--text-primary)] mb-3">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/projects"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/experience"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/resume"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                Resume
              </Link>
              <Link
                href="/about"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold text-[var(--text-primary)] mb-3">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] transition-colors"
              >
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.resumePath}
                download="Sudhanva_Patil_Resume.pdf"
                className="text-sm font-medium mt-1 inline-flex items-center gap-1"
                style={{ color: "var(--accent-amber)" }}
              >
                ↓ Download Resume
              </a>
            </div>
          </div>
        </div>

        <hr className="gradient-divider mb-6" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Sudhanva Patil. All rights reserved.</p>
          <p className="gradient-text-hero font-medium">
            Built with Next.js 14 · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
