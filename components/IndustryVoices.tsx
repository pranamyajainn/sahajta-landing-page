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
        <div className="voices-section py-8" aria-label="Industry perspectives on AI">
            <Marquee className="[--gap:0px] [--duration:40s]" pauseOnHover={false} reverse>
                {[...leaderImages, ...leaderImages].map((imgSrc, i) => (
                    <div key={i} className="flex-shrink-0 border-r border-[#121212]/10" aria-hidden={i >= leaderImages.length}>
                        <img
                            src={imgSrc}
                            alt={`Leader Testimonial ${i + 1}`}
                            className="h-[280px] md:h-[320px] w-auto object-contain bg-white"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
