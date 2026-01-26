"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { portfolioData } from "@/data/portfolio";
import { LuDownload } from "react-icons/lu";

export const Hero = () => {
    const { hero } = portfolioData;

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4 sm:px-8">
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Animated Gradient Orbs - OPTIMIZED: Added will-change-transform */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-1/4 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl will-change-transform"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/5 dark:bg-white/5 rounded-full blur-3xl will-change-transform"
            />

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto"
            >
                {/* Avatar with Ring Animation */}
                <motion.div
                    className="relative w-40 h-40 mx-auto mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-500 animate-spin" style={{ animationDuration: "3s" }} />
                    <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
                        <Image src={hero.avatar} alt="Avatar" fill className="object-cover" priority />
                    </div>
                </motion.div>

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm text-sm font-medium text-black"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </span>
                    Available for opportunities
                </motion.div>

                {/* Name */}
                <motion.h2
                    className="text-2xl sm:text-3xl font-medium text-foreground/80 mb-4 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    Hi, I'm {hero.name}
                </motion.h2>

                <motion.h1
                    className="text-6xl sm:text-7xl font-display font-black text-black mb-6 tracking-tight leading-[0.9]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {hero.title}
                </motion.h1>

                <motion.p
                    className="text-xl text-black max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <a
                        href={hero.actions.primary.href}
                        className="group px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all shadow-lg shadow-foreground/20 hover:-translate-y-1 flex items-center gap-2"
                    >
                        {hero.actions.primary.text}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a
                        href={hero.actions.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-background text-foreground font-semibold border-2 border-foreground hover:bg-foreground hover:text-background transition-all flex items-center gap-2"
                    >
                        <LuDownload className="w-4 h-4" />
                        Download Resume
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"
                    />
                </div>
            </motion.div>
        </section>
    );
};
