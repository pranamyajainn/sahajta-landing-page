"use client";

import { Sprout } from "lucide-react";

const quickLinks = [
    { label: "What We Do", href: "#services" },
    { label: "Our Product", href: "#product" },
    { label: "Team", href: "#team" },
    { label: "Book a Call", href: "#contact" },
];

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#EDECEA",
                borderTop: "1px solid #C8C5BF",
                padding: "48px 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "0 24px",
                }}
            >
                {/* One-row layout on desktop */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "24px",
                    }}
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                            <Sprout style={{ width: "16px", height: "16px", color: "#7AAE8A" }} strokeWidth={1.5} />
                            <span
                                style={{
                                    fontFamily: "var(--font-lora), Georgia, serif",
                                    fontWeight: 500,
                                    fontSize: "1rem",
                                    color: "#1A1A1A",
                                }}
                            >
                                Sahajta AI
                            </span>
                        </div>
                        <p
                            style={{
                                fontFamily: "var(--font-lora), Georgia, serif",
                                fontStyle: "italic",
                                fontSize: "0.875rem",
                                color: "#6B6B6B",
                            }}
                        >
                            We have a passion for Simplicity.
                        </p>
                    </div>

                    {/* Nav links — center */}
                    <nav style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
                        {quickLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.875rem",
                                    color: "#6B6B6B",
                                    textDecoration: "none",
                                    transition: "color 150ms ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B6B")}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Copyright — right */}
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.8125rem",
                            color: "#9A9A9A",
                        }}
                    >
                        © 2026 Sahajta AI
                    </p>
                </div>
            </div>
        </footer>
    );
}
