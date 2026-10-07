import { Server, Cloud, ShieldCheck, Sparkles, CreditCard, Database } from "lucide-react";

const stats = [
    { label: "Experience", value: "3+ years" },
    { label: "Applications Delivered", value: "8+ in Production" },
    { label: "Performance Gain", value: "30%–50% faster" },
    { label: "Deploy Time Reduction", value: "15 min to <3 min" },
];

const highlights = [
    {
        Icon: Server,
        title: "REST APIs & Microservices",
        desc: "High-throughput APIs in NestJS (NX monorepo), Express.js, and Hono.js with strict type-safety and modular architectures.",
    },
    {
        Icon: Sparkles,
        title: "AI Integration & RAG",
        desc: "Vector search using pgvector in PostgreSQL, Hugging Face cloud inference, and multimodal generative AI pipelines.",
    },
    {
        Icon: CreditCard,
        title: "Payments & Queues",
        desc: "Idempotent payment webhook processing for Stripe & Razorpay, BullMQ message queues, and atomic usage metering.",
    },
    {
        Icon: Database,
        title: "Databases & Optimization",
        desc: "PostgreSQL, MySQL, MongoDB, Redis caching, query indexing, eliminating N+1 bottlenecks, and TypeORM/Drizzle migrations.",
    },
    {
        Icon: Cloud,
        title: "Cloud & DevOps",
        desc: "AWS (EC2, S3), Azure, Docker containerization, Utho VPS, Nginx, PM2, and GitHub Actions CI/CD automation.",
    },
    {
        Icon: ShieldCheck,
        title: "Security & Code Quality",
        desc: "JWT, OAuth, RBAC, Bitbucket branch protection standards, automated rclone multi-DB backups, and rigorous PR reviews.",
    },
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
                        Backend Developer with 3+ years of experience designing, building, and deploying RESTful APIs and microservices using JavaScript, TypeScript, Node.js, and NestJS on PostgreSQL, MySQL, and MongoDB. Delivered 8+ production applications across 2 companies.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        Hands-on with payment gateway integration (Stripe, Razorpay), CI/CD automation (GitHub Actions), AWS (EC2, S3), Docker, Redis, and database schema design and query optimization. Experienced with RAG pipelines using pgvector and Generative AI cloud inference.
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
