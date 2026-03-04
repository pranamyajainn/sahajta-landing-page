const founders = [
    {
        name: "Pranamya Jain",
        role: "Co-Founder & Solutions Architect",
        initials: "PJ",
        bio: "vibe2real.codes went from idea to live product in 24 hours. That's the standard I hold every project to. I build full-stack AI systems designed for real-world deployment — not prototypes that break in production.",
        detail: "ML · LLMs · Generative AI · Agentic Workflows",
        linkedin: "https://www.linkedin.com/in/pranamya-jainn/",
    },
    {
        name: "Shubhang Sethi",
        role: "Co-Founder & CEO",
        initials: "SS",
        bio: "Serial entrepreneur and founder of Namyah. I handle the business and strategy side of Sahajta AI — so our builders can build without distraction, and our clients grow without friction.",
        detail: "Strategy · Operations · Business Development",
        linkedin: "https://www.linkedin.com/in/shubhangsethi/",
    },
];

export default function Team() {
    return (
        <section id="team" className="bg-background py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sage-dark font-semibold text-xs uppercase tracking-widest mb-3">
                        The People
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold">
                        Built by people who ship.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {founders.map((founder, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col"
                        >
                            {/* Avatar */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-blue to-sage flex items-center justify-center text-white font-bold text-xl mb-6 shrink-0">
                                {founder.initials}
                            </div>

                            <h3 className="font-serif text-xl font-bold text-charcoal mb-1">
                                {founder.name}
                            </h3>
                            <p className="text-sage-dark text-sm font-semibold mb-4">
                                {founder.role}
                            </p>
                            <p className="text-gray-text text-sm leading-relaxed mb-5 flex-1">
                                {founder.bio}
                            </p>
                            <div className="flex items-center justify-between">
                                <p className="text-charcoal/40 text-xs font-medium tracking-wide">
                                    {founder.detail}
                                </p>
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-blue text-xs font-semibold hover:underline"
                                >
                                    LinkedIn →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
