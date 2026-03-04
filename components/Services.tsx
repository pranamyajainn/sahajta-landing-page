"use client";

import { Brain, Lightbulb, Globe } from "lucide-react";
import { useState } from "react";

const services = [
    {
        Icon: Brain,
        title: "We Build AI Products",
        body: "From concept to deployed product. We design, architect, and ship AI systems built for real-world use — not just demos. vibe2real.codes is our proof.",
        cta: "Work with us on your AI product →",
    },
    {
        Icon: Lightbulb,
        title: "We Help You Use AI",
        body: "If you know AI belongs in your business but don't know where to start — we do. We map the opportunity, design the system, and help you implement without the jargon.",
        cta: "Book a free discovery call →",
    },
    {
        Icon: Globe,
        title: "We Build Your Web Presence",
        body: "Landing pages, websites, and digital presences that are clean, on-brand, and designed to convert. We build for impact, not just aesthetics.",
        cta: "Get a web presence that converts →",
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
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                boxShadow: hovered
                    ? "0 12px 40px rgba(15,45,34,0.10)"
                    : "none",
                transform: hovered ? "translateY(-3px)" : "translateY(0)",
                transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, border-top-color 220ms ease",
                cursor: "default",
            }}
        >
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
    );
}

export default function Services() {
    return (
        <section className="section-pad section-canvas" id="services">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <span className="micro-label">What We Do</span>
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
                    Three ways we can work together
                </h2>

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
