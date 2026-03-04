import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center bg-background pt-16 relative overflow-hidden"
        >
            {/* Subtle background orb */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage/5 blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-sage-light border border-sage/30 text-sage-dark text-sm font-medium px-4 py-1.5 rounded-full mb-10 animate-fade-in">
                    <Zap className="w-3.5 h-3.5" />
                    <span>vibe2real.codes — shipped in 24 hours</span>
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal font-bold leading-[1.1] mb-6 text-balance animate-fade-up">
                    We don&apos;t just advise on AI.{" "}
                    <em className="text-slate-blue not-italic">We ship it.</em>
                </h1>

                {/* Subheadline */}
                <p className="text-gray-text text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up animate-delay-100">
                    Sahajta AI builds AI products the world can use — and brings that same
                    builder&apos;s instinct to your business. AI consulting, web presence,
                    and real products. Without the complexity.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-200">
                    <a
                        href="#contact"
                        className="bg-slate-blue text-white font-semibold px-8 py-4 rounded-full hover:bg-slate-blue-dark transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 text-base"
                    >
                        Book a Free Discovery Call
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href="#product"
                        className="text-charcoal font-medium px-7 py-4 rounded-full border border-gray-200 hover:border-sage hover:text-sage-dark transition-all duration-200 flex items-center gap-2 text-base"
                    >
                        See what we&apos;ve shipped
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Scroll hint */}
                <div className="mt-24 flex justify-center animate-fade-in animate-delay-300">
                    <div className="w-px h-14 bg-gradient-to-b from-sage/30 to-transparent" />
                </div>
            </div>
        </section>
    );
}
