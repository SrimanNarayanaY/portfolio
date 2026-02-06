export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[rgba(11,13,15,0.7)] backdrop-blur">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#top" className="flex items-center gap-3 text-base font-semibold text-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)] shadow-lg shadow-black/40">
                        {"</>"}
                    </span>
                    Sriman
                </a>

                <div className="hidden items-center gap-2 text-sm text-[var(--muted)] md:flex">
                    {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a
                    href="mailto:sriman793@gmail.com"
                    className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black shadow-lg shadow-black/40 transition hover:translate-y-[-1px]"
                >
                    Hire Me
                </a>
            </nav>
        </header>
    );
}
