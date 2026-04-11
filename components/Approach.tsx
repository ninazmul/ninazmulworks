import React from "react";
import { GlassCard } from "./ui/GlassCard";

const steps = [
  {
    title: "Strategy & Planning",
    desc: "I define goals, audience, and product direction to ensure a strong foundation before building.",
  },
  {
    title: "Design & Development",
    desc: "I design intuitive interfaces and build scalable, high-performance systems with modern technologies.",
  },
  {
    title: "Launch & Support",
    desc: "I test, launch, and continuously improve your product to ensure long-term success.",
  },
];

const Approach = () => {
  return (
    <section className="py-24 bg-black text-white px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">My Approach</h1>
        <p className="text-white/60 mt-4 text-sm md:text-base">
          A simple, proven process to deliver high-quality digital products.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {steps.map((step, i) => (
          <GlassCard
            key={i}
            className="p-8"
          >
            {/* Step Number */}
            <div className="text-sm text-white/40 mb-4">Step {i + 1}</div>

            {/* Title */}
            <h2 className="text-lg md:text-xl font-medium">{step.title}</h2>

            {/* Description */}
            <p className="text-sm text-white/60 mt-2 leading-relaxed">
              {step.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Approach;
