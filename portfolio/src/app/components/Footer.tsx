export default function Footer() {
    return (
        <footer className="border-t border-gray-200 py-6 sm:py-8 bg-white mt-4">
            <div className="flex flex-col items-center gap-1.5 text-center px-4">
                <span className="text-sm font-bold text-gray-900 tracking-tight">
                    Sriman Narayana Yendluri
                </span>
                <p className="text-xs text-gray-500">
                    Backend Developer · Node.js · NestJS · AWS · CI/CD
                </p>
                <p className="text-[11px] text-gray-400">
                    © {new Date().getFullYear()} Sriman Narayana Yendluri
                </p>
            </div>
        </footer>
    );
}
