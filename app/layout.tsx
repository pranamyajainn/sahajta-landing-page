import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
    preload: true,
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    preload: true,
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["400", "500"],
    display: "swap",
    preload: false,
});

export const metadata: Metadata = {
    title: "Sahajta AI — We have a passion for Simplicity",
    description:
        "The only AI agency that ships its own public products. We build AI products, help you use AI, and craft web presences — without the complexity.",
    openGraph: {
        title: "Sahajta AI — We Ship in 24 Hours",
        description:
            "We don't just advise on AI. We ship it. AI products, consulting & web presence for businesses that want results.",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sahajta AI — We Ship in 24 Hours",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sahajta AI — We Ship in 24 Hours",
        description: "The only AI agency that ships its own public products.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon.svg",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
            <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
        </html>
    );
}
