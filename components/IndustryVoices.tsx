"use client";

import { Marquee } from "@/components/ui/marquee";

const leaderImages = [
    "/images/leaders-say/Screenshot 2026-03-07 at 23.31.20.png",
    "/images/leaders-say/Screenshot 2026-03-07 at 23.31.34.png",
    "/images/leaders-say/Screenshot 2026-03-07 at 23.31.56.png",
    "/images/leaders-say/Screenshot 2026-03-07 at 23.32.16.png",
];

export default function IndustryVoices() {
    return (
        <>
            <section className="py-24 bg-[var(--bg-cream-dark)] border-t border-[#2D5016]/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    {/* MONO LABEL */}
                    <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016]/60 mb-6">
                        THE WINDOW IS CLOSING
                    </p>

                    {/* HEADLINE */}
                    <h2
                        className="font-[var(--font-cormorant)] font-black text-[clamp(3rem,7vw,5.5rem)] leading-[1.0] tracking-tight text-[#0B2818] mb-8"
                        style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 900 }}
                    >
                        The AI revolution<br />
                        won&apos;t wait for you.
                    </h2>

                    {/* BODY */}
                    <p className="font-[var(--font-inter)] text-lg text-[#0B2818]/60 max-w-xl mx-auto mb-12 leading-relaxed">
                        Founders who move now compound the advantage. Those who wait close the gap on nothing.
                    </p>

                    {/* CTA ROW */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 bg-[#0B2818] text-[var(--bg-cream)] px-10 py-4 rounded-none font-mono text-sm tracking-[0.12em] uppercase hover:bg-[#2D5016] transition-colors duration-200 border-2 border-[#0B2818] hover:border-[#2D5016]"
                        >
                            Book a Discovery Call
                            <span className="text-[var(--gold)] font-mono">→</span>
                        </a>

                        <p className="font-mono text-xs text-[#0B2818]/40 tracking-widest uppercase shrink-0">
                            20 min · No pitch · Just clarity
                        </p>
                    </div>

                    {/* STRUCTURAL DIVIDER */}
                    <div className="mt-20 pt-8 border-t border-[#2D5016]/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                        <span className="font-mono text-xs text-[#0B2818]/30 tracking-widest uppercase">Est. 2024</span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-[#0B2818]/20" />
                        <span className="font-mono text-xs text-[#0B2818]/30 tracking-widest uppercase">Bangalore, India</span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-[#0B2818]/20" />
                        <span className="font-mono text-xs text-[#0B2818]/30 tracking-widest uppercase">Sahajta AI</span>
                    </div>
                </div>
            </section>

            <section className="voices-section py-8 bg-white" aria-label="Industry perspectives on AI">
                <div className="relative border-y border-[#121212]/10 bg-white">
                    <Marquee className="[--gap:0px] [--duration:40s]" pauseOnHover={false} reverse>
                        {[...leaderImages, ...leaderImages].map((imgSrc, i) => (
                            <div key={i} className="flex-shrink-0 border-r border-[#121212]/10 bg-white" aria-hidden={i >= leaderImages.length}>
                                <img
                                    src={imgSrc}
                                    alt={`Leader Testimonial ${i + 1}`}
                                    className="h-[280px] md:h-[320px] w-auto object-contain bg-white block"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>
        </>
    );
}
