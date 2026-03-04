"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section
            className="section-pad section-canvas"
            style={{ paddingTop: "calc(120px + 64px)" }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "64px",
                        alignItems: "center",
                    }}
                    className="md:grid-cols-[1fr_400px]"
                >
                    {/* LEFT: Text block */}
                    <div style={{ maxWidth: "700px" }}>
                        {/* Micro label */}
                        <span className="micro-label">The Company</span>

                        {/* Proof badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                backgroundColor: "#EEF5F1",
                                border: "1px solid rgba(122,174,138,0.3)",
                                color: "#7AAE8A",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                padding: "5px 12px",
                                borderRadius: "100px",
                                marginBottom: "28px",
                                fontFamily: "var(--font-inter)",
                                letterSpacing: "0.01em",
                            }}
                        >
                            vibe2real.codes — shipped in 24 hours →
                        </div>

                        {/* Headline */}
                        <h1
                            style={{
                                fontFamily: "var(--font-lora), Georgia, serif",
                                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                                fontWeight: 700,
                                color: "#1A1A1A",
                                lineHeight: 1.05,
                                letterSpacing: "-0.03em",
                                marginBottom: "24px",
                            }}
                        >
                            We don&apos;t just advise on AI.{" "}
                            <em style={{ fontStyle: "italic", color: "#4A6FA5" }}>We ship it.</em>
                        </h1>

                        {/* Sub-headline */}
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1.125rem",
                                fontWeight: 400,
                                color: "#3D3D3D",
                                lineHeight: 1.7,
                                maxWidth: "560px",
                                marginBottom: "40px",
                            }}
                        >
                            Sahajta AI builds AI products the world can use — and brings that
                            same builder&apos;s instinct to your business. AI consulting and web
                            presence, without the complexity.
                        </p>

                        {/* CTA group */}
                        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                            <a
                                href="#contact"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    backgroundColor: "#4A6FA5",
                                    color: "#FFFFFF",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.9375rem",
                                    fontWeight: 600,
                                    padding: "12px 24px",
                                    borderRadius: "6px",
                                    textDecoration: "none",
                                    transition: "background-color 150ms ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3A5A8A")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4A6FA5")}
                            >
                                Book a Free Discovery Call
                                <ArrowRight style={{ width: "16px", height: "16px" }} />
                            </a>

                            <a
                                href="#product"
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.9375rem",
                                    fontWeight: 500,
                                    color: "#4A6FA5",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    borderBottom: "1px solid transparent",
                                    transition: "border-color 150ms ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#4A6FA5")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
                            >
                                See what we&apos;ve shipped →
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: vibe2real.codes card mockup — desktop only */}
                    <div className="hidden md:block">
                        <div
                            style={{
                                backgroundColor: "#FFFFFF",
                                border: "1px solid #E2E0DC",
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            {/* Top accent strip */}
                            <div style={{ height: "3px", backgroundColor: "#7AAE8A" }} />

                            <div style={{ padding: "32px" }}>
                                <span
                                    style={{
                                        display: "block",
                                        fontSize: "0.6875rem",
                                        fontWeight: 500,
                                        color: "#9A9A9A",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        marginBottom: "12px",
                                        fontFamily: "var(--font-inter)",
                                    }}
                                >
                                    Our Product
                                </span>

                                <h3
                                    style={{
                                        fontFamily: "var(--font-lora), Georgia, serif",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        color: "#1A1A1A",
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.1,
                                        marginBottom: "8px",
                                    }}
                                >
                                    vibe2real.codes
                                </h3>

                                <p
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "0.9375rem",
                                        color: "#6B6B6B",
                                        lineHeight: 1.6,
                                        marginBottom: "28px",
                                    }}
                                >
                                    From &ldquo;I built this&rdquo; to &ldquo;I know why this works.&rdquo;
                                </p>

                                {/* Stats */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        gap: "0",
                                        borderTop: "1px solid #E2E0DC",
                                        paddingTop: "20px",
                                        marginBottom: "24px",
                                    }}
                                >
                                    {[
                                        { num: "3", label: "modules" },
                                        { num: "3h", label: "to complete" },
                                        { num: "Free", label: "to play" },
                                    ].map((s, i) => (
                                        <div key={i} style={{ textAlign: "center" }}>
                                            <p
                                                style={{
                                                    fontFamily: "var(--font-lora), Georgia, serif",
                                                    fontSize: "1.5rem",
                                                    fontWeight: 700,
                                                    color: "#7AAE8A",
                                                    lineHeight: 1,
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                {s.num}
                                            </p>
                                            <p
                                                style={{
                                                    fontFamily: "var(--font-inter)",
                                                    fontSize: "0.6875rem",
                                                    color: "#9A9A9A",
                                                    letterSpacing: "0.04em",
                                                }}
                                            >
                                                {s.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://vibe2real.codes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "0.875rem",
                                        fontWeight: 500,
                                        color: "#4A6FA5",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                                >
                                    Explore vibe2real.codes →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
