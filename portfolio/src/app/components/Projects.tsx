import Image from "next/image";
import { GitBranch, ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectItem {
    title: string;
    tag: string;
    body: string;
    stack: string[];
    liveUrl?: string;
    githubUrl?: string;
    image?: string;
    features?: string[];
}

const featuredProject: ProjectItem = {
    title: "DevLog - Full-Stack Modern Blogging Platform",
    tag: "Full Stack",
    body: "A high-performance full-stack blogging platform built with Next.js 16, Supabase, and Cloudinary featuring rich text editing, dynamic CRUD, and cloud media storage.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Cloudinary", "Tailwind CSS v4", "Tiptap", "Zod"],
    liveUrl: "https://myblog-ruddy-seven.vercel.app/",
    githubUrl: "https://github.com/SrimanNarayanaY/myblog",
    image: "/projects/myblog.png",
    features: [
        "Headless Tiptap rich-text editor with side-by-side live markdown preview",
        "Direct Cloudinary media upload for cover photos and embedded article images",
        "Full CRUD operations with Next.js Server Actions and strict Zod schema validation",
        "Supabase PostgreSQL database protected with Row-Level Security (RLS) policies",
        "Dynamic OpenGraph social previews & adaptive Dark/Light theme switching",
    ],
};

const otherProjects: ProjectItem[] = [
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
                <h2 className="mt-1.5 text-lg font-bold text-gray-900">Featured &amp; Selected Projects</h2>
            </div>

            {/* ── Featured Project Showcase: DevLog ── */}
            <article
                id="project-devlog"
                className="border border-gray-200 hover:border-gray-300 rounded-xl bg-white p-4 sm:p-6 mb-4 shadow-xs transition-all"
            >
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
                    {/* Left: Live Site Screenshot */}
                    {featuredProject.image && (
                        <div className="w-full lg:w-[48%] flex-shrink-0">
                            <a
                                href={featuredProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-gray-950 shadow-xs"
                            >
                                <Image
                                    src={featuredProject.image}
                                    alt={featuredProject.title}
                                    width={800}
                                    height={500}
                                    className="w-full h-auto object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                                    priority
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="inline-flex items-center gap-1.5 bg-gray-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-md backdrop-blur-xs">
                                        <ExternalLink size={13} /> Open Live Application
                                    </span>
                                </div>
                            </a>
                        </div>
                    )}

                    {/* Right: Project Details & Features */}
                    <div className="w-full lg:flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider border border-blue-200 rounded px-2 py-0.5 text-blue-700 bg-blue-50">
                                        {featuredProject.tag}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Live App
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5">
                                {featuredProject.title}
                            </h3>

                            <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                {featuredProject.body}
                            </p>

                            {/* Key Highlights */}
                            {featuredProject.features && (
                                <div className="mb-3.5 bg-gray-50 border border-gray-100 rounded-lg p-2.5 sm:p-3">
                                    <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                        Key Highlights
                                    </p>
                                    <ul className="space-y-1.5">
                                        {featuredProject.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-snug">
                                                <CheckCircle2 size={13} className="text-blue-700 mt-0.5 flex-shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div>
                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-1.5 pt-1 mb-3.5">
                                {featuredProject.stack.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] font-medium text-blue-800 bg-blue-50 border border-blue-200 rounded px-2 py-0.5"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-gray-100">
                                {featuredProject.liveUrl && (
                                    <a
                                        href={featuredProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id="project-devlog-live-btn"
                                        className="inline-flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors"
                                    >
                                        <ExternalLink size={13} /> Live Demo
                                    </a>
                                )}
                                {featuredProject.githubUrl && (
                                    <a
                                        href={featuredProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id="project-devlog-github-btn"
                                        className="inline-flex items-center justify-center gap-1.5 border border-gray-200 hover:border-gray-300 bg-white text-gray-700 hover:text-gray-900 rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors"
                                    >
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* ── Other Selected Projects Grid ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {otherProjects.map((project) => (
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

            {/* ── Open Source Section ── */}
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
