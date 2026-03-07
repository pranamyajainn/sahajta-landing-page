"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function OnlyAgencyThatShips() {
    return (
        <LampContainer className="bg-[#0B422A]">
            <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col items-center text-center px-4"
            >
                <h2 className="font-cormorant font-black text-6xl md:text-8xl text-white">
                    The Only Agency That Ships.
                </h2>
                <p className="font-inter text-xl md:text-2xl text-white/70 mt-6 max-w-2xl">
                    While others are stuck in design, we are deploying to production.
                </p>
            </motion.div>
        </LampContainer>
    );
}
