import { Calendar, Mail, Linkedin } from "lucide-react";

export default function BookACall() {
    return (
        <section id="contact" className="bg-charcoal py-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
                        Let&apos;s find out if we&apos;re a fit.
                    </h2>
                    <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
                        Not a sales call — a 20-minute conversation to understand what
                        you&apos;re building and whether we can help. No pitch deck. No
                        pressure.
                    </p>
                </div>

                {/* Two equal-weight CTAs */}
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* Calendar */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center mb-5">
                            <Calendar className="w-6 h-6 text-sage" />
                        </div>
                        <h3 className="text-white font-serif text-xl font-bold mb-2">
                            Book a 20-min call
                        </h3>
                        <p className="text-white/50 text-sm mb-6 leading-relaxed">
                            Pick a time that works for you. We&apos;ll come prepared.
                        </p>
                        <a
                            href="https://cal.com/pranamyajain/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-sage text-white font-semibold px-6 py-3 rounded-full hover:bg-sage-dark transition-colors duration-200 text-sm"
                        >
                            Open Calendar →
                        </a>
                    </div>

                    {/* Email — equal prominence */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-slate-blue/30 flex items-center justify-center mb-5">
                            <Mail className="w-6 h-6 text-[#93BAEA]" />
                        </div>
                        <h3 className="text-white font-serif text-xl font-bold mb-2">
                            Prefer email?
                        </h3>
                        <p className="text-white/50 text-sm mb-6 leading-relaxed">
                            Drop us a message — we respond within 24 hours.
                        </p>
                        <a
                            href="mailto:jain@pranamya.tech"
                            className="inline-block bg-slate-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-blue-dark transition-colors duration-200 text-sm"
                        >
                            jain@pranamya.tech
                        </a>
                    </div>
                </div>

                {/* LinkedIn — equal treatment */}
                <div className="text-center mt-12">
                    <p className="text-white/35 text-xs uppercase tracking-widest mb-5">
                        Or connect on LinkedIn
                    </p>
                    <div className="flex items-center justify-center gap-8">
                        <a
                            href="https://www.linkedin.com/in/pranamya-jainn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                            Pranamya Jain
                        </a>
                        <span className="text-white/20">·</span>
                        <a
                            href="https://www.linkedin.com/in/shubhangsethi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                            Shubhang Sethi
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
