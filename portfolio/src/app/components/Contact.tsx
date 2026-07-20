import { Mail, Link2, Phone } from "lucide-react";

const contacts = [
    { label: "Email", value: "sriman793@gmail.com", href: "mailto:sriman793@gmail.com", Icon: Mail },
    { label: "LinkedIn", value: "sriman-narayana-yendluri", href: "https://linkedin.com/in/sriman-narayana-yendluri-14b34022a", Icon: Link2 },
    { label: "Phone", value: "+91 74168 99743", href: "tel:+917416899743", Icon: Phone },
];

export default function Contact() {
    return (
        <section id="contact" style={{ padding: "36px 0", borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff" }}>
            <div style={{ border: "1px solid #e5e7eb", borderRadius: "10px", backgroundColor: "#ffffff", padding: "20px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                    <div>
                        <span style={{
                            display: "inline-block", fontSize: "10px", fontWeight: 600,
                            textTransform: "uppercase", letterSpacing: "0.07em",
                            border: "1px solid #e5e7eb", borderRadius: "4px",
                            padding: "2px 9px", color: "#6b7280", backgroundColor: "#f3f4f6",
                        }}>Contact</span>
                        <h2 style={{ marginTop: "8px", fontSize: "18px", fontWeight: 700, color: "#111827" }}>
                            Let's build something resilient.
                        </h2>
                        <p style={{ marginTop: "5px", maxWidth: "360px", fontSize: "12px", color: "#6b7280", lineHeight: 1.6 }}>
                            Available for backend engineering roles — API design, database optimisation, and secure microservice delivery.
                        </p>
                    </div>
                    <a href="mailto:sriman793@gmail.com" style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        backgroundColor: "#1d4ed8", color: "#ffffff",
                        borderRadius: "6px", padding: "9px 18px",
                        fontSize: "12px", fontWeight: 600, textDecoration: "none", flexShrink: 0,
                    }}>
                        <Mail size={12} /> Get in Touch
                    </a>
                </div>

                <div style={{
                    marginTop: "16px", paddingTop: "16px",
                    borderTop: "1px solid #e5e7eb",
                    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px",
                }}>
                    {contacts.map(({ label, value, href, Icon }) => (
                        <a key={label} href={href}
                            target={label === "LinkedIn" ? "_blank" : undefined}
                            style={{
                                display: "flex", alignItems: "flex-start", gap: "8px",
                                border: "1px solid #e5e7eb", borderRadius: "7px",
                                backgroundColor: "#ffffff", padding: "10px 12px",
                                textDecoration: "none",
                            }}
                        >
                            <Icon size={13} color="#1d4ed8" style={{ marginTop: "1px", flexShrink: 0 }} />
                            <div>
                                <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.07em", color: "#9ca3af", margin: 0 }}>{label}</p>
                                <p style={{ fontSize: "11px", fontWeight: 500, color: "#111827", margin: "2px 0 0" }}>{value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
