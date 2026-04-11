"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { cn } from "@/lib/utils";

const stack = [
  { name: "Next.js", category: "Frontend", shadow: "shadow-zinc-500/10" },
  { name: "React", category: "Frontend", shadow: "shadow-zinc-500/10" },
  { name: "TypeScript", category: "Frontend", shadow: "shadow-zinc-500/10" },
  { name: "Tailwind CSS", category: "Frontend", shadow: "shadow-zinc-500/10" },
  { name: "Node.js", category: "Backend", shadow: "shadow-zinc-500/10" },
  { name: "Express.js", category: "Backend", shadow: "shadow-zinc-500/10" },
  { name: "REST APIs", category: "Backend", shadow: "shadow-zinc-500/10" },
  { name: "MongoDB", category: "Database", shadow: "shadow-zinc-500/10" },
  { name: "PostgreSQL", category: "Database", shadow: "shadow-zinc-500/10" },
  { name: "MySQL", category: "Database", shadow: "shadow-zinc-500/10" },
  { name: "Docker", category: "Tools", shadow: "shadow-zinc-500/10" },
  { name: "Git", category: "Tools", shadow: "shadow-zinc-500/10" },
  { name: "Linux / VPS", category: "Platform", shadow: "shadow-zinc-500/10" },
  { name: "Firebase", category: "Platform", shadow: "shadow-zinc-500/10" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 20 } },
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-black text-white px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto relative z-10 mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-neutral-500">
          Core Proficiencies
        </h2>
        <p className="text-zinc-500 mt-4 text-sm md:text-base font-light">
          A focused overview of the technologies I utilize to bridge the gap 
          between concept and reality.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto relative z-10"
      >
        {stack.map((item, index) => (
          <motion.div key={index} variants={itemAnim}>
            <GlassCard className={cn(
                "px-6 py-5 flex items-center justify-center w-[160px] sm:w-[200px] border-zinc-800/50 transition-all group hover:border-zinc-400/30",
                item.shadow
            )}>
              <div className="text-center">
                <p className="font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                  {item.name}
                </p>
                <p className="text-[10px] text-zinc-500 mt-1.5 uppercase tracking-widest font-mono">
                  {item.category}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
