"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Showcase",   href: "#showcase" },
  { label: "Contact",    href: "#contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-7 h-7" />;
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-7 h-7 flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]" : ""}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-medium text-[var(--text)] tracking-tight">
          Jayvee Molino
        </a>

        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden w-7 h-7 flex flex-col items-center justify-center gap-1.5 text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card)] transition-colors border-b border-[var(--border)] last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
