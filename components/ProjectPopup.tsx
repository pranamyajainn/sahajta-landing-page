'use client';

import { useState, useEffect, useCallback } from 'react';

type FormState = {
    name: string;
    email: string;
    phone: string;
    project: string;
};

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function ProjectPopup() {
    const [visible, setVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', project: '' });
    const [submitState, setSubmitState] = useState<SubmitState>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [contactVisible, setContactVisible] = useState(false);

    // Track whether the #contact section is in the viewport
    useEffect(() => {
        const contactSection = document.querySelector('#contact');
        if (!contactSection) return;
        const observer = new IntersectionObserver(
            ([entry]) => setContactVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );
        observer.observe(contactSection);
        return () => observer.disconnect();
    }, []);

    const open = useCallback(() => {
        if (!submitted && !contactVisible) setVisible(true);
    }, [submitted, contactVisible]);

    // Show after 60 seconds, then every 60 seconds if not submitted
    useEffect(() => {
        if (submitted) return;
        const timer = setTimeout(open, 60000);
        return () => clearTimeout(timer);
    }, [open, submitted]);

    useEffect(() => {
        if (submitted || visible) return;
        const interval = setInterval(open, 60000);
        return () => clearInterval(interval);
    }, [open, submitted, visible]);

    // Lock body scroll when open
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [visible]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.phone || !form.project) {
            setErrorMsg('All fields are required.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setErrorMsg('Enter a valid email address.');
            return;
        }
        setSubmitState('loading');
        setErrorMsg('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, source: 'popup' }),
            });
            const data = await res.json();
            if (!res.ok) {
                setErrorMsg(data.error || 'Something went wrong.');
                setSubmitState('error');
            } else {
                setSubmitState('success');
                setSubmitted(true);
                setTimeout(() => setVisible(false), 2500);
            }
        } catch {
            setErrorMsg('Network error. Please try again.');
            setSubmitState('error');
        }
    };

    const handleDismiss = () => setVisible(false);

    if (!visible) return null;

    return (
        <>
            {/* BACKDROP */}
            <div
                className="fixed inset-0 bg-[#0B2818]/60 z-40 backdrop-blur-[2px]"
                onClick={handleDismiss}
                aria-hidden="true"
            />

            {/* POPUP PANEL */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-heading"
                className="fixed z-50 inset-0 flex items-center justify-center px-4"
            >
                <div className="w-full max-w-lg bg-[var(--bg-cream,#F5F0E8)] border border-[#2D5016]/20 flex flex-col">

                    {/* HEADER BAR */}
                    <div className="flex items-center justify-between px-5 md:px-8 py-5 border-b border-[#2D5016]/10">
                        <div>
                            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016] font-bold">
                                01 — START A PROJECT
                            </p>
                        </div>
                        <button
                            onClick={handleDismiss}
                            aria-label="Close"
                            className="font-mono text-xs text-[#0B2818]/60 hover:text-[#0B2818] tracking-widest uppercase transition-colors font-bold"
                        >
                            ✕ CLOSE
                        </button>
                    </div>

                    {/* FORM BODY */}
                    <div className="px-5 md:px-8 py-8 flex flex-col gap-6">

                        {submitState === 'success' ? (
                            <div className="flex flex-col gap-3 py-6">
                                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016]">
                                    RECEIVED.
                                </p>
                                <p
                                    className="font-black text-2xl text-[#0B2818] leading-tight"
                                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 900 }}
                                >
                                    We'll respond within 24 hours.
                                </p>
                                <p className="font-mono text-xs text-[#0B2818]/60 tracking-widest uppercase mt-2 font-bold">
                                    No pitch. Just a clear next step.
                                </p>
                            </div>
                        ) : (
                            <>
                                {/* NAME */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-xs tracking-widest uppercase text-[#0B2818] font-bold">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Pranamya Jain"
                                        autoComplete="name"
                                        className="bg-transparent border-b border-[#2D5016]/30 py-2.5 text-[#0B2818] text-sm placeholder:text-[#0B2818]/40 focus:outline-none focus:border-[#2D5016] transition-colors"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    />
                                </div>

                                {/* EMAIL */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-xs tracking-widest uppercase text-[#0B2818] font-bold">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@startup.com"
                                        autoComplete="email"
                                        className="bg-transparent border-b border-[#2D5016]/30 py-2.5 text-[#0B2818] text-sm placeholder:text-[#0B2818]/40 focus:outline-none focus:border-[#2D5016] transition-colors"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    />
                                </div>

                                {/* PHONE */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-xs tracking-widest uppercase text-[#0B2818] font-bold">
                                        Contact Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        autoComplete="tel"
                                        className="bg-transparent border-b border-[#2D5016]/30 py-2.5 text-[#0B2818] text-sm placeholder:text-[#0B2818]/40 focus:outline-none focus:border-[#2D5016] transition-colors"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    />
                                </div>

                                {/* PROJECT */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-xs tracking-widest uppercase text-[#0B2818] font-bold">
                                        What are you building? *
                                    </label>
                                    <textarea
                                        name="project"
                                        value={form.project}
                                        onChange={handleChange}
                                        placeholder="Brief description — what problem, who it's for, where you are now."
                                        rows={3}
                                        className="bg-transparent border-b border-[#2D5016]/30 py-2.5 text-[#0B2818] text-sm placeholder:text-[#0B2818]/40 focus:outline-none focus:border-[#2D5016] transition-colors resize-none"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    />
                                </div>

                                {/* ERROR */}
                                {errorMsg && (
                                    <p className="font-mono text-xs text-red-600 tracking-wide">{errorMsg}</p>
                                )}

                                {/* SUBMIT */}
                                <div className="flex items-center justify-between pt-2">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={submitState === 'loading'}
                                        className="inline-flex items-center gap-3 bg-[#0B422A] text-[var(--bg-cream,#F5F0E8)] px-8 py-4 rounded-none font-mono text-xs tracking-[0.12em] uppercase hover:bg-[#2D6E54] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {submitState === 'loading' ? 'Sending...' : 'Start a Project'}
                                        {submitState !== 'loading' && (
                                            <span className="text-[var(--gold,#C9A84C)]">→</span>
                                        )}
                                    </button>
                                    <p className="font-mono text-xs text-[#0B2818]/40 tracking-widest uppercase font-bold">
                                        24h response
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}
