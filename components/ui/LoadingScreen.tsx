"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // Slightly longer for the effect

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                >
                    {/* Futuristic Center Loader */}
                    <div className="relative flex items-center justify-center mb-8">
                        {/* Outer pulsating ring */}
                        <motion.div
                            className="w-24 h-24 rounded-full border border-white/20"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Rotating segments */}
                        <motion.div
                            className="absolute w-20 h-20 rounded-full border-t-2 border-r-2 border-white/80"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                        <motion.div
                            className="absolute w-16 h-16 rounded-full border-b-2 border-l-2 border-white/50"
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Center core */}
                        <motion.div
                            className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    {/* Text Loading Animation */}
                    <div className="overflow-hidden h-8 flex items-center justify-center">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="font-mono text-white/70 text-sm tracking-[0.2em] uppercase"
                        >
                            Loading....
                        </motion.span>
                    </div>

                    {/* Progress Bar Line */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
