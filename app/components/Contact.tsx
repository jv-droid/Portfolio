const contacts = [
  {
    label: "Email",
    value: "jayvmolino@gmail.com",
    href: "mailto:jayvmolino@gmail.com",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jayveemolino",
    href: "https://www.linkedin.com/in/jayveemolino/",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+63 998 361 9749",
    href: "tel:+639983619749",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Metro Manila, Philippines",
    href: null,
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text)] mb-2">Contact</h2>
      <p className="text-sm text-[var(--text-muted)] mb-8">
        Open to remote opportunities. Feel free to reach out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {contacts.map((item) => (
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--text-dim)] transition-all duration-200"
            >
              <span className="w-9 h-9 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] group-hover:text-[var(--text)] group-hover:border-[var(--text-dim)] transition-all shrink-0">
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-mono text-[var(--text-dim)] mb-0.5">{item.label}</p>
                <p className="text-sm text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors truncate">
                  {item.value}
                </p>
              </div>
            </a>
          ) : (
            <div
              key={item.label}
              className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
            >
              <span className="w-9 h-9 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] shrink-0">
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-mono text-[var(--text-dim)] mb-0.5">{item.label}</p>
                <p className="text-sm text-[var(--text-muted)] truncate">{item.value}</p>
              </div>
            </div>
          )
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs font-mono text-[var(--text-dim)]">
          © {new Date().getFullYear()} Jayvee Molino. All rights reserved.
        </p>
        <a
          href="mailto:jayvmolino@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-[var(--text)] text-[var(--bg)] hover:opacity-75 transition-opacity"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Available for hire
        </a>
      </div>
    </section>
  );
}
