"use client";

import { Marquee } from "@/components/ui/marquee";

const industryVoices = [
    {
        quote: "Software is eating the world, but AI is going to eat software.",
        name: "Jensen Huang",
        title: "CEO, NVIDIA",
    },
    {
        quote: "AI will be the greatest force for economic empowerment we have ever seen.",
        name: "Sam Altman",
        title: "CEO, OpenAI",
    },
    {
        quote: "AI is the symbiote. Makes you stronger, better, faster.",
        name: "Varun Mayya",
        title: "Founder & Entrepreneur",
    },
    {
        quote: "By leveraging AI, we can amplify our thinking and take on greater challenges.",
        name: "John Maeda",
        title: "Chief Experience Officer, Sapient",
    },
    {
        quote: "AI will not just be a new tool — it will be a fundamental shift in how all technology is built and used.",
        name: "Marc Andreessen",
        title: "VC, Andreessen Horowitz",
    },
];

export default function IndustryVoices() {
    return (
        <div className="voices-section" aria-label="Industry perspectives on AI">
            <Marquee className="[--gap:20px] [--duration:35s]" pauseOnHover={false} reverse>
                {[...industryVoices, ...industryVoices].map((v, i) => (
                    <div key={i} className="voice-card">
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
