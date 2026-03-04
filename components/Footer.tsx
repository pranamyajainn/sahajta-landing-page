"use client";

import { Sprout } from "lucide-react";

const quickLinks = [
    { label: "What We Do", href: "#services" },
    { label: "How We Ship", href: "#process" },
    { label: "Our Work", href: "#ships" },
    { label: "Team", href: "#team" },
    { label: "Book a Call", href: "#contact" },
];

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "var(--bg-cream-dark)",
                borderTop: "1px solid var(--border-strong)",
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
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginBottom: "6px",
                            }}
                        >
                            <Sprout
                                style={{ width: "16px", height: "16px", color: "var(--gold)" }}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                            <span
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontWeight: 700,
                                    fontSize: "1rem",
                                    color: "var(--green-primary)",
                                }}
                            >
                                Sahajta AI
                            </span>
                        </div>
                        <p
                            style={{
                                fontFamily: "var(--font-cormorant), Georgia, serif",
                                fontStyle: "italic",
                                fontSize: "0.9375rem",
                                color: "var(--text-muted)",
                            }}
                        >
                            We have a passion for Simplicity.
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav aria-label="Footer navigation" style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
                        {quickLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.875rem",
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "color 150ms ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--green-primary)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--text-muted)")
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.8125rem",
                            color: "var(--text-micro)",
                        }}
                    >
                        © 2026 Sahajta AI
                    </p>
                </div>
            </div>
        </footer>
    );
}
