export default function Footer() {
    return (
        <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
            <p>
                &copy; {new Date().getFullYear()} Sriman Narayana Yendluri. Built with ❤️ for clean backend architecture.
            </p>
        </footer>
    );
}
