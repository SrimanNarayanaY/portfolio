import { Code, Layers, Database, Cloud, Server, Wrench, BookOpen, Video } from "lucide-react";

const skillBlocks = [
    { Icon: Code,     title: "Languages",             items: ["JavaScript", "TypeScript", "Python"] },
    { Icon: Layers,   title: "Frameworks & Full-Stack", items: ["Node.js", "Express.js", "NestJS (NX Monorepo)", "Next.js 16", "React 19", "Hono.js"] },
    { Icon: Video,    title: "Meeting & Media Automation", items: ["Google Meet Integration", "Automated Meeting Recording", "WebRTC / Media Stream", "Headless Bot Automation"] },
    { Icon: Database, title: "Databases & Storage",   items: ["PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Drizzle ORM", "Supabase", "Cloudinary"] },
    { Icon: Cloud,    title: "Cloud & DevOps",         items: ["AWS S3", "AWS EC2", "GitHub Actions CI/CD", "Automated Pipelines"] },
    { Icon: Server,   title: "Server & Infra",         items: ["Utho Cloud VPS", "Render", "SSH / Hardening", "Backup (rclone)"] },
    { Icon: Wrench,   title: "Tools & Integrations",   items: ["Google Workspace API", "Stripe", "Postman", "Git / GitHub", "Bitbucket"] },
    { Icon: BookOpen, title: "Architecture & Systems", items: ["REST API Design", "Microservices", "Session Recording", "JWT · OAuth · RBAC", "Socket.IO Realtime"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-8 sm:py-10 border-t border-gray-200 bg-white">
            <div className="mb-4">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-100">
                    Tooling
                </span>
                <h2 className="mt-1.5 text-lg font-bold text-gray-900">Skills &amp; Stack</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skillBlocks.map(({ Icon, title, items }) => (
                    <div
                        key={title}
                        className="border border-gray-200 rounded-lg bg-white p-3.5 transition-all duration-200 hover:border-blue-300 hover:shadow-md"
                    >
                        {/* Icon + title */}
                        <div className="flex items-center gap-2 mb-2.5">
                            <span className="flex items-center justify-center w-6 h-6 rounded bg-blue-50 border border-blue-200 text-blue-700 flex-shrink-0">
                                <Icon size={12} strokeWidth={2} />
                            </span>
                            <h3 className="text-xs font-semibold text-gray-900">{title}</h3>
                        </div>

                        {/* Highlighted pills */}
                        <div className="flex flex-wrap gap-1.5">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="text-[10px] font-medium text-blue-800 bg-blue-50 border border-blue-200 rounded px-2 py-0.5"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
