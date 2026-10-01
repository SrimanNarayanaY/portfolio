import { GitBranch } from "lucide-react";

const projects = [
    {
        title: "Lab Squire",
        tag: "Lab Management",
        body: "APIs and DB architecture for specimen tracking and barcode/QR integration. Reduced API latency by 30%.",
        stack: ["Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB", "AWS S3"],
    },
    {
        title: "Yoda Report Portal",
        tag: "Patient Reports",
        body: "Secure APIs for sample tracking and real-time report management. PDF generation; 50% faster retrieval.",
        stack: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "AWS S3"],
    },
    {
        title: "HireLynx",
        tag: "ATS Platform",
        body: "Canada-focused applicant tracking system — job postings, pipelines, interview scheduling, and RBAC on NX monorepo.",
        stack: ["NestJS", "Next.js", "PostgreSQL", "TypeORM", "AWS"],
    },
    {
        title: "NyayaTech",
        tag: "Legal Case Mgmt",
        body: "Hono.js + Drizzle ORM backend; Stripe payments, email automation, Socket.IO live events.",
        stack: ["Hono.js", "Drizzle ORM", "PostgreSQL", "Socket.IO", "Stripe"],
    },
    {
        title: "ShipGPT",
        tag: "Ship Management",
        body: "REST APIs for ship tracking, AWS S3 file handling, scalable microservices architecture.",
        stack: ["Node.js", "AWS S3", "Microservices"],
    },
    {
        title: "BHK Project",
        tag: "Property Management",
        body: "User lifecycle management (ACTIVE/INACTIVE/BLOCKED), admin APIs, S3 storage for assets.",
        stack: ["Node.js", "MySQL", "AWS S3"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-8 sm:py-10 border-t border-gray-200 bg-white">
            <div className="mb-4">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-100">
                    Work
                </span>
                <h2 className="mt-1.5 text-lg font-bold text-gray-900">Selected Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between hover:border-gray-300 transition-colors"
                    >
                        <div>
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="text-xs sm:text-sm font-semibold text-gray-900">{project.title}</h3>
                                <span className="text-[9px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-50 flex-shrink-0">
                                    {project.tag}
                                </span>
                            </div>

                            <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                {project.body}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.stack.map((t) => (
                                <span
                                    key={t}
                                    className="text-[10px] font-medium text-blue-800 bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-3.5 border border-gray-200 rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 mb-1.5">
                    <GitBranch size={14} className="text-blue-700 flex-shrink-0" />
                    <h3 className="text-xs font-semibold text-gray-900">Open Source &amp; Contributions</h3>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                    Active contributor across multiple GitHub projects; reduced API response times and DB latency through indexing, caching, and refactoring.
                </p>
            </div>
        </section>
    );
}
