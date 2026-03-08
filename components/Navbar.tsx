"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
    { label: "Work", href: "#ships" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Team", href: "#team" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            setMenuOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <div style={{ position: "sticky", top: 0, zIndex: 50, width: "100%", display: "flex", flexDirection: "column" }}>
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

                    {/* Desktop nav */}
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

                    {/* Mobile burger button */}
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                    >
                        <span className={`block w-5 h-px bg-[#0B2818] transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                        <span className={`block w-5 h-px bg-[#0B2818] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-px bg-[#0B2818] transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
                    </button>

                    {/* Gold CTA — desktop only */}
                    <a
                        href="#contact"
                        className="btn-gold hidden md:inline-flex"
                        style={{ padding: "8px 18px", fontSize: "0.875rem" }}
                    >
                        Start a Project
                    </a>
                </div>
            </header>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-30 bg-[#F5F0E8] flex flex-col pt-24 px-8 gap-8 md:hidden">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-mono text-xs tracking-[0.2em] uppercase text-[#0B2818]/60 hover:text-[#0B2818] transition-colors py-4 border-b border-[#2D5016]/10"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 inline-flex items-center gap-3 bg-[#0B2818] text-[#F5F0E8] px-8 py-4 rounded-none font-mono text-xs tracking-[0.12em] uppercase self-start"
                    >
                        Start a Project <span className="text-[#C9A84C]">→</span>
                    </a>
                </div>
            )}
        </div>
    );
}
