export default function Skills() {
    return (
        <section id="skills" className="py-12 border-t border-white/10">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-white">Skills & Tooling</h2>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]">
                    Backend-first stack
                </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
                {[
                    {
                        title: "Programming Languages",
                        items: ["JavaScript", "TypeScript", "Python"],
                    },
                    {
                        title: "Frameworks",
                        items: ["Node.js", "Express.js", "NestJS", "Hono.js", "Fastify", "Django", "LangChain"],
                    },
                    {
                        title: "Databases",
                        items: [
                            "PostgreSQL",
                            "MySQL",
                            "MongoDB",
                            "Drizzle ORM",
                            "TypeORM",
                            "JS Vector DBs",
                        ],
                    },
                    {
                        title: "Cloud & DevOps",
                        items: ["AWS S3", "AWS EC2", "CI/CD pipelines", "Serverless & automation"],
                    },
                    {
                        title: "Tools",
                        items: ["Git", "GitHub", "Postman"],
                    },
                    {
                        title: "Concepts",
                        items: [
                            "RESTful API design, Microservices",
                            "RAG implementation",
                            "Performance Optimization, Caching",
                            "Data Migration, Security (JWT, OAuth, RBAC)",
                            "Payment Gateway Integration, Email Automation",
                            "Real-Time Events (Socket.IO)",
                            "Data Structures, Agile/Scrum",
                        ],
                    },
                ].map((block) => (
                    <div
                        key={block.title}
                        className="rounded-2xl border border-white/10 bg-[var(--surface)] p-4 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/20"
                    >
                        <h3 className="mb-2 text-sm font-semibold text-white">{block.title}</h3>
                        <ul className="space-y-1 text-[var(--muted)]">
                            {block.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section >
    );
}
