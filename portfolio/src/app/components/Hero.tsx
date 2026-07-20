import { MapPin, Mail, Link2 } from "lucide-react";

const snapshot = [
    { label: "Stack", val: "Node.js · NestJS · TypeScript" },
    { label: "Cloud", val: "AWS · Utho VPS · CI/CD" },
    { label: "DB", val: "PostgreSQL · MySQL · MongoDB" },
    { label: "Focus", val: "Monorepos · Security · Backup" },
];

const stats = [
    { val: "3+", label: "Yrs Exp" },
    { val: "40%", label: "API Gain" },
    { val: "6+", label: "Projects" },
    { val: "2", label: "Companies" },
];

export default function Hero() {
    return (
        <section id="top" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: "40px", padding: "48px 0 40px",
            backgroundColor: "#ffffff",
            flexWrap: "wrap",
        }}>
            {/* ── Left ─────────────────── */}
            <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: "16px", minWidth: 0 }}>

                {/* Headline */}
                <div>
                    <p style={{ fontSize: "12px", color: "#9ca3af", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Backend Developer
                    </p>
                    <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: "#111827", margin: "0 0 4px", lineHeight: 1.15 }}>
                        Sriman Narayana<br />Yendluri
                    </h1>
                    <p style={{ fontSize: "13px", color: "#6b7280", margin: "8px 0 0" }}>
                        Node.js · NestJS · TypeScript · AWS · CI/CD
                    </p>
                </div>

                {/* Summary */}
                <p style={{
                    fontSize: "13px", color: "#374151", lineHeight: 1.7,
                    borderLeft: "3px solid #1d4ed8", paddingLeft: "12px", margin: 0,
                    maxWidth: "420px",
                }}>
                    3+ years designing scalable APIs, optimising databases, and deploying secure microservices on AWS and Utho VPS using NX monorepo architecture.
                </p>

                {/* CTAs */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                    <a href="mailto:sriman793@gmail.com" id="hero-contact-btn" style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        backgroundColor: "#1d4ed8", color: "#fff",
                        borderRadius: "6px", padding: "8px 16px",
                        fontSize: "12px", fontWeight: 600, textDecoration: "none",
                    }}>
                        <Mail size={12} /> Contact Me
                    </a>
                    <a href="https://linkedin.com/in/sriman-narayana-yendluri-14b34022a" target="_blank" id="hero-linkedin-btn" style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        border: "1px solid #e5e7eb", backgroundColor: "#fff", color: "#374151",
                        borderRadius: "6px", padding: "8px 16px",
                        fontSize: "12px", fontWeight: 500, textDecoration: "none",
                    }}>
                        <Link2 size={12} /> LinkedIn
                    </a>
                    <span style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "11px", color: "#9ca3af" }}>
                        <MapPin size={11} /> India · +91 74168 99743
                    </span>
                </div>

                {/* Stats */}
                <div style={{
                    display: "flex", gap: "24px",
                    paddingTop: "14px", borderTop: "1px solid #e5e7eb",
                }}>
                    {stats.map((s) => (
                        <div key={s.label}>
                            <p style={{ fontSize: "17px", fontWeight: 700, color: "#111827", margin: 0 }}>{s.val}</p>
                            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#9ca3af", margin: 0 }}>{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Right: Snapshot card ─────── */}
            <div style={{ flex: "0 0 290px", maxWidth: "290px" }}>
                <div style={{
                    border: "1px solid #e5e7eb", borderRadius: "10px",
                    backgroundColor: "#ffffff", padding: "16px",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "#111827", margin: 0 }}>Backend Snapshot</p>
                        <span style={{
                            display: "inline-flex", alignItems: "center", gap: "4px",
                            border: "1px solid #bbf7d0", backgroundColor: "#f0fdf4",
                            borderRadius: "99px", padding: "2px 8px",
                            fontSize: "10px", fontWeight: 500, color: "#16a34a",
                        }}>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
                            Available
                        </span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "10px" }}>
                        {snapshot.map((item) => (
                            <div key={item.label} style={{
                                border: "1px solid #e5e7eb", borderRadius: "6px",
                                backgroundColor: "#f9fafb", padding: "8px",
                            }}>
                                <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#9ca3af", margin: 0 }}>{item.label}</p>
                                <p style={{ fontSize: "10px", fontWeight: 600, color: "#111827", margin: "3px 0 0", lineHeight: 1.35 }}>{item.val}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                        {["NestJS", "NX Monorepo", "TypeORM", "GitHub Actions", "AWS EC2", "rclone"].map((t) => (
                            <span key={t} style={{
                                border: "1px solid #bfdbfe", backgroundColor: "#eff6ff",
                                borderRadius: "4px", padding: "2px 7px",
                                fontSize: "10px", fontWeight: 500, color: "#1e40af",
                            }}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
