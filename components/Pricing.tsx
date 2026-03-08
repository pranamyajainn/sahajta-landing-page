'use client';

const PRICING_TIERS = [
    {
        index: "01",
        name: "AI Automation & Agents",
        from: "₹40K",
        description: "n8n pipelines, agentic workflows, Telegram bots, document parsers, lead gen automations. Scoped, built, deployed. No templates.",
        includes: [
            "Full automation architecture",
            "Custom agent logic — no generic setups",
            "Google Sheets / Notion / Slack integrations",
            "Delivery in 48–72 hours for scoped builds",
            "You own the workflow"
        ],
        cta: "Start a Project →",
        highlight: false
    },
    {
        index: "02",
        name: "Website Design & Development",
        from: "₹35K",
        description: "Clean, fast, conversion-focused websites. Landing pages to full marketing sites — designed, developed, and deployed for founders who need to move.",
        includes: [
            "Custom design — no templates",
            "Next.js, fully typed, production-ready",
            "Mobile-first, performance-optimised",
            "CMS integration if needed",
            "You own the code"
        ],
        cta: "Start a Project →",
        highlight: false
    },
    {
        index: "03",
        name: "AI Feature Integration",
        from: "₹75K",
        description: "Drop AI capabilities into your existing product safely. We map, architect, and ship — without breaking what's already working.",
        includes: [
            "Architecture review of existing stack",
            "LLM integration (OpenAI, Gemini, Claude)",
            "RAG systems, vector search, embeddings",
            "Daily deployable milestones",
            "Full code handover, zero vendor lock-in"
        ],
        cta: "Start a Project →",
        highlight: false
    },
    {
        index: "04",
        name: "MVP Engineering",
        from: "Scoped",
        description: "From zero to a live AI product. Full auth, database, AI core, and deployment. The kind of build that's ready for real users — not a demo.",
        includes: [
            "Full-stack build: Next.js, auth, DB, AI",
            "24–48 hours to live product environment",
            "Agentic workflows and LLM pipelines",
            "Production-grade, fully typed codebase",
            "You own the repo, the docs, everything"
        ],
        cta: "Start a Project →",
        highlight: true
    },
] as const;

export function Pricing() {
    return (
        <section className="py-24 bg-[var(--bg-white,#FFFFFF)] border-t border-[#2D5016]/10">
            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-16">
                    <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016]/60 mb-4">
                        INVESTMENT
                    </p>
                    <h2
                        className="font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.0] text-[#0B2818] max-w-2xl mb-4"
                        style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 900 }}
                    >
                        What it costs to ship.
                    </h2>
                    <p className="font-[var(--font-inter)] text-base text-[#0B2818]/50 max-w-xl">
                        Projects are scoped per engagement. These are starting points — not ceilings. Tell us what you&apos;re building and we&apos;ll give you a number within 24 hours.
                    </p>
                </div>

                {/* TIERS GRID — 2x2 on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2D5016]/10 border border-[#2D5016]/10">
                    {PRICING_TIERS.map((tier) => (
                        <div
                            key={tier.index}
                            className={`flex flex-col gap-6 p-8 transition-colors duration-200 ${tier.highlight
                                    ? 'bg-[#0B2818] text-[#F5F0E8]'
                                    : 'bg-[var(--bg-cream,#F5F0E8)] hover:bg-[#2D5016]/[0.03]'
                                }`}
                        >
                            {/* INDEX + TIER NAME */}
                            <div>
                                <span className={`font-mono text-xs tracking-widest uppercase ${tier.highlight ? 'text-[#C9A84C]' : 'text-[#2D5016]/50'}`}>
                                    {tier.index}
                                </span>
                                <h3
                                    className={`font-black text-2xl leading-tight mt-1 ${tier.highlight ? 'text-[#F5F0E8]' : 'text-[#0B2818]'}`}
                                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 900 }}
                                >
                                    {tier.name}
                                </h3>
                            </div>

                            {/* FROM PRICE */}
                            <div>
                                <span className={`font-mono text-xs tracking-widest uppercase ${tier.highlight ? 'text-[#F5F0E8]/50' : 'text-[#0B2818]/40'}`}>
                                    STARTING FROM
                                </span>
                                <p className={`font-black text-3xl mt-1 ${tier.highlight ? 'text-[#C9A84C]' : 'text-[#0B2818]'}`}
                                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 900 }}>
                                    {tier.from}
                                </p>
                            </div>

                            {/* DESCRIPTION */}
                            <p className={`text-sm leading-relaxed ${tier.highlight ? 'text-[#F5F0E8]/70' : 'text-[#0B2818]/60'}`}
                                style={{ fontFamily: 'var(--font-inter)' }}>
                                {tier.description}
                            </p>

                            {/* INCLUDES */}
                            <ul className="flex flex-col gap-2 flex-1">
                                {tier.includes.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className={`font-mono text-xs mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#C9A84C]' : 'text-[#2D5016]'}`}>
                                            →
                                        </span>
                                        <span className={`text-sm ${tier.highlight ? 'text-[#F5F0E8]/80' : 'text-[#0B2818]/70'}`}
                                            style={{ fontFamily: 'var(--font-inter)' }}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className={`self-start inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-[0.12em] uppercase transition-colors duration-200 rounded-none ${tier.highlight
                                        ? 'bg-[#C9A84C] text-[#0B2818] hover:bg-[#d4b56a]'
                                        : 'border border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016] hover:text-[#F5F0E8]'
                                    }`}
                            >
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>

                {/* BOTTOM NOTE */}
                <p className="font-mono text-xs text-[#0B2818]/30 tracking-widest uppercase mt-8 text-center">
                    All projects include full IP transfer · No outsourcing · No junior devs · 3 clients per quarter
                </p>

            </div>
        </section>
    );
}
