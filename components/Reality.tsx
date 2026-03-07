"use client";

import {
    ImageGenIcon,
    VoiceAssistantsIcon,
    WorkflowAutomationIcon,
    VideoGenIcon2,
    ContextualAgentsIcon,
    RealtimeAgentsIcon,
    InternalToolsIcon,
    ContentCreationIcon
} from "@/components/icons/RealityIcons";
import { BlurFade } from "@/components/ui/blur-fade";

const capabilities = [
    { icon: ImageGenIcon, label: "Image\nGeneration" },
    { icon: VoiceAssistantsIcon, label: "Voice\nAssistants" },
    { icon: WorkflowAutomationIcon, label: "Workflow\nAutomation" },
    { icon: VideoGenIcon2, label: "Video\nGeneration" },
    { icon: ContextualAgentsIcon, label: "Contextual\nAgents" },
    { icon: RealtimeAgentsIcon, label: "Realtime\nAgents" },
    { icon: InternalToolsIcon, label: "Internal\nTools" },
    { icon: ContentCreationIcon, label: "Content\nCreation" },
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
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {capabilities.map((item, index) => (
                        <BlurFade key={index} delay={0.1 + index * 0.05} inView>
                            <div className="relative p-6 bg-[#EFEFEF]/50 flex flex-row items-center gap-4 transition-all duration-200 group border border-transparent hover:bg-[#EFEFEF]/80 min-h-[96px]">
                                {/* 4 Corner Accent Markers */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FF5A36]"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FF5A36]"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#FF5A36]"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FF5A36]"></div>

                                <div className="flex items-center justify-center shrink-0">
                                    <item.icon className="w-10 h-10 text-[#FF5A36] group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <span className="font-sans font-medium text-[15px] text-[#555] leading-tight whitespace-pre-line">
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
