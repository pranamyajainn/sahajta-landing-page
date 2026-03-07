"use client";

import { ArrowRight, Sprout } from "lucide-react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Hero() {
    return (
        <section
            className="relative flex flex-col items-center pt-[calc(64px+48px)] pb-24 bg-bg-cream text-text-body px-4"
            aria-label="Hero"
        >
            <div className="w-full max-w-4xl flex flex-col items-center text-center">
                {/* Badge */}
                <BlurFade delay={0.1}>
                    <div className="inline-flex items-center justify-center rounded-full border border-border-strong/30 px-4 py-1.5 mb-8 bg-gold-tint/50">
                        <AnimatedShinyText className="text-sm font-mono font-bold uppercase tracking-wider text-green-primary flex items-center gap-2">
                            <Sprout className="w-4 h-4 text-gold" strokeWidth={2} />
                            Accepting 2 New Projects This Month
                        </AnimatedShinyText>
                    </div>
                </BlurFade>

                {/* Main Headline - Fully rendered on load per user feedback */}
                <BlurFade delay={0.2}>
                    <h1 className="hero-headline mb-6 flex flex-col gap-2">
                        <span>We don&apos;t build prototypes.</span>
                        <span>We ship real</span>
                        <span className="text-green-primary italic">AI products.</span>
                    </h1>
                </BlurFade>

                {/* Supporting Copy */}
                <BlurFade delay={0.3}>
                    <p className="font-sans text-xl md:text-2xl max-w-2xl text-center mt-2 text-text-body/80 mb-12">
                        Elite AI engineering for founders who need to move faster.
                        Stop talking about AI. Start scaling it.
                    </p>
                </BlurFade>

                {/* CTA Group */}
                <BlurFade delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <a href="#contact" style={{ textDecoration: 'none' }}>
                            <ShimmerButton
                                shimmerColor="var(--gold-tint)"
                                shimmerSize="0.08em"
                                shimmerDuration="2.5s"
                                background="var(--gold)"
                                className="hero-cta-button shadow-xl hover:shadow-2xl transition-all"
                            >
                                <span className="flex items-center gap-2 text-text-dark">
                                    Book your deep dive
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </span>
                            </ShimmerButton>
                        </a>

                        <div className="flex items-center gap-3">
                            <span className="mono-label">LIVE PRODUCT &rarr;</span>
                            <a
                                href="https://vibe2real.codes"
                                target="_blank"
                                className="font-sans text-sm font-medium text-text-muted hover:text-green-primary transition-colors underline decoration-border-strong underline-offset-4"
                            >
                                vibe2real.codes
                            </a>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
