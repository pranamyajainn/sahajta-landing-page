"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Linkedin } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export default function BookACall() {
    useEffect(() => {
        (async () => {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "var(--green-primary)" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section className="section-pad section-canvas" id="contact">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                {/* {{CAL_LINK}} — replace with actual Cal.com link */}

                {/* Header */}
                <BlurFade delay={0.1} inView>
                    <span className="micro-label">Let&apos;s Talk</span>
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
                            marginBottom: "12px",
                        }}
                    >
                        20 minutes. No pitch. Just clarity.
                    </h2>
                </BlurFade>
                <p
                    style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "1.0625rem",
                        color: "var(--text-muted)",
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
                        border: "1px solid var(--border)",
                        borderRadius: "16px",
                        overflow: "hidden",
                        marginBottom: "40px",
                        minHeight: "600px",
                        backgroundColor: "var(--bg-cream-dark)",
                    }}
                >
                    <Cal
                        namespace="30min"
                        calLink="pranamyajain/30min"
                        style={{ width: "100%", height: "600px", overflow: "scroll" }}
                        config={{ layout: "month_view" }}
                    />
                </div>

                {/* Email + LinkedIn — equal visual weight */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "32px",
                        flexWrap: "wrap",
                        paddingTop: "24px",
                        borderTop: "1px solid var(--border)",
                    }}
                >
                    {/* Email */}
                    <div>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "0.6875rem",
                                color: "var(--text-micro)",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                marginBottom: "6px",
                            }}
                        >
                            Prefer email?
                        </p>
                        <a
                            href="mailto:sahajta.ai@gmail.com"
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1rem",
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
                            {/* {{CONTACT_EMAIL}} */}
                            sahajta.ai@gmail.com
                        </a>
                    </div>

                    <div
                        style={{
                            width: "1px",
                            height: "32px",
                            backgroundColor: "var(--border)",
                            flexShrink: 0,
                        }}
                        aria-hidden="true"
                    />

                    {/* LinkedIn */}
                    <div>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "0.6875rem",
                                color: "var(--text-micro)",
                                letterSpacing: "0.14em",
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
                                    aria-label={`${person.name} on LinkedIn`}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "5px",
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
                                    <Linkedin
                                        style={{ width: "14px", height: "14px", color: "var(--green-light)" }}
                                        aria-hidden="true"
                                    />
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
