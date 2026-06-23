const jobs = [
  {
    role: ".NET Developer",
    company: "Octal PH Inc.",
    period: "Aug 2025 – Present",
    current: true,
  },
  {
    role: "Developer / Configuration Specialist",
    company: "Myridius",
    period: "Feb 2024 – Aug 2025",
    current: false,
  },
  {
    role: "Software Developer",
    company: "ABS-CBN Corporation",
    period: "Nov 2022 – Dec 2023",
    current: false,
  },
  {
    role: "Associate Software Engineer",
    company: "Accenture Inc.",
    period: "Aug 2021 – Nov 2022",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text)] mb-6">Experience</h2>

      <ol className="relative ml-1 border-l border-[var(--border)] space-y-1 pt-1">
        {jobs.map((job, i) => (
          <li key={i} className="relative">
            <span
              className={`absolute -left-[7px] top-[1.15rem] w-3 h-3 rounded-sm border-2 z-10 ${
                job.current
                  ? "bg-indigo-500 border-indigo-500"
                  : "bg-[var(--bg)] border-[var(--text-dim)]"
              }`}
            />
            <div className="group ml-5 -mr-3 flex items-start justify-between gap-3 rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:bg-[var(--card)] hover:border-[var(--text-dim)]">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[var(--text)] group-hover:font-bold">
                  {job.role}
                  {job.current && (
                    <span className="ml-2 text-xs text-indigo-500 font-normal">current</span>
                  )}
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-0.5 group-hover:text-[var(--text)] group-hover:font-medium">
                  {job.company}
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--text-dim)] shrink-0 text-right group-hover:text-[var(--text-muted)]">
                {job.period}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
