export default function Contact() {
    return (
        <section id="contact" className="py-12 border-t border-white/10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-white">Let’s build something resilient.</h2>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                        If you need a backend engineer to design scalable APIs, optimize database performance,
                        or deliver secure microservices, let’s talk.
                    </p>
                </div>
                <a
                    href="mailto:sriman793@gmail.com"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:translate-y-[-1px]"
                >
                    Schedule a call
                </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-4">
                    <p className="text-xs uppercase tracking-widest text-[var(--muted)]">Email</p>
                    <a href="mailto:sriman793@gmail.com" className="text-sm font-medium text-white hover:text-[var(--accent)]">
                        sriman793@gmail.com
                    </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-4">
                    <p className="text-xs uppercase tracking-widest text-[var(--muted)]">LinkedIn</p>
                    <a
                        href="https://linkedin.com/in/sriman-narayana-yendluri-14b34022a"
                        target="_blank"
                        className="text-sm font-medium text-white hover:text-[var(--accent-2)]"
                    >
                        linkedin.com/in/sriman-narayana-yendluri-14b34022a
                    </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-4">
                    <p className="text-xs uppercase tracking-widest text-[var(--muted)]">Phone</p>
                    <p className="text-sm font-medium text-white">+91 74168 99753</p>
                </div>
            </div>
        </section>
    );
}
