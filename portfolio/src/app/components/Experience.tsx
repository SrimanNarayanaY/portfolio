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
        <section id="experience" style={{ padding: "36px 0", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff" }}>
            <div style={{ marginBottom: "16px" }}>
                <span style={{
                    display: "inline-block", fontSize: "10px", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.07em",
                    border: "1px solid #e5e7eb", borderRadius: "4px",
                    padding: "2px 9px", color: "#6b7280", backgroundColor: "#f3f4f6",
                }}>Timeline</span>
                <h2 style={{ marginTop: "6px", fontSize: "18px", fontWeight: 700, color: "#111827" }}>Work Experience</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {jobs.map((job) => (
                    <div key={job.company} style={{
                        border: "1px solid #e5e7eb", borderRadius: "8px",
                        backgroundColor: "#ffffff", padding: "16px",
                    }}>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "6px", marginBottom: "10px" }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                                <Briefcase size={14} color="#1d4ed8" style={{ marginTop: "2px", flexShrink: 0 }} />
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                                        <h3 style={{ fontSize: "13px", fontWeight: 600, color: "#111827", margin: 0 }}>{job.role}</h3>
                                        <span style={{
                                            fontSize: "9px", fontWeight: 600, textTransform: "uppercase",
                                            border: "1px solid #bfdbfe", backgroundColor: "#eff6ff",
                                            color: "#1e40af", borderRadius: "4px", padding: "1px 5px",
                                        }}>{job.badge}</span>
                                    </div>
                                    <p style={{ fontSize: "11px", fontWeight: 500, color: "#1d4ed8", margin: "2px 0 0" }}>{job.company}</p>
                                </div>
                            </div>
                            <span style={{ fontSize: "11px", color: "#9ca3af" }}>{job.period}</span>
                        </div>

                        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                            {job.bullets.map((b) => (
                                <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "7px" }}>
                                    <CheckCircle2 size={11} color="#9ca3af" style={{ marginTop: "2px", flexShrink: 0 }} />
                                    <span style={{ fontSize: "12px", color: "#374151", lineHeight: 1.55 }}>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
                    <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px", backgroundColor: "#ffffff", padding: "14px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
                            <GraduationCap size={14} color="#1d4ed8" />
                            <h3 style={{ fontSize: "12px", fontWeight: 600, color: "#111827", margin: 0 }}>Education</h3>
                        </div>
                        <p style={{ fontSize: "12px", fontWeight: 500, color: "#111827", margin: 0 }}>B.Tech – Electronics &amp; Communication Engineering</p>
                        <p style={{ fontSize: "11px", color: "#6b7280", margin: "3px 0 0" }}>Narayana Engineering College, Nellore · 2022</p>
                    </div>

                    <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px", backgroundColor: "#ffffff", padding: "14px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
                            <Award size={14} color="#1d4ed8" />
                            <h3 style={{ fontSize: "12px", fontWeight: 600, color: "#111827", margin: 0 }}>Achievements</h3>
                        </div>
                        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                            {achievements.map((a) => (
                                <li key={a} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                                    <CheckCircle2 size={11} color="#9ca3af" style={{ marginTop: "2px", flexShrink: 0 }} />
                                    <span style={{ fontSize: "11px", color: "#374151" }}>{a}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
