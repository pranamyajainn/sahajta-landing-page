"use client";

const testimonials = [
    {
        quote:
            "{{TESTIMONIAL_1_QUOTE}} — The level of execution in 24 hours is something I've never seen from any agency.",
        author: "{{TESTIMONIAL_1_AUTHOR}}",
        role: "{{TESTIMONIAL_1_ROLE}}",
    },
    {
        quote:
            "Awesome Pranamya. Love the gamified approach that you took to help the users.",
        author: "VidyaSagar Panati",
        role: "Product Demo Reviewer, Loom",
    },
    {
        quote:
            "{{TESTIMONIAL_3_QUOTE}} — Clear thinking, clean code, and a product that was live the same day.",
        author: "{{TESTIMONIAL_3_AUTHOR}}",
        role: "{{TESTIMONIAL_3_ROLE}}",
    },
    {
        quote:
            "{{TESTIMONIAL_4_QUOTE}} — They understand what 'ship-ready' means. No half-done work.",
        author: "{{TESTIMONIAL_4_AUTHOR}}",
        role: "{{TESTIMONIAL_4_ROLE}}",
    },
];

// TODO: Replace {{TESTIMONIAL_*}} placeholders with actual testimonials

export default function Testimonials() {
    return (
        <section
            className="section-pad section-tint"
            id="testimonials"
            aria-label="Testimonials"
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <span className="micro-label">What Clients Say</span>
                <h2
                    style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        marginBottom: "48px",
                    }}
                >
                    Words from people who&apos;ve watched us ship.
                </h2>

                {/* 2×2 grid */}
                <div
                    style={{ display: "grid", gap: "24px" }}
                    className="grid-cols-1 md:grid-cols-2"
                >
                    {testimonials.map((t, i) => (
                        <blockquote
                            key={i}
                            style={{
                                backgroundColor: "var(--bg-white)",
                                border: "1px solid var(--border)",
                                borderLeft: "3px solid var(--gold)",
                                borderRadius: "0 16px 16px 0",
                                padding: "32px",
                                margin: 0,
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontStyle: "italic",
                                    fontSize: "1.25rem",
                                    color: "var(--text-body)",
                                    lineHeight: 1.7,
                                    marginBottom: "20px",
                                }}
                            >
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <footer>
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "0.875rem",
                                        fontWeight: 600,
                                        color: "var(--text-dark)",
                                        marginBottom: "2px",
                                    }}
                                >
                                    {t.author}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "0.8125rem",
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    {t.role}
                                </p>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
