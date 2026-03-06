"use client";

import { useState } from "react";
import Image from "next/image";
import { Sprout, Linkedin, Twitter } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const founders = [
    {
        name: "Pranamya Jain",
        role: "CO-FOUNDER & SOLUTIONS ARCHITECT",
        initials: "PJ",
        photo: "/team/pranamya.png",
        bullets: [
            "Launched vibe2real.codes from idea to live product in 24 hours.",
            "Builds full-stack AI systems for real-world deployment — not demos.",
            "Specializes in LLMs, agentic workflows, and production-grade AI infrastructure.",
        ],
        stat: "AI BUILDER · CLASS OF 2026",
        linkedin: "https://www.linkedin.com/in/pranamya-jainn/",
        twitter: null,
    },
    {
        name: "Shubhang Sethi",
        role: "CO-FOUNDER & CEO",
        initials: "SS",
        photo: "/team/shubhang.png",
        bullets: [
            "Serial entrepreneur and founder of Namyah.",
            "Leads business strategy and operations so builders can ship without distraction.",
            "Turns client problems into scoped, executable AI projects — fast.",
        ],
        stat: "SERIAL FOUNDER · 2+ VENTURES",
        linkedin: "https://www.linkedin.com/in/shubhangsethi/",
        twitter: null,
    },
];

function FounderCard({ founder }: { founder: (typeof founders)[0] }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "var(--bg-white)",
                border: `1px solid var(--border)`,
                borderTop: hovered ? "2px solid var(--gold)" : "1px solid var(--border)",
                borderRadius: "12px",
                overflow: "hidden",
                padding: 0,
                boxShadow: hovered
                    ? "0 12px 40px rgba(26, 77, 58, 0.09)"
                    : "none",
                transform: hovered ? "translateY(-3px)" : "translateY(0)",
                transition: "all 220ms ease",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Photo block */}
            {founder.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={founder.photo}
                    alt={founder.name}
                    style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                    }}
                />
            ) : (
                <div
                    style={{
                        background: "var(--bg-cream-dark)",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px 12px 0 0",
                    }}
                    aria-hidden="true"
                >
                    <span
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontWeight: 700,
                            fontSize: "3rem",
                            color: "var(--gold)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {founder.initials}
                    </span>
                </div>
            )}

            {/* Content block */}
            <div style={{ padding: "28px 32px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Name */}
                <h3
                    style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontWeight: 600,
                        fontSize: "1.625rem",
                        color: "var(--green-primary)",
                        letterSpacing: "-0.01em",
                        marginBottom: "4px",
                    }}
                >
                    {founder.name}
                </h3>

                {/* Role */}
                <p
                    style={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontWeight: 500,
                        fontSize: "0.6875rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-micro)",
                        marginBottom: "20px",
                    }}
                >
                    {founder.role}
                </p>

                {/* Thin divider */}
                <div
                    style={{
                        height: "1px",
                        backgroundColor: "var(--border)",
                        marginBottom: "20px",
                    }}
                    aria-hidden="true"
                />

                {/* Result bullets */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                    {founder.bullets.map((bullet, i) => (
                        <li
                            key={i}
                            style={{
                                display: "flex",
                                gap: "10px",
                                marginBottom: i < founder.bullets.length - 1 ? "10px" : 0,
                                alignItems: "flex-start",
                            }}
                        >
                            <Sprout
                                style={{
                                    width: "14px",
                                    height: "14px",
                                    color: "var(--gold)",
                                    flexShrink: 0,
                                    marginTop: "3px",
                                }}
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />
                            <span
                                style={{
                                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "0.875rem",
                                    color: "var(--text-body)",
                                    lineHeight: 1.6,
                                }}
                            >
                                {bullet}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Bottom row: stat + social */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "24px",
                        paddingTop: "20px",
                        borderTop: "1px solid var(--border)",
                        flexWrap: "wrap",
                        gap: "12px",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                            fontWeight: 500,
                            fontSize: "0.6875rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--text-micro)",
                        }}
                    >
                        {founder.stat}
                    </span>

                    {/* Social icons */}
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        {founder.linkedin && (
                            <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${founder.name} on LinkedIn`}
                                style={{ color: "var(--text-muted)", transition: "color 150ms ease" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--gold)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--text-muted)")
                                }
                            >
                                <Linkedin style={{ width: "18px", height: "18px" }} />
                            </a>
                        )}
                        {founder.twitter && (
                            <a
                                href={founder.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${founder.name} on X`}
                                style={{ color: "var(--text-muted)", transition: "color 150ms ease" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--gold)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--text-muted)")
                                }
                            >
                                <Twitter style={{ width: "18px", height: "18px" }} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section className="section-pad section-canvas" id="team">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                {/* Header */}
                <BlurFade delay={0.1} inView>
                    <span
                        style={{
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                            fontSize: "0.6875rem",
                            fontWeight: 500,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "var(--text-micro)",
                            display: "block",
                            marginBottom: "16px",
                        }}
                    >
                        The People
                    </span>
                </BlurFade>

                <BlurFade delay={0.2} inView>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 700,
                            color: "var(--text-dark)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            marginBottom: "16px",
                        }}
                    >
                        The people behind every deadline met.
                    </h2>
                </BlurFade>

                <BlurFade delay={0.3} inView>
                    <p
                        style={{
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                            fontWeight: 400,
                            fontSize: "1rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.7,
                            maxWidth: "600px",
                            marginBottom: "56px",
                        }}
                    >
                        Every project we take on is held to the same standard we hold our own products. If we wouldn&apos;t ship it, we won&apos;t hand it to you.
                    </p>
                </BlurFade>

                {/* Cards grid */}
                <div
                    style={{ display: "grid", gap: "32px" }}
                    className="grid-cols-1 md:grid-cols-2"
                >
                    {founders.map((founder, i) => (
                        <BlurFade key={i} delay={0.2 + i * 0.1} inView>
                            <FounderCard founder={founder} />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
