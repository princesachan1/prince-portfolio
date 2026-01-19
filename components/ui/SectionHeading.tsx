"use client";
import { motion } from "framer-motion";

export const SectionHeading = ({ children }: { children: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16 justify-center"
        >
            <span className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
            <h2 className="text-4xl md:text-5xl font-display font-black text-black text-center uppercase tracking-tight">
                {children}
            </h2>
            <span className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
        </motion.div>
    );
};