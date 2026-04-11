"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { certifications } from "@/data";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-black text-white px-6 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
                Credentials
            </h2>
            <p className="text-zinc-500 mt-4 text-sm font-light">
                Industry-validated certifications in Software Engineering, 
                Problem Solving, and Full-Stack development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <GlassCard className="p-6 h-full border-white/5 group-hover:border-zinc-500/50 transition-all duration-500 group-hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                        <FaAward className="text-xl" />
                    </div>
                    <FaExternalLinkAlt className="text-xs text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    {cert.issuer}
                  </p>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
