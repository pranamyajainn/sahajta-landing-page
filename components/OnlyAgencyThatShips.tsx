import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";

const proofItems = [
    "vibe2real.codes — live and public",
    "Shipped in 24 hours",
    "Open source",
    "Real users",
    "Certificate of completion",
];

export default function OnlyAgencyThatShips() {
    const evidence = [
        {
            title: "vibe2real.codes — live, public, open source",
            sub: "A shipped product anyone can use today. Not a demo, not a prototype.",
        },
        {
            title: "Concept to deployed product in 24 hours",
            sub: "Speed of execution is a design principle, not a coincidence.",
        },
        {
            title: "Real users. Free to use. Certificate at ₹1,499.",
            sub: "A business model, not just a portfolio piece.",
        },
    ];

    // Duplicate items for seamless infinite loop
    const tickerItems = [...proofItems, ...proofItems];

    return (
        <section className="section-pad section-surface">
            {/* Proof ticker */}
            <Marquee pauseOnHover className="proof-ticker">
                {[...proofItems, ...proofItems].map((item, i) => (
                    <span key={i} className="proof-item">
                        {item}
                        <span className="separator">·</span>
                    </span>
                ))}
            </Marquee>

            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <div
                    style={{
                        display: "flex",
                        gap: "64px",
                        alignItems: "flex-start",
                    }}
                    className="flex-col md:flex-row"
                >
                    {/* Left column */}
                    <div style={{ flex: "1" }}>
                        <BlurFade delay={0.1} inView>
                            <span className="micro-label">Why Sahajta AI</span>
                        </BlurFade>
                        <BlurFade delay={0.2} inView>
                            <h2
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                                    fontWeight: 700,
                                    color: "var(--text-dark)",
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.1,
                                    marginBottom: "20px",
                                }}
                            >
                                We&apos;ve already done what most agencies only talk about.
                            </h2>
                        </BlurFade>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1rem",
                                color: "var(--text-body)",
                                lineHeight: 1.7,
                            }}
                        >
                            We are the only AI consulting agency that also publishes its own AI
                            products. When we advise your team, we speak from the same position
                            you&apos;re in — builders who&apos;ve shipped under pressure,
                            debugged in production, and launched to real users.
                        </p>
                    </div>

                    {/* Column divider */}
                    <div className="col-divider" aria-hidden="true" />

                    {/* Right column: evidence */}
                    <div style={{ flex: "1" }}>
                        <BlurFade delay={0.1} inView>
                            <span className="micro-label">The Proof</span>
                        </BlurFade>
                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: "28px",
                            }}
                        >
                            {evidence.map((item, i) => (
                                <li
                                    key={i}
                                    style={{
                                        display: "flex",
                                        gap: "14px",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    {/* Gold checkmark circle */}
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        style={{ flexShrink: 0, marginTop: "3px" }}
                                        aria-hidden="true"
                                    >
                                        <circle cx="9" cy="9" r="8.5" stroke="var(--gold)" />
                                        <path
                                            d="M5 9l3 3 5-5"
                                            stroke="var(--gold)"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-inter)",
                                                fontSize: "0.9375rem",
                                                fontWeight: 600,
                                                color: "var(--text-dark)",
                                                lineHeight: 1.4,
                                                marginBottom: "4px",
                                            }}
                                        >
                                            {item.title}
                                        </p>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-inter)",
                                                fontSize: "0.875rem",
                                                color: "var(--text-muted)",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {item.sub}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
