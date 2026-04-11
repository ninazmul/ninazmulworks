"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { education } from "@/data";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-black text-white px-6 relative">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="text-center max-w-2xl mx-auto relative z-10 mb-20">
        <h2 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
          Academic Foundation
        </h2>
        <p className="text-zinc-500 mt-4 text-sm font-light">
          Continuous learning and formal engineering education in software systems.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="h-full p-8 border-white/5 hover:border-white/10 transition-colors flex flex-col">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-4">
                {edu.year}
              </span>
              <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                {edu.institution}
              </h3>
              <p className="text-zinc-400 text-sm font-medium mb-4">
                {edu.program}
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed font-light mt-auto">
                {edu.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
