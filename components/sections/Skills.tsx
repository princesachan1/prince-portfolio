"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 px-4 sm:px-8 max-w-7xl mx-auto bg-transparent">
            <SectionHeading>Tech Stack</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                {Object.entries(skills).map(([category, skillList], catIdx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1 }}
                        className="bg-black p-8 rounded-2xl border border-black shadow-lg"
                    >
                        <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-white" />
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {/* @ts-ignore - skillList types are inferred loosely for now */}
                            {skillList.map((skill: any, idx: number) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-all group cursor-pointer"
                                >
                                    <span className="text-2xl text-white transition-colors">
                                        {typeof skill.icon === "string" ? (
                                            <div className="relative w-8 h-8">
                                                <Image
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            skill.icon
                                        )}
                                    </span>
                                    <span className="font-semibold text-white text-sm">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
