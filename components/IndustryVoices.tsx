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
        <section className="voices-section py-20 bg-[#F2F1EA]" aria-label="Industry perspectives on AI">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#121212] mb-6">
                    The AI revolution<br className="hidden sm:block" /> won&apos;t wait for you.
                </h2>
                <p className="text-lg md:text-xl text-[#121212]/70 max-w-2xl mx-auto mb-10">
                    Join the industry leaders who are already leveraging AI to amplify their capabilities and achieve unprecedented heights. Let&apos;s build your AI advantage.
                </p>
                <div className="flex justify-center">
                    <a href="#book" className="inline-flex h-12 items-center justify-center rounded-full bg-[#2D5016] px-8 text-base font-medium text-white shadow-sm transition-all hover:bg-[#1a300d] hover:shadow-md">
                        Book a Discovery Call
                    </a>
                </div>
            </div>

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
    );
}
