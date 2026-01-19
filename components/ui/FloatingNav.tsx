"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const navItems = [
    { name: "Home", href: "#hero", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Projects", href: "#projects", icon: <FaFolderOpen /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

export const FloatingNav = () => {
    const [activeSection, setActiveSection] = useState("Home");
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Show nav after a short delay
        const showTimer = setTimeout(() => setIsVisible(true), 500);

        const handleScroll = () => {
            const sections = navItems.map((item) => {
                const section = document.querySelector(item.href === "#hero" ? "section:first-of-type" : item.href);
                if (section) {
                    return {
                        name: item.name,
                        offsetTop: (section as HTMLElement).offsetTop,
                        height: (section as HTMLElement).offsetHeight,
                    };
                }
                return null;
            }).filter(Boolean);

            const scrollPosition = window.scrollY + 300;

            for (const section of sections) {
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.height
                ) {
                    setActiveSection(section.name);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            clearTimeout(showTimer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* DESKTOP SIDEBAR - Enhanced */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
                    >
                        {/* Background glow effect */}
                        <div className="absolute inset-0 bg-black/5 rounded-full blur-2xl scale-150" />

                        <div className="relative flex flex-col gap-4 p-5 rounded-3xl bg-black/90 backdrop-blur-xl border-2 border-black/10 shadow-2xl shadow-black/10">
                            {navItems.map((item, idx) => {
                                const isActive = activeSection === item.name;
                                return (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const target = document.querySelector(item.href === "#hero" ? "body" : item.href);
                                            if (target) target.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group relative"
                                    >
                                        {/* Tooltip */}
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            whileHover={{ opacity: 1, x: 0 }}
                                            className="absolute left-16 px-4 py-2 rounded-xl bg-white text-black text-sm font-bold opacity-0 pointer-events-none whitespace-nowrap shadow-xl z-50"
                                        >
                                            {item.name}
                                            {/* Arrow */}
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-white rotate-45" />
                                        </motion.span>

                                        {/* Icon Container */}
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive
                                                ? "bg-white text-black shadow-lg shadow-white/30"
                                                : "bg-transparent text-white hover:bg-white/10 hover:text-white"
                                                }`}
                                        >
                                            <span className="text-xl">{item.icon}</span>

                                            {/* Active indicator line */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeIndicator"
                                                    className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </motion.div>

                                        {/* Hover glow effect */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl bg-white/20 blur-xl"
                                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        )}
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MOBILE BOTTOM BAR - Enhanced */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="fixed bottom-6 left-4 right-4 z-50 lg:hidden"
                    >
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-black/10 rounded-3xl blur-2xl scale-110" />

                        <div className="relative flex justify-between items-center px-6 py-4 rounded-3xl bg-black/95 backdrop-blur-xl border-2 border-black/10 shadow-2xl shadow-black/20">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.name;
                                return (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const target = document.querySelector(item.href === "#hero" ? "body" : item.href);
                                            if (target) target.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        className="relative flex flex-col items-center gap-1"
                                    >
                                        <motion.div
                                            animate={{
                                                scale: isActive ? 1.2 : 1,
                                                y: isActive ? -4 : 0
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className={`text-2xl transition-colors ${isActive ? "text-white" : "text-white/50"
                                                }`}
                                        >
                                            {item.icon}
                                        </motion.div>

                                        {/* Active dot indicator */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    className="w-1.5 h-1.5 rounded-full bg-white"
                                                />
                                            )}
                                        </AnimatePresence>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
