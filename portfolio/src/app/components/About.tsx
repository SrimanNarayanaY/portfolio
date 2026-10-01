import { Settings, Cloud, Shield, Zap, Users } from "lucide-react";

const stats = [
    { label: "Experience", value: "3+ years" },
    { label: "API Performance", value: "Up to 40% faster" },
    { label: "Infrastructure", value: "AWS · Utho · CI/CD" },
];

const highlights = [
    { Icon: Settings, title: "API & Database Specialist", desc: "Scalable REST APIs with optimised DB schemas and query tuning." },
    { Icon: Cloud, title: "Cloud-Native & DevOps", desc: "AWS S3/EC2, Utho VPS, GitHub Actions CI/CD, rclone backup." },
    { Icon: Shield, title: "Security-Focused", desc: "JWT, OAuth, RBAC, and encryption in all production apps." },
    { Icon: Zap, title: "Payment & Real-Time", desc: "Stripe, Socket.IO live events, SendGrid/SMTP notifications." },
    { Icon: Users, title: "Agile Collaborator", desc: "PR reviews, Bitbucket branch protection, Scrum delivery." },
];

export default function About() {
    return (
        <section id="about" className="py-8 sm:py-10 border-t border-gray-200 bg-white">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">

                {/* Left */}
                <div className="w-full md:w-[240px] flex-shrink-0">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-100">
                        About
                    </span>
                    <h2 className="mt-2 text-lg font-bold text-gray-900 leading-snug">
                        Backend systems built to scale.
                    </h2>

                    <div className="mt-3 flex flex-col gap-1.5">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="flex justify-between items-center border border-gray-200 rounded-md bg-white px-3 py-2"
                            >
                                <p className="text-[11px] text-gray-500">{item.label}</p>
                                <p className="text-[11px] font-semibold text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="flex-1 flex flex-col gap-3.5 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        Backend developer with 3+ years architecting RESTful APIs, microservices, and cloud-native infrastructure. Proficient in Node.js, NestJS (NX monorepos), Hono.js, and Django.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        Database expertise: PostgreSQL, MySQL, MongoDB, TypeORM, Drizzle ORM. Cloud: AWS S3/EC2, Utho VPS, Render, GitHub Actions CI/CD.
                    </p>

                    <div className="mt-1">
                        <h3 className="text-xs font-semibold text-gray-900 mb-2.5">Core Competencies</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {highlights.map(({ Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="border border-gray-200 rounded-lg bg-white p-3 hover:border-gray-300 transition-colors"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="flex items-center justify-center w-6 h-6 rounded bg-blue-50 border border-blue-200 text-blue-700 flex-shrink-0">
                                            <Icon size={12} strokeWidth={2} />
                                        </span>
                                        <h4 className="text-[11px] font-semibold text-gray-900 leading-tight">{title}</h4>
                                    </div>
                                    <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
