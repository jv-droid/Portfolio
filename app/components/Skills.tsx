const skillGroups = [
  { category: "Backend",        skills: ["C#", "ASP.NET Core MVC", ".NET Core", "REST APIs", "Entity Framework", "LINQ"] },
  { category: "Database",       skills: ["SQL Server", "MSSQL", "Query Optimization", "Stored Procedures"] },
  { category: "Cloud & DevOps", skills: ["Azure", "AWS S3", "Azure DevOps", "IIS", "Git / GitHub", "Sourcetree", "GitHub Actions", "Postman"] },
  { category: "Frontend",       skills: ["JavaScript", "TypeScript", "React", "Angular", "HTML", "CSS", "Flutter"] },
  { category: "AI & Modern",    skills: ["AI Concepts", "SaaS Platforms", "Cloud-integrated Systems", "Data-driven Apps"] },
  { category: "Practices",      skills: ["Agile / Scrum", "Production Support", "Debugging", "Code Review"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text)] mb-6">Tech Stack</h2>

      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
            <span className="text-xs font-mono text-[var(--text-dim)] sm:w-32 shrink-0 sm:pt-1">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
