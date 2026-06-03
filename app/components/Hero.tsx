import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6">
        {/* Photo */}
        <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/profile.jpg"
            alt="Jayvee Molino"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 112px, 128px"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          {/* Name + verified badge */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
              Jayvee Molino
            </h1>
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
              aria-label="Verified"
            >
              <circle cx="12" cy="12" r="11" fill="#6366f1" />
              <path
                d="M7 12.4l3.3 3.3L17 9"
                fill="none"
                stroke="#fff"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Location */}
          <p className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] mt-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Metro Manila, Philippines
          </p>

          {/* Role tagline */}
          <p className="text-base sm:text-lg font-medium text-[var(--text)] mt-3">
            AI <span className="text-[var(--text-dim)] mx-0.5">\</span> Software Engineer{" "}
            <span className="text-[var(--text-dim)] mx-0.5">\</span> Software Consultant
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 flex-wrap mt-5">
            <a
              href="mailto:jayvmolino@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--text)] text-[var(--bg)] hover:opacity-75 transition-opacity"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
              </svg>
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/jayveemolino/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text-dim)] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM10 8.98h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v6.31h-4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H10v-12z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
