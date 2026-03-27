"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
    {
        num: "01",
        title: "Discovery",
        description: "Zero BS architecture review and sync.",
    },
    {
        num: "02",
        title: "The SLA",
        description: "24–48 hours to live product environment.",
    },
    {
        num: "03",
        title: "Implementation",
        description: "Production-grade code, deployed daily. No half-builds.",
    },
    {
        num: "04",
        title: "Handover",
        description: "You own the code.",
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
                <BlurFade delay={0.1} inView>
                    <span className="micro-label">The Process</span>
                </BlurFade>
                <BlurFade delay={0.2} inView>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontSize: "clamp(1.5rem, 4vw, 3rem)",
                            fontWeight: 700,
                            color: "var(--text-dark)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.05,
                            marginBottom: "clamp(32px, 5vw, 64px)",
                            maxWidth: "560px",
                        }}
                    >
                        From your idea to live product.
                    </h2>
                </BlurFade>

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
                                    {/* Step number circle — JetBrains Mono */}
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "50%",
                                            backgroundColor: "var(--gold-tint)",
                                            border: "1.5px solid var(--gold)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "20px",
                                            flexShrink: 0,
                                        }}
                                        aria-hidden="true"
                                    >
                                        <span
                                            style={{
                                                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                                                fontSize: "16px",
                                                fontWeight: 500,
                                                color: "var(--gold)",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* Step number label */}
                                    <span
                                        style={{
                                            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                                            fontSize: "0.6875rem",
                                            fontWeight: 500,
                                            color: "var(--gold-dark)",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.14em",
                                            marginBottom: "8px",
                                            display: "block",
                                        }}
                                    >
                                        STEP {step.num}
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
