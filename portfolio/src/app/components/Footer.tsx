export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] py-10">
            <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--surface)] text-[var(--accent)] text-xs font-mono font-bold shadow shadow-black/40">
                        {"</>"}
                    </span>
                    <span className="text-sm font-semibold text-white">Sriman Narayana Yendluri</span>
                </div>
                <p className="text-xs text-[var(--muted)]">
                    Backend Developer · Node.js · NestJS · AWS · CI/CD
                </p>
                <p className="text-xs text-[var(--muted-2)]">
                    © {new Date().getFullYear()} Sriman Narayana Yendluri. Built for clean backend architecture.
                </p>
            </div>
        </footer>
    );
}
