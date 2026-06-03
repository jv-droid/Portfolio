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
    tech: ["ReactJS", "Redux", "Firebase", "NodeJS", "MySQL"],
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
    <h3 className="text-sm font-semibold text-[var(--text)] mb-4">{children}</h3>
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
                <p className="text-sm font-medium text-[var(--text)]">{p.name}</p>
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
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="mb-12">
        <SubHeading>Awards &amp; Recognition</SubHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {awards.map((a, i) => (
            <GalleryCard key={i} item={a} />
          ))}
        </div>
      </div>

      {/* Speaking */}
      <div>
        <SubHeading>Speaking</SubHeading>
        <div className="grid grid-cols-2 gap-4">
          {speaking.map((s, i) => (
            <GalleryCard key={i} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
