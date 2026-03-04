import { Brain, Lightbulb, Globe, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Brain,
        title: "We Build AI Products",
        body: "From concept to deployed product. We design, architect, and ship AI systems built for real-world use — not just demos. vibe2real.codes is our proof.",
        cta: "Work with us on your AI product",
        href: "#contact",
        primary: true,
    },
    {
        icon: Lightbulb,
        title: "We Help You Use AI",
        body: "If you know AI belongs in your business but don't know where to start — we do. We map the opportunity, design the system, and help you implement without the jargon.",
        cta: "Book a free discovery call",
        href: "#contact",
        primary: false,
    },
    {
        icon: Globe,
        title: "We Build Your Web Presence",
        body: "Landing pages, websites, and digital presences that are clean, on-brand, and designed to convert. We build for impact, not just aesthetics.",
        cta: "Get a web presence that converts",
        href: "#contact",
        primary: false,
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-background py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sage-dark font-semibold text-xs uppercase tracking-widest mb-3">
                        What We Do
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold">
                        Three ways we can work together
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={i}
                                className={`rounded-2xl p-8 border flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${service.primary
                                        ? "bg-charcoal border-charcoal"
                                        : "bg-white border-gray-100"
                                    }`}
                            >
                                <div
                                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${service.primary ? "bg-white/10" : "bg-sage-light"
                                        }`}
                                >
                                    <Icon className="w-5 h-5 text-sage" strokeWidth={1.5} />
                                </div>
                                <h3
                                    className={`font-serif text-xl font-bold mb-3 ${service.primary ? "text-white" : "text-charcoal"
                                        }`}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className={`text-sm leading-relaxed mb-6 flex-1 ${service.primary ? "text-white/65" : "text-gray-text"
                                        }`}
                                >
                                    {service.body}
                                </p>
                                <a
                                    href={service.href}
                                    className={`inline-flex items-center gap-1.5 text-sm font-semibold group ${service.primary ? "text-sage" : "text-slate-blue"
                                        }`}
                                >
                                    {service.cta}
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
