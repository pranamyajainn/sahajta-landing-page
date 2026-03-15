"use client";

import { ArrowRight } from "lucide-react";

export default function UrgencyBanner() {
    return (
        <section
            aria-label="Availability notice"
            style={{
                backgroundColor: "var(--bg-green-tint)",
                borderLeft: "3px solid var(--gold)",
                padding: "20px 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    flexWrap: "wrap",
                }}
            >
                {/* Text */}
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--text-body)",
                    }}
                >
                    We take on {" "}
                    <strong
                        style={{
                            color: "var(--green-primary)",
                            fontWeight: 700,
                        }}
                    >
                        3 clients per quarter
                    </strong>
                    . We write every line of code ourselves. That&apos;s the trade-off.
                </p>

                {/* CTA group */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="#contact"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.9375rem",
                            fontWeight: 600,
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
                        See if there&apos;s a slot open
                        <ArrowRight
                            style={{ width: "14px", height: "14px" }}
                            aria-hidden="true"
                        />
                    </a>

                    <span
                        aria-hidden="true"
                        style={{
                            color: "var(--border-strong)",
                            fontSize: "1rem",
                            lineHeight: 1,
                        }}
                    >
                        ·
                    </span>

                    <a
                        href="mailto:hello@sahajta.com"
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.875rem",
                            fontWeight: 400,
                            color: "var(--text-muted)",
                            textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.textDecoration = "underline")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.textDecoration = "none")
                        }
                    >
                        Or email hello@sahajta.com
                    </a>
                </div>
            </div>
        </section>
    );
}
