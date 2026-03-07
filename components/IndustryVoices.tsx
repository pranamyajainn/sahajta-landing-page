"use client";

import Image from "next/image";
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
            <Marquee className="[--gap:24px] [--duration:40s]" pauseOnHover={false} reverse>
                {[...leaderImages, ...leaderImages].map((imgSrc, i) => (
                    <div key={i} className="flex-shrink-0" aria-hidden={i >= leaderImages.length}>
                        <Image
                            src={imgSrc}
                            alt={`Leader Testimonial ${i + 1}`}
                            width={340} // Approximate dimensions based on standard tweet card structure
                            height={180}
                            className="rounded-xl border border-black/10 shadow-sm object-contain h-auto"
                            unoptimized // Use unoptimized if there are weird NextImage caching issues on these raw screenshots
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
