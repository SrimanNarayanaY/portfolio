import { Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";

const jobs = [
    {
        role: "Backend Developer",
        company: "Digixito Media Private Limited",
        period: "Sep 2025 – Present",
        badge: "Current",
        keyImpact: ["NX Monorepo", "pgvector RAG on Azure", "15m ➔ <3m CI/CD", "20+ PRs Reviewed", "Utho & EC2 VPS"],
        bullets: [
            "Develop and maintain backend services for production applications in an NX monorepo using NestJS, TypeScript, and TypeORM; built a shared code layer across applications to reduce duplicate implementation work.",
            "HireLynX (Job Recruitment Portal): Built the backend for a Canada-focused applicant tracking system (ATS) covering job postings, application pipelines, interview scheduling, and role-based access control (NestJS, Next.js, PostgreSQL, TypeORM, AWS); deployed across Utho Cloud and Render.",
            "Bharat Hast Kaushal (BHK Platform): Architected backend services for an artisan marketplace where handcrafted items are cataloged for live auctions with automated payout disbursement to artisans; integrated end-to-end logistics tracking APIs, user lifecycle management (ACTIVE, INACTIVE, BLOCKED), and AWS S3 storage for artisan KYC and product assets.",
            "IAIRE (Innovation, Patent & Startup Management Platform): Built the backend for a patent and innovation management platform serving schools and educational boards, supporting innovation submissions, patent filing workflows, and startup management; optimized database queries with indexing (NestJS, PostgreSQL, AWS).",
            "Launchpad (Competition & Innovation Challenge Platform): Developed a competition platform operating across 3 regions (India, USA, UAE) with participant registration and submission, judge evaluation and validation workflows, and automated winner selection and announcement; containerized and deployed the application using Docker (NestJS, PostgreSQL, Docker, AWS).",
            "MyTreks (School-Level Subject Coaching Platform): Built the backend for a coaching platform for students up to 12th grade that identifies subject interests and provides targeted subject-level coaching; managed server-side deployment and infrastructure (Node.js, TypeORM, PostgreSQL, AWS).",
            "ShipGPT (AI-Powered Ship Management System): Implemented REST APIs for ship data tracking and management, integrated AWS S3 for file handling, designed a scalable microservices architecture, and implemented Retrieval-Augmented Generation (RAG) with pgvector for the AI-powered ship details feature and deployed it on Azure (Node.js, PostgreSQL with pgvector, AWS S3, Azure).",
            "Designed and implemented GitHub Actions CI/CD pipelines across 5 applications on the Bharat Hast Kaushal (BHK) project, replacing manual deployments with automated build and release and reducing deployment time from ~15 minutes to under 3 minutes.",
            "Provisioned and configured infrastructure on AWS EC2 and Utho Cloud VPS for 5+ applications, including SSH access setup, Nginx and PM2 configuration, and PostgreSQL/MySQL tuning on resource-constrained servers.",
            "Built and maintain an automated multi-database backup service (PostgreSQL, MySQL, Supabase) that syncs to Google Drive using rclone.",
            "Own pull request review and branch protection standards on Bitbucket; reviewed 20+ pull requests for schema design, data integrity, and code quality issues before merge.",
        ],
    },
    {
        role: "Software Engineer",
        company: "Orotron Software Pvt Ltd",
        period: "Aug 2023 – Jul 2025",
        badge: "2 yrs",
        keyImpact: ["30% Reduced API Latency", "50% Faster Report Retrieval", "Hono.js + Drizzle", "Socket.IO Real-Time"],
        bullets: [
            "Developed RESTful APIs and microservices using JavaScript, TypeScript, Node.js, Express.js, NestJS, and Hono.js for client projects in healthcare, recruitment, and legal case management.",
            "Lab Squire (Laboratory Management System): Built REST APIs and database schema for high-volume specimen tracking with barcode/QR integration; reduced API latency by 30% (~500ms to ~350ms) through database indexing, Redis caching, eliminating N+1 queries with eager loading, and pagination; added centralized error handling and input validation; also worked on EMR (Electronic Medical Record) order management (NestJS, PostgreSQL, MongoDB, AWS S3/EC2).",
            "Yoda Report Portal (Patient Report Processing): Built secure APIs for sample tracking and real-time report management with PDF generation; reduced report retrieval time by 50% through caching and indexed queries, validated through performance testing (NestJS, PostgreSQL, MongoDB, AWS S3/EC2).",
            "NyayaTech (Legal Case Management): Architected the backend using Hono.js and Drizzle ORM; integrated payments and email notifications, and built Socket.IO real-time event streams for lawyer–client interactions (PostgreSQL).",
            "Designed MongoDB and Drizzle ORM schemas for production workloads across 3 client applications; owned migrations and query optimization.",
            "Integrated Stripe payments, SendGrid/SMTP email notifications, and AWS S3 file storage into 4+ client-facing applications.",
            "Implemented JWT/OAuth authentication and role-based access control (RBAC) across client applications; handled deployment and maintenance on AWS EC2/S3 using CI/CD pipelines.",
        ],
    },
];

const achievements = [
    "Delivered 8+ production applications across 2 companies",
    "Reduced API latency by 30%–50% via Redis caching, indexing & query tuning",
    "Reduced CI/CD deployment time from ~15 min to <3 min on GitHub Actions",
    "Reviewed 20+ PRs on Bitbucket enforcing schema integrity & quality",
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
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 mb-2">
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

                        {/* Key Impact Tags */}
                        {job.keyImpact && (
                            <div className="flex flex-wrap gap-1.5 mb-3 pl-6 sm:pl-6 pt-1">
                                {job.keyImpact.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5"
                                    >
                                        ✓ {tag}
                                    </span>
                                ))}
                            </div>
                        )}

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
                        <p className="text-[11px] text-gray-500 mt-1">Narayana Engineering College, Nellore, Andhra Pradesh · 2022</p>
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
