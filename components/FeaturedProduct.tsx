"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function FeaturedProduct() {
    return (
        <section className="section-pad section-surface pb-12" id="product">
            <ContainerScroll
                titleComponent={
                    <>
                        <BlurFade delay={0.1} inView>
                            <span className="font-mono text-xs md:text-sm font-bold tracking-[0.14em] text-[#6B7E76] uppercase mb-4 block" style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}>
                                OUR LATEST SHIP
                            </span>
                        </BlurFade>
                        <BlurFade delay={0.2} inView>
                            <h2
                                className="font-serif font-black text-5xl md:text-6xl lg:text-[76px] text-[#121212] tracking-[-0.04em] leading-[0.95]"
                            >
                                vibe2real.codes — built in 24 hours.
                            </h2>
                        </BlurFade>
                    </>
                }
            >
                <a
                    href="https://vibe2real.codes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                >
                    <Image
                        src="/vibe2real-hero.png"
                        alt="vibe2real.codes — built in 24 hours"
                        width={1400}
                        height={720}
                        className="w-full h-full object-contain"
                        draggable={false}
                        priority
                    />
                </a>
            </ContainerScroll>
        </section>
    );
}
