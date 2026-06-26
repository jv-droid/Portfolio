import Image from "next/image";
import ProjectCarousel from "./ProjectCarousel";

type Project = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  images?: string[];
  itemClass?: string;
  video?: string;
  sizes?: string;
};

type Gallery = {
  title: string;
  subtitle: string;
  image: string;
  position?: string;
};

// TODO: Replace these placeholders with your real projects.
const projects: Project[] = [
  {
    name: "The Barangay Service App",
    description: "A mobile app that streamlines barangay services — letting residents request documents, file reports, and receive announcements right from their phones.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud Functions"],
    images: [
      "/certificates/MobileProject1.png",
      "/certificates/MobileProject2.png.png",
      "/certificates/MobileProject3.png",
      "/certificates/MobileProject4.png",
      "/certificates/MobileProject5.png",
      "/certificates/MobileProject6.png",
      "/certificates/MobileProject7.png",
    ],
  },
  {
    name: "UAV Imaging Application for Concrete Crack Detection",
    description: "A drone-based system that captures aerial imagery of structures, automatically detects concrete cracks, and generates repair recommendations from the analysis.",
    tech: ["ReactJS", "Redux", "Firebase", "NodeJS", "MySQL", "Machine Learning", "Python", "OpenCV"],
    images: [
      "/certificates/AutomaticWallCrackDetection1.jpg",
      "/certificates/AutomaticWallCrackDetection2.jpg",
    ],
    itemClass: "w-56 aspect-[3/4]",
    video: "/certificates/AutomaticWallCrackDetection3.mp4",
  },
  {
    name: "Automated Document Retrieval System",
    description: "A customized web scraping / automation bot that analyzes search filters by date range and application type, handles pagination, and processes both direct PDF downloads and HTML documents. It enforces file-naming rules, manages duplicates, validates date ranges, verifies missing files, organizes deliverables, and gracefully handles a range of edge cases.",
    tech: ["Python", "Selenium", "Web Scraping", "Automation"],
    images: ["/certificates/DocScraperFlow.png"],
    itemClass: "w-full max-w-2xl aspect-[16/9]",
  },
  {
    name: "Local Hardware Inventory System",
    description: "Offline Windows desktop inventory & POS system for a hardware/construction supply store, with product management, stock tracking, supplier records, and sales history backed by a local SQLite database.",
    tech: ["C#", ".NET 8", "WPF", "MVVM", "Entity Framework Core", "SQLite", "WPF-UI"],
    images: [
      "/projects/scatInventory1.png",
      "/projects/scatInventory2.png",
      "/projects/scatInventory3.png",
      "/projects/scatInventory4.png",
      "/projects/scatInventory5.png",
      "/projects/scatInventory6.png",
    ],
    itemClass: "w-80 aspect-[16/10]",
    sizes: "320px",
  },
  {
    name: "Student Attendance Monitoring System",
    description: "A Windows desktop app for tracking K-12 student attendance by scanning each student's QR code with a webcam — admins register students (with grade/section), generate per-student QR codes, then run a live camera scanner that records who's present in real time and rolls it up into dashboard stats and reports.",
    tech: ["C#", ".NET 8", "WPF", "MaterialDesignThemes", "Entity Framework Core 8", "SQLite", "QRCoder", "ZXing.Net", "OpenCvSharp4"],
    images: [
      "/projects/Attendance1.png",
      "/projects/Attendance2.png",
      "/projects/Attendance3.png",
      "/projects/Attendance4.png",
      "/projects/Attendance5.png",
      "/projects/Attendance6.png",
    ],
    itemClass: "w-80 aspect-[16/10]",
    sizes: "320px",
  },
  {
    name: "Dev Team Status Tracker",
    description: "A web-based team management and reporting platform that helps software teams track weekly work, project progress, and meeting outcomes. It manages team members, weekly status updates, projects and development phases, meeting notes, and provides a dashboard with progress rollups. The system includes project planning features such as phase tracking, effort estimates, timelines, and Gantt chart visualization, along with Excel and JSON import/export capabilities for easy data management and reporting.",
    tech: ["C#", ".NET 8", "ASP.NET Core MVC", "Razor", "Entity Framework Core 8", "SQLite", "EPPlus", "Bootstrap", "jQuery"],
    images: [
      "/projects/TS1.png",
      "/projects/TS2.png",
      "/projects/TS3.png",
      "/projects/TS4.png",
      "/projects/TS5.png",
    ],
    itemClass: "w-80 aspect-[16/10]",
    sizes: "320px",
  },
  {
    name: "Legislative Information & Management System",
    description: "A secure, web-based platform that modernizes the legislative operations of the Sangguniang Bayan of Odiongan. LIMS enhances transparency, streamlines legislative processes, and centralizes records through a legislative workflow engine, audit trail, analytics dashboard, secure document repository, and an integrated citizen portal with public consultation and feedback. Access is governed by ASP.NET Core Identity with role-based authorization, cookie authentication, and CSRF protection.",
    tech: ["C#", ".NET 8", "ASP.NET Core 8 MVC", "Entity Framework Core 8", "ASP.NET Core Identity", "RBAC", "Razor Views", "Bootstrap 5", "AdminLTE", "jQuery"],
    images: [
      "/projects/Legislative1.png",
      "/projects/Legislative2.png",
      "/projects/Legislative3.png",
    ],
    itemClass: "w-80 aspect-[16/10]",
    sizes: "320px",
  },
];

// TODO: Update titles/dates to match each achievement.
const awards: Gallery[] = [
  {
    title: "DOST Invention Competition — Champion",
    subtitle: "Department of Science and Technology",
    image: "/certificates/DOST CERT.png",
  },
  {
    title: "DOST — Official Invitation",
    subtitle: "Department of Science and Technology",
    image: "/certificates/DOST Invitation.png",
  },
  {
    title: "SIBOL Competition — College Finalist",
    subtitle: "Science & Innovation Bid for Outstanding Leaders",
    image: "/certificates/FINALIST_SIBOL CR_COLLEGE - 5.jpg",
  },
];

// TODO: Update captions to name the schools and topics.
const speaking: Gallery[] = [
  {
    title: "Resource Speaker — High School Alma Mater",
    subtitle: "Sharing my journey in tech with students",
    image: "/certificates/Speaker3.png",
    position: "object-top",
  },
  {
    title: "Resource Speaker — Elementary Alma Mater",
    subtitle: "Inspiring young learners toward STEM",
    image: "/certificates/Speaker2.jpg",
    position: "object-center",
  },
];

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-bold tracking-tight text-[var(--text)] mb-4">{children}</h3>
  );
}

function GalleryCard({ item }: { item: Gallery }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-cover ${item.position ?? "object-center"} group-hover:scale-105 transition-transform duration-500`}
          sizes="(max-width: 640px) 100vw, 320px"
        />
      </div>
      <div className="px-3.5 py-3">
        <p className="text-xs font-medium text-[var(--text)] leading-snug">{item.title}</p>
        <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.subtitle}</p>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="py-14 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold tracking-tight text-[var(--text)] mb-8">
        Showcase
      </h2>

      {/* Projects */}
      <div className="mb-12">
        <SubHeading>Personal Projects</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 flex flex-col ${
                p.images ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-bold text-[var(--text)]">{p.name}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-dim)] hover:text-indigo-500 transition-colors shrink-0"
                    aria-label={`Open ${p.name}`}
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-xs border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.images && (
                <ProjectCarousel
                  images={p.images}
                  name={p.name}
                  itemClass={p.itemClass}
                  video={p.video}
                  sizes={p.sizes}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="mb-12">
        <SubHeading>Awards &amp; Recognition</SubHeading>
        <p className="text-xs text-[var(--text-muted)] -mt-2 mb-4 max-w-2xl leading-relaxed">
          Awarded by the Department of Science and Technology (DOST) as Champion of the College-Level Invention Competition in CALABARZON, recognizing excellence in innovation, research, and technology development.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {awards.map((a, i) => (
            <GalleryCard key={i} item={a} />
          ))}
        </div>
      </div>

      {/* Speaking */}
      <div>
        <SubHeading>Speaking</SubHeading>
        <p className="text-xs text-[var(--text-muted)] -mt-2 mb-4 max-w-2xl leading-relaxed">
          Sharing knowledge and inspiring students through talks on technology, career growth, and continuous learning.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {speaking.map((s, i) => (
            <GalleryCard key={i} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
