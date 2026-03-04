"use client";

import { MessageSquare, Lock, Hammer, Rocket } from "lucide-react";

const steps = [
    {
        num: "1",
        icon: MessageSquare,
        title: "Vibe Capture",
        duration: "4h",
        description: "We listen deeply and map exactly what you need to ship.",
    },
    {
        num: "2",
        icon: Lock,
        title: "Scope Lock",
        duration: "4h",
        description: "Tight brief, clear deliverables, zero scope creep.",
    },
    {
        num: "3",
        icon: Hammer,
        title: "Build & Iterate",
        duration: "12h",
        description: "We build fast, share progress, and refine in real-time.",
    },
    {
        num: "4",
        icon: Rocket,
        title: "Ship + Certify",
        duration: "4h",
        description: "Deployed, tested, and handed over with documentation.",
    },
];

export default function HowSahajtaShips() {
    return (
        <section
            className="section-pad section-surface"
            id="process"
            aria-label="How Sahajta Ships"
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <span className="micro-label">The 24-Hour Process</span>
                <h2
                    style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                        fontWeight: 600,
                        color: "var(--text-dark)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        marginBottom: "64px",
                        maxWidth: "560px",
                    }}
                >
                    Four steps. One promise.{" "}
                    <em style={{ fontStyle: "italic", color: "var(--green-primary)" }}>
                        We ship it.
                    </em>
                </h2>

                {/* Timeline container — relative for the gold line */}
                <div
                    style={{ position: "relative" }}
                    role="list"
                    aria-label="Shipping process steps"
                >
                    {/* Gold connecting line — desktop */}
                    <div
                        className="hidden md:block"
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            top: "24px", /* center of the 48px icon */
                            left: "24px",
                            right: "24px",
                            height: "1px",
                            backgroundColor: "var(--gold)",
                            opacity: 0.35,
                            zIndex: 0,
                        }}
                    />

                    {/* Four columns */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: "40px",
                            position: "relative",
                            zIndex: 1,
                        }}
                        className="md:grid-cols-4"
                    >
                        {steps.map((step) => {
                            const IconComponent = step.icon;
                            return (
                                <div
                                    key={step.num}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                    role="listitem"
                                >
                                    {/* Circle with icon */}
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "50%",
                                            backgroundColor: "var(--gold-tint)",
                                            border: "1.5px solid rgba(201,160,68,0.4)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "20px",
                                            flexShrink: 0,
                                        }}
                                        aria-hidden="true"
                                    >
                                        <IconComponent
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                color: "var(--gold)",
                                            }}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* Step number */}
                                    <span
                                        style={{
                                            fontFamily: "var(--font-inter)",
                                            fontSize: "0.6875rem",
                                            fontWeight: 500,
                                            color: "var(--gold-dark)",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.14em",
                                            marginBottom: "8px",
                                        }}
                                        aria-label={`Step ${step.num} — ${step.duration}`}
                                    >
                                        {step.num} · {step.duration}
                                    </span>

                                    {/* Title */}
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-cormorant), Georgia, serif",
                                            fontSize: "1.375rem",
                                            fontWeight: 600,
                                            color: "var(--green-primary)",
                                            lineHeight: 1.2,
                                            marginBottom: "10px",
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        style={{
                                            fontFamily: "var(--font-inter)",
                                            fontSize: "0.9375rem",
                                            color: "var(--text-body)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
