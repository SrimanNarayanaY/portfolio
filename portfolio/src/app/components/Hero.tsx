export default function Hero() {
    return (
        <section
            id="top"
            className="relative flex min-h-[90vh] flex-col justify-center gap-12 py-20 md:flex-row md:items-center md:justify-between"
        >
            {/* Left: Text */}
            <div className="space-y-7 md:w-3/5">

                {/* Badge */}
                <div className="fade-up inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/8 px-4 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--green)]" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--accent)]">
                        Open to Backend & Platform Roles
                    </span>
                </div>

                {/* Headline */}
                <div className="fade-up fade-up-delay-1">
                    <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                        Building{" "}
                        <span className="shimmer-text">reliable</span>
                        <br />
                        <span className="text-white">backend platforms</span>
                        <br />
                        <span className="text-[var(--muted)] text-3xl sm:text-4xl lg:text-5xl font-semibold">
                            for modern products.
                        </span>
                    </h1>
                    <p className="mt-5 text-sm text-[var(--muted)] sm:text-base">
                        Sriman Narayana Yendluri
                        <span className="mx-2 text-[var(--accent)]">·</span>
                        Backend Developer
                        <span className="mx-2 text-[var(--accent)]">·</span>
                        Node.js · NestJS · TypeScript · AWS · CI/CD
                    </p>
                </div>

                {/* Summary */}
                <p className="fade-up fade-up-delay-2 max-w-xl text-sm text-[var(--muted)] sm:text-base leading-relaxed accent-line">
                    Strategic backend engineer with <strong className="text-white">3+ years</strong> of experience designing scalable APIs, optimizing databases, managing NX monorepos, and deploying secure microservices to AWS and Utho VPS.
                </p>

                {/* CTAs */}
                <div className="fade-up fade-up-delay-3 flex flex-wrap items-center gap-3">
                    <a
                        href="mailto:sriman793@gmail.com"
                        id="hero-start-project-btn"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-bold text-black shadow-lg shadow-[rgba(245,165,36,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_28px_8px_rgba(245,165,36,0.45)]"
                    >
                        Start a Project →
                    </a>
                    <a
                        href="https://linkedin.com/in/sriman-narayana-yendluri-14b34022a"
                        target="_blank"
                        id="hero-linkedin-btn"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hover)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-[var(--accent-2)]/50 hover:bg-[var(--surface-2)] hover:text-white"
                    >
                        LinkedIn ↗
                    </a>
                    <span className="text-xs text-[var(--muted)]">India · +91 74168 99743</span>
                </div>

                {/* Stats row */}
                <div className="fade-up fade-up-delay-3 flex flex-wrap gap-5 pt-2">
                    {[
                        { val: "3+", label: "Years Experience" },
                        { val: "40%", label: "API Perf Gain" },
                        { val: "6+", label: "Live Projects" },
                        { val: "2", label: "Companies" },
                    ].map((s) => (
                        <div key={s.label}>
                            <p className="text-xl font-bold text-white">{s.val}</p>
                            <p className="text-[11px] uppercase tracking-wider text-[var(--muted)]">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Snapshot card */}
            <div className="mt-6 md:mt-0 md:w-2/5">
                <div className="gradient-border relative overflow-hidden rounded-3xl bg-[var(--surface)] p-6 shadow-2xl shadow-black/60">
                    {/* Glow blobs inside card */}
                    <div className="pointer-events-none absolute right-[-20%] top-[-30%] h-48 w-48 rounded-full bg-[var(--accent)]/15 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-36 w-36 rounded-full bg-[var(--accent-2)]/12 blur-3xl" />

                    <div className="relative">
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Backend Snapshot</p>
                                <p className="mt-0.5 text-base font-bold text-white">Sriman Narayana</p>
                            </div>
                            <span className="flex items-center gap-1.5 rounded-full bg-[var(--green)]/10 px-3 py-1 text-xs font-semibold text-[var(--green)] border border-[var(--green)]/20">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                                Available
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: "Primary Stack", val: "Node.js · NestJS · TypeScript" },
                                { label: "Cloud & Infra", val: "AWS · Utho VPS · CI/CD" },
                                { label: "Databases", val: "PG · MySQL · Mongo · TypeORM" },
                                { label: "Speciality", val: "Monorepos · Backup · Security" },
                            ].map((item) => (
                                <div key={item.label} className="rounded-xl bg-[var(--surface-2)] p-3 border border-[var(--border)]">
                                    <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">{item.label}</p>
                                    <p className="mt-1 text-xs font-semibold text-white leading-snug">{item.val}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tech pills */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {["NestJS", "NX Monorepo", "TypeORM", "GitHub Actions", "AWS EC2", "rclone"].map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full bg-[var(--surface-3)] border border-[var(--border)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--muted)]"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
