"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";

const metrics = [
  { label: "Onboarding Gain", value: "25%" },
  { label: "API Efficiency", value: "30%+" },
  { label: "Stack Focus", value: "Next.js" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white px-6 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Story */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 mb-6">
              N.I. Nazmul's Vision
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl font-light">
              As a <span className="text-white font-medium">full-stack developer</span>, I lead full-cycle 
              software engineering environments. I bridge the gap between architectural 
              integrity and business growth, delivering CMS, CRM, and LMS solutions that 
              prioritize secure API design and operational speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter">{metric.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mt-1 font-mono">{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="lg:w-1/3 w-full space-y-6">
            <GlassCard className="p-8 border-l-4 border-l-zinc-700">
                <h3 className="text-white font-semibold mb-3">Modular Architecture</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    Designing scalable systems (CMS/LMS) that eliminate 
                    operational bottlenecks and reduce client onboarding times.
                </p>
            </GlassCard>

            <GlassCard className="p-8 border-l-4 border-l-zinc-300">
                <h3 className="text-white font-semibold mb-3">Backend Optimization</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    Proven track record in optimizing REST APIs and query execution 
                    times by up to 40% for production-ready ecosystems.
                </p>
            </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default About;
