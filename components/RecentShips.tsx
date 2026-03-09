'use client';

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const CASE_STUDIES = [
    {
        index: "01",
        title: "Stratapilot",
        category: "AI PRODUCT",
        tags: ["Multi-LLM Routing", "Prompt Library", "Batch Processing"],
        problem: "Marketing teams were spending hours manually prompting AI tools with no consistency, no versioning, and no visibility into which outputs actually performed.",
        solution: "Built a creative intelligence platform with multi-LLM routing, a Creative DNA ad schema for structured output, versioned prompt library, batch processing, confidence scoring, and human-in-the-loop overrides.",
        impact: "Teams went from one-off AI experiments to structured, repeatable creative workflows — with every output scored and versioned.",
        year: "2025",
        role: "Full Product Build",
        link: "#",
        status: "LIVE"
    },
    {
        index: "02",
        title: "HireAI",
        category: "RECRUITMENT TECH",
        tags: ["Flask", "Google Gemini", "ElevenLabs", "AI Voice Interviews"],
        problem: "Traditional recruitment is manual, slow, and misses strong candidates — costing companies time and money on every hire cycle.",
        solution: "Built a full recruitment platform with AI-powered candidate matching, automated resume parsing, AI voice interviews via ElevenLabs, and natural language candidate search.",
        impact: "Reduced screening time significantly, modernized the candidate experience, and improved alignment between candidates and roles.",
        year: "2024",
        role: "MVP Engineering",
        link: "#",
        status: "SHIPPED"
    },
    {
        index: "03",
        title: "Invoice AI Parser",
        category: "DOCUMENT AUTOMATION",
        tags: ["n8n", "Gemini Vision", "Telegram Bot", "Google Sheets"],
        problem: "Clients were sending messy invoice and receipt photos over Telegram. Manual data extraction was slow, error-prone, and creating bookkeeping backlogs.",
        solution: "Automated pipeline that receives images from Telegram, uses Gemini Vision to extract structured fields, validates the data, and logs everything into Google Sheets instantly.",
        impact: "Eliminated manual bookkeeping work. Every invoice processed in seconds with zero human intervention.",
        year: "2024",
        role: "AI Automation",
        link: "#",
        status: "SHIPPED"
    },
    {
        index: "04",
        title: "Blog Writing Agent",
        category: "CONTENT AUTOMATION",
        tags: ["n8n", "OpenAI", "Multi-Agent Pipeline"],
        problem: "AI-generated content felt generic. Teams were spending as much time editing AI drafts as writing from scratch.",
        solution: "Three-stage agentic pipeline: Research Agent → Draft Agent → Refinement Agent. Each stage specialises. The final output reads human.",
        impact: "Blog produced in under 3 minutes. Engagement up, unsubscribes down. Content team's editing time cut to near zero.",
        year: "2024",
        role: "Agentic Workflow",
        link: "#",
        status: "SHIPPED"
    },
] as const;

export default function RecentShips() {
    return (
        <section className="py-24 bg-[var(--bg-cream)]" id="ships" aria-label="Our Work">
            <div className="max-w-6xl mx-auto px-6">
                {/* SECTION LABEL */}
                <BlurFade delay={0.1} inView>
                    <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016]/60 mb-4">
                        OUR WORK
                    </p>
                </BlurFade>

                {/* HEADLINE */}
                <BlurFade delay={0.2} inView>
                    <h2
                        className="font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#0B2818] mb-4 max-w-2xl"
                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 900 }}
                    >
                        Four problems. Four AI systems. All shipped.
                    </h2>
                </BlurFade>

                {/* SUBHEAD */}
                <BlurFade delay={0.3} inView>
                    <p className="font-[var(--font-inter)] text-base text-[#0B2818]/50 mb-16 max-w-xl">
                        Every project below was scoped, built, and deployed by the same team that will build yours.
                    </p>
                </BlurFade>

                {/* CASE STUDY GRID */}
                <BlurFade delay={0.4} inView>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#2D5016]/10 border border-[#2D5016]/10">
                        {CASE_STUDIES.map((study) => (
                            <MagicCard
                                key={study.index}
                                className="flex flex-col gap-5 p-8 bg-[var(--bg-cream)] border-none rounded-none shadow-none hover:border-[#2D5016]/30 transition-colors duration-200"
                                gradientColor="var(--gold-tint)"
                            >
                                {/* TOP ROW: Index + Status */}
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs tracking-widest uppercase text-[#2D5016]/50">
                                        {study.index}
                                    </span>
                                    <span className="font-mono text-[10px] tracking-widest uppercase border border-[#2D5016]/30 px-2 py-0.5 text-[#2D5016]">
                                        {study.status}
                                    </span>
                                </div>

                                {/* TITLE */}
                                <h3
                                    className="font-black text-3xl leading-tight text-[#0B2818]"
                                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 900 }}
                                >
                                    {study.title}
                                </h3>

                                {/* CATEGORY */}
                                <p className="font-mono text-[10px] tracking-widest uppercase text-[#0B2818]/40">
                                    {study.category}
                                </p>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-2">
                                    {study.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="font-mono text-[10px] tracking-wide uppercase border border-[#2D5016]/20 px-2 py-0.5 text-[#2D5016]/60"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* PROBLEM */}
                                <p className="text-sm leading-relaxed text-[#0B2818]/80" style={{ fontFamily: "var(--font-inter)" }}>
                                    <strong className="text-[#0B2818]">Problem:</strong> {study.problem}
                                </p>

                                {/* SOLUTION */}
                                <p className="text-sm leading-relaxed text-[#0B2818]/60" style={{ fontFamily: "var(--font-inter)" }}>
                                    <strong className="text-[#0B2818]/80">Solution:</strong> {study.solution}
                                </p>

                                {/* IMPACT */}
                                <p className="text-sm leading-relaxed text-[#2D5016]" style={{ fontFamily: "var(--font-inter)" }}>
                                    <strong>Impact:</strong> {study.impact}
                                </p>

                                {/* YEAR + ROLE */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#2D5016]/10">
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#0B2818]/30">
                                        {study.year}
                                    </span>
                                    <span className="w-1 h-1 bg-[#0B2818]/20 rounded-full" />
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#0B2818]/30">
                                        {study.role}
                                    </span>
                                </div>
                            </MagicCard>
                        ))}
                    </div>
                </BlurFade>
            </div>
        </section>
    );
}
