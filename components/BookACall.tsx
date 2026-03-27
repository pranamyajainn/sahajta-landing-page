"use client";

import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { BlurFade } from "@/components/ui/blur-fade";

const BUDGET_OPTIONS = [
    "Under ₹1L",
    "₹1L – ₹3L",
    "₹3L – ₹10L",
    "₹10L+",
    "Let\u2019s discuss",
] as const;

type FormState = {
    name: string;
    email: string;
    project: string;
    budget: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function BookACall() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        project: "",
        budget: "",
    });
    const [submitState, setSubmitState] = useState<SubmitState>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        (async () => {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#0B2818" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.project) {
            setErrorMsg(
                "Name, email, and project description are required."
            );
            return;
        }
        setSubmitState("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) {
                setErrorMsg(data.error || "Something went wrong.");
                setSubmitState("error");
            } else {
                setSubmitState("success");
                setForm({ name: "", email: "", project: "", budget: "" });
            }
        } catch {
            setErrorMsg("Network error. Please try again.");
            setSubmitState("error");
        }
    };

    return (
        <section
            className="py-24 bg-[var(--bg-cream-dark,#EDEADE)] border-t border-[#2D5016]/10"
            id="contact"
            aria-label="Contact Sahajta"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* SECTION HEADER */}
                <div className="mb-16">
                    <BlurFade delay={0.1} inView>
                        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016] mb-4 font-bold">
                            LET&apos;S TALK
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.2} inView>
                        <h2
                            className="font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.0] text-[#0B2818] max-w-2xl"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontWeight: 900,
                            }}
                        >
                            20 minutes.
                            <br />
                            Start a conversation.
                            <br />
                            We&apos;ll take it from there.
                        </h2>
                    </BlurFade>
                </div>

                {/* TWO-COLUMN LAYOUT */}
                <BlurFade delay={0.3} inView>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#2D5016]/10 border border-[#2D5016]/10">
                        {/* LEFT — INTAKE FORM */}
                        <div className="bg-[var(--bg-cream,#F5F0E8)] p-5 md:p-10 flex flex-col gap-8">
                            <div>
                                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016] mb-2 font-bold">
                                    01 — TELL US ABOUT YOUR PROJECT
                                </p>
                                <p className="text-[#0B2818]/70 text-sm leading-relaxed font-medium">
                                    Tell us what you&apos;re building. We respond within 24 hours with a clear next
                                    step — no pitch, no proposal deck.
                                </p>
                            </div>

                            {/* FORM FIELDS */}
                            <div className="flex flex-col gap-5">
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
                                        className="bg-transparent border-b border-[#2D5016]/30 py-2.5 text-[#0B2818] placeholder:text-[#0B2818]/40 focus:outline-none focus:border-[#2D5016] transition-colors font-[var(--font-inter)] text-sm"
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
                                        className="bg-transparent border-b border-[#2D5016]/30 py-2.5 text-[#0B2818] placeholder:text-[#0B2818]/40 focus:outline-none focus:border-[#2D5016] transition-colors font-[var(--font-inter)] text-sm"
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
                                        rows={4}
                                        className="bg-transparent border-b border-[#2D5016]/30 py-2.5 text-[#0B2818] placeholder:text-[#0B2818]/40 focus:outline-none focus:border-[#2D5016] transition-colors font-[var(--font-inter)] text-sm resize-none"
                                    />
                                </div>

                                {/* BUDGET */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-mono text-xs tracking-widest uppercase text-[#0B2818] font-bold">
                                        Budget Range
                                    </label>
                                    <select
                                        name="budget"
                                        value={form.budget}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-[#2D5016]/30 py-2.5 text-[#0B2818] focus:outline-none focus:border-[#2D5016] transition-colors font-[var(--font-inter)] text-sm appearance-none cursor-pointer"
                                    >
                                        <option
                                            value=""
                                            className="bg-[#F5F0E8]"
                                        >
                                            Select a range
                                        </option>
                                        {BUDGET_OPTIONS.map((opt) => (
                                            <option
                                                key={opt}
                                                value={opt}
                                                className="bg-[#F5F0E8]"
                                            >
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* ERROR */}
                            {errorMsg && (
                                <p className="font-mono text-xs text-red-600 tracking-wide">
                                    {errorMsg}
                                </p>
                            )}

                            {/* SUCCESS */}
                            {submitState === "success" && (
                                <div className="border border-[#2D5016]/20 p-4">
                                    <p className="font-mono text-xs text-[#2D5016] tracking-wide uppercase">
                                        Received. We&apos;ll respond within 24
                                        hours.
                                    </p>
                                </div>
                            )}

                            {/* SUBMIT BUTTON */}
                            {submitState !== "success" && (
                                <button
                                    onClick={handleSubmit}
                                    disabled={submitState === "loading"}
                                    className="self-start inline-flex items-center gap-3 bg-[#0B2818] text-[var(--bg-cream,#F5F0E8)] px-8 py-4 rounded-none font-mono text-sm tracking-[0.12em] uppercase hover:bg-[#2D5016] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {submitState === "loading"
                                        ? "Sending..."
                                        : "Send Project Brief"}
                                    {submitState !== "loading" && (
                                        <span className="text-[var(--gold,#C9A84C)]">
                                            →
                                        </span>
                                    )}
                                </button>
                            )}

                            {/* DIRECT EMAIL FALLBACK */}
                            <p className="font-mono text-xs text-[#0B2818]/60 tracking-widest font-bold">
                                OR EMAIL DIRECTLY —{" "}
                                <a
                                    href="mailto:hello@sahajta.com"
                                    className="text-[#2D5016] hover:text-[#2D5016] transition-colors underline underline-offset-4"
                                >
                                    hello@sahajta.com
                                </a>
                            </p>
                        </div>

                        {/* RIGHT — CAL.COM BOOKING */}
                        <div className="bg-[var(--bg-cream,#F5F0E8)] p-5 md:p-10 flex flex-col gap-6">
                            <div>
                                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2D5016] mb-2 font-bold">
                                    02 — SCHEDULE DIRECTLY
                                </p>
                                <p className="text-[#0B2818]/70 text-sm leading-relaxed font-medium">
                                    Ready to talk now? Pick a time. 20 minutes.
                                    We&apos;ll come prepared.
                                </p>
                            </div>

                            {/* CAL.COM INLINE EMBED */}
                            <div className="flex-1 min-h-0 md:min-h-[500px]">
                                <Cal
                                    namespace="30min"
                                    calLink="pranamyajain/30min"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        minHeight: "0px",
                                        overflow: "auto",
                                    }}
                                    config={{
                                        layout: "month_view",
                                        theme: "light",
                                    }}
                                />
                            </div>

                            {/* Fallback link in case embed doesn't load */}
                            <a
                                href="https://cal.com/pranamyajain/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs text-[#2D5016]/50 hover:text-[#2D5016] tracking-widest uppercase transition-colors underline underline-offset-4"
                            >
                                Can&apos;t see the calendar? Open Cal.com directly →
                            </a>
                        </div>
                    </div>
                </BlurFade>

                {/* BOTTOM METADATA STRIP */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <span className="font-mono text-xs text-[#0B2818]/60 tracking-widest uppercase font-bold">
                            Response within 24h
                        </span>
                        <span className="w-1 h-1 bg-[#0B2818]/20 rounded-full hidden sm:block" />
                        <span className="font-mono text-xs text-[#0B2818]/60 tracking-widest uppercase font-bold">
                            No retainer lock-in
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/pranamya-jainn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-[#2D5016]/50 hover:text-[#2D5016] tracking-widest uppercase transition-colors"
                        >
                            Pranamya — LinkedIn
                        </a>
                        <span className="text-[#0B2818]/20">|</span>
                        <a
                            href="https://www.linkedin.com/in/shubhangsethi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-[#2D5016]/50 hover:text-[#2D5016] tracking-widest uppercase transition-colors"
                        >
                            Shubhang — LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
