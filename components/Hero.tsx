"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { HoverBorderGradient } from "./ui/HoverBorder";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-black text-white min-h-[90vh] flex items-center justify-center pt-24"
    >
      {/* Dynamic Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${glowX}px ${glowY}px, rgba(255,255,255,0.06), transparent 80%)`,
        }}
      />

      {/* Atmospheric Secondary Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[75vw] text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse" />
          <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-zinc-400 font-mono">
            Available for new opportunities
          </p>
        </motion.div>

        <TextGenerateEffect
          words="Crafting Scalable Digital Architectures"
          className="text-center text-[36px] sm:text-[45px] md:text-6xl lg:text-7xl font-bold leading-tight"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-2xl mt-6 px-4"
        >
          <p className="text-sm md:text-lg lg:text-xl text-zinc-400 leading-relaxed font-light">
            I am <span className="text-white font-medium italic underline underline-offset-4 decoration-zinc-700">Nazmul Islam</span>, 
            a Full-Stack Developer specialized in building high-performance 
            ecosystems. I bridge the gap between geometric clarity and 
            technical excellence.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 1.4 }}
           className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          <a href="#projects">
            <HoverBorderGradient
              containerClassName="rounded-full shadow-2xl"
              as="button"
              className="bg-black text-white px-8 py-3 flex items-center space-x-3 transition-transform hover:scale-105"
            >
              <span className="text-sm font-semibold tracking-wide">View My Work</span>
              <FaLocationArrow className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </HoverBorderGradient>
          </a>
          
          <a 
            href="#contact" 
            className="text-zinc-500 hover:text-white text-sm font-medium transition-colors underline-offset-8 decoration-zinc-800 hover:decoration-white underline"
          >
            Let&apos;s talk technical
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
