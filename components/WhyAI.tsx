"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export default function WhyAI() {
    return (
        <section className="bg-[#FDFCF0] py-24 px-8 md:px-16" id="why-ai">
            <div className="max-w-[1100px] mx-auto">
                {/* Top Header */}
                <div className="mb-16">
                    <BlurFade delay={0.1} inView>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#0B422A]/60 mb-4 block">
                            THE NUMBERS
                        </span>
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                        <h2 className="font-serif font-black text-5xl md:text-6xl text-[#121212] leading-tight">
                            What we&apos;ve shipped. What it took.
                        </h2>
                    </BlurFade>

                    <BlurFade delay={0.3} inView>
                        <p className="font-sans text-sm text-[#121212]/50 mt-4 max-w-2xl leading-relaxed">
                            No inflated metrics. Just the record.
                        </p>
                    </BlurFade>
                </div>

                {/* Three-Column Grid */}
                <BlurFade delay={0.4} inView>
                    <div className="border border-[#121212]/10 rounded-none overflow-hidden bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {/* COLUMN 1: THE OPPORTUNITY */}
                            <div className="p-8 border-b md:border-b-0 md:border-r border-[#121212]/10">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#0B422A] mb-8 block">
                                    SHIPPED
                                </span>
                                <div className="mb-8 flex flex-col">
                                    <div className="font-serif font-black text-[90px] leading-none flex items-baseline">
                                        <span className="text-[#121212]">25</span>
                                        <span className="text-[#D9B75B]">+</span>
                                    </div>
                                    <div className="font-serif font-bold text-2xl text-[#121212]/60 -mt-2">
                                        AI projects & websites
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "AI products, automations, and websites shipped",
                                        "From MVPs to agent pipelines to marketing sites",
                                        "Clients across India and global early-stage teams",
                                        "Every project scoped, built, and shipped by us"
                                    ].map((list, i) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-[#D9B75B] mt-1.5 shrink-0" />
                                            <span className="font-sans text-sm text-[#121212]/70 leading-snug">
                                                {list}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* COLUMN 2: THE AI ADOPTION CURVE */}
                            <div className="p-8 border-b md:border-b-0 md:border-r border-[#121212]/10 flex flex-col justify-between">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#0B422A] mb-8 block">
                                    THE AI ADOPTION CURVE
                                </span>
                                <div className="flex-1 flex items-center">
                                    <div className="w-full rounded-none overflow-hidden mix-blend-multiply">
                                        <Image
                                            src="/curve_green.avif"
                                            alt="AI Adoption Curve"
                                            width={400}
                                            height={200}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* COLUMN 3: TWO STACKED SUB-CELLS */}
                            <div className="flex flex-col">
                                {/* Top sub-cell */}
                                <div className="p-8 border-b border-[#121212]/10">
                                    <span className="font-mono text-[10px] uppercase text-[#0B422A] mb-4 block">
                                        TYPICAL PROJECT TIMELINE
                                    </span>
                                    <div className="font-serif font-black text-7xl text-[#D9B75B] mb-2">
                                        48h
                                    </div>
                                    <p className="font-sans text-xs text-[#121212]/50">
                                        from discovery call to live product
                                    </p>
                                </div>
                                {/* Bottom sub-cell */}
                                <div className="p-8">
                                    <span className="font-mono text-[10px] uppercase text-[#0B422A] mb-6 block">
                                        WHO WE BUILD FOR
                                    </span>
                                    <ul className="space-y-3">
                                        {[
                                            "Seed & Series A Founders",
                                            "Product Leads",
                                            "Indie Builders",
                                            "Enterprise Innovation Teams"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center font-sans text-sm text-[#121212]">
                                                <span className="text-[#D9B75B] mr-2">→</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM ROW */}
                        <div className="border-t border-[#121212]/10 px-8 py-8 bg-[#FDFCF0]/50">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#121212]/40 mb-6 block text-center">
                                TRUSTED BY TEAMS AT
                            </span>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                                {[
                                    "100xEngineers",
                                    "Namyah",
                                    "Stratapilot AI"
                                ].map((logo, i) => (
                                    <span key={i} className="font-sans font-bold text-[#121212]/30 text-lg">
                                        {logo}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
