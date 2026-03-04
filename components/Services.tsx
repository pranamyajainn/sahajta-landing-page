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

function ServiceCard({ service }: { service: typeof services[0] }) {
    const [hovered, setHovered] = useState(false);
    const { Icon, title, body, cta } = service;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E0DC",
                borderRadius: "12px",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                boxShadow: hovered
                    ? "inset 0 2px 0 0 #7AAE8A, 0 8px 32px rgba(0,0,0,0.07)"
                    : "none",
                transition: "box-shadow 200ms ease",
                cursor: "default",
            }}
        >
            {/* Icon */}
            <div
                style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    backgroundColor: "#EDECEA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                }}
            >
                <Icon style={{ width: "22px", height: "22px", color: "#4A6FA5" }} strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3
                style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: "1.375rem",
                    fontWeight: 700,
                    color: "#1A1A1A",
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
                    color: "#3D3D3D",
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
                    color: "#4A6FA5",
                    textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
                {cta}
            </a>
        </div>
    );
}

export default function Services() {
    return (
        <section className="section-pad section-canvas">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <span className="micro-label">What We Do</span>
                <h2
                    style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                        fontWeight: 700,
                        color: "#1A1A1A",
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
