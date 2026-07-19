"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? "border-b border-[var(--border)] bg-[rgba(8,11,16,0.85)] shadow-xl shadow-black/30 backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <a href="#top" id="nav-logo" className="group flex items-center gap-3">
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)] shadow-lg shadow-black/40 transition-all group-hover:scale-105 group-hover:shadow-[0_0_20px_4px_rgba(245,165,36,0.3)]">
                        <span className="text-xs font-bold font-mono">{"</>"}</span>
                    </span>
                    <span className="text-sm font-semibold text-white tracking-tight">Sriman</span>
                </a>

                {/* Links */}
                <div className="hidden items-center gap-1 md:flex">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="group relative px-3.5 py-2 text-sm text-[var(--muted)] transition-colors hover:text-white"
                        >
                            {item}
                            <span className="absolute bottom-1 left-3.5 right-3.5 h-px scale-x-0 rounded-full bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="mailto:sriman793@gmail.com"
                    id="nav-hire-btn"
                    className="relative overflow-hidden rounded-full bg-[var(--accent)] px-5 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-lg shadow-[rgba(245,165,36,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_24px_8px_rgba(245,165,36,0.4)]"
                >
                    <span className="relative z-10">Hire Me</span>
                </a>
            </nav>
        </header>
    );
}
