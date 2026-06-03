"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const sections = [
  { id: "about",          label: "About" },
  { id: "skills",         label: "Skills" },
  { id: "experience",     label: "Experience" },
  { id: "education",      label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact",        label: "Contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-[var(--border)] text-xs text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
    >
      <span>{isDark ? "Dark mode" : "Light mode"}</span>
      {isDark ? (
        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-60 flex-col bg-[var(--card)] border-r border-[var(--border)] z-40">
        {/* Profile */}
        <div className="p-6 border-b border-[var(--border)]">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[var(--border)] mb-3">
            <Image src="/profile.jpg" alt="Jayvee Molino" fill className="object-cover" sizes="64px" priority />
          </div>
          <p className="text-sm font-bold text-[var(--text)] leading-tight">Jayvee Molino</p>
          <p className="text-xs text-indigo-500 mt-0.5">Backend Engineer</p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-[var(--text-dim)]">Open to work</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 overflow-y-auto">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all mb-0.5 ${
                active === id
                  ? "bg-indigo-500/10 text-indigo-400 font-medium"
                  : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card-inner)]"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${active === id ? "bg-indigo-400" : "bg-[var(--border-strong)]"}`} />
              {label}
            </a>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-[var(--border)] space-y-2.5">
          <a
            href="mailto:jayvmolino@gmail.com"
            className="flex items-center gap-2 text-xs text-[var(--text-muted)] hover:text-indigo-400 transition-colors truncate"
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            jayvmolino@gmail.com
          </a>
          <ThemeToggle />
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 bg-[var(--card)]/90 backdrop-blur border-b border-[var(--border)]">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[var(--border)]">
            <Image src="/profile.jpg" alt="Jayvee Molino" fill className="object-cover" sizes="32px" />
          </div>
          <span className="text-sm font-semibold text-[var(--text)]">Jayvee Molino</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-8 h-8 flex items-center justify-center text-[var(--text-muted)]"
          >
            {menuOpen ? (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <div className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-[var(--card)] border-b border-[var(--border)] p-3">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] rounded-xl hover:bg-[var(--card-inner)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
