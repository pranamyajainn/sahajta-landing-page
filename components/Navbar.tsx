"use client";

import { useState, useEffect } from "react";
import { Sprout, Menu, X } from "lucide-react";

const navLinks = [
    { label: "What We Do", href: "#services" },
    { label: "Our Product", href: "#product" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-gray-100"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <Sprout
                        className="w-5 h-5 text-sage transition-transform group-hover:scale-110"
                        strokeWidth={1.5}
                    />
                    <span className="font-serif font-semibold text-charcoal text-lg tracking-tight">
                        Sahajta AI
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-text text-sm font-medium hover:text-charcoal transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sage group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center bg-slate-blue text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-blue-dark transition-all duration-200 shadow-sm"
                >
                    Book a Free Call
                </a>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-charcoal p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-background border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-charcoal font-medium py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="bg-slate-blue text-white text-sm font-semibold px-5 py-3 rounded-full text-center mt-2"
                    >
                        Book a Free Call
                    </a>
                </div>
            )}
        </header>
    );
}
