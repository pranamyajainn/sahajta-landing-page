"use client";

import { Linkedin, Sprout } from "lucide-react";

const founders = [
    {
        name: "Pranamya Jain",
        role: "Co-Founder & Solutions Architect",
        initials: "PJ",
        bio: "vibe2real.codes went from idea to live product in 24 hours. That's the standard I hold every project to. I build full-stack AI systems designed for real-world deployment — not prototypes that break in production.",
        linkedin: "https://www.linkedin.com/in/pranamya-jainn/",
    },
    {
        name: "Shubhang Sethi",
        role: "Co-Founder & CEO",
        initials: "SS",
        bio: "Serial entrepreneur and founder of Namyah. I handle the business and strategy side of Sahajta AI — so our builders can build without distraction, and our clients grow without friction.",
        linkedin: "https://www.linkedin.com/in/shubhangsethi/",
    },
];

export default function Team() {
    return (
        <section className="section-pad section-canvas" id="team">
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <span className="micro-label">The Team</span>
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
                    Built by people who ship.
                </h2>

                <div
                    style={{ display: "grid", gap: "32px" }}
                    className="grid-cols-1 md:grid-cols-2"
                >
                    {founders.map((founder, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: "var(--bg-white)",
                                border: "1px solid var(--border)",
                                borderRadius: "16px",
                                padding: "40px",
                            }}
                        >
                            {/* Avatar — circular, gold border */}
                            <div
                                style={{
                                    width: "64px",
                                    height: "64px",
                                    borderRadius: "50%",
                                    border: "2px solid var(--gold)",
                                    backgroundColor: "var(--gold-tint)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "20px",
                                }}
                                aria-hidden="true"
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-cormorant), Georgia, serif",
                                        fontWeight: 700,
                                        fontSize: "1.125rem",
                                        color: "var(--gold-dark)",
                                    }}
                                >
                                    {founder.initials}
                                </span>
                            </div>

                            {/* Name */}
                            <h3
                                style={{
                                    fontFamily: "var(--font-cormorant), Georgia, serif",
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    color: "var(--green-primary)",
                                    letterSpacing: "-0.01em",
                                    marginBottom: "4px",
                                }}
                            >
                                {founder.name}
                            </h3>

                            {/* Role */}
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.8125rem",
                                    fontWeight: 500,
                                    color: "var(--text-muted)",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    marginBottom: "16px",
                                }}
                            >
                                {founder.role}
                            </p>

                            {/* Bio — sprout as bullet opener */}
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.9375rem",
                                    color: "var(--text-body)",
                                    lineHeight: 1.7,
                                    marginBottom: "20px",
                                    display: "flex",
                                    gap: "8px",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Sprout
                                    style={{
                                        width: "15px",
                                        height: "15px",
                                        color: "var(--gold)",
                                        flexShrink: 0,
                                        marginTop: "4px",
                                    }}
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />
                                {founder.bio}
                            </p>

                            {/* LinkedIn */}
                            <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${founder.name} on LinkedIn`}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.8125rem",
                                    fontWeight: 500,
                                    color: "var(--gold-dark)",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.textDecoration = "underline")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.textDecoration = "none")
                                }
                            >
                                <Linkedin
                                    style={{ width: "14px", height: "14px" }}
                                    aria-hidden="true"
                                />
                                LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
