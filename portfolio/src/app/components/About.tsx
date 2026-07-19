export default function About() {
    return (
        <section id="about" className="py-16 border-t border-[var(--border)]">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

                {/* Left label */}
                <div className="md:w-1/3">
                    <span className="tag-badge">About</span>
                    <h2 className="mt-4 text-2xl font-bold text-white leading-snug">
                        Backend systems<br />
                        <span className="text-[var(--accent)]">that stay fast.</span>
                    </h2>

                    {/* Quick stats */}
                    <div className="mt-6 space-y-3">
                        {[
                            { label: "Experience", value: "3+ years", color: "var(--accent)" },
                            { label: "API Perf Gain", value: "Up to 40% faster", color: "var(--accent-2)" },
                            { label: "Infra", value: "AWS · Utho · CI/CD", color: "var(--accent-3)" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition-all hover:border-[var(--border-hover)]"
                            >
                                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{item.label}</p>
                                <p className="text-sm font-bold" style={{ color: item.color }}>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right content */}
                <div className="md:w-2/3 space-y-6">
                    <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                        I am a{" "}
                        <span className="font-semibold text-white">Strategic Backend Developer</span>{" "}
                        with 3+ years of experience in architecting and deploying scalable RESTful APIs, microservices, and cloud-native backend infrastructures. I specialize in building{" "}
                        <span className="text-[var(--accent-2)]">robust backend systems</span>{" "}
                        using Node.js, Express.js, NestJS (NX monorepos), Hono.js, and Django.
                    </p>
                    <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                        I possess proven expertise in database engineering (PostgreSQL, MySQL, MongoDB, TypeORM, Drizzle ORM) and cloud infrastructure (AWS S3/EC2, Utho Cloud VPS, Render, GitHub Actions CI/CD), focusing on server configuration/hardening, backup automation, and application security.
                    </p>

                    {/* Why Hire Me */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">Why Hire Me?</h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                { icon: "⚙️", title: "API & Database Specialist", desc: "Proven expertise in scalable backend architecture and robust DB schema design." },
                                { icon: "☁️", title: "Cloud-Native & DevOps", desc: "AWS S3/EC2, Utho VPS, GitHub Actions CI/CD, rclone backup automation." },
                                { icon: "🔒", title: "Security-Focused", desc: "Detailed implementation of JWT, OAuth, RBAC, and encryption across production apps." },
                                { icon: "⚡", title: "Payment & Real-Time Integration", desc: "Stripe payments, Socket.IO live events, SendGrid/SMTP notifications." },
                                { icon: "🤝", title: "Proactive Collaborator", desc: "Agile/Scrum, PR reviews, Bitbucket branch protection, cross-team communication." },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="card-glow rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)] text-base">{item.icon}</span>
                                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                                    </div>
                                    <p className="mt-2.5 text-xs text-[var(--muted)] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
