"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
        <div style={{ position: "sticky", top: 0, zIndex: 50, width: "100%", display: "flex", flexDirection: "column" }}>
            {/* Announcement strip */}
            <div className="top-strip">
                <span className="mono-label">NEW</span>
                vibe2real.codes is live — free to play, ₹1,499 for certificate
                <a
                    href="https://vibe2real.codes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="strip-link"
                >
                    Try it →
                </a>
            </div>

            <header
                role="banner"
                style={{
                    width: "100%",
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
                        <Image
                            src="/sahajta-logo.png"
                            alt="Sahajta AI Logo"
                            width={140}
                            height={40}
                            style={{ objectFit: "contain" }}
                            priority
                        />
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
        </div>
    );
}
