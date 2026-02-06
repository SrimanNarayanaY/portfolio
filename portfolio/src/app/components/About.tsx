export default function About() {
    return (
        <section id="about" className="py-12 border-t border-white/10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="md:w-1/3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                        About
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Backend systems that stay fast.</h2>
                </div>

                <div className="md:w-2/3">
                    <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                        I specialize in building <span className="text-[var(--accent-2)]">robust backend systems</span> with clean architecture,
                        strong security, and efficient data flows. From designing database schemas and optimizing queries to deploying
                        cloud-native services on AWS, I enjoy solving complex engineering problems and making systems faster and more reliable.
                        I’ve worked with authentication (JWT, OAuth, RBAC), payment gateway integrations, automated email workflows,
                        and real-time event streams using Socket.IO. I actively contribute to open source and follow Agile practices,
                        code reviews, and best engineering standards.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {[
                            { label: "Experience", value: "3+ years" },
                            { label: "API Performance", value: "Up to 40% faster" },
                            { label: "Cloud", value: "AWS + CI/CD" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-white/10 bg-[var(--surface)] px-4 py-3"
                            >
                                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                                    {item.label}
                                </p>
                                <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
