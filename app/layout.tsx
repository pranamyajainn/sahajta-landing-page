import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Sahajta AI — We have a passion for Simplicity",
    description:
        "The only AI agency that ships its own public products. We build AI products, help you use AI, and craft web presences — without the complexity.",
    openGraph: {
        title: "Sahajta AI — We have a passion for Simplicity",
        description:
            "We don't just advise on AI. We ship it. AI products, consulting & web presence for businesses that want results.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${lora.variable} ${inter.variable}`}>
            <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
