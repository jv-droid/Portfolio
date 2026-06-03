"use client";

import { useState } from "react";
import Image from "next/image";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  category: "Udemy" | "Skillsoft" | "Coursera" | "LinkedIn";
  image: string;
};

const certs: Cert[] = [
  { title: "Software Architecture", issuer: "Andrii Sviatobatko", date: "Mar 2024", category: "Udemy", image: "/certificates/cert-software-architecture.jpg" },
  { title: "Master Course in Project Management 2.0", issuer: "Dr. José Prabhu J", date: "Mar 2024", category: "Udemy", image: "/certificates/cert-project-management.jpg" },
  { title: "Ultimate Scrum Master Certification (PSM-I) + Tests", issuer: "Ivan Pinar Domínguez", date: "Jan 2024", category: "Udemy", image: "/certificates/cert-scrum-master.jpg" },
  { title: "The Complete ISO/IEC 27001 Information Security Management", issuer: "Petar Dimov", date: "Dec 2023", category: "Udemy", image: "/certificates/cert-iso-27001.jpg" },
  { title: "Improving Software Development Productivity", issuer: "Andrii Sviatobatko", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-productivity.jpg" },
  { title: "Building of Web3 Token Balance Applications", issuer: "MTF Institute", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-web3-tokens.jpg" },
  { title: "Fundamental Course of Microsoft Power Platform (101)", issuer: "Dr. José J", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-power-platform.jpg" },
  { title: "Master Course in Sustainable Technologies & Datafication 2.0", issuer: "Dr. José J", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-sustainable-tech.jpg" },
  { title: "Professional Diploma in Corporate Management", issuer: "MTF Institute", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-corporate-management.jpg" },
  { title: "Master Course in Chatbot Technology and Google Bard AI", issuer: "Dr. José J", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-chatbot-ai.jpg" },
  { title: "User Stories for Agile Scrum + Product Owner + Business Analysis", issuer: "Paul Ashun", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-agile-scrum.jpg" },
  { title: "Professional Diploma in Project Management", issuer: "MTF Institute", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-project-mgmt-diploma.png" },
  { title: "ASP.NET Core Razor Pages — ASP.NET Core MVC Alternate", issuer: "Sameer Saini", date: "Nov 2023", category: "Udemy", image: "/certificates/cert-aspnet-razor.jpg" },
  { title: "API Security", issuer: "Skillsoft", date: "2023", category: "Skillsoft", image: "/certificates/cert-api-security.png" },
  { title: "Application Security Awareness & Validation", issuer: "Skillsoft", date: "2023", category: "Skillsoft", image: "/certificates/cert-app-security.png" },
  { title: "Secure Application Architecture & IAM", issuer: "Skillsoft", date: "2023", category: "Skillsoft", image: "/certificates/cert-secure-arch.png" },
  { title: "Top 10 List Items", issuer: "Skillsoft", date: "2023", category: "Skillsoft", image: "/certificates/cert-top10-list.png" },
  { title: "AI For Everyone", issuer: "DeepLearning.AI", date: "Mar 2023", category: "Coursera", image: "/certificates/cert-ai-everyone.jpg" },
  { title: "Azure Solutions Architect Expert (AZ-305): Design Data Storage Solutions", issuer: "LinkedIn Learning", date: "May 2023", category: "LinkedIn", image: "/certificates/cert-azure-solutions.png" },
  { title: "Training Neural Networks in Python", issuer: "LinkedIn Learning", date: "May 2023", category: "LinkedIn", image: "/certificates/cert-neural-networks.png" },
  { title: "Machine Learning and AI: Advanced Decision Trees with SPSS", issuer: "LinkedIn Learning", date: "May 2023", category: "LinkedIn", image: "/certificates/cert-ml-decision-trees.png" },
  { title: "Advanced NLP with Python for Machine Learning", issuer: "LinkedIn Learning", date: "May 2023", category: "LinkedIn", image: "/certificates/cert-nlp-python.png" },
];

const categoryConfig: Record<string, { color: string; dot: string }> = {
  Udemy:     { color: "text-orange-400", dot: "bg-orange-400" },
  Skillsoft: { color: "text-pink-400",   dot: "bg-pink-400" },
  Coursera:  { color: "text-blue-400",   dot: "bg-blue-400" },
  LinkedIn:  { color: "text-sky-400",    dot: "bg-sky-400" },
};

type Filter = "All" | "Udemy" | "Skillsoft" | "Coursera" | "LinkedIn";
const filters: Filter[] = ["All", "Udemy", "Skillsoft", "Coursera", "LinkedIn"];

export default function Certifications() {
  const [active, setActive] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<Cert | null>(null);
  const [paused, setPaused] = useState(false);

  const filtered = active === "All" ? certs : certs.filter((c) => c.category === active);
  const duration = Math.max(20, filtered.length * 2.8);

  return (
    <section id="certifications" className="py-14 border-t border-[var(--border)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold tracking-tight text-[var(--text)]">
          Certifications <span className="opacity-50">({certs.length})</span>
        </h2>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {filters.map((f) => {
          const count = f === "All" ? certs.length : certs.filter((c) => c.category === f).length;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-3 py-1 rounded-full text-xs border transition-all ${
                active === f
                  ? "border-[var(--text)] text-[var(--text)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-dim)] hover:text-[var(--text)]"
              }`}
            >
              {f} <span className="opacity-50">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Marquee track */}
      <div
        className="overflow-hidden -mx-6"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          key={active}
          className="flex gap-4 w-max px-6"
          style={{
            animation: `marquee ${duration}s linear infinite`,
            animationPlayState: paused || !!lightbox ? "paused" : "running",
          }}
        >
          {[...filtered, ...filtered].map((cert, i) => (
            <button
              key={i}
              onClick={() => setLightbox(cert)}
              className="shrink-0 w-60 text-left group"
            >
              <div className="relative w-full h-40 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] mb-2.5">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="240px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-xs bg-black/60 px-2.5 py-1 rounded-full transition-opacity">
                    View
                  </span>
                </div>
                <span className={`absolute top-2 right-2 w-2 h-2 rounded-full ${categoryConfig[cert.category].dot}`} />
              </div>
              <p className="text-xs font-medium text-[var(--text)] line-clamp-2 leading-snug mb-0.5">{cert.title}</p>
              <p className={`text-xs ${categoryConfig[cert.category].color}`}>{cert.issuer}</p>
              <p className="text-xs font-mono text-[var(--text-dim)]">{cert.date}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[var(--bg)] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--text-muted)] flex items-center justify-center hover:text-[var(--text)] transition-colors"
            >
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full aspect-[4/3]">
              <Image src={lightbox.image} alt={lightbox.title} fill className="object-contain" sizes="100vw" />
            </div>
            <div className="px-5 py-4 border-t border-[var(--border)]">
              <p className="text-sm font-semibold text-[var(--text)]">{lightbox.title}</p>
              <p className={`text-xs mt-0.5 ${categoryConfig[lightbox.category].color}`}>
                {lightbox.issuer} · {lightbox.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
