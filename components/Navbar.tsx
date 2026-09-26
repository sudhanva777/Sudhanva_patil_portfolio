"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,15,0.88)] backdrop-blur-[24px] border-b border-[rgba(99,102,241,0.1)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="page-wrapper flex items-center justify-between h-16 sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Home"
        >
          <div
            className="h-9 w-9 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{
              background: "var(--gradient-hero)",
              color: "#0a0a0f",
            }}
          >
            SP
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold">Sudhanva Patil</span>
            <span className="text-[11px] text-[var(--text-muted)]">
              AI Engineer · Data Scientist
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#A5B4FC] bg-[rgba(99,102,241,0.1)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-[var(--accent-indigo)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Sudhanva_Patil_Resume.pdf"
            className="hidden md:inline-flex btn-primary"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen((p) => !p)}
            className="md:hidden p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[rgba(99,102,241,0.1)] bg-[rgba(10,10,15,0.95)] backdrop-blur-xl overflow-hidden"
          >
            <div className="page-wrapper py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#A5B4FC] bg-[rgba(99,102,241,0.1)]"
                        : "text-[var(--text-secondary)] hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="/resume.pdf"
                download="Sudhanva_Patil_Resume.pdf"
                className="mt-2 mx-4 py-3 rounded-lg btn-primary justify-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
