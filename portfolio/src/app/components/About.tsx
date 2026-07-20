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
        <section id="about" style={{ padding: "36px 0", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "28px" }}>

                {/* Left */}
                <div style={{ flex: "0 1 220px" }}>
                    <span style={{
                        display: "inline-block", fontSize: "10px", fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: "0.07em",
                        border: "1px solid #e5e7eb", borderRadius: "4px",
                        padding: "2px 9px", color: "#6b7280", backgroundColor: "#f3f4f6",
                    }}>About</span>
                    <h2 style={{ marginTop: "8px", fontSize: "18px", fontWeight: 700, color: "#111827" }}>
                        Backend systems built to scale.
                    </h2>

                    <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {stats.map((item) => (
                            <div key={item.label} style={{
                                display: "flex", justifyContent: "space-between",
                                border: "1px solid #e5e7eb", borderRadius: "6px",
                                backgroundColor: "#ffffff", padding: "8px 12px",
                            }}>
                                <p style={{ fontSize: "11px", color: "#6b7280", margin: 0 }}>{item.label}</p>
                                <p style={{ fontSize: "11px", fontWeight: 600, color: "#111827", margin: 0 }}>{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                        Backend developer with 3+ years architecting RESTful APIs, microservices, and cloud-native infrastructure. Proficient in Node.js, NestJS (NX monorepos), Hono.js, and Django.
                    </p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.65, margin: 0 }}>
                        Database expertise: PostgreSQL, MySQL, MongoDB, TypeORM, Drizzle ORM. Cloud: AWS S3/EC2, Utho VPS, Render, GitHub Actions CI/CD.
                    </p>

                    <div>
                        <h3 style={{ fontSize: "12px", fontWeight: 600, color: "#111827", margin: "0 0 10px" }}>Core Competencies</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px" }}>
                            {highlights.map(({ Icon, title, desc }) => (
                                <div key={title} style={{
                                    border: "1px solid #e5e7eb", borderRadius: "8px",
                                    backgroundColor: "#ffffff", padding: "12px",
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px" }}>
                                        <span style={{
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            width: "24px", height: "24px", borderRadius: "5px",
                                            backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", color: "#1d4ed8", flexShrink: 0,
                                        }}>
                                            <Icon size={12} strokeWidth={2} />
                                        </span>
                                        <h4 style={{ fontSize: "11px", fontWeight: 600, color: "#111827", margin: 0 }}>{title}</h4>
                                    </div>
                                    <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.55, margin: 0 }}>{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
