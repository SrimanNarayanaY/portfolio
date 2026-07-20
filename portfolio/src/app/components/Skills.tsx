"use client";
import { Code, Layers, Database, Cloud, Server, Wrench, BookOpen } from "lucide-react";

const skillBlocks = [
    { Icon: Code,     title: "Languages",            items: ["JavaScript", "TypeScript", "Python"] },
    { Icon: Layers,   title: "Frameworks",            items: ["Node.js", "Express.js", "NestJS (NX Monorepo)", "Hono.js", "Django"] },
    { Icon: Database, title: "Databases",             items: ["PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Drizzle ORM"] },
    { Icon: Cloud,    title: "Cloud & DevOps",        items: ["AWS S3", "AWS EC2", "GitHub Actions CI/CD", "Automated Pipelines"] },
    { Icon: Server,   title: "Server & Infra",        items: ["Utho Cloud VPS", "Render", "SSH / Hardening", "Backup (rclone)"] },
    { Icon: Wrench,   title: "Tools",                 items: ["Git", "GitHub", "Bitbucket", "Postman", "rclone"] },
    { Icon: BookOpen, title: "Concepts",              items: ["REST API Design", "Microservices", "Performance Optimisation", "JWT · OAuth · RBAC", "Payment Gateways", "Socket.IO", "Agile / Scrum"] },
];

export default function Skills() {
    return (
        <section id="skills" style={{ padding: "36px 0", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff" }}>
            <div style={{ marginBottom: "16px" }}>
                <span style={{
                    display: "inline-block", fontSize: "10px", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.07em",
                    border: "1px solid #e5e7eb", borderRadius: "4px",
                    padding: "2px 9px", color: "#6b7280", backgroundColor: "#f3f4f6",
                }}>Tooling</span>
                <h2 style={{ marginTop: "6px", fontSize: "18px", fontWeight: 700, color: "#111827", margin: "6px 0 0" }}>Skills &amp; Stack</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "10px" }}>
                {skillBlocks.map(({ Icon, title, items }) => (
                    <div
                        key={title}
                        style={{
                            border: "1px solid #e5e7eb", borderRadius: "8px",
                            backgroundColor: "#ffffff", padding: "12px",
                            transition: "box-shadow 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 14px rgba(29,78,216,0.09)";
                            (e.currentTarget as HTMLDivElement).style.borderColor = "#93c5fd";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                            (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb";
                        }}
                    >
                        {/* Icon + title */}
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
                            <span style={{
                                display: "flex", alignItems: "center", justifyContent: "center",
                                width: "26px", height: "26px", borderRadius: "5px",
                                backgroundColor: "#eff6ff", border: "1px solid #bfdbfe",
                                color: "#1d4ed8", flexShrink: 0,
                            }}>
                                <Icon size={12} strokeWidth={2} />
                            </span>
                            <h3 style={{ fontSize: "12px", fontWeight: 600, color: "#111827", margin: 0 }}>{title}</h3>
                        </div>

                        {/* Highlighted pills */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                            {items.map((item) => (
                                <span key={item} style={{
                                    fontSize: "10px", fontWeight: 500,
                                    color: "#1e40af", backgroundColor: "#eff6ff",
                                    border: "1px solid #bfdbfe", borderRadius: "4px",
                                    padding: "2px 7px",
                                }}>
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
