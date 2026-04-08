"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const PAIN_POINTS = [
    {
        quote: "My staff was spending four hours every day entering invoice data into spreadsheets. Mistakes were constant and fixing them cost us more time. I needed it fixed fast.",
        attribution: "Business Owner, CA Firm · Bangalore",
    },
    {
        quote: "Customers were messaging us on WhatsApp at midnight asking about their orders. We were losing sales because no one was there to reply. Now the system handles it.",
        attribution: "Founder, D2C Fashion Brand · Mumbai",
    },
    {
        quote: "My competitor launched something that looked more modern and my customers noticed. I did not know how to keep up. Sahajta showed me exactly what to do and built it.",
        attribution: "Owner, Retail Business · Delhi",
    },
    {
        quote: "Every agency I spoke to used terms I did not understand. Sahajta explained everything in plain language, told me what it would cost, and delivered what they promised.",
        attribution: "Founder, Logistics Company · Bangalore",
    },
    {
        quote: "We were manually calling every customer after an order to give them an update. It was taking up half my team's day. Now it happens automatically the moment an order moves.",
        attribution: "Operations Head, E-commerce Business · Hyderabad",
    },
    {
        quote: "I had no idea AI could do something practical for a business like mine. I thought it was only for big companies. Sahajta built something for us in days and it paid for itself within the month.",
        attribution: "Owner, Wholesale Trading Business · Surat",
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
                        Four businesses. Four problems that were costing them every single day.
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
