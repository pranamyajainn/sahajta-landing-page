"use client";

import { useState, useEffect } from "react";
import { Sprout } from "lucide-react";

const navLinks = [
    { label: "What We Do", href: "#services" },
    { label: "How We Ship", href: "#process" },
    { label: "Our Work", href: "#ships" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            role="banner"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: scrolled
                    ? "rgba(245,240,232,0.96)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled
                    ? "1px solid var(--border)"
                    : "1px solid transparent",
                transition: "all 200ms ease",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "0 24px",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <a
                    href="#"
                    aria-label="Sahajta AI — home"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        textDecoration: "none",
                    }}
                >
                    <Sprout
                        style={{ width: "20px", height: "20px", color: "var(--gold)" }}
                        strokeWidth={1.5}
                        aria-hidden="true"
                    />
                    <span
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontWeight: 700,
                            fontSize: "1.125rem",
                            color: "var(--green-primary)",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Sahajta AI
                    </span>
                </a>

                {/* Desktop nav — with gold sprout divider */}
                <nav
                    aria-label="Main navigation"
                    className="hidden md:flex items-center"
                    style={{ gap: "0" }}
                >
                    {/* Gold sprout divider */}
                    <span
                        aria-hidden="true"
                        style={{
                            display: "inline-block",
                            width: "1px",
                            height: "8px",
                            backgroundColor: "var(--gold)",
                            opacity: 0.7,
                            marginRight: "28px",
                            flexShrink: 0,
                        }}
                    />
                    <div style={{ display: "flex", gap: "28px" }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                                    fontSize: "0.875rem",
                                    fontWeight: 400,
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "color 150ms ease",
                                    paddingBottom: "2px",
                                    borderBottom: "1px solid transparent",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--green-primary)";
                                    e.currentTarget.style.borderBottomColor = "var(--border-strong)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--text-muted)";
                                    e.currentTarget.style.borderBottomColor = "transparent";
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Gold CTA */}
                <a
                    href="#contact"
                    className="btn-gold"
                    style={{ padding: "8px 18px", fontSize: "0.875rem" }}
                >
                    Book a Free Call
                </a>
            </div>
        </header>
    );
}
