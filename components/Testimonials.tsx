"use client";

import { BlurFade } from "@/components/ui/blur-fade";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
    {
        quote:
            "The level of execution in 24 hours is something I've never seen from any agency. Clear thinking, clean code, and a product that was live the same day.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Awesome Pranamya. Love the gamified approach that you took to help the users. Implementation was seamless and the results exceeded our expectations.",
        name: "VidyaSagar Panati",
        designation: "Product Demo Reviewer, Loom",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple. They understand what 'ship-ready' means.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises. Highly recommend to any growing business.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. No half-done work, just pure shipping velocity.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];



export default function Testimonials() {
    return (
        <section
            className="section-pad section-tint"
            id="testimonials"
            aria-label="Testimonials"
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
                <BlurFade delay={0.1} inView>
                    <span className="micro-label">What Clients Say</span>
                </BlurFade>
                <BlurFade delay={0.2} inView>
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
                        Words from people who&apos;ve watched us ship.
                    </h2>
                </BlurFade>

                <AnimatedTestimonials testimonials={testimonials} autoplay />
            </div>
        </section>
    );
}
