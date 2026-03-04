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
                canvas: "#F8F7F4",
                surface: "#EDECEA",
                card: "#FFFFFF",
                testimony: "#EEF5F1",
                heading: "#1A1A1A",
                prose: "#3D3D3D",
                muted: "#6B6B6B",
                micro: "#9A9A9A",
                sage: "#7AAE8A",
                ink: {
                    DEFAULT: "#4A6FA5",
                    dark: "#3A5A8A",
                },
                rule: "#E2E0DC",
                "rule-strong": "#C8C5BF",
            },
            fontFamily: {
                serif: ["var(--font-lora)", "Georgia", "serif"],
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
                label: "0.12em",
            },
            lineHeight: {
                editorial: "1.05",
                tight: "1.1",
                body: "1.7",
            },
            borderRadius: {
                card: "12px",
                icon: "10px",
                button: "6px",
            },
            maxWidth: {
                content: "1100px",
                hero: "700px",
                sub: "560px",
            },
            boxShadow: {
                card: "0 8px 32px rgba(0,0,0,0.07)",
                "card-green": "inset 0 2px 0 0 #7AAE8A, 0 8px 32px rgba(0,0,0,0.07)",
                cta: "0 1px 3px rgba(74,111,165,0.3)",
            },
        },
    },
    plugins: [],
};

export default config;
