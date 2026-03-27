"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const founders = [
    {
        name: "Shubhang Sethi",
        role: "CO-FOUNDER & CEO",
        initials: "SS",
        photo: "/team/shubhang.png",
        bullets: [
            "Serial entrepreneur and founder of Namyah.",
            "Leads business strategy and operations so builders can ship without distraction.",
            "Turns client problems into scoped, executable AI projects — fast.",
        ],
        stat: "SERIAL FOUNDER · 2+ VENTURES",
        linkedin: "https://www.linkedin.com/in/shubhangsethi/",
        twitter: null,
        instagram: "https://www.instagram.com/shubhangsethi",
    },
    {
        name: "Pranamya Jain",
        role: "CO-FOUNDER & SOLUTIONS ARCHITECT",
        initials: "PJ",
        photo: "/team/pranamya.png",
        bullets: [
            "Launched vibe2real.codes from idea to live product in 24 hours.",
            "Builds full-stack AI systems for real-world deployment — not demos.",
            "Specializes in LLMs, agentic workflows, and production-grade AI infrastructure.",
        ],
        stat: "AI BUILDER · DEVELOPER",
        linkedin: "https://www.linkedin.com/in/pranamya-jainn/",
        twitter: "https://x.com/pranamyajain_",
        instagram: null,
    },
];

function FounderCard({
    founder,
    objectPosition = "object-center"
}: {
    founder: (typeof founders)[0];
    objectPosition?: string;
}) {
    return (
        <div
            className="border border-[#1A1A1A]/10 rounded-none bg-white p-4 md:p-6 flex flex-col transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg h-full"
        >
            {/* Image container */}
            <div className="relative w-full h-[240px] md:h-[320px] overflow-hidden rounded-none mb-6">
                {founder.photo ? (
                    <Image
                        src={founder.photo}
                        alt={founder.name}
                        fill
                        className={`object-cover ${objectPosition}`}
                    />
                ) : (
                    <div className="absolute inset-0 bg-bg-cream-dark flex items-center justify-center">
                        <span className="font-serif font-bold text-5xl text-gold">
                            {founder.initials}
                        </span>
                    </div>
                )}
            </div>

            {/* Name & Title */}
            <h3 className="font-serif font-black text-2xl text-[#0B422A]">
                {founder.name}
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#121212]/50 mt-1">
                {founder.role}
            </p>

            {/* Divider */}
            <hr className="border-[#1A1A1A]/10 my-4" />

            {/* Bullet points */}
            <div className="flex-1 space-y-3">
                {founder.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 bg-[#D9B75B] mt-1.5 shrink-0 rounded-sm" />
                        <span className="font-sans text-sm text-[#121212]/70 leading-snug">
                            {bullet}
                        </span>
                    </div>
                ))}
            </div>

            {/* Card Footer */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#1A1A1A]/10">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#121212]/40">
                    {founder.stat}
                </span>
                <div className="flex items-center gap-3">
                    {founder.linkedin && (
                        <a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0B422A] hover:text-gold transition-colors"
                            aria-label={`${founder.name} LinkedIn`}
                        >
                            <Linkedin size={16} />
                        </a>
                    )}
                    {founder.twitter && (
                        <a
                            href={founder.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0B422A] hover:text-gold transition-colors"
                            aria-label={`${founder.name} Twitter`}
                        >
                            <Twitter size={16} />
                        </a>
                    )}
                    {founder.instagram && (
                        <a
                            href={founder.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0B422A] hover:text-gold transition-colors"
                            aria-label={`${founder.name} Instagram`}
                        >
                            <Instagram size={16} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section className="section-pad section-canvas" id="team">
            <div className="max-w-[1100px] mx-auto px-6">
                {/* Header */}
                <BlurFade delay={0.1} inView>
                    <span className="micro-label">The People</span>
                </BlurFade>

                <BlurFade delay={0.2} inView>
                    <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-text-dark tracking-[-0.02em] leading-[1.1] mb-4">
                        The people behind every deadline met.
                    </h2>
                </BlurFade>

                <BlurFade delay={0.3} inView>
                    <p className="font-sans text-lg text-text-muted leading-relaxed max-w-2xl mb-14">
                        Every project we take on is held to the same standard we hold our own products. If we wouldn&apos;t ship it, we won&apos;t hand it to you.
                    </p>
                </BlurFade>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {founders.map((founder, i) => (
                        <BlurFade key={i} delay={0.2 + i * 0.1} inView>
                            <FounderCard
                                founder={founder}
                                objectPosition={founder.name === "Pranamya Jain" ? "object-top" : "object-[center_20%]"}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
