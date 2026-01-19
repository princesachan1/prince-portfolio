"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
    const { theme, toggleTheme, mounted } = useTheme();

    if (!mounted) return null;

    return (
        <AnimatePresence>
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={toggleTheme}
                className="fixed top-8 right-8 z-50 w-14 h-14 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-2 border-slate-900/10 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
            >
                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-slate-900/5 dark:bg-white/5 blur-xl scale-150 group-hover:scale-[2] transition-transform" />

                <motion.div
                    initial={false}
                    animate={{ rotate: theme === "dark" ? 180 : 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative"
                >
                    {theme === "light" ? (
                        <FiSun className="w-6 h-6 text-foreground" />
                    ) : (
                        <FiMoon className="w-6 h-6 text-foreground" />
                    )}
                </motion.div>

                {/* Tooltip */}
                <span className="absolute top-full mt-2 px-3 py-1.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </span>
            </motion.button>
        </AnimatePresence>
    );
};
