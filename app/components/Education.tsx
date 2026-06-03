const degrees = [
  {
    school: "Batangas State University",
    degree: "Master of Science in Artificial Intelligence",
    note: "Unit Earner",
    period: "2023 – 2025",
  },
  {
    school: "Lyceum of the Philippines University – Batangas",
    degree: "Bachelor of Science in Computer Engineering",
    note: null,
    period: "2015 – 2020",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-14 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text)] mb-6">Education</h2>

      <div className="space-y-6">
        {degrees.map((d, i) => (
          <div key={i} className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-[var(--text)]">
                {d.degree}
                {d.note && (
                  <span className="ml-2 text-xs font-normal text-[var(--text-dim)]">({d.note})</span>
                )}
              </p>
              <p className="text-sm text-[var(--text-muted)] mt-0.5">{d.school}</p>
            </div>
            <span className="text-xs font-mono text-[var(--text-dim)] shrink-0 mt-0.5">{d.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
