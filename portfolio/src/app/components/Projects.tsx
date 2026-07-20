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
        <section id="projects" style={{ padding: "36px 0", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff" }}>
            <div style={{ marginBottom: "16px" }}>
                <span style={{
                    display: "inline-block", fontSize: "10px", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.07em",
                    border: "1px solid #e5e7eb", borderRadius: "4px",
                    padding: "2px 9px", color: "#6b7280", backgroundColor: "#f3f4f6",
                }}>Work</span>
                <h2 style={{ marginTop: "6px", fontSize: "18px", fontWeight: 700, color: "#111827", margin: "6px 0 0" }}>Selected Projects</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
                {projects.map((project) => (
                    <article key={project.title} id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                        style={{
                            border: "1px solid #e5e7eb", borderRadius: "8px",
                            backgroundColor: "#ffffff", padding: "14px",
                            display: "flex", flexDirection: "column",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "7px" }}>
                            <h3 style={{ fontSize: "13px", fontWeight: 600, color: "#111827", margin: 0 }}>{project.title}</h3>
                            <span style={{
                                fontSize: "9px", fontWeight: 600, textTransform: "uppercase",
                                letterSpacing: "0.05em", flexShrink: 0,
                                border: "1px solid #e5e7eb", borderRadius: "4px",
                                padding: "2px 6px", color: "#6b7280", backgroundColor: "#f3f4f6",
                            }}>{project.tag}</span>
                        </div>

                        <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.6, margin: "0 0 10px", flex: 1 }}>{project.body}</p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                            {project.stack.map((t) => (
                                <span key={t} style={{
                                    fontSize: "10px", fontWeight: 500,
                                    color: "#1e40af", backgroundColor: "#eff6ff",
                                    border: "1px solid #bfdbfe", borderRadius: "4px", padding: "2px 7px",
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div style={{
                marginTop: "10px", border: "1px solid #e5e7eb", borderRadius: "8px",
                backgroundColor: "#ffffff", padding: "14px",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px" }}>
                    <GitBranch size={13} color="#1d4ed8" />
                    <h3 style={{ fontSize: "12px", fontWeight: 600, color: "#111827", margin: 0 }}>Open Source &amp; Contributions</h3>
                </div>
                <p style={{ fontSize: "12px", color: "#374151", lineHeight: 1.6, margin: 0 }}>
                    Active contributor across multiple GitHub projects; reduced API response times and DB latency through indexing, caching, and refactoring.
                </p>
            </div>
        </section>
    );
}
