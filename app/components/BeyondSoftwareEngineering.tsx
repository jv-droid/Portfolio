"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import { Sparkles, ChevronDown, BadgeCheck } from "lucide-react";

const certificates: string[] = [
  "/trading/FTMO.jpeg",
  "/trading/FN1.jpg",
  "/trading/FN2.jpg",
  "/trading/ACG1.png",
  "/trading/ACG2.png",
  "/trading/ACG3.png",
  "/trading/ACG4.png",
  "/trading/ACG5.png",
  "/trading/ACG6.png",
];

export default function BeyondSoftwareEngineering() {
  const [expanded, setExpanded] = useState(false);
  const [zoomed, setZoomed] = useState<string | null>(null);

  return (
    <section id="beyond" className="py-14 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text)] mb-3">
        Beyond Software Engineering
      </h2>
      <p className="text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
        While software engineering is my primary profession, I enjoy continuously challenging myself
        in other disciplines that require analytical thinking, discipline, and strategic decision-making.
        One of those is proprietary trading, where I have passed multiple prop firm evaluations that
        demonstrate my ability to perform under strict professional standards.
      </p>

      {/* Explore More */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls="beyond-panel"
        className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <Sparkles className="h-4 w-4" />
        <span>{expanded ? "Show Less" : "See Trading Certifications"}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>

      {/* Expandable panel */}
      <div
        id="beyond-panel"
        className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          expanded ? "grid-rows-[1fr] opacity-100 mt-10" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="relative space-y-6">
            {/* Decorative glow for glassmorphism */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            {/* Card 1 — Trading Certifications */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-indigo-500" />
                <h3 className="text-lg font-bold tracking-tight text-[var(--text)]">Trading Certifications</h3>
              </div>
              <p className="mt-2 text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed">
              
              </p>

              <div className="mt-6 columns-2 sm:columns-3 gap-3">
                {certificates.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setZoomed(src)}
                    aria-label={`Zoom trading certificate ${i + 1}`}
                    className="group mb-3 block w-full cursor-zoom-in overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] break-inside-avoid"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Trading certificate ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox src={zoomed} alt="Trading certificate" onClose={() => setZoomed(null)} />
    </section>
  );
}
