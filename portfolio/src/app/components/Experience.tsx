import { Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";

const jobs = [
    {
        role: "Backend Developer",
        company: "Digixito Media Private Limited",
        period: "Sep 2025 – Present",
        badge: "Current",
        bullets: [
            "Architected NX monorepo backend services (NestJS, TypeScript, TypeORM) with shared code reuse across multiple production apps.",
            "Enforced Git branch protection and PR review workflows on Bitbucket Cloud.",
            "Provisioned AWS EC2 and Utho Cloud VPS — SSH access, server hardening, MySQL/PostgreSQL configuration.",
            "Built GitHub Actions CI/CD pipelines deploying to Utho VPS across five live apps.",
            "Designed automated multi-database backup service (PG, MySQL, Supabase) synced to Google Drive via rclone.",
        ],
    },
    {
        role: "Backend Developer",
        company: "Orotron Software Pvt Ltd",
        period: "Oct 2022 – Jul 2025",
        badge: "3 yrs",
        bullets: [
            "Built RESTful APIs and microservices in Node.js, Express.js, NestJS, and Hono.js for recruitment, legal, and ship-tracking domains.",
            "Designed MongoDB and Drizzle ORM schemas; handled migrations and query optimisation for production workloads.",
            "Integrated Stripe payments, SendGrid/SMTP email, and AWS S3 file storage.",
            "Implemented JWT/OAuth authentication and RBAC; built Socket.IO real-time features.",
        ],
    },
];

const achievements = [
    "Top-Rated Backend Developer on GitHub",
    "Optimised database performance — up to 50% faster response",
    "Recognised for open source contributions and API design",
];

export default function Experience() {
    return (
        <section id="experience" className="py-8 sm:py-10 border-t border-gray-200 bg-white">
            <div className="mb-4">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-100">
                    Timeline
                </span>
                <h2 className="mt-1.5 text-lg font-bold text-gray-900">Work Experience</h2>
            </div>

            <div className="flex flex-col gap-3">
                {jobs.map((job) => (
                    <div
                        key={job.company}
                        className="border border-gray-200 rounded-lg bg-white p-4 sm:p-5"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-3">
                            <div className="flex items-start gap-2.5">
                                <Briefcase size={14} className="text-blue-700 mt-1 flex-shrink-0" />
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-xs sm:text-sm font-semibold text-gray-900">{job.role}</h3>
                                        <span className="text-[9px] font-semibold uppercase tracking-wider border border-blue-200 bg-blue-50 text-blue-800 rounded px-1.5 py-0.5">
                                            {job.badge}
                                        </span>
                                    </div>
                                    <p className="text-xs font-medium text-blue-700 mt-0.5">{job.company}</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400 pl-6 sm:pl-0">{job.period}</span>
                        </div>

                        <ul className="flex flex-col gap-2 mt-2">
                            {job.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-2">
                                    <CheckCircle2 size={12} className="text-gray-400 mt-1 flex-shrink-0" />
                                    <span className="text-xs text-gray-700 leading-relaxed">{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                    <div className="border border-gray-200 rounded-lg bg-white p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <GraduationCap size={15} className="text-blue-700 flex-shrink-0" />
                            <h3 className="text-xs font-semibold text-gray-900">Education</h3>
                        </div>
                        <p className="text-xs font-medium text-gray-900">B.Tech – Electronics &amp; Communication Engineering</p>
                        <p className="text-[11px] text-gray-500 mt-1">Narayana Engineering College, Nellore · 2022</p>
                    </div>

                    <div className="border border-gray-200 rounded-lg bg-white p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Award size={15} className="text-blue-700 flex-shrink-0" />
                            <h3 className="text-xs font-semibold text-gray-900">Achievements</h3>
                        </div>
                        <ul className="flex flex-col gap-1.5">
                            {achievements.map((a) => (
                                <li key={a} className="flex items-start gap-2">
                                    <CheckCircle2 size={12} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-[11px] text-gray-700">{a}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
