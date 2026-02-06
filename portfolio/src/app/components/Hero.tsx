export default function Hero() {
    return (
        <section
            id="top"
            className="flex flex-col gap-12 py-16 md:flex-row md:items-center md:justify-between"
        >
            <div className="space-y-6 md:w-3/5">
                <p className="fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                    Available for backend + platform roles
                </p>

                <div className="fade-up fade-up-delay-1">
                    <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Building reliable
                        <span className="block text-[var(--accent)]">backend platforms</span>
                        for modern products.
                    </h1>
                    <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
                        Sriman Narayana Yendluri · Backend Developer · Node.js · NestJS · Django · AWS
                    </p>
                </div>

                <p className="fade-up fade-up-delay-2 max-w-xl text-sm text-[var(--muted)] sm:text-base">
                    Strategic backend engineer with 3+ years of experience designing APIs, optimizing
                    databases, and shipping cloud-native services that scale under real production loads.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href="mailto:sriman793@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:translate-y-[-1px]"
                    >
                        Start a project
                    </a>

                    <a
                        href="https://linkedin.com/in/sriman-narayana-yendluri-14b34022a"
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
                    >
                        LinkedIn
                    </a>

                    <span className="text-xs text-[var(--muted)]">
                        India · +91 74168 99753
                    </span>
                </div>
            </div>

            <div className="mt-6 md:mt-0 md:w-2/5">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface)] p-6 shadow-2xl shadow-[var(--shadow)]">
                    <div className="absolute right-[-20%] top-[-30%] h-40 w-40 rounded-full bg-[rgba(245,165,36,0.2)] blur-3xl"></div>
                    <div className="mb-4 flex items-center justify-between text-xs text-[var(--muted)]">
                        <span>Backend Snapshot</span>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-200">
                            Available
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                            <p className="text-[var(--muted)]">Primary Stack</p>
                            <p className="font-semibold text-white">
                                Node.js, NestJS, Express.js
                            </p>
                        </div>

                        <div>
                            <p className="text-[var(--muted)]">Cloud & DevOps</p>
                            <p className="font-semibold text-white">AWS S3/EC2, CI/CD</p>
                        </div>

                        <div>
                            <p className="text-[var(--muted)]">Databases</p>
                            <p className="font-semibold text-white">
                                PostgreSQL, MySQL, MongoDB, Drizzle ORM
                            </p>
                        </div>

                        <div>
                            <p className="text-[var(--muted)]">Focus Areas</p>
                            <p className="font-semibold text-white">
                                Performance, Security, Scalability
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
