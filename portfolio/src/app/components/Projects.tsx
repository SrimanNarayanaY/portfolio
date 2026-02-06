export default function Projects() {
    return (
        <section id="projects" className="py-12 border-t border-white/10">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-white">Selected Projects</h2>
                <span className="text-xs text-[var(--muted)]">Impact-driven builds</span>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
                {[
                    {
                        title: "Lab Squire",
                        tag: "Laboratory Management",
                        body: "Laboratory management system for high-volume specimen tracking and automated QA workflows.",
                        stack: "Node.js, Express.js, NestJS, PostgreSQL, MongoDB, AWS",
                    },
                    {
                        title: "Yoda Report Portal",
                        tag: "Reports & Healthcare",
                        body: "Patient report system with secure APIs, PDF generation, and audit-ready access controls.",
                        stack: "Node.js, NestJS, PostgreSQL, MongoDB, AWS",
                    },
                    {
                        title: "WorkPlanner",
                        tag: "Work Management",
                        body: "Organization-level task management with RBAC, sprint planning, and reporting dashboards.",
                        stack: "Django, PostgreSQL, Slack API",
                    },
                    {
                        title: "NyayaTech",
                        tag: "Legal Case Management",
                        body: "Legal case management system built with Hono.js and Drizzle ORM for rapid case workflows.",
                        stack: "Hono.js, Drizzle ORM, PostgreSQL, Socket.IO",
                    },
                ].map((project) => (
                    <article
                        key={project.title}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:border-white/20"
                    >
                        <div className="absolute right-[-30%] top-[-40%] h-40 w-40 rounded-full bg-[rgba(71,193,255,0.16)] blur-3xl"></div>
                        <h3 className="text-base font-semibold text-white flex items-center justify-between">
                            {project.title}
                            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[var(--accent-2)]">
                                {project.tag}
                            </span>
                        </h3>

                        <p className="mt-3 text-sm text-[var(--muted)]">{project.body}</p>

                        <p className="mt-4 text-xs text-[var(--muted)]">
                            Tech Stack: {project.stack}
                        </p>
                    </article>
                ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/30">
                <h3 className="text-base font-semibold text-white">Open Source & Contributions</h3>

                <p className="mt-2 text-sm text-[var(--muted)]">
                    Active contributor in backend performance, DB optimization, and advanced API design.
                </p>
            </div>
        </section>
    );
}
