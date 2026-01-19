"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export const Contact = () => {
    const { contact } = portfolioData;
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");

        // EmailJS credentials from environment variables
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        // Validate environment variables
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error("EmailJS credentials are missing. Please check your .env.local file.");
            setErrorMessage("Email service is not configured properly.");
            setStatus("error");
            setIsLoading(false);
            return;
        }

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
                .then((result: any) => {
                    console.log(result.text);
                    setStatus("success");
                    setIsLoading(false);
                    // Reset form
                    form.current?.reset();
                }, (error: any) => {
                    console.log(error.text);
                    setErrorMessage(error.text || "Unknown error");
                    setStatus("error");
                    setIsLoading(false);
                });
        }
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-20 pb-40 px-4 sm:px-8 max-w-6xl mx-auto bg-slate-50 dark:bg-transparent">
            <SectionHeading>Get In Touch</SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2"
                >
                    <h3 className="text-4xl font-display font-bold text-black mb-6 leading-tight">
                        {contact.title}
                    </h3>
                    <p className="text-lg text-black mb-10 leading-relaxed">
                        {contact.description}
                    </p>

                    <div className="flex gap-4">
                        {contact.socials.map((social: any, idx: number) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 rounded-xl bg-black border border-black hover:bg-black/80 text-white flex items-center justify-center text-xl transition-all shadow-sm hover:shadow-md"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3 space-y-6 bg-black p-8 rounded-2xl border border-black shadow-lg"
                >
                    <div>
                        <label htmlFor="user_name" className="block text-sm font-bold text-white mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="user_name" // Matches EmailJS standard template
                            id="user_name"
                            required
                            className="w-full px-4 py-4 bg-white/10 border-2 border-white/10 rounded-xl focus:outline-none focus:border-white text-white transition-all placeholder:text-white/50 font-medium"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="user_email" className="block text-sm font-bold text-white mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            required
                            className="w-full px-4 py-4 bg-white/10 border-2 border-white/10 rounded-xl focus:outline-none focus:border-white text-white transition-all placeholder:text-white/50 font-medium"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            className="w-full px-4 py-4 bg-white/10 border-2 border-white/10 rounded-xl focus:outline-none focus:border-white text-white transition-all resize-none placeholder:text-white/50 font-medium"
                            placeholder="Your message here..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                        {!isLoading && <span>→</span>}
                    </button>

                    {status === "success" && (
                        <p className="text-green-400 text-center font-medium mt-4">
                            Message sent successfully! I'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 text-center font-medium mt-4">
                            Something went wrong. Please try again later.
                        </p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};
