export default function Hero() {
    return (
        <section
            id="top"
            className="flex flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between"
        >
            <div className="space-y-6 md:w-3/5">
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Open to Backend / Platform roles
                </p>

                <div>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Hi, I'm <span className="text-cyan-400">Sriman Narayana Yendluri</span>
                    </h1>
                    <p className="mt-2 text-lg text-slate-300">
                        Backend Developer · Node.js · NestJS · Django · AWS
                    </p>
                </div>

                <p className="max-w-xl text-sm sm:text-base text-slate-300">
                    Strategic Back-End Developer with 3+ years of experience building
                    scalable RESTful APIs...
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href="mailto:sriman793@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition"
                    >
                        Contact Me
                    </a>

                    <a
                        href="https://linkedin.com/in/sriman-narayana-yendluri-14b34022a"
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
                    >
                        LinkedIn
                    </a>

                    <span className="text-xs text-slate-400">
                        📍 India · 📞 +91 74168 99753
                    </span>
                </div>
            </div>

            {/* Snapshot Card */}
            <div className="mt-6 md:mt-0 md:w-2/5">
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-cyan-500/10">
                    <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                        <span>Backend Snapshot</span>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
                            Available
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                            <p className="text-slate-400">Primary Stack</p>
                            <p className="font-semibold text-slate-100">
                                Node.js, NestJS, Express.js
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-400">Cloud & DevOps</p>
                            <p className="font-semibold text-slate-100">AWS S3/EC2, CI/CD</p>
                        </div>

                        <div>
                            <p className="text-slate-400">Databases</p>
                            <p className="font-semibold text-slate-100">
                                PostgreSQL, MySQL, MongoDB, Drizzle ORM
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-400">Focus Areas</p>
                            <p className="font-semibold text-slate-100">
                                Performance, Security, Scalability
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
