import { Code, Layers, Database, Cloud, ShieldCheck, Sparkles, Wrench, Layout } from "lucide-react";

const skillBlocks = [
    {
        Icon: Code,
        title: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    },
    {
        Icon: Layers,
        title: "Backend & Architecture",
        items: ["Node.js", "NestJS", "Express.js", "Hono.js", "FastAPI", "Django", "REST API Design", "Microservices", "NX Monorepo", "WebSockets (Socket.IO)"],
    },
    {
        Icon: Layout,
        title: "Frontend",
        items: ["Next.js", "React", "Tailwind CSS"],
    },
    {
        Icon: Database,
        title: "Databases & ORM",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "pgvector", "TypeORM", "Drizzle ORM", "Schema Design", "Query Optimization", "Indexing"],
    },
    {
        Icon: Cloud,
        title: "Cloud & DevOps",
        items: ["AWS (EC2, S3)", "Azure", "Docker", "GitHub Actions CI/CD", "Nginx", "PM2", "Vercel", "Linux / SSH", "VPS Provisioning (Utho)"],
    },
    {
        Icon: ShieldCheck,
        title: "Integrations & Security",
        items: ["Stripe", "Razorpay", "JWT", "OAuth", "RBAC", "SendGrid", "SMTP", "BullMQ (Queues)", "Webhooks"],
    },
    {
        Icon: Sparkles,
        title: "AI Integration & Generative AI",
        items: ["RAG (pgvector)", "Generative AI (FLUX, SD 3.5, LTX)", "Hugging Face (Spaces, Inference API)", "Prompt Engineering"],
    },
    {
        Icon: Wrench,
        title: "Tools & Engineering Practices",
        items: ["Git", "GitHub", "Bitbucket", "Postman (API Testing)", "Rclone Backup", "Code Review (PRs)", "Agile / Scrum"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-8 sm:py-10 border-t border-gray-200 bg-white">
            <div className="mb-4">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-100">
                    Tooling &amp; Stack
                </span>
                <h2 className="mt-1.5 text-lg font-bold text-gray-900">Technical Skills &amp; Stack</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {skillBlocks.map(({ Icon, title, items }) => (
                    <div
                        key={title}
                        className="border border-gray-200 rounded-lg bg-white p-3.5 transition-all duration-200 hover:border-blue-300 hover:shadow-xs flex flex-col justify-between"
                    >
                        {/* Icon + title */}
                        <div>
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
                    </div>
                ))}
            </div>
        </section>
    );
}
