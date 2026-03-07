"use client";

import {
    RagSearchIcon,
    VoiceAgentsIcon,
    WorkflowIcon,
    VideoGenIcon,
    ContextualAgentsIcon,
    AnalyticsIcon,
    InternalToolsIcon,
    ContentPipelinesIcon
} from "@/components/icons/RealityIcons";
import { BlurFade } from "@/components/ui/blur-fade";

const capabilities = [
    { icon: RagSearchIcon, label: "RAG & Search" },
    { icon: VoiceAgentsIcon, label: "Voice Agents" },
    { icon: WorkflowIcon, label: "Workflow Automation" },
    { icon: VideoGenIcon, label: "Video Generation" },
    { icon: ContextualAgentsIcon, label: "Contextual Agents" },
    { icon: AnalyticsIcon, label: "Realtime Analytics" },
    { icon: InternalToolsIcon, label: "Internal Tools" },
    { icon: ContentPipelinesIcon, label: "Content Pipelines" },
];

export default function Reality() {
    return (
        <section className="bg-bg-cream py-24 px-8 md:px-16" id="reality">
            <div className="max-w-[1100px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <BlurFade delay={0.1} inView>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#0B422A]/60 mb-4 block">
                            THE REALITY
                        </span>
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                        <h2 className="font-serif font-black text-5xl md:text-6xl text-center leading-tight">
                            <span className="text-[#121212]">AI is not just the future.</span>
                            <br />
                            <span className="text-[#D9B75B]">It is the present.</span>
                        </h2>
                    </BlurFade>

                    <BlurFade delay={0.3} inView>
                        <p className="font-sans text-sm text-[#121212]/50 mt-4 max-w-2xl mx-auto text-center leading-relaxed">
                            Founders and product leads already know that AI is not a distant promise. It is reshaping their competitive edge today.
                        </p>
                    </BlurFade>
                </div>

                {/* Capability Grid */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {capabilities.map((item, index) => (
                        <BlurFade key={index} delay={0.1 + index * 0.05} inView>
                            <div className="border border-[#121212]/10 rounded-xl p-6 bg-white/50 flex flex-row items-center gap-4 hover:border-[#0B422A]/30 hover:shadow-sm transition-all duration-200 group">
                                <div className="p-3 rounded-xl bg-[#0B422A]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0B422A]/20 transition-colors">
                                    <item.icon className="w-7 h-7 text-[#0B422A]" />
                                </div>
                                <span className="font-sans font-semibold text-sm text-[#121212] leading-snug">
                                    {item.label}
                                </span>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
