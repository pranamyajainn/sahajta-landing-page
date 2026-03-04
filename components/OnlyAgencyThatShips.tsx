import { CheckCircle2 } from "lucide-react";

const evidence = [
    "vibe2real.codes — live, public, open source product",
    "Concept to deployed product in 24 hours",
    "Free to use · Real users · Certificate of completion",
];

export default function OnlyAgencyThatShips() {
    return (
        <section id="differentiation" className="bg-background-alt py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Claim */}
                    <div>
                        <p className="text-sage-dark font-semibold text-xs uppercase tracking-widest mb-4">
                            Why Sahajta AI
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold leading-snug mb-6">
                            Most AI agencies talk about what&apos;s possible.{" "}
                            <em className="text-slate-blue">We&apos;ve already done it.</em>
                        </h2>
                        <p className="text-gray-text text-lg leading-relaxed">
                            We are the only AI consulting agency that also publishes its own
                            AI products. When we advise your team, we speak from the same
                            position you&apos;re in — builders who&apos;ve shipped under
                            pressure, debugged in production, and launched to real users.
                        </p>
                    </div>

                    {/* Right: Evidence card */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-charcoal font-semibold text-xs uppercase tracking-widest mb-6">
                            The proof
                        </p>
                        <ul className="space-y-5">
                            {evidence.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                                    <span className="text-charcoal text-base leading-snug">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
