export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
            <nav className="mx-auto flex items-center justify-between px-4 py-3">
                <a href="#top" className="text-lg font-semibold tracking-tight">
                    <span className="text-cyan-400">&lt;/&gt;</span> Sriman
                </a>

                <div className="flex gap-4 text-sm sm:text-base">
                    <a href="#about" className="hover:text-cyan-400 transition">
                        About
                    </a>
                    <a href="#skills" className="hover:text-cyan-400 transition">
                        Skills
                    </a>
                    <a href="#experience" className="hover:text-cyan-400 transition">
                        Experience
                    </a>
                    <a href="#projects" className="hover:text-cyan-400 transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-cyan-400 transition">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
}
