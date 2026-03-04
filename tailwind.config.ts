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
                background: {
                    DEFAULT: "#F8F7F4",
                    alt: "#EDECEA",
                },
                sage: {
                    DEFAULT: "#7AAE8A",
                    light: "#EEF5F1",
                    dark: "#5A9270",
                },
                charcoal: "#2D2D2D",
                "gray-text": "#6B6B6B",
                "slate-blue": {
                    DEFAULT: "#4A6FA5",
                    dark: "#3A5A8C",
                },
            },
            fontFamily: {
                serif: ["var(--font-lora)", "Georgia", "serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(24px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                "fade-up": "fadeUp 0.7s ease-out forwards",
                "fade-in": "fadeIn 0.5s ease-out forwards",
            },
        },
    },
    plugins: [],
};

export default config;
