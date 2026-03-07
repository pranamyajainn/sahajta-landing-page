"use client";

import { Marquee } from "@/components/ui/marquee";

const industryVoices = [
    {
        quote: "Sahajta shipped our MVP in 48 hours.",
        name: "CEO",
        title: "100xEngineers",
    },
    {
        quote: "The only agency that understands App Router and AI.",
        name: "CTO",
        title: "Namyah",
    },
    {
        quote: "Zero fluff. Just elite execution.",
        name: "Founder",
        title: "Stratapilot AI",
    },
];

export default function IndustryVoices() {
    return (
        <div className="voices-section" aria-label="Industry perspectives on AI">
            <Marquee className="[--gap:20px] [--duration:35s]" pauseOnHover={false} reverse>
                {[...industryVoices, ...industryVoices].map((v, i) => (
                    <div key={i} className="voice-card" aria-hidden={i >= industryVoices.length}>
                        <div className="voice-quote-mark">"</div>
                        <p className="voice-quote">{v.quote}</p>
                        <div className="voice-attribution">
                            <span className="voice-name">{v.name}</span>
                            <span className="voice-title">{v.title}</span>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
