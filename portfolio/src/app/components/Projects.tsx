"use client";
import { useState } from "react";
import { GitBranch, ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Network } from "lucide-react";

interface FeaturedProjectItem {
    id: string;
    title: string;
    tag: string;
    category: "fullstack" | "fintech" | "ai";
    body: string;
    stack: string[];
    liveUrl: string;
    githubUrl: string;
    features: string[];
    architectureNodes?: { step: string; detail: string }[];
}

interface CompanyProjectItem {
    title: string;
    company: string;
    tag: string;
    category: "ai" | "microservices" | "fintech" | "fullstack";
    body: string;
    stack: string[];
}

const featuredProjects: FeaturedProjectItem[] = [
    {
        id: "project-myblog",
        title: "MyBlog – Full-Stack Modern Blogging Platform",
        tag: "Full Stack",
        category: "fullstack",
        body: "A high-performance full-stack blogging platform built with Next.js 16, Supabase, and Cloudinary featuring rich text editing, dynamic CRUD, and cloud media storage.",
        stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Cloudinary", "Tailwind CSS v4", "Tiptap", "Zod"],
        liveUrl: "https://myblog-ruddy-seven.vercel.app/",
        githubUrl: "https://github.com/SrimanNarayanaY/myblog",
        features: [
            "Headless Tiptap rich-text editor with side-by-side live markdown preview",
            "Direct Cloudinary media upload for cover photos and embedded article images",
            "Full CRUD operations with Next.js Server Actions and strict Zod schema validation",
            "Supabase PostgreSQL database protected with Row-Level Security (RLS) policies",
            "Dynamic OpenGraph social previews & adaptive Dark/Light theme switching",
        ],
        architectureNodes: [
            { step: "Editor & Client", detail: "Headless Tiptap rich-text editor with instant side-by-side markdown preview" },
            { step: "Cloud Media", detail: "Direct upload stream to Cloudinary for article banners and embedded media" },
            { step: "Validation", detail: "Next.js Server Actions with strict Zod schema validation on runtime inputs" },
            { step: "Database Security", detail: "Supabase PostgreSQL secured with Row-Level Security (RLS) policies" },
            { step: "Edge Delivery", detail: "Dynamic OpenGraph preview card generation and responsive SSR on Vercel" },
        ],
    },
    {
        id: "project-billflow",
        title: "BillFlow – Multi-Tenant Subscription Billing Engine",
        tag: "Fintech & Backend",
        category: "fintech",
        body: "A scalable multi-tenant billing engine designed for subscription management, atomic usage metering, and fault-tolerant payment processing with automated dunning workflows.",
        stack: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL (Neon)", "Redis", "BullMQ", "Stripe", "Razorpay"],
        liveUrl: "https://billflow-flame.vercel.app",
        githubUrl: "https://github.com/SrimanNarayanaY/billflow",
        features: [
            "Idempotent webhook handling for Stripe and Razorpay payment events to prevent duplicate charges on retries",
            "Redis-based atomic usage metering with per-tenant isolation for concurrent updates without race conditions",
            "Proration logic for seamless plan upgrades/downgrades and automated dunning workflow via BullMQ for failed retries",
            "Production-safe schema migrations via TypeORM (synchronize: false) deployed on Render with Neon PostgreSQL",
        ],
        architectureNodes: [
            { step: "Payment Gateway", detail: "Stripe & Razorpay sign webhooks with unique payload event IDs" },
            { step: "Idempotency Guard", detail: "Redis distributed lock + PostgreSQL processed_events lookup prevents duplicate charging" },
            { step: "Atomic Metering", detail: "Redis INCRBY atomic counters track tenant usage without SQL race conditions" },
            { step: "BullMQ Dunning", detail: "Exponential retry queue with delay backoff for failed charges and email alerts" },
            { step: "Neon PostgreSQL", detail: "Tenant-isolated transactions with TypeORM non-sync production migrations" },
        ],
    },
    {
        id: "project-pixelforge",
        title: "Pixel Forge – AI Image & Video Generation Platform",
        tag: "Full-Stack AI",
        category: "ai",
        body: "A full-stack generative AI studio orchestrating cloud diffusion and video models (FLUX.1 Schnell, Stable Diffusion 3.5 Large, LTX Video) via serverless inference pipelines without requiring local GPUs.",
        stack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Hugging Face Spaces", "Gemma-3-12B", "FFmpeg/PyAV"],
        liveUrl: "https://frontend-delta-two-87.vercel.app",
        githubUrl: "https://github.com/SrimanNarayanaY/PixelForge",
        features: [
            "Multi-tier fallback system that automatically switches to alternate models on failure or rate limits for high uptime",
            "Vision-assisted multimodal reference pipeline using Gemma-3-12B converting uploaded images into enriched prompts",
            "In-house prompt spell-correction engine and dynamic artistic style enrichment presets",
            "Custom ping-pong looping algorithm stretching short diffusion clips into 5–30s H.264 MP4 videos using FFmpeg/PyAV",
        ],
        architectureNodes: [
            { step: "Client Request", detail: "Next.js interface sends prompt, parameters & optional reference image" },
            { step: "Vision Pipeline", detail: "Google Gemma-3-12B extracts subject & style details via HF InferenceClient" },
            { step: "Prompt Enrichment", detail: "In-house spell corrector and artistic style enhancer inject cinematic parameters" },
            { step: "Fallback Router", detail: "Tries primary hosted model (FLUX.1 Schnell) ➔ falls back to SD 3.5 or Wan 2.7 on rate limits" },
            { step: "Temporal Extension", detail: "FFmpeg/PyAV ping-pong algorithm loops diffusion clip into smooth 5-30s H.264 MP4" },
        ],
    },
];

const companyProjects: CompanyProjectItem[] = [
    {
        title: "ShipGPT",
        company: "Digixito Media",
        tag: "AI & Maritime",
        category: "ai",
        body: "REST APIs for ship data tracking, AWS S3 file handling, microservices architecture, and pgvector RAG for AI-powered ship details on Azure.",
        stack: ["Node.js", "PostgreSQL", "pgvector", "RAG", "AWS S3", "Azure"],
    },
    {
        title: "HireLynX",
        company: "Digixito Media",
        tag: "Job ATS Portal",
        category: "microservices",
        body: "Canada-focused applicant tracking system covering job postings, pipelines, interview scheduling, and RBAC deployed on Utho Cloud & Render.",
        stack: ["NestJS", "Next.js", "PostgreSQL", "TypeORM", "AWS", "Render"],
    },
    {
        title: "Launchpad",
        company: "Digixito Media",
        tag: "Innovation Challenge",
        category: "microservices",
        body: "Competition platform across 3 regions (India, USA, UAE) with participant submissions, judge evaluation, automated winner selection, and Docker deployment.",
        stack: ["NestJS", "PostgreSQL", "Docker", "AWS EC2"],
    },
    {
        title: "IAIRE",
        company: "Digixito Media",
        tag: "Patent & Startup Mgmt",
        category: "microservices",
        body: "Patent and innovation management platform for schools and educational boards; innovation workflows and indexed query optimization.",
        stack: ["NestJS", "PostgreSQL", "Query Indexing", "AWS"],
    },
    {
        title: "Lab Squire",
        company: "Orotron Software",
        tag: "Laboratory System",
        category: "microservices",
        body: "High-volume specimen tracking with barcode/QR integration and EMR order management; reduced API latency by 30% via Redis caching & indexing.",
        stack: ["NestJS", "PostgreSQL", "MongoDB", "Redis", "AWS S3/EC2"],
    },
    {
        title: "Yoda Report Portal",
        company: "Orotron Software",
        tag: "Patient Reports",
        category: "microservices",
        body: "Real-time report management and PDF generation for medical samples; reduced retrieval time by 50% through caching and indexed queries.",
        stack: ["NestJS", "PostgreSQL", "MongoDB", "AWS S3/EC2"],
    },
    {
        title: "NyayaTech",
        company: "Orotron Software",
        tag: "Legal Case Mgmt",
        category: "fintech",
        body: "Hono.js + Drizzle ORM backend; Stripe payments, automated email notifications, and Socket.IO real-time event streams for lawyer-client interactions.",
        stack: ["Hono.js", "Drizzle ORM", "PostgreSQL", "Socket.IO", "Stripe"],
    },
    {
        title: "Bharat Hast Kaushal (BHK)",
        company: "Digixito Media",
        tag: "Artisan Auction & Logistics",
        category: "fintech",
        body: "Artisan empowerment & auction marketplace: handcrafted product listings, live auction bidding engine, automated winning payout disbursement to artisans, and integrated end-to-end shipment & logistics tracking.",
        stack: ["NestJS", "TypeScript", "MySQL", "AWS S3", "Logistics APIs", "GitHub Actions CI/CD"],
    },
    {
        title: "MyTreks",
        company: "Digixito Media",
        tag: "Subject Coaching",
        category: "microservices",
        body: "Backend for coaching platform for students up to 12th grade identifying subject interests with targeted coaching; server deployment on AWS.",
        stack: ["Node.js", "TypeORM", "PostgreSQL", "AWS"],
    },
];

const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "ai", label: "AI & RAG" },
    { id: "fintech", label: "Fintech & Payments" },
    { id: "microservices", label: "Microservices & Cloud" },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [openArch, setOpenArch] = useState<string | null>(null);

    const toggleArch = (id: string) => {
        setOpenArch((prev) => (prev === id ? null : id));
    };

    // Filter logic
    const filteredFeatured = featuredProjects.filter((p) => {
        if (activeFilter === "all" || activeFilter === "featured") return true;
        return p.category === activeFilter;
    });

    const filteredCompany = companyProjects.filter((p) => {
        if (activeFilter === "featured") return false;
        if (activeFilter === "all") return true;
        if (activeFilter === "fintech" && (p.category === "fintech" || p.title.includes("BHK"))) return true;
        if (activeFilter === "microservices" && (p.category === "microservices" || p.title.includes("BHK"))) return true;
        return p.category === activeFilter;
    });

    return (
        <section id="projects" className="py-8 sm:py-10 border-t border-gray-200 bg-white">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
                <div>
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-100">
                        Work &amp; Engineering
                    </span>
                    <h2 className="mt-1.5 text-lg font-bold text-gray-900">Featured Applications &amp; Production Work</h2>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-1.5">
                    {filterTabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveFilter(tab.id)}
                            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                                activeFilter === tab.id
                                    ? "bg-blue-700 text-white shadow-xs"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Featured Projects Showcase ── */}
            {filteredFeatured.length > 0 && (
                <div className="flex flex-col gap-5 mb-8">
                    {filteredFeatured.map((project) => (
                        <article
                            key={project.id}
                            id={project.id}
                            className="border border-gray-200 hover:border-gray-300 rounded-xl bg-white p-4 sm:p-6 shadow-xs transition-all"
                        >
                            <div className="flex flex-col gap-4">
                                {/* Details & Features */}
                                <div className="w-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-semibold uppercase tracking-wider border border-blue-200 rounded px-2 py-0.5 text-blue-700 bg-blue-50">
                                                    {project.tag}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                    Live Demo
                                                </span>
                                            </div>

                                            {project.architectureNodes && (
                                                <button
                                                    type="button"
                                                    onClick={() => toggleArch(project.id)}
                                                    className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 hover:text-blue-900 transition-colors cursor-pointer bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded px-2 py-0.5"
                                                >
                                                    <Network size={12} />
                                                    {openArch === project.id ? "Hide Architecture Flow" : "View Architecture Flow"}
                                                    {openArch === project.id ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                                </button>
                                            )}
                                        </div>

                                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5">
                                            {project.title}
                                        </h3>

                                        <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                            {project.body}
                                        </p>

                                        {/* Key Highlights */}
                                        <div className="mb-3.5 bg-gray-50 border border-gray-100 rounded-lg p-2.5 sm:p-3">
                                            <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                                Key Engineering Highlights
                                            </p>
                                            <ul className="space-y-1.5">
                                                {project.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-snug">
                                                        <CheckCircle2 size={13} className="text-blue-700 mt-0.5 flex-shrink-0" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Expandable Architecture Deep-Dive */}
                                        {openArch === project.id && project.architectureNodes && (
                                            <div className="mb-3.5 p-3.5 rounded-lg border border-blue-200 bg-blue-50/50 animate-slide-down">
                                                <div className="flex items-center gap-1.5 mb-2.5">
                                                    <Network size={14} className="text-blue-700" />
                                                    <p className="text-xs font-semibold text-gray-900">
                                                        End-to-End System Architecture Pipeline
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                                                    {project.architectureNodes.map((node, i) => (
                                                        <div
                                                            key={i}
                                                            className="border border-blue-100 bg-white rounded-md p-2 flex flex-col justify-between shadow-2xs relative"
                                                        >
                                                            <div>
                                                                <span className="text-[9px] font-bold text-blue-700 uppercase tracking-wider">
                                                                    Step {i + 1}
                                                                </span>
                                                                <p className="text-[11px] font-semibold text-gray-900 mt-0.5">
                                                                    {node.step}
                                                                </p>
                                                                <p className="text-[10px] text-gray-500 mt-1 leading-snug">
                                                                    {node.detail}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-1.5 pt-1 mb-3.5">
                                            {project.stack.map((t) => (
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
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                id={`${project.id}-live-btn`}
                                                className="inline-flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors"
                                            >
                                                <ExternalLink size={13} /> Live Demo
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                id={`${project.id}-github-btn`}
                                                className="inline-flex items-center justify-center gap-1.5 border border-gray-200 hover:border-gray-300 bg-white text-gray-700 hover:text-gray-900 rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors"
                                            >
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                                </svg>
                                                GitHub Repo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}

            {/* ── Production & Client Projects Header ── */}
            {filteredCompany.length > 0 && (
                <>
                    <div className="mb-3 pt-2">
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-100">
                            Industry Work
                        </span>
                        <h3 className="mt-1 text-sm sm:text-base font-bold text-gray-900">
                            Production Systems &amp; Client Deployments
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                            Production backend microservices, real-time architectures, and cloud platforms engineered across 2 companies.
                        </p>
                    </div>

                    {/* ── Production Projects Grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {filteredCompany.map((project) => (
                            <article
                                key={project.title}
                                id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                                className="border border-gray-200 rounded-lg bg-white p-4 flex flex-col justify-between hover:border-gray-300 transition-colors shadow-2xs"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-semibold text-gray-900">{project.title}</h4>
                                            <span className="text-[10px] text-blue-700 font-medium">{project.company}</span>
                                        </div>
                                        <span className="text-[9px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-50 flex-shrink-0">
                                            {project.tag}
                                        </span>
                                    </div>

                                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                        {project.body}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-gray-100 mt-2">
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
                </>
            )}

            {/* ── Open Source & Engineering Standards ── */}
            <div className="mt-4 border border-gray-200 rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 mb-1.5">
                    <GitBranch size={14} className="text-blue-700 flex-shrink-0" />
                    <h3 className="text-xs font-semibold text-gray-900">Engineering Standards &amp; Code Review</h3>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                    Owned Bitbucket branch protection and PR review standards across NX monorepo environments; reviewed 20+ pull requests for schema design, data integrity, and API performance before merge. Built automated multi-database backups and CI/CD pipelines deploying to resource-constrained VPS and cloud targets.
                </p>
            </div>
        </section>
    );
}
