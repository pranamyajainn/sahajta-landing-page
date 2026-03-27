"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const PAIN_POINTS = [
    {
        quote: "I have 3 months of runway left. I need an AI-powered MVP live before my next investor meeting — not a Figma prototype, a working product.",
        attribution: "Seed-stage founder, B2B SaaS.",
    },
    {
        quote: "My engineering team is deep in the core product. I need someone to drop an AI feature into our Next.js stack without touching what's already working.",
        attribution: "Product lead, Series A startup.",
    },
    {
        quote: "I won a hackathon with an idea. Now I need to turn that proof-of-concept into something I can put in front of real users this week.",
        attribution: "Solo founder, pre-revenue.",
    },
    {
        quote: "We've been talking about AI integration for six months. My board is asking why we haven't shipped anything. I need a team that actually builds.",
        attribution: "CTO, growth-stage company.",
    },
    {
        quote: "I have the domain knowledge and the users. I just need the AI and engineering layer built properly — not outsourced to a junior dev farm.",
        attribution: "Indie builder, domain expert.",
    },
    {
        quote: "My competitor just launched an AI feature. I need to ship a better version in two weeks or I lose the positioning we've spent two years building.",
        attribution: "Founder, established product.",
    },
] as const;

export default function Testimonials() {
    return (
        <section className="py-24 bg-[var(--bg-cream)]" id="testimonials" aria-label="Who Comes To Us">
            <div className="max-w-6xl mx-auto px-6">
                {/* SECTION LABEL */}
                <BlurFade delay={0.1} inView>
                    <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016]/60 mb-4">
                        WHO COMES TO US
                    </p>
                </BlurFade>

                {/* HEADLINE */}
                <BlurFade delay={0.2} inView>
                    <h2
                        className="font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#0B2818] mb-4 max-w-2xl"
                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 900 }}
                    >
                        The exact moment they called us.
                    </h2>
                </BlurFade>

                {/* SUBHEAD */}
                <BlurFade delay={0.3} inView>
                    <p className="font-[var(--font-inter)] text-base text-[#0B2818]/50 mb-16 max-w-xl">
                        Six founders. Six situations where waiting any longer wasn&apos;t an option.
                    </p>
                </BlurFade>

                {/* 6-CARD GRID */}
                <BlurFade delay={0.4} inView>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2D5016]/10 border border-[#2D5016]/10">
                        {PAIN_POINTS.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[var(--bg-cream)] p-5 md:p-8 flex flex-col gap-4 md:gap-6 hover:bg-[#2D5016]/[0.03] transition-colors duration-200"
                            >
                                {/* QUOTE MARK */}
                                <div className="w-8 h-8 bg-[#2D5016] flex items-center justify-center flex-shrink-0">
                                    <span className="text-[var(--bg-cream)] font-mono text-sm font-bold leading-none">
                                        &ldquo;
                                    </span>
                                </div>

                                {/* QUOTE TEXT */}
                                <p className="font-[var(--font-inter)] text-[#0B2818] text-base leading-relaxed flex-1">
                                    {item.quote}
                                </p>

                                {/* ATTRIBUTION */}
                                <p className="font-mono text-xs text-[#2D5016] tracking-wide uppercase">
                                    {item.attribution}
                                </p>
                            </div>
                        ))}
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
