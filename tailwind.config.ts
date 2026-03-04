import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                /* Backgrounds */
                "bg-cream": "#F5F0E8",
                "bg-cream-dark": "#EDE7D9",
                "bg-white": "#FDFCFA",
                "bg-green-tint": "#EBF2EE",
                /* Brand */
                "green-primary": "#1A4D3A",
                "green-mid": "#2D6E54",
                "green-light": "#4A8C6F",
                gold: "#C9A044",
                "gold-dark": "#A67F2E",
                "gold-hover": "#B8902F",
                "gold-tint": "#F5EDD6",
                /* Text */
                "text-dark": "#0F2D22",
                "text-body": "#2A3D35",
                "text-muted": "#6B7E76",
                "text-micro": "#9AA89F",
                /* Borders */
                border: "#DDD8CC",
                "border-strong": "#C4BDB0",
            },
            fontFamily: {
                serif: ["var(--font-cormorant)", "Georgia", "serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            fontSize: {
                "6xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
                "4xl": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "2xl": ["1.5rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
            },
            letterSpacing: {
                hero: "-0.03em",
                section: "-0.02em",
                label: "0.14em",
            },
            lineHeight: {
                editorial: "1.05",
                tight: "1.1",
                body: "1.7",
            },
            borderRadius: {
                card: "16px",
                icon: "10px",
                button: "6px",
            },
            maxWidth: {
                content: "1100px",
                hero: "700px",
                sub: "560px",
            },
            boxShadow: {
                card: "0 8px 32px rgba(15,45,34,0.07)",
                "card-gold": "inset 0 2px 0 0 #C9A044, 0 12px 40px rgba(15,45,34,0.10)",
                cta: "0 2px 8px rgba(201,160,68,0.30)",
            },
        },
    },
    plugins: [],
};

export default config;
