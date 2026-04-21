"use client";

import { motion, Variants } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { techSkills } from "@/data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 200 },
  },
};

const TechStack = () => {
  // Group skills by category
  const categories = Array.from(new Set(techSkills.map((s) => s.category)));

  return (
    <section
      id="tech-stack"
      className="py-24 bg-black text-white px-6 relative scroll-mt-24 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 mb-6 tracking-tight">
            Technical Mastery
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light font-mono uppercase tracking-[0.3em]">
            Full-cycle ecosystem involvement
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category) => (
            <div key={category} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-bold text-white tracking-widest uppercase">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {techSkills
                  .filter((s) => s.category === category)
                  .map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={index} variants={itemAnim}>
                        <GlassCard className="px-4 py-3 flex flex-col items-center justify-center border-white/5 hover:border-zinc-500/50 transition-all group h-full">
                          {Icon && (
                            <Icon className="text-2xl text-zinc-400 group-hover:text-white transition-colors mb-2" />
                          )}
                          <p className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors text-center uppercase tracking-tighter">
                            {item.name}
                          </p>
                        </GlassCard>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
