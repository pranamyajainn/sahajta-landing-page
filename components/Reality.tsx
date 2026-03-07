"use client";

import {
    Image as ImageIcon,
    Mic,
    Workflow,
    Video,
    Bot,
    BarChart2,
    Wrench,
    FileText
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const capabilities = [
    { icon: ImageIcon, label: "RAG & Search" },
    { icon: Mic, label: "Voice Agents" },
    { icon: Workflow, label: "Workflow Automation" },
    { icon: Video, label: "Video Generation" },
    { icon: Bot, label: "Contextual Agents" },
    { icon: BarChart2, label: "Realtime Analytics" },
    { icon: Wrench, label: "Internal Tools" },
    { icon: FileText, label: "Content Pipelines" },
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
                                <div className="w-10 h-10 rounded-lg bg-[#0B422A]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0B422A]/20 transition-colors">
                                    <item.icon size={20} className="text-[#0B422A]" />
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
