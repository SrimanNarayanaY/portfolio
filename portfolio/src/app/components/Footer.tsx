export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-8 text-center text-xs text-[var(--muted)]">
            <p>
                &copy; {new Date().getFullYear()} Sriman Narayana Yendluri. Built for clean backend architecture.
            </p>
        </footer>
    );
}
