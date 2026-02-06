export default function Experience() {
    return (
        <section id="experience" className="py-12 border-t border-white/10">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-white">Experience</h2>
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Timeline</span>
            </div>

            <div className="mt-6 space-y-6">

                {/* Orotron */}
                <div className="rounded-3xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/40">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Backend Developer</h3>
                            <p className="text-sm text-[var(--accent-2)]">Orotron Software Pvt Ltd</p>
                        </div>
                        <p className="text-xs text-[var(--muted)]">Aug 2022 – Jul 2025</p>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                        <li>• Engineered high-performance RESTful APIs & microservices using Node.js, NestJS, Express.js & Hono.js.</li>
                        <li>• Designed PostgreSQL, MongoDB, Drizzle ORM schemas; improved DB efficiency & migrations.</li>
                        <li>• Deployed applications on AWS EC2/S3 with CI/CD pipelines.</li>
                        <li>• Implemented JWT/OAuth security, payment gateways & automated emails.</li>
                        <li>• Built real-time systems using Socket.IO.</li>
                        <li>• Achieved ~40% performance improvement with caching & optimizations.</li>
                    </ul>
                </div>

                {/* Education */}
                <div className="rounded-3xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/30">
                    <h3 className="text-base font-semibold text-white">Education</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                        Bachelor of Technology – Electronics & Communication Engineering
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                        Narayana Engineering College, Nellore · 2022
                    </p>
                </div>

                {/* Achievements */}
                <div className="rounded-3xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/30">
                    <h3 className="text-base font-semibold text-white">Certifications & Achievements</h3>
                    <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                        <li>• Top backend developer contributor on GitHub/open source.</li>
                        <li>• Improved DB performance up to 50% faster response time.</li>
                        <li>• Awarded for innovative API design & backend optimization.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
