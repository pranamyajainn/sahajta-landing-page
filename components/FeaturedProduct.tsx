"use client";

export default function FeaturedProduct() {
    return (
        <section className="section-pad section-surface" id="product">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <span className="micro-label">Our Latest Launch</span>
                <h2
                    style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        marginBottom: "48px",
                    }}
                >
                    vibe2real.codes
                </h2>

                {/* Testimonial — left green border */}
                <div
                    style={{
                        backgroundColor: "#EEF5F1",
                        borderLeft: "3px solid #7AAE8A",
                        padding: "24px 32px",
                        marginBottom: "56px",
                        maxWidth: "680px",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-lora), Georgia, serif",
                            fontStyle: "italic",
                            fontSize: "1.125rem",
                            color: "#3D3D3D",
                            lineHeight: 1.7,
                            marginBottom: "16px",
                        }}
                    >
                        &ldquo;Awesome Pranamya. Love the gamified approach that you took to
                        help the users.&rdquo;
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "#1A1A1A",
                            marginBottom: "2px",
                        }}
                    >
                        VidyaSagar Panati
                    </p>
                    <p
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.8125rem",
                            color: "#6B6B6B",
                        }}
                    >
                        Loom product demo
                    </p>
                </div>

                {/* Two-column: description left, From/To right */}
                <div
                    style={{ display: "grid", gap: "64px", alignItems: "start" }}
                    className="grid-cols-1 md:grid-cols-2"
                >
                    {/* Left: Description */}
                    <div>
                        <div
                            style={{
                                display: "inline-block",
                                backgroundColor: "rgba(122,174,138,0.12)",
                                border: "1px solid rgba(122,174,138,0.25)",
                                color: "#5A9270",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                fontFamily: "var(--font-inter)",
                                padding: "4px 12px",
                                borderRadius: "100px",
                                letterSpacing: "0.04em",
                                marginBottom: "20px",
                            }}
                        >
                            Launched in 24 hours · Open Source · Free to use
                        </div>

                        <p
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "1rem",
                                color: "#3D3D3D",
                                lineHeight: 1.7,
                                marginBottom: "32px",
                            }}
                        >
                            A free, gamified debugging experience for AI-native developers who
                            can build — but can&apos;t yet explain what they built. 3 modules.
                            3 hours. One big mindset shift.
                        </p>

                        {/* Stats — large Lora numbers */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                gap: "0",
                                padding: "28px 0",
                                borderTop: "1px solid #E2E0DC",
                                borderBottom: "1px solid #E2E0DC",
                                marginBottom: "32px",
                            }}
                        >
                            {[
                                { num: "3", label: "Modules" },
                                { num: "3h", label: "To Complete" },
                                { num: "₹1,499", label: "Certificate" },
                            ].map((s, i) => (
                                <div key={i} style={{ textAlign: "center", padding: "0 8px" }}>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-lora), Georgia, serif",
                                            fontSize: "2rem",
                                            fontWeight: 700,
                                            color: "#7AAE8A",
                                            lineHeight: 1,
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {s.num}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-inter)",
                                            fontSize: "0.75rem",
                                            color: "#6B6B6B",
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://vibe2real.codes"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: "0.9375rem",
                                fontWeight: 500,
                                color: "#4A6FA5",
                                textDecoration: "none",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                        >
                            Explore vibe2real.codes →
                        </a>
                    </div>

                    {/* Right: From / To transformation card */}
                    <div
                        style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #E2E0DC",
                            borderLeft: "3px solid #7AAE8A",
                            borderRadius: "0 12px 12px 0",
                            overflow: "hidden",
                        }}
                    >
                        {/* FROM */}
                        <div style={{ padding: "28px 32px" }}>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.6875rem",
                                    fontWeight: 500,
                                    color: "#9A9A9A",
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    marginBottom: "10px",
                                }}
                            >
                                From
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-lora), Georgia, serif",
                                    fontStyle: "italic",
                                    fontSize: "1.25rem",
                                    color: "#6B6B6B",
                                    lineHeight: 1.5,
                                }}
                            >
                                &ldquo;I built this using AI.&rdquo;
                            </p>
                        </div>

                        {/* Divider */}
                        <div style={{ height: "1px", backgroundColor: "#E2E0DC", margin: "0 32px" }} />

                        {/* TO */}
                        <div style={{ padding: "28px 32px" }}>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.6875rem",
                                    fontWeight: 500,
                                    color: "#7AAE8A",
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    marginBottom: "10px",
                                }}
                            >
                                To
                            </p>
                            <p
                                style={{
                                    fontFamily: "var(--font-lora), Georgia, serif",
                                    fontStyle: "italic",
                                    fontSize: "1.25rem",
                                    color: "#1A1A1A",
                                    lineHeight: 1.5,
                                    fontWeight: 600,
                                }}
                            >
                                &ldquo;I know why this works.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
