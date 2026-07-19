const jobs = [
    {
        role: "Backend Developer",
        company: "Digixito Media Private Limited",
        period: "Sep 2025 – Present",
        accent: "var(--accent)",
        badge: "Current",
        bullets: [
            "Architected and maintained backend services for multiple production projects on an NX monorepo (NestJS, TypeScript, TypeORM), enabling shared code reuse across apps and faster feature rollout.",
            "Set up and enforced Git branch protection and PR-based review workflows on Bitbucket Cloud, blocking direct pushes to master for junior developers.",
            "Provisioned and managed backend infrastructure on AWS EC2 and Utho Cloud VPS, including SSH access setup, server hardening, and MySQL/PostgreSQL configuration on resource-constrained servers.",
            "Built GitHub Actions CI/CD pipelines for NestJS NX monorepo projects, automating build and deployment to Utho VPS across five live apps (BHK project).",
            "Designed and shipped an automated multi-database backup service (PostgreSQL, MySQL, Supabase) syncing to Google Drive via rclone, with pipeline failure handling.",
            "Reviewed pull requests from junior developers, enforcing coding standards and catching schema/data-integrity issues before merge to master.",
        ],
    },
    {
        role: "Backend Developer",
        company: "Orotron Software Pvt Ltd",
        period: "Oct 2022 – Jul 2025",
        accent: "var(--accent-2)",
        badge: "3 yrs",
        bullets: [
            "Built and shipped RESTful APIs and microservices across Node.js, Express.js, NestJS, and Hono.js for client projects spanning recruitment, legal case management, and ship-tracking domains.",
            "Designed MongoDB and Drizzle ORM schemas for relational data models, handling migrations and query optimization for production workloads.",
            "Integrated third-party services including payment gateways (Stripe), SendGrid/SMTP-based email notifications, and AWS S3 for file storage and asset handling.",
            "Deployed and maintained applications on AWS EC2/S3, setting up CI/CD pipelines for automated builds and releases.",
            "Built real-time features using Socket.IO for live event streams (e.g. lawyer-client interactions in a legal case management platform).",
            "Implemented JWT/OAuth-based authentication and role-based access control (RBAC) across client-facing applications.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-16 border-t border-[var(--border)]">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <span className="tag-badge">Timeline</span>
                    <h2 className="mt-3 text-2xl font-bold text-white">Work Experience</h2>
                </div>
            </div>

            <div className="mt-8 space-y-6">
                {jobs.map((job) => (
                    <div
                        key={job.company}
                        className="card-glow group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-black/40"
                    >
                        {/* Glow */}
                        <div
                            className="pointer-events-none absolute right-[-15%] top-[-25%] h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                            style={{ background: `color-mix(in srgb, ${job.accent} 25%, transparent)` }}
                        />

                        <div className="relative">
                            {/* Header */}
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="mt-1 h-3 w-3 flex-shrink-0 rounded-full shadow-md"
                                        style={{ background: job.accent, boxShadow: `0 0 10px 3px color-mix(in srgb, ${job.accent} 40%, transparent)` }}
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-bold text-white">{job.role}</h3>
                                            <span
                                                className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                                                style={{ color: job.accent, background: `color-mix(in srgb, ${job.accent} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${job.accent} 30%, transparent)` }}
                                            >
                                                {job.badge}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium" style={{ color: job.accent }}>{job.company}</p>
                                    </div>
                                </div>
                                <span className="ml-6 text-xs font-medium text-[var(--muted)] sm:ml-0 sm:text-right">{job.period}</span>
                            </div>

                            {/* Bullets */}
                            <ul className="mt-5 space-y-2.5 pl-6">
                                {job.bullets.map((b) => (
                                    <li key={b} className="relative text-sm text-[var(--muted)] leading-relaxed">
                                        <span
                                            className="absolute -left-4 top-2 h-1 w-1 rounded-full"
                                            style={{ background: job.accent }}
                                        />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                {/* Education & Achievements side-by-side */}
                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="card-glow rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-black/30">
                        <div className="flex items-center gap-2.5 mb-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)] text-base">🎓</span>
                            <h3 className="text-base font-bold text-white">Education</h3>
                        </div>
                        <p className="text-sm font-medium text-white">B.Tech – Electronics & Communication Engineering</p>
                        <p className="mt-1 text-xs text-[var(--muted)]">Narayana Engineering College, Nellore, Andhra Pradesh · 2022</p>
                    </div>

                    <div className="card-glow rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-black/30">
                        <div className="flex items-center gap-2.5 mb-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)] text-base">🏆</span>
                            <h3 className="text-base font-bold text-white">Achievements</h3>
                        </div>
                        <ul className="space-y-2 text-xs text-[var(--muted)]">
                            {[
                                "Top-Rated Backend Developer on GitHub",
                                "Optimized DB performance — up to 50% faster application speed",
                                "Awarded for open source contributions and innovative API design",
                            ].map((a) => (
                                <li key={a} className="flex items-start gap-2">
                                    <span className="mt-0.5 text-[var(--accent)]">✦</span>
                                    {a}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
