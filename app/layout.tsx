import type { Metadata } from "next";
import { Cormorant, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ProjectPopup } from '@/components/ProjectPopup';
import { StructuredData } from '@/components/StructuredData';

const cormorant = Cormorant({
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
    title: 'Sahajta AI | AI-Powered MVP Studio — Ship in 24–48 Hours',
    description: 'Sahajta AI builds AI-powered MVPs and products for founders and early-stage startups. From concept to live product in 24–48 hours. No outsourcing. Full code ownership. Based in Bangalore, India.',
    keywords: [
        'AI MVP development',
        'AI startup studio',
        'MVP development India',
        'AI product development Bangalore',
        'build AI product',
        'AI engineering studio',
        'MVP development studio',
        'AI feature integration',
        'agentic workflows',
        'LLM integration',
    ],
    authors: [{ name: 'Pranamya Jain' }, { name: 'Shubhang Sethi' }],
    creator: 'Sahajta AI Solution Pvt Ltd',
    metadataBase: new URL('https://sahajta.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Sahajta AI | AI-Powered MVP Studio',
        description: 'We build AI-powered MVPs for founders who need to move fast. From concept to live product in 24–48 hours.',
        url: 'https://sahajta.com',
        siteName: 'Sahajta AI',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Sahajta AI — AI-Powered MVP Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sahajta AI | AI-Powered MVP Studio',
        description: 'We build AI-powered MVPs for founders who need to move fast. Ship in 24–48 hours.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        },
    },
    icons: {
        icon: "/favicon.png",
        apple: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
            <body className="font-sans antialiased" suppressHydrationWarning>
                <StructuredData />
                {children}
                <ProjectPopup />
            </body>
        </html>
    );
}
