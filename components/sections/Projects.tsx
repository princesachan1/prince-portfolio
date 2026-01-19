"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4 sm:px-8 max-w-7xl mx-auto">
            <SectionHeading>Featured Projects</SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-slate-900 dark:hover:border-white shadow-sm hover:shadow-2xl dark:hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-500"
                    >
                        {/* Project Number Badge */}
                        <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-white flex items-center justify-center font-bold text-sm">
                            {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 dark:group-hover:bg-black/20 transition-colors" />
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-display font-bold text-black dark:text-white mb-3">
                                {project.title}
                            </h3>
                            <p className="text-black dark:text-white mb-6 leading-relaxed line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t: string) => (
                                    <span
                                        key={t}
                                        className="text-xs font-semibold px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-black dark:text-white rounded-lg border border-slate-200 dark:border-slate-600"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black px-4 py-3 rounded-xl hover:opacity-90 transition-all"
                                    >
                                        <FaGithub className="w-4 h-4" /> Code
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-black dark:text-white bg-transparent border-2 border-black dark:border-white px-4 py-3 rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                    >
                                        <LuExternalLink className="w-4 h-4" /> Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
