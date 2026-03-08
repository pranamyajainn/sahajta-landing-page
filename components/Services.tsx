"use client";

import { Brain, Lightbulb, Globe } from "lucide-react";
import { useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

const services = [
    {
        Icon: Brain,
        title: "MVP Engineering",
        body: "From zero to live product with full auth, db, and AI core. We do not build prototypes. We ship products ready for real users.",
        cta: "Work with us on your AI product →",
    },
    {
        Icon: Lightbulb,
        title: "AI Feature Integration",
        body: "Dropping intelligence into an existing Next.js monolith safely. We map the opportunity, design the system, and ship it this week.",
        cta: "Discuss AI integration →",
    },
    {
        Icon: Globe,
        title: "AI Automation & Agents",
        body: "n8n pipelines, agentic workflows, LLM integrations, and custom AI agents — built to run your operations on autopilot. We engineer from scratch. No templates, no generic setups.",
        cta: "Build your automation →",
    },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
    const [hovered, setHovered] = useState(false);
    const { Icon, title, body, cta } = service;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "var(--bg-white)",
                border: `1px solid ${hovered ? "var(--gold)" : "var(--border)"}`,
                borderTop: `3px solid ${hovered ? "var(--gold)" : "transparent"}`,
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                boxShadow: hovered
                    ? "0 12px 40px rgba(15,45,34,0.10)"
                    : "none",
                transform: hovered ? "translateY(-3px)" : "translateY(0)",
                transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, border-top-color 220ms ease",
                cursor: "default",
                height: "100%",
            }}
        >
            <MagicCard
                className="service-card"
                gradientColor="rgba(201, 160, 68, 0.07)"
                gradientSize={200}
                gradientOpacity={0.8}
            >
                <div style={{ padding: "40px", display: "flex", flexDirection: "column", height: "100%" }}>
                    {/* Icon */}
                    <div
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "10px",
                            backgroundColor: "var(--gold-tint)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "24px",
                        }}
                    >
                        <Icon
                            style={{ width: "22px", height: "22px", color: "var(--gold)" }}
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                    </div>

                    {/* Title */}
                    <h3
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontSize: "1.375rem",
                            fontWeight: 700,
                            color: "var(--green-primary)",
                            letterSpacing: "-0.015em",
                            lineHeight: 1.2,
                            marginBottom: "12px",
                        }}
                    >
                        {title}
                    </h3>

                    {/* Body */}
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "1rem",
                            color: "var(--text-body)",
                            lineHeight: 1.7,
                            marginBottom: "24px",
                            flex: 1,
                        }}
                    >
                        {body}
                    </p>

                    {/* CTA link */}
                    <a
                        href="#contact"
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
                        {cta}
                    </a>
                </div>
            </MagicCard>
        </div>
    );
}

export default function Services() {
    return (
        <section className="section-pad section-canvas" id="services">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <BlurFade delay={0.1} inView>
                    <span className="micro-label">What We Do</span>
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
                        Three ways we ship for you.
                    </h2>
                </BlurFade>

                <div
                    style={{ display: "grid", gap: "32px" }}
                    className="grid-cols-1 md:grid-cols-3"
                >
                    {services.map((s, i) => (
                        <ServiceCard key={i} service={s} />
                    ))}
                </div>
            </div>
        </section>
    );
}
