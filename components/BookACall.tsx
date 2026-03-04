"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Linkedin } from "lucide-react";

export default function BookACall() {
    useEffect(() => {
        (async () => {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                styles: { branding: { brandColor: "#4A6FA5" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section className="section-pad section-canvas" id="contact">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                {/* Header */}
                <span className="micro-label">Let&apos;s Talk</span>
                <h2
                    style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        marginBottom: "12px",
                    }}
                >
                    Let&apos;s find out if we&apos;re a fit.
                </h2>
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "1.0625rem",
                        color: "#6B6B6B",
                        lineHeight: 1.7,
                        maxWidth: "480px",
                        marginBottom: "48px",
                    }}
                >
                    A 20-minute conversation to understand what you&apos;re building and
                    whether we can help. No pitch deck. No pressure.
                </p>

                {/* Cal.com inline embed */}
                <div
                    style={{
                        border: "1px solid #E2E0DC",
                        borderRadius: "12px",
                        overflow: "hidden",
                        marginBottom: "40px",
                    }}
                >
                    <Cal
                        namespace="30min"
                        calLink="pranamyajain/30min"
                        style={{ width: "100%", height: "600px", overflow: "scroll" }}
                        config={{ layout: "month_view" }}
                    />
                </div>

                {/* Email — equal visual weight to the calendar CTA */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "32px",
                        flexWrap: "wrap",
                        paddingTop: "24px",
                        borderTop: "1px solid #E2E0DC",
                    }}
                >
                    <div>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "0.75rem",
                                color: "#9A9A9A",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                marginBottom: "6px",
                            }}
                        >
                            Prefer email?
                        </p>
                        <a
                            href="mailto:jain@pranamya.tech"
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1rem",
                                fontWeight: 500,
                                color: "#4A6FA5",
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                        >
                            jain@pranamya.tech
                        </a>
                    </div>

                    <div
                        style={{
                            width: "1px",
                            height: "32px",
                            backgroundColor: "#E2E0DC",
                            flexShrink: 0,
                        }}
                    />

                    <div>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "0.75rem",
                                color: "#9A9A9A",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                marginBottom: "6px",
                            }}
                        >
                            Connect on LinkedIn
                        </p>
                        <div style={{ display: "flex", gap: "20px" }}>
                            {[
                                { name: "Pranamya Jain", href: "https://www.linkedin.com/in/pranamya-jainn/" },
                                { name: "Shubhang Sethi", href: "https://www.linkedin.com/in/shubhangsethi/" },
                            ].map((person) => (
                                <a
                                    key={person.href}
                                    href={person.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "5px",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "0.9375rem",
                                        fontWeight: 500,
                                        color: "#4A6FA5",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                                >
                                    <Linkedin style={{ width: "14px", height: "14px" }} />
                                    {person.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
