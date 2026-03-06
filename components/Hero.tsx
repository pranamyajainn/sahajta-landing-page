"use client";

import { ArrowRight, Sprout } from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TextReveal } from "@/components/ui/text-reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";

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
                        <BlurFade delay={0.1} inView>
                            <span className="micro-label">The Company</span>
                        </BlurFade>

                        {/* Proof badge */}
                        <div className="hero-badge">
                            <Sprout
                                style={{ width: "13px", height: "13px", color: "var(--gold)" }}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                            <AnimatedShinyText shimmerWidth={120}>
                                ✦ vibe2real.codes — shipped in 24 hours
                            </AnimatedShinyText>
                        </div>

                        {/* Headline — 3-line split, Cormorant Black 900 */}
                        <div className="hero-headline" style={{ marginBottom: "28px" }}>
                            We don&apos;t just<br />
                            advise on AI.<br />
                            <em style={{ fontStyle: "italic", color: "var(--green-primary)" }}>
                                We ship it.
                            </em>
                        </div>

                        {/* Sub-headline */}
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1.125rem",
                                fontWeight: 400,
                                color: "var(--text-body)",
                                lineHeight: 1.7,
                                maxWidth: "560px",
                                marginBottom: "8px",
                            }}
                        >
                            Sahajta AI builds AI products the world can use — and brings that
                            same builder&apos;s instinct to your business. AI consulting and web
                            presence, without the complexity.
                        </p>

                        {/* Hero proof line */}
                        <div className="hero-proof-line" style={{ marginBottom: "32px" }}>
                            <span className="mono-label">LIVE PRODUCT →</span>
                            vibe2real.codes — concept to deployment in 24 hours
                        </div>

                        {/* CTA group */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "24px",
                                flexWrap: "wrap",
                            }}
                        >
                            <a href="#contact" style={{ textDecoration: 'none' }}>
                                <ShimmerButton
                                    shimmerColor="var(--gold-tint)"
                                    shimmerSize="0.08em"
                                    shimmerDuration="2.5s"
                                    background="var(--gold)"
                                    className="hero-cta-button"
                                >
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        Book a Free Discovery Call
                                        <ArrowRight
                                            style={{ width: "16px", height: "16px" }}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </ShimmerButton>
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
                            <BorderBeam
                                size={80}
                                duration={10}
                                colorFrom="var(--gold)"
                                colorTo="var(--green-primary)"
                                borderWidth={1.5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
