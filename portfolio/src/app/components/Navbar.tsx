"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header style={{
            position: "sticky", top: 0, zIndex: 50,
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
            boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
            transition: "box-shadow 0.2s",
        }}>
            <nav style={{
                maxWidth: "1024px", margin: "0 auto",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 24px",
            }}>
                <a href="#top" style={{ color: "#111827", textDecoration: "none", fontSize: "14px", fontWeight: 700, letterSpacing: "-0.01em" }}>
                    Sriman Narayana
                </a>

                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {links.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{
                            padding: "6px 14px", fontSize: "13px", color: "#6b7280",
                            textDecoration: "none", borderRadius: "6px",
                            transition: "color 0.15s",
                        }}
                            onMouseEnter={e => (e.currentTarget.style.color = "#111827")}
                            onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a href="mailto:sriman793@gmail.com" style={{
                    backgroundColor: "#1d4ed8", color: "#ffffff",
                    borderRadius: "6px", padding: "7px 16px",
                    fontSize: "12px", fontWeight: 600, textDecoration: "none",
                    transition: "background 0.15s",
                }}>
                    Hire Me
                </a>
            </nav>
        </header>
    );
}
