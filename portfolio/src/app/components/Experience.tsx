export default function Experience() {
    return (
        <section id="experience" className="py-10 border-t border-slate-800/60">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Experience</h2>

            <div className="space-y-6">

                {/* Orotron */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                        <div>
                            <h3 className="text-base font-semibold text-slate-100">Backend Developer</h3>
                            <p className="text-sm text-cyan-300">Orotron Software Pvt Ltd</p>
                        </div>
                        <p className="text-xs text-slate-400">Aug 2022 – Jul 2025</p>
                    </div>

                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        <li>• Engineered high-performance RESTful APIs & microservices using Node.js, NestJS, Express.js & Hono.js.</li>
                        <li>• Designed PostgreSQL, MongoDB, Drizzle ORM schemas; improved DB efficiency & migrations.</li>
                        <li>• Deployed applications on AWS EC2/S3 with CI/CD pipelines.</li>
                        <li>• Implemented JWT/OAuth security, payment gateways & automated emails.</li>
                        <li>• Built real-time systems using Socket.IO.</li>
                        <li>• Achieved ~40% performance improvement with caching & optimizations.</li>
                    </ul>
                </div>

                {/* Education */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                    <h3 className="text-base font-semibold text-slate-100">Education</h3>
                    <p className="mt-1 text-sm text-slate-300">
                        Bachelor of Technology – Electronics & Communication Engineering
                    </p>
                    <p className="text-xs text-slate-400">
                        Narayana Engineering College, Nellore · 2022
                    </p>
                </div>

                {/* Achievements */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                    <h3 className="text-base font-semibold text-slate-100">Certifications & Achievements</h3>
                    <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        <li>• Top backend developer contributor on GitHub/open source.</li>
                        <li>• Improved DB performance up to 50% faster response time.</li>
                        <li>• Awarded for innovative API design & backend optimization.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
