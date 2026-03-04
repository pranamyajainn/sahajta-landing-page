"use client";

import { Linkedin } from "lucide-react";

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
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                        fontWeight: 700,
                        color: "#1A1A1A",
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
                                backgroundColor: "#FFFFFF",
                                border: "1px solid #E2E0DC",
                                borderRadius: "12px",
                                padding: "40px",
                            }}
                        >
                            {/* Avatar — circular, sage green border */}
                            <div
                                style={{
                                    width: "64px",
                                    height: "64px",
                                    borderRadius: "50%",
                                    border: "2px solid #7AAE8A",
                                    backgroundColor: "#EDECEA",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "20px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-lora), Georgia, serif",
                                        fontWeight: 700,
                                        fontSize: "1.125rem",
                                        color: "#7AAE8A",
                                    }}
                                >
                                    {founder.initials}
                                </span>
                            </div>

                            {/* Name */}
                            <h3
                                style={{
                                    fontFamily: "var(--font-lora), Georgia, serif",
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    color: "#1A1A1A",
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
                                    color: "#6B6B6B",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    marginBottom: "16px",
                                }}
                            >
                                {founder.role}
                            </p>

                            {/* Bio — result first */}
                            <p
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.9375rem",
                                    color: "#3D3D3D",
                                    lineHeight: 1.7,
                                    marginBottom: "20px",
                                }}
                            >
                                {founder.bio}
                            </p>

                            {/* LinkedIn */}
                            <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "0.8125rem",
                                    fontWeight: 500,
                                    color: "#4A6FA5",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                            >
                                <Linkedin style={{ width: "14px", height: "14px" }} />
                                LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
