import { MapPin, Mail, Link2 } from "lucide-react";

const snapshot = [
    { label: "Stack", val: "Node.js · NestJS · TypeScript" },
    { label: "Cloud", val: "AWS · Utho VPS · CI/CD" },
    { label: "DB", val: "PostgreSQL · MySQL · MongoDB" },
    { label: "Focus", val: "Monorepos · Security · Backup" },
];

const stats = [
    { val: "3+", label: "Yrs Exp" },
    { val: "40%", label: "API Gain" },
    { val: "6+", label: "Projects" },
    { val: "2", label: "Companies" },
];

export default function Hero() {
    return (
        <section
            id="top"
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 py-8 sm:py-12 bg-white"
        >
            {/* ── Left ─────────────────── */}
            <div className="flex-1 w-full flex flex-col gap-4 min-w-0">

                {/* Headline */}
                <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1.5">
                        Backend Developer
                    </p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 leading-tight">
                        Sriman Narayana<br />Yendluri
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        Node.js · NestJS · TypeScript · AWS · CI/CD
                    </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed border-l-2 sm:border-l-[3px] border-blue-700 pl-3 max-w-xl">
                    3+ years designing scalable APIs, optimising databases, and deploying secure microservices on AWS and Utho VPS using NX monorepo architecture.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <a
                        href="mailto:sriman793@gmail.com"
                        id="hero-contact-btn"
                        className="inline-flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 text-xs font-semibold transition-colors"
                    >
                        <Mail size={13} /> Contact Me
                    </a>
                    <a
                        href="https://linkedin.com/in/sriman-narayana-yendluri-14b34022a"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="hero-linkedin-btn"
                        className="inline-flex items-center justify-center gap-1.5 border border-gray-200 hover:border-gray-300 bg-white text-gray-700 rounded-md px-4 py-2 text-xs font-medium transition-colors"
                    >
                        <Link2 size={13} /> LinkedIn
                    </a>
                    <span className="flex items-center gap-1 text-xs text-gray-400 w-full sm:w-auto mt-1 sm:mt-0">
                        <MapPin size={12} /> India · +91 74168 99743
                    </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 mt-2">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <p className="text-base sm:text-lg font-bold text-gray-900">{s.val}</p>
                            <p className="text-[10px] uppercase tracking-wider text-gray-400">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Right: Snapshot card ─────── */}
            <div className="w-full lg:w-[300px] flex-shrink-0">
                <div className="border border-gray-200 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-gray-900">Backend Snapshot</p>
                        <span className="inline-flex items-center gap-1 border border-green-200 bg-green-50 rounded-full px-2 py-0.5 text-[10px] font-medium text-green-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            Available
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                        {snapshot.map((item) => (
                            <div key={item.label} className="border border-gray-200 rounded-md bg-gray-50 p-2">
                                <p className="text-[9px] uppercase tracking-wider text-gray-400">{item.label}</p>
                                <p className="text-[10px] font-semibold text-gray-900 mt-1 leading-snug">{item.val}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {["NestJS", "NX Monorepo", "TypeORM", "GitHub Actions", "AWS EC2", "rclone"].map((t) => (
                            <span
                                key={t}
                                className="border border-blue-200 bg-blue-50 rounded px-2 py-0.5 text-[10px] font-medium text-blue-800"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
