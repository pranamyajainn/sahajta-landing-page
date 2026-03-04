"use client";

import { ExternalLink } from "lucide-react";

const ships = [
    {
        badge: "SHIPPED IN 24H",
        name: "vibe2real.codes",
        result: "Gamified AI debugging course — 3 modules, 3 hours, free to play.",
        url: "https://vibe2real.codes",
    },
    {
        badge: "SHIPPED IN 18H",
        name: "{{RECENT_SHIPS_2_NAME}}",
        result: "{{RECENT_SHIPS_2_RESULT}}",
        url: "{{RECENT_SHIPS_2_URL}}",
    },
    {
        badge: "SHIPPED IN 24H",
        name: "{{RECENT_SHIPS_3_NAME}}",
        result: "{{RECENT_SHIPS_3_RESULT}}",
        url: "{{RECENT_SHIPS_3_URL}}",
    },
];

// TODO: Replace placeholders above with actual project data

function ShipCard({ card }: { card: (typeof ships)[0] }) {
    return (
        <div
            className="card-hover"
            style={{
                backgroundColor: "var(--bg-white)",
                border: "1px solid var(--border)",
                borderTop: "3px solid transparent",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                cursor: "default",
                transition: "transform 220ms ease, box-shadow 220ms ease, border-top-color 220ms ease",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
            }}
        >
            {/* Gold badge */}
            <div
                style={{
                    display: "inline-block",
                    backgroundColor: "var(--gold-tint)",
                    color: "var(--gold-dark)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    marginBottom: "16px",
                    alignSelf: "flex-start",
                }}
            >
                {card.badge}
            </div>

            {/* Project name */}
            <h3
                style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "1.1875rem",
                    fontWeight: 600,
                    color: "var(--green-primary)",
                    lineHeight: 1.3,
                    marginBottom: "10px",
                }}
            >
                {card.name}
            </h3>

            {/* Result */}
            <p
                style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9375rem",
                    color: "var(--text-body)",
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: "20px",
                }}
            >
                {card.result}
            </p>

            {/* Gold link */}
            <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${card.name} live`}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--gold-dark)",
                    textDecoration: "none",
                    alignSelf: "flex-start",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                }
            >
                View live
                <ExternalLink
                    style={{ width: "13px", height: "13px" }}
                    aria-hidden="true"
                />
            </a>
        </div>
    );
}

export default function RecentShips() {
    return (
        <section
            className="section-pad section-canvas"
            id="ships"
            aria-label="Recent Ships"
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <span className="micro-label">Recent Ships — All Live</span>
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
                    Proof travels faster than promises.
                </h2>

                <div
                    style={{ display: "grid", gap: "32px" }}
                    className="grid-cols-1 md:grid-cols-3"
                >
                    {ships.map((card, i) => (
                        <ShipCard key={i} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
