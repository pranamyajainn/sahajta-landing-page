import { ArrowUpRight, Quote } from "lucide-react";

export default function FeaturedProduct() {
    return (
        <section id="product" className="bg-sage-light py-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-sage-dark font-semibold text-xs uppercase tracking-widest mb-3">
                        Our Latest Launch
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold">
                        vibe2real.codes
                    </h2>
                </div>

                {/* Testimonial — leads the section */}
                <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 mb-14 shadow-sm border border-sage/20 relative">
                    <Quote className="w-9 h-9 text-sage/25 absolute top-7 left-7" />
                    <blockquote className="font-serif text-xl md:text-2xl italic text-charcoal leading-relaxed text-center pt-4">
                        &ldquo;Awesome Pranamya. Love the gamified approach that you took to
                        help the users.&rdquo;
                    </blockquote>
                    <div className="mt-6 flex flex-col items-center gap-1">
                        <div className="w-8 h-px bg-sage/40" />
                        <p className="text-charcoal font-semibold text-sm mt-3">
                            VidyaSagar Panati
                        </p>
                        <p className="text-gray-text text-xs">Loom product demo</p>
                    </div>
                </div>

                {/* Product detail grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-sage/15 border border-sage/25 text-sage-dark text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                            Launched in 24 hours · Open Source · Free to use
                        </div>
                        <p className="text-gray-text text-lg leading-relaxed mb-8">
                            A free, gamified debugging experience for AI-native developers who
                            can build — but can&apos;t yet explain what they built. 3 modules.
                            3 hours. One big mindset shift.
                        </p>

                        {/* From → To */}
                        <div className="space-y-3 mb-10">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-text/60 font-medium text-xs w-10 shrink-0">
                                    FROM
                                </span>
                                <div className="flex-1 bg-background rounded-xl px-4 py-3 border border-gray-100">
                                    <p className="text-gray-text text-sm italic">
                                        &ldquo;I built this using AI.&rdquo;
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sage-dark font-bold text-xs w-10 shrink-0">
                                    TO
                                </span>
                                <div className="flex-1 bg-charcoal rounded-xl px-4 py-3">
                                    <p className="text-white text-sm font-medium">
                                        &ldquo;I know why this works.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://vibe2real.codes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-charcoal text-white font-semibold px-7 py-3.5 rounded-full hover:bg-charcoal/80 transition-all duration-200"
                        >
                            Explore vibe2real.codes
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Right: Stats */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-text font-semibold text-xs uppercase tracking-widest mb-7">
                            Product at a glance
                        </p>
                        <div className="space-y-7">
                            {[
                                {
                                    stat: "3",
                                    label: "Game modules",
                                    sub: "Frontend → DevTools → Terminal & GitHub",
                                },
                                {
                                    stat: "3h",
                                    label: "Completable in 3 hours",
                                    sub: "A game, not a course",
                                },
                                {
                                    stat: "₹",
                                    label: "Free to play",
                                    sub: "₹1,499 for a verified certificate of completion",
                                },
                            ].map((item) => (
                                <div key={item.stat} className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-full bg-sage-light flex items-center justify-center text-sage-dark font-bold text-sm shrink-0">
                                        {item.stat}
                                    </div>
                                    <div>
                                        <p className="text-charcoal font-semibold text-sm">
                                            {item.label}
                                        </p>
                                        <p className="text-gray-text text-xs mt-0.5">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
