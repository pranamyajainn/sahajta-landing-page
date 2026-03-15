"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            // Smooth loop right before the end to avoid black flashing
            // The native loop attribute sometimes causes a visible gap
            if (video.currentTime >= video.duration - 0.1) {
                video.currentTime = 0;
                video.play().catch(() => {});
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }, []);

    const scrollToShips = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const element = document.getElementById("ships");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        onScroll(); // initial check
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src="/hero-bg.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 0, willChange: 'transform' }}
            />

            {/* Radial vignette — softens center text zone only, edges stay fully clear */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    zIndex: 1,
                    background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(5,18,10,0.55) 0%, transparent 100%)',
                }}
            />

            {/* New Flat Navbar */}
            <nav 
                className={`fixed top-0 left-0 w-full h-[72px] z-50 flex items-center justify-between px-6 md:px-16 transition-colors duration-300 ${
                    scrolled ? 'bg-[var(--bg-cream,#F5F0E8)] border-b border-[#2D501622]' : 'bg-transparent border-b border-transparent'
                }`}
            >
                {/* Left: Logo */}
                <a href="#" aria-label="Sahajta AI — home" className="flex-shrink-0">
                    <Image
                        src="/sahajta-logo.png"
                        alt="Sahajta AI Logo"
                        width={120}
                        height={34}
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </a>
                
                {/* Center: Nav links */}
                <div className="hidden md:flex items-center gap-8">
                    {["Work", "Services", "Process", "Team"].map((item) => {
                        const href = item === "Work" ? "#ships" : `#${item.toLowerCase()}`;
                        return (
                            <a 
                                key={item} 
                                href={href} 
                                className={`font-mono text-[13px] uppercase tracking-[0.08em] hover:text-[#C9A84C] transition-colors duration-300 ${
                                    scrolled ? 'text-[#0B2818]' : 'text-[#F5F0E8]'
                                }`}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>

                {/* Right: CTA Button */}
                <a 
                    href="#contact"
                    className={`font-mono text-[13px] uppercase tracking-[0.08em] px-6 py-3 rounded-none hover:opacity-90 transition-all duration-300 ${
                        scrolled ? 'bg-[#0B422A] text-[#F5F0E8]' : 'bg-[#C9A84C] text-[#0B2818]'
                    }`}
                >
                    START A PROJECT →
                </a>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full min-h-screen pt-[72px]">
                {/* Eyebrow */}
                <div className="mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#C9A84C]">
                        AI STUDIO · BANGALORE · EST. 2025
                    </span>
                </div>

                {/* Primary Headline */}
                <h1 className="flex flex-col items-center justify-center -space-y-2 mb-6 sm:mb-8">
                    <span className="font-serif font-[900] text-[clamp(52px,6vw,84px)] text-[#F5F0E8] tracking-[-0.03em] leading-[1.1]">
                        Agency that ships your
                    </span>
                    <span className="font-serif font-[900] italic text-[clamp(60px,8vw,108px)] text-[#C9A84C] tracking-[-0.04em] leading-[1.1]">
                        AI products live
                    </span>
                </h1>

                {/* Subtext */}
                <p className="font-sans font-[400] text-[17px] text-[#F5F0E8]/65 max-w-[460px] text-center mb-10 leading-[1.7]">
                    India&apos;s AI-powered MVP studio. We take your idea from zero to a live product in 48 hours.
                </p>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href="#contact"
                        className="bg-[#C9A84C] text-[#0B2818] font-mono text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-none hover:opacity-90 transition-opacity inline-block"
                    >
                        START A PROJECT →
                    </a>
                    <button 
                        onClick={scrollToShips}
                        className="border border-[#F5F0E8]/30 text-[#F5F0E8] font-mono text-[13px] uppercase tracking-[0.1em] px-8 py-4 rounded-none bg-transparent hover:border-[#F5F0E8] transition-colors"
                    >
                        SEE OUR WORK
                    </button>
                </div>
            </div>


        </section>
    );
}
