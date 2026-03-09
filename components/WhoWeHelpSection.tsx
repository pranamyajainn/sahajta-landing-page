"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const cards = [
    {
        quote:
            "I have funding and need to hit product-market fit yesterday by shipping an AI-native mvp.",
        attribution: "Seed-Stage Founder",
    },
    {
        quote:
            "Our core product needs AI capabilities safely integrated without breaking our existing Next.js monolith.",
        attribution: "Series A/B Product Lead",
    },
    {
        quote:
            "I'm building everything myself. Nights, weekends, caffeine. The AI layer is the one thing I can't fake — I need someone who actually knows how to ship it.",
        attribution: "Indie Builder & Solo Founder",
    },
];

export default function WhoWeHelpSection() {
    return (
        <section
            className="section-pad section-tint"
            id="who-we-help"
            aria-label="Who We Help"
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <BlurFade delay={0.1} inView>
                    <span className="micro-label">Who We Help</span>
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
                        One of these is you.
                    </h2>
                </BlurFade>

                <div
                    style={{ display: "grid", gap: "24px" }}
                    className="grid-cols-1 md:grid-cols-3"
                >
                    {cards.map((card, i) => (
                        <BlurFade key={i} delay={0.1 + i * 0.07} inView>
                            <MagicCard
                                className="flex flex-col h-full p-8 rounded-none shadow-none bg-[var(--bg-white)] border border-[var(--border)]"
                                gradientColor="var(--gold-tint)"
                            >
                                {/* Quote icon */}
                                <div
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "0px",
                                        backgroundColor: "var(--gold)",
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
                                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            color: "var(--bg-white)",
                                            lineHeight: 1,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        &#8220;
                                    </span>
                                </div>

                                {/* Body */}
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "1rem",
                                        color: "var(--text-body)",
                                        lineHeight: 1.75,
                                        flex: 1,
                                        margin: 0,
                                    }}
                                >
                                    {card.quote}
                                </p>

                                {/* Attribution */}
                                <div
                                    style={{
                                        marginTop: "24px",
                                        paddingTop: "16px",
                                        borderTop: "1px solid var(--border)",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily:
                                                "var(--font-cormorant), Georgia, serif",
                                            fontStyle: "italic",
                                            fontSize: "0.875rem",
                                            color: "var(--green-primary)",
                                            margin: 0,
                                        }}
                                    >
                                        {card.attribution}
                                    </p>
                                </div>
                            </MagicCard>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
