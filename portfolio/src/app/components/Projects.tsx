export default function Projects() {
    return (
        <section id="projects" className="py-10 border-t border-slate-800/60">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Projects</h2>

            <div className="grid gap-5 md:grid-cols-2">

                {/* Lab Squire */}
                <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-cyan-500/70 transition">
                    <h3 className="text-base font-semibold text-slate-100 flex items-center justify-between">
                        Lab Squire
                        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cyan-300">
                            Laboratory Management
                        </span>
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                        Laboratory Management System for high-volume specimen tracking...
                    </p>

                    <p className="mt-3 text-xs text-slate-400">
                        Tech Stack: Node.js, Express.js, NestJS, PostgreSQL, MongoDB, AWS
                    </p>
                </article>

                {/* Yoda Report Portal */}
                <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-cyan-500/70 transition">
                    <h3 className="text-base font-semibold text-slate-100 flex items-center justify-between">
                        Yoda Report Portal
                        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cyan-300">
                            Reports & Healthcare
                        </span>
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                        Patient report system with secure APIs and PDF generation...
                    </p>

                    <p className="mt-3 text-xs text-slate-400">
                        Tech Stack: Node.js, NestJS, PostgreSQL, MongoDB, AWS
                    </p>
                </article>

                {/* WorkPlanner */}
                <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-cyan-500/70 transition">
                    <h3 className="text-base font-semibold text-slate-100 flex items-center justify-between">
                        WorkPlanner
                        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cyan-300">
                            Work Management
                        </span>
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                        Organization-level task management with role-based access...
                    </p>

                    <p className="mt-3 text-xs text-slate-400">
                        Tech Stack: Django, PostgreSQL, Slack API
                    </p>
                </article>

                {/* NyayaTech */}
                <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-cyan-500/70 transition">
                    <h3 className="text-base font-semibold text-slate-100 flex items-center justify-between">
                        NyayaTech
                        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cyan-300">
                            Legal Case Management
                        </span>
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                        Legal case management system built with Hono.js & Drizzle ORM...
                    </p>

                    <p className="mt-3 text-xs text-slate-400">
                        Tech Stack: Hono.js, Drizzle ORM, PostgreSQL, Socket.IO
                    </p>
                </article>

            </div>

            {/* OSS */}
            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-base font-semibold text-slate-100">Open Source & Contributions</h3>

                <p className="mt-2 text-sm text-slate-300">
                    Active contributor in backend performance, DB optimization & advanced API design...
                </p>
            </div>
        </section>
    );
}
