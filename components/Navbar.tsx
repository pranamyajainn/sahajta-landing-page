"use client";

import { useState, useEffect } from "react";
import { Sprout } from "lucide-react";

const navLinks = [
    { label: "What We Do", href: "#services" },
    { label: "Our Product", href: "#product" },
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
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: scrolled ? "rgba(248,247,244,0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid #E2E0DC" : "1px solid transparent",
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
                <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                    <Sprout style={{ width: "20px", height: "20px", color: "#7AAE8A" }} strokeWidth={1.5} />
                    <span
                        style={{
                            fontFamily: "var(--font-lora), Georgia, serif",
                            fontWeight: 500,
                            fontSize: "1.0625rem",
                            color: "#1A1A1A",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Sahajta AI
                    </span>
                </a>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            style={{
                                fontFamily: "var(--font-inter), system-ui, sans-serif",
                                fontSize: "0.875rem",
                                fontWeight: 400,
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

                {/* CTA — shown on all screen sizes */}
                <a
                    href="#contact"
                    style={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        backgroundColor: "#4A6FA5",
                        padding: "8px 18px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        transition: "background-color 150ms ease, box-shadow 150ms ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#3A5A8A";
                        e.currentTarget.style.boxShadow = "0 1px 3px rgba(74,111,165,0.3)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#4A6FA5";
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    Book a Free Call
                </a>
            </div>
        </header>
    );
}
