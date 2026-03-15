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
                {/* CTA group */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
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
                        Contact us at hello@sahajta.com
                    </a>
                </div>
            </div>
        </section>
    );
}
