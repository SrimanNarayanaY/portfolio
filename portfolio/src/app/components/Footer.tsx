export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid #e5e7eb", padding: "28px 0", backgroundColor: "#ffffff" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", textAlign: "center" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#111827", letterSpacing: "-0.01em" }}>
                    Sriman Narayana Yendluri
                </span>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
                    Backend Developer · Node.js · NestJS · AWS · CI/CD
                </p>
                <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>
                    © {new Date().getFullYear()} Sriman Narayana Yendluri
                </p>
            </div>
        </footer>
    );
}
