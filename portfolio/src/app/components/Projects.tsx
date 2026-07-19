const projects = [
    {
        title: "Lab Squire",
        tag: "Laboratory Management",
        body: "Developed and optimized RESTful APIs and database architectures for high-volume specimen tracking, barcode/QR integration, and reduced API latency by 30%; implemented centralized error handling and input validation across endpoints.",
        stack: ["Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB", "AWS S3/EC2"],
        glow: "rgba(71,193,255,0.18)",
    },
    {
        title: "Yoda Report Portal",
        tag: "Patient Report Processing",
        body: "Built secure APIs for sample tracking and real-time report management; integrated PDF generation and reduced report retrieval time by 50%.",
        stack: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "AWS S3/EC2"],
        glow: "rgba(245,165,36,0.18)",
    },
    {
        title: "HireLynx",
        tag: "Job Recruitment Portal (ATS)",
        body: "Built a Canada-focused applicant tracking system with end-to-end recruitment — job postings, application pipelines, interview scheduling, and RBAC — architected on an NX monorepo with deployment across Utho Cloud and Render.",
        stack: ["NestJS", "Next.js", "PostgreSQL", "TypeORM", "AWS"],
        glow: "rgba(167,139,250,0.18)",
    },
    {
        title: "NyayaTech",
        tag: "Legal Case Management",
        body: "Architected backend using Hono.js and Drizzle ORM (relations); integrated payment gateway (Stripe), automated email notifications, and live events with Socket.IO for lawyer-client interactions.",
        stack: ["Hono.js", "Drizzle ORM", "PostgreSQL", "Socket.IO", "Stripe", "SendGrid"],
        glow: "rgba(245,165,36,0.18)",
    },
    {
        title: "ShipGPT",
        tag: "AI-Powered Ship Management",
        body: "Implemented REST APIs for ship data tracking and management, integrated AWS S3 for file handling, designed scalable microservices architecture, and improved storage efficiency.",
        stack: ["Node.js", "AWS S3", "Microservices"],
        glow: "rgba(71,193,255,0.18)",
    },
    {
        title: "BHK Project Platform",
        tag: "Property Management System",
        body: "Developed user lifecycle management (ACTIVE, INACTIVE, BLOCKED), admin status update APIs, restricted inactive login access, and implemented S3 storage for product assets and artisan registration documents.",
        stack: ["Node.js", "MySQL", "AWS S3"],
        glow: "rgba(167,139,250,0.18)",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 border-t border-[var(--border)]">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <span className="tag-badge">Work</span>
                    <h2 className="mt-3 text-2xl font-bold text-white">Selected Projects</h2>
                </div>
                <span className="hidden text-xs text-[var(--muted)] sm:inline">Impact-driven builds</span>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="card-glow group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-black/30"
                    >
                        {/* Corner glow */}
                        <div
                            className="pointer-events-none absolute right-[-20%] top-[-30%] h-40 w-40 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                            style={{ background: project.glow }}
                        />

                        <div className="relative">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-base font-bold text-white">{project.title}</h3>
                                <span className="tag-badge flex-shrink-0">{project.tag}</span>
                            </div>
                            <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">{project.body}</p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {project.stack.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--muted)]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Open Source */}
            <div className="mt-5 card-glow gradient-border rounded-3xl bg-[var(--surface)] p-6 shadow-xl shadow-black/30">
                <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)] text-base">🌐</span>
                    <h3 className="text-base font-bold text-white">Open Source & Contributions</h3>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Active open source contributor; implemented backend performance optimizations and advanced API designs across multiple GitHub projects. Routinely reduced API response time and database latency through indexing, caching, and code refactoring.
                </p>
            </div>
        </section>
    );
}
