"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const faqItems = [
    {
        question: "What kind of businesses do you work with?",
        answer: "We work with seed to Series B founders, product leads, and indie builders who need production-grade AI shipped fast. If you have a real problem and a budget, we can help.",
    },
    {
        question: "How fast can you actually ship?",
        answer: "Our SLA is 24–48 hours to a live product environment for scoped projects. Larger integrations are broken into daily deployable milestones.",
    },
    {
        question: "Do we own the code after the project?",
        answer: "Yes. Full IP transfer. You get the repo, the docs, and zero vendor lock-in.",
    },
    {
        question: "What does the engagement look like?",
        answer: "Discovery call → architecture review → SLA agreement → daily builds → handover. No retainers unless you want ongoing support.",
    },
    {
        question: "How much does it cost?",
        answer: "Projects are scoped and priced per engagement. Book a call and we'll give you a number within 24 hours.",
    },
    {
        question: "Why only 3 clients per quarter?",
        answer: "Because we write the code ourselves. No outsourcing, no junior devs. The cap exists to protect quality.",
    },
];

function AccordionItem({
    question,
    answer,
    isOpen,
    onClick
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border-b border-[#121212]/10 py-5">
            <div
                className="flex justify-between items-center cursor-pointer group"
                onClick={onClick}
            >
                <h3 className="font-sans font-medium text-[#121212] text-base group-hover:text-green-primary transition-colors">
                    {question}
                </h3>
                <Plus
                    size={16}
                    className="text-[#0B422A] transition-transform duration-200 shrink-0 ml-4"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                />
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] mt-4' : 'max-h-0'}`}
            >
                <p className="font-sans text-sm text-[#121212]/60 leading-relaxed md:max-w-[90%]">
                    {answer}
                </p>
            </div>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-bg-cream py-24 px-8 md:px-16" id="faq">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 lg:gap-16">
                {/* Left Column */}
                <div className="flex flex-col">
                    <BlurFade delay={0.1} inView>
                        <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#0B422A]/60 mb-4 block">
                            FAQs
                        </span>
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                        <h2 className="font-serif font-black text-5xl md:text-6xl text-[#121212] leading-tight">
                            Still wondering if this is for you?
                        </h2>
                    </BlurFade>

                    <BlurFade delay={0.3} inView>
                        <p className="font-sans text-sm text-[#121212]/50 mt-4 max-w-xs leading-relaxed">
                            Everything you need to know about working with Sahajta.
                        </p>
                    </BlurFade>
                </div>

                {/* Right Column */}
                <div className="flex flex-col">
                    <BlurFade delay={0.4} inView>
                        <div className="w-full">
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => toggleItem(index)}
                                />
                            ))}
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
