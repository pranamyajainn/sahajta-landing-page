"use client";

import { Sprout } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

export default function FeaturedProduct() {
    return (
        <section className="section-pad section-surface" id="product">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <BlurFade delay={0.1} inView>
                    <span className="micro-label">Our Latest Launch</span>
                </BlurFade>
                <BlurFade delay={0.2} inView>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                            fontWeight: 700,
                            color: "var(--text-dark)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            marginBottom: "48px",
                        }}
                    >
                        We built this. In 24 hours.
                    </h2>
                </BlurFade>

                {/* Testimonial — left gold border */}
                <div
                    style={{
                        backgroundColor: "var(--bg-green-tint)",
                        borderLeft: "3px solid var(--gold)",
                        padding: "24px 32px",
                        marginBottom: "56px",
                        maxWidth: "680px",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontStyle: "italic",
                            fontSize: "1.25rem",
                            color: "var(--text-body)",
                            lineHeight: 1.7,
                            marginBottom: "16px",
                        }}
                    >
                        &ldquo;Awesome Pranamya. Love the gamified approach that you took to
                        help the users.&rdquo;
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "var(--text-dark)",
                            marginBottom: "2px",
                        }}
                    >
                        VidyaSagar Panati
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.8125rem",
                            color: "var(--text-muted)",
                        }}
                    >
                        Loom product demo
                    </p>
                </div>

                {/* Two-column: description left, From/To right */}
                <div
                    style={{ display: "grid", gap: "64px", alignItems: "start" }}
                    className="grid-cols-1 md:grid-cols-2"
                >
                    {/* Left: Description */}
                    <div>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                backgroundColor: "var(--gold-tint)",
                                border: "1px solid rgba(201,160,68,0.25)",
                                color: "var(--gold-dark)",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                fontFamily: "var(--font-inter)",
                                padding: "4px 12px",
                                borderRadius: "100px",
                                letterSpacing: "0.04em",
                                marginBottom: "20px",
                            }}
                        >
                            <Sprout
                                style={{ width: "12px", height: "12px", color: "var(--gold)" }}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                            Launched in 24 hours · Open Source · Free to use
                        </div>

                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1rem",
                                color: "var(--text-body)",
                                lineHeight: 1.7,
                                marginBottom: "32px",
                            }}
                        >
                            A free, gamified debugging experience for AI-native developers who
                            can build — but can&apos;t yet explain what they built. 3 modules.
                            3 hours. One big mindset shift.
                        </p>

                        {/* Stats — large Cormorant numbers in gold */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                padding: "28px 0",
                                borderTop: "1px solid var(--border)",
                                borderBottom: "1px solid var(--border)",
                                marginBottom: "32px",
                            }}
                        >
                            <div style={{ textAlign: "center", padding: "0 8px" }}>
                                <div style={{ marginBottom: "6px" }}>
                                    <NumberTicker value={3} className="stat-number" />
                                </div>
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "0.75rem",
                                        color: "var(--text-muted)",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    Modules
                                </p>
                            </div>

                            <div style={{ textAlign: "center", padding: "0 8px" }}>
                                <div style={{ marginBottom: "6px" }}>
                                    <NumberTicker value={3} className="stat-number" />
                                    <span className="stat-number">h</span>
                                </div>
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "0.75rem",
                                        color: "var(--text-muted)",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    To Complete
                                </p>
                            </div>

                            <div style={{ textAlign: "center", padding: "0 8px" }}>
                                <div style={{ marginBottom: "6px" }}>
                                    <span className="rupee-prefix">₹</span>
                                    <NumberTicker value={1499} className="stat-number" />
                                </div>
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "0.75rem",
                                        color: "var(--text-muted)",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    Certificate
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://vibe2real.codes"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "0.9375rem",
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

                    {/* Right: From / To transformation card */}
                    <div
                        style={{
                            backgroundColor: "var(--bg-white)",
                            border: "1px solid var(--border)",
                            borderLeft: "3px solid var(--gold)",
                            borderRadius: "0 16px 16px 0",
                            overflow: "hidden",
                        }}
                    >
                        {/* FROM */}
                        <div style={{ padding: "28px 32px" }}>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.6875rem",
                                    fontWeight: 500,
                                    color: "var(--text-micro)",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    marginBottom: "10px",
                                }}
                            >
                                From
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontStyle: "italic",
                                    fontSize: "1.25rem",
                                    color: "var(--text-muted)",
                                    lineHeight: 1.5,
                                }}
                            >
                                &ldquo;I built this using AI.&rdquo;
                            </p>
                        </div>

                        {/* Divider */}
                        <div
                            style={{
                                height: "1px",
                                backgroundColor: "var(--border)",
                                margin: "0 32px",
                            }}
                            aria-hidden="true"
                        />

                        {/* TO */}
                        <div style={{ padding: "28px 32px" }}>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.6875rem",
                                    fontWeight: 500,
                                    color: "var(--gold-dark)",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    marginBottom: "10px",
                                }}
                            >
                                To
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontStyle: "italic",
                                    fontSize: "1.25rem",
                                    color: "var(--green-primary)",
                                    lineHeight: 1.5,
                                    fontWeight: 600,
                                }}
                            >
                                &ldquo;I know why this works.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
