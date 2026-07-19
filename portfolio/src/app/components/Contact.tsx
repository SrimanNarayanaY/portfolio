export default function Contact() {
    return (
        <section id="contact" className="py-16 border-t border-[var(--border)]">
            <div className="gradient-border relative overflow-hidden rounded-3xl bg-[var(--surface)] p-8 shadow-2xl shadow-black/50">
                {/* Blob */}
                <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-64 w-64 rounded-full bg-[rgba(245,165,36,0.12)] blur-3xl" />
                <div className="pointer-events-none absolute bottom-[-15%] left-[-5%] h-48 w-48 rounded-full bg-[rgba(71,193,255,0.1)] blur-3xl" />

                <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="tag-badge">Contact</span>
                        <h2 className="mt-3 text-2xl font-bold text-white leading-snug">
                            Let's build something<br />
                            <span className="text-[var(--accent)]">resilient.</span>
                        </h2>
                        <p className="mt-3 max-w-sm text-sm text-[var(--muted)] leading-relaxed">
                            If you need a backend engineer to design scalable APIs, optimize database performance, or deliver secure microservices — let's talk.
                        </p>
                    </div>
                    <a
                        href="mailto:sriman793@gmail.com"
                        id="contact-schedule-btn"
                        className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black shadow-lg shadow-[rgba(245,165,36,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_28px_10px_rgba(245,165,36,0.45)]"
                    >
                        Schedule a call →
                    </a>
                </div>

                {/* Contact details */}
                <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                        {
                            label: "Email",
                            value: "sriman793@gmail.com",
                            href: "mailto:sriman793@gmail.com",
                            icon: "✉️",
                        },
                        {
                            label: "LinkedIn",
                            value: "sriman-narayana-yendluri",
                            href: "https://linkedin.com/in/sriman-narayana-yendluri-14b34022a",
                            icon: "🔗",
                        },
                        {
                            label: "Phone",
                            value: "+91 74168 99743",
                            href: "tel:+917416899743",
                            icon: "📞",
                        },
                    ].map((c) => (
                        <a
                            key={c.label}
                            href={c.href}
                            target={c.label === "LinkedIn" ? "_blank" : undefined}
                            className="card-glow group flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 transition-all hover:border-[var(--accent)]/30"
                        >
                            <span className="mt-0.5 text-lg">{c.icon}</span>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-[var(--muted)]">{c.label}</p>
                                <p className="mt-0.5 text-sm font-medium text-white group-hover:text-[var(--accent)] transition-colors">
                                    {c.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
