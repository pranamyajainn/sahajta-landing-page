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

    return (
        <section className="section-pad section-surface">
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
                        <span className="micro-label">Why Sahajta AI</span>
                        <h2
                            style={{
                                fontFamily: "var(--font-lora), Georgia, serif",
                                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                                fontWeight: 700,
                                color: "#1A1A1A",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                marginBottom: "20px",
                            }}
                        >
                            Most AI agencies talk about what&apos;s possible.{" "}
                            <em style={{ fontStyle: "italic", color: "#4A6FA5" }}>
                                We&apos;ve already done it.
                            </em>
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1rem",
                                color: "#3D3D3D",
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
                    <div className="col-divider" />

                    {/* Right column: evidence */}
                    <div style={{ flex: "1" }}>
                        <span className="micro-label">The Proof</span>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "28px" }}>
                            {evidence.map((item, i) => (
                                <li key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    {/* Checkmark */}
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        style={{ flexShrink: 0, marginTop: "3px" }}
                                    >
                                        <circle cx="9" cy="9" r="8.5" stroke="#7AAE8A" />
                                        <path d="M5 9l3 3 5-5" stroke="#7AAE8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-inter)",
                                                fontSize: "0.9375rem",
                                                fontWeight: 600,
                                                color: "#1A1A1A",
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
                                                color: "#6B6B6B",
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
