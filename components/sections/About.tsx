"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
    const { about } = portfolioData;
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 3.0;
        }
    }, [about.image]);

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 relative px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
            <SectionHeading>{about.title}</SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {about.description.map((para: string, i: number) => (
                        <p key={i} className="text-lg text-black leading-relaxed">
                            {para}
                        </p>
                    ))}

                    {/* Education Block */}
                    <div className="mt-10 pt-10 border-t border-black/10">
                        <h4 className="text-2xl font-display font-bold text-black mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-black rounded-full" />
                            Education
                        </h4>
                        <div className="space-y-4">
                            {about.education.map((edu: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative pl-6"
                                >
                                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-black group-hover:scale-150 transition-transform" />
                                    <h5 className="font-bold text-black text-lg">{edu.degree}</h5>
                                    <p className="text-black text-sm font-mono mt-1">
                                        {edu.institution} <span className="text-black mx-2">•</span> {edu.year}
                                    </p>
                                    <p className="text-black text-sm mt-2">{edu.details}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/50 border border-slate-200 dark:border-slate-800 group order-first lg:order-last"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950 dark:via-transparent dark:to-transparent z-10 opacity-60" />
                    {/* Conditional rendering for Video or Image */}
                    {about.image.endsWith(".mp4") || about.image.endsWith(".webm") ? (
                        <video
                            ref={videoRef}
                            src={about.image}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <Image
                            src={about.image}
                            alt="About Me"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    )}
                    {/* Decorative Corner */}
                    <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-slate-900 dark:border-white rounded-tr-3xl z-20" />
                </motion.div>
            </div>
        </section>
    );
};
