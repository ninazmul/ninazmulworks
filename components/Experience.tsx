"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";

const experiences = [
  {
    role: "Contract Full-Stack Developer",
    company: "Academic Bridge English School, Ireland",
    date: "May 2025 - Present",
    desc: "Developing the AB Partner Portal for academic management. Optimized API performance, reducing response times by 30% through advanced backend tuning.",
  },
  {
    role: "Full-Stack Developer",
    company: "ArtistyCode Studio",
    date: "Oct 2024 - Present",
    desc: "Architecting scalable CMS, CRM, and LMS platforms using Next.js and MERN. Designed secure role-based access systems and reduced client onboarding time by 25%.",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "IT Training BD",
    date: "Jul 2024 - Sep 2024",
    desc: "Built robust MERN stack applications with TypeScript. Optimized CRUD operations, successfully reducing query execution time by 40% for localized datasets.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-black text-white px-6 relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="text-center max-w-2xl mx-auto relative z-10 mb-20">
        <h2 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
          Professional Evolution
        </h2>
        <p className="text-zinc-500 mt-4 text-sm md:text-base font-light">
          A trajectory of technical excellence and architectural growth across
          diverse engineering environments.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Timeline Line */}
        <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-zinc-800 via-zinc-400/20 to-zinc-800 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card Container */}
              <div className="w-full md:w-[45%]">
                <GlassCard className="p-8 border-white/5 hover:border-white/10 transition-colors group">
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform tracking-tight leading-none">
                      {exp.role}
                    </h3>
                    <span className="text-zinc-400 font-medium text-sm">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-zinc-500 leading-relaxed text-sm font-light">
                    {exp.desc}
                  </p>
                </GlassCard>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-zinc-600 z-20 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
