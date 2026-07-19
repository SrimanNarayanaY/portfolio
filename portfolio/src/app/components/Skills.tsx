const skillBlocks = [
    {
        icon: "💻",
        title: "Programming Languages",
        color: "var(--accent)",
        items: ["JavaScript", "TypeScript", "Python"],
    },
    {
        icon: "🚀",
        title: "Frameworks",
        color: "var(--accent-2)",
        items: ["Node.js", "Express.js", "NestJS (NX Monorepo)", "Hono.js", "Django"],
    },
    {
        icon: "🗄️",
        title: "Databases",
        color: "var(--accent-3)",
        items: ["PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Drizzle ORM"],
    },
    {
        icon: "☁️",
        title: "Cloud & DevOps",
        color: "var(--accent-2)",
        items: ["AWS S3", "AWS EC2", "GitHub Actions CI/CD", "Automated Pipelines"],
    },
    {
        icon: "🖥️",
        title: "Server & Infrastructure",
        color: "var(--accent)",
        items: ["Utho Cloud VPS", "Render", "SSH / Server Hardening", "Backup Architecture (rclone)"],
    },
    {
        icon: "🛠️",
        title: "Tools & Platforms",
        color: "var(--accent-3)",
        items: ["Git", "GitHub", "Bitbucket", "Postman", "rclone"],
    },
    {
        icon: "🧠",
        title: "Concepts",
        color: "var(--accent)",
        items: [
            "RESTful API Design, Microservices",
            "Performance Optimization",
            "Data Migration & Schema Design",
            "Security — JWT, OAuth, RBAC",
            "Payment Gateways & Email Automation",
            "Real-Time Events (Socket.IO)",
            "Agile / Scrum, Code Review",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 border-t border-[var(--border)]">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <span className="tag-badge">Tooling</span>
                    <h2 className="mt-3 text-2xl font-bold text-white">Skills & Stack</h2>
                </div>
                <span className="hidden rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)] sm:inline">
                    Backend-first
                </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skillBlocks.map((block) => (
                    <div
                        key={block.title}
                        className="card-glow group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg shadow-black/30"
                    >
                        {/* Glow accent top-right */}
                        <div
                            className="pointer-events-none absolute right-[-20%] top-[-30%] h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                            style={{ background: block.color }}
                        />
                        <div className="relative">
                            <div className="mb-3 flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)] text-base">{block.icon}</span>
                                <h3 className="text-sm font-semibold text-white">{block.title}</h3>
                            </div>
                            <ul className="space-y-1.5">
                                {block.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                                        <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: block.color }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
