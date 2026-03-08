"use client";

import Image from "next/image";
import { FlickeringGrid } from "./ui/flickering-grid";

const quickLinks = [
    { label: "What We Do", href: "#services" },
    { label: "How We Ship", href: "#process" },
    { label: "Our Work", href: "#ships" },
    { label: "Team", href: "#team" },
    { label: "Start a Project", href: "#contact" },
];

export default function Footer() {
    return (
        <footer
            style={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "var(--bg-cream-dark)",
                borderTop: "1px solid var(--border-strong)",
                minHeight: "340px",
            }}
        >
            {/* ── Layer 0: Background Flickering Grid ── */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <FlickeringGrid
                    squareSize={4}
                    gridGap={5}
                    color="#2D6A52"
                    maxOpacity={0.28}
                    flickerChance={0.05}
                    style={{
                        WebkitMaskImage: "radial-gradient(ellipse 80% 85% at 50% 55%, black 35%, transparent 60%)",
                        maskImage: "radial-gradient(ellipse 80% 85% at 50% 55%, black 35%, transparent 60%)",
                    }}
                />
            </div>

            {/* ── Layer 1: "Sahajta" Masked Grid ── */}
            <div
                aria-hidden="true"
                style={{ position: "absolute", inset: 0, zIndex: 1 }}
            >
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
                    <defs>
                        <clipPath id="sahajtaClip">
                            <text
                                x="50%"
                                y="85%"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontFamily="'Cormorant Garamond', Cormorant, Georgia, serif"
                                fontWeight="700"
                                fontSize="28vw"
                                letterSpacing="-0.03em"
                            >
                                Sahajta
                            </text>
                        </clipPath>
                    </defs>
                    <foreignObject x="0" y="0" width="100%" height="100%" clipPath="url(#sahajtaClip)">
                        {/* @ts-ignore */}
                        <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: "100%", height: "100%" }}>
                            <FlickeringGrid
                                squareSize={5}
                                gridGap={4}
                                color="#1A4A3A"
                                maxOpacity={0.7}
                                flickerChance={0.2}
                            />
                        </div>
                    </foreignObject>
                </svg>
            </div>

            {/* ── Layer 2: Footer content ── */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "44px 24px 40px",
                }}
            >
                {/* Soft background wash behind content row only */}
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "220px",
                        background: "linear-gradient(to bottom, var(--bg-cream-dark) 45%, transparent 100%)",
                        zIndex: -1,
                        pointerEvents: "none",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "24px",
                    }}
                >
                    {/* Brand */}
                    <div>
                        <Image
                            src="/sahajta-logo.png"
                            alt="Sahajta AI Logo"
                            width={120}
                            height={32}
                            style={{ objectFit: "contain", marginBottom: "8px" }}
                        />
                        <p
                            style={{
                                fontFamily: "var(--font-cormorant), Georgia, serif",
                                fontStyle: "italic",
                                fontSize: "0.9375rem",
                                fontWeight: 600,
                                color: "var(--text-body, #2C3E2D)",
                                margin: 0,
                                marginTop: "6px",
                                paddingRight: "24px",
                                display: "inline-block",
                                background: "linear-gradient(to right, var(--bg-cream-dark) 70%, transparent 100%)",
                            }}
                        >
                            We ship. That&apos;s it.
                        </p>
                    </div>

                    {/* Nav */}
                    <nav
                        aria-label="Footer navigation"
                        style={{ display: "flex", gap: "28px", flexWrap: "wrap", paddingTop: "4px" }}
                    >
                        {quickLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    color: "var(--text-body, #2C3E2D)",
                                    textDecoration: "none",
                                    transition: "color 150ms ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green-primary)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body, #2C3E2D)")}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <div style={{ textAlign: "right", paddingTop: "4px" }}>
                        <p style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.8125rem",
                            fontWeight: 500,
                            color: "var(--text-body, #2C3E2D)",
                            marginBottom: "4px",
                            margin: 0,
                        }}>
                            © 2026 Sahajta AI Solution Pvt Ltd.
                        </p>
                        <p style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.8125rem",
                            fontWeight: 500,
                            color: "var(--text-body, #2C3E2D)",
                        }}>
                            sahajta.ai@gmail.com | Bengaluru, Karnataka, India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
