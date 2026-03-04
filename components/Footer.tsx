import { Sprout } from "lucide-react";

const quickLinks = [
    { label: "What We Do", href: "#services" },
    { label: "Our Product", href: "#product" },
    { label: "Team", href: "#team" },
    { label: "Book a Call", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-charcoal border-t border-white/5 py-14">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Sprout className="w-4 h-4 text-sage" strokeWidth={1.5} />
                            <span className="font-serif font-semibold text-white text-base">
                                Sahajta AI
                            </span>
                        </div>
                        <p className="text-white/35 text-sm italic">
                            We have a passion for Simplicity.
                        </p>
                    </div>

                    {/* Quick links */}
                    <nav className="flex flex-wrap gap-6">
                        {quickLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-white/45 text-sm hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-white/25 text-xs">
                        © 2026 Sahajta AI. All rights reserved.
                    </p>
                    <p className="text-white/20 text-xs">Built with ♥ and AI</p>
                </div>
            </div>
        </footer>
    );
}
