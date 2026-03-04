"use client";

import { ArrowRight, Sprout } from "lucide-react";

export default function Hero() {
    return (
        <section
            className="section-pad section-canvas"
            style={{ paddingTop: "calc(128px + 64px)" }}
            aria-label="Hero"
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
                                backgroundColor: "var(--gold-tint)",
                                border: "1px solid rgba(201,160,68,0.3)",
                                color: "var(--gold-dark)",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                padding: "5px 12px",
                                borderRadius: "100px",
                                marginBottom: "28px",
                                fontFamily: "var(--font-inter)",
                                letterSpacing: "0.01em",
                            }}
                        >
                            <Sprout
                                style={{ width: "13px", height: "13px", color: "var(--gold)" }}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                            {/* {{HERO_BADGE_TEXT}} */}
                            vibe2real.codes — shipped in 24 hours →
                        </div>

                        {/* Headline */}
                        <h1
                            style={{
                                fontFamily: "var(--font-cormorant), Georgia, serif",
                                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                                fontWeight: 700,
                                color: "var(--text-dark)",
                                lineHeight: 1.05,
                                letterSpacing: "-0.03em",
                                marginBottom: "24px",
                            }}
                        >
                            {/* {{HERO_HEADLINE}} */}
                            We don&apos;t just advise on AI.{" "}
                            <em
                                style={{
                                    fontStyle: "italic",
                                    color: "var(--green-primary)",
                                }}
                            >
                                We ship it.
                            </em>
                        </h1>

                        {/* Sub-headline */}
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1.125rem",
                                fontWeight: 400,
                                color: "var(--text-body)",
                                lineHeight: 1.7,
                                maxWidth: "560px",
                                marginBottom: "40px",
                            }}
                        >
                            {/* {{HERO_SUBHEAD}} */}
                            Sahajta AI builds AI products the world can use — and brings that
                            same builder&apos;s instinct to your business. AI consulting and web
                            presence, without the complexity.
                        </p>

                        {/* CTA group */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "24px",
                                flexWrap: "wrap",
                            }}
                        >
                            <a
                                href="#contact"
                                className="btn-gold"
                            >
                                Book a Free Discovery Call
                                <ArrowRight
                                    style={{ width: "16px", height: "16px" }}
                                    aria-hidden="true"
                                />
                            </a>

                            <a
                                href="#ships"
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.9375rem",
                                    fontWeight: 500,
                                    color: "var(--green-mid)",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    borderBottom: "1px solid transparent",
                                    transition: "border-color 150ms ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.borderBottomColor = "var(--green-mid)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.borderBottomColor = "transparent")
                                }
                            >
                                See what we&apos;ve shipped →
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: product card — desktop only */}
                    <div className="hidden md:block">
                        <div
                            className="card-hover"
                            style={{
                                backgroundColor: "var(--bg-white)",
                                border: "1px solid var(--border)",
                                borderRadius: "16px",
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            {/* Gold top accent strip */}
                            <div
                                style={{ height: "3px", backgroundColor: "var(--gold)" }}
                                aria-hidden="true"
                            />

                            {/* Faint sprout watermark — top right */}
                            <div
                                aria-hidden="true"
                                style={{
                                    position: "absolute",
                                    top: "16px",
                                    right: "16px",
                                    width: "80px",
                                    height: "80px",
                                    opacity: 0.08,
                                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A4D3A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 20s4-24 17 0'/%3E%3Cpath d='M5 20s0-20 12-12'/%3E%3Cpath d='M3 20s0-10 7-8'/%3E%3C/svg%3E\")",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "top right",
                                    backgroundSize: "contain",
                                }}
                            />

                            <div style={{ padding: "32px" }}>
                                <span
                                    style={{
                                        display: "block",
                                        fontSize: "0.6875rem",
                                        fontWeight: 500,
                                        color: "var(--text-micro)",
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        marginBottom: "12px",
                                        fontFamily: "var(--font-inter)",
                                    }}
                                >
                                    Our Product
                                </span>

                                <h3
                                    style={{
                                        fontFamily: "var(--font-cormorant), Georgia, serif",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        color: "var(--green-primary)",
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
                                        color: "var(--text-muted)",
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
                                        borderTop: "1px solid var(--border)",
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
                                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                                    fontSize: "1.5rem",
                                                    fontWeight: 700,
                                                    color: "var(--gold-dark)",
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
                                                    color: "var(--text-micro)",
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
                                        color: "var(--gold-dark)",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.textDecoration = "underline")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.textDecoration = "none")
                                    }
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
