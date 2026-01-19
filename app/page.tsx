"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-12 text-center border-t border-slate-200 dark:border-slate-800 bg-background dark:bg-slate-900/50">
        <p className="text-black dark:text-white font-medium">
          © {new Date().getFullYear()} Prince Sachan. Crafted with passion.
        </p>
      </footer>
    </main>
  );
}