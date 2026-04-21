"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, { damping: 30, stiffness: 180 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 180 });

  // subtle parallax for image
  const rotateX = useTransform(mouseY, [0, 600], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 600], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full bg-black text-white flex items-center justify-center overflow-hidden px-5 sm:px-6 lg:px-10 py-20 min-h-screen"
    >
      {/* Dynamic Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${glowX}px ${glowY}px, rgba(255,255,255,0.08), transparent 70%)`,
        }}
      />

      {/* Ambient Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full text-xs text-zinc-400 mx-auto lg:mx-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for projects
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Engineering <span className="text-zinc-400">Scalable</span>
            <br className="hidden sm:block" /> Digital Systems
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Full-stack developer focused on building high-performance web
            platforms — SaaS, CMS, LMS, and e-commerce systems designed for
            scale, speed, and real-world impact.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group px-6 py-3 bg-white text-black rounded-full flex items-center gap-2 text-sm font-medium hover:scale-105 transition"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="#contact"
              className="text-zinc-400 hover:text-white text-sm underline underline-offset-4"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative will-change-transform"
          >
            {/* Image */}
            <Image
              src="/assets/images/nazmul.webp"
              alt="Nazmul"
              width={500}
              height={500}
              priority
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover rounded-2xl border border-zinc-800 shadow-2xl"
            />

            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4 rounded-xl shadow-xl">
              <p className="text-xs text-zinc-500">Focus</p>
              <p className="text-sm font-medium">SaaS • CMS • LMS</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-6 -right-6 bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4 rounded-xl shadow-xl">
              <p className="text-xs text-zinc-500">Stack</p>
              <p className="text-sm font-medium">Next.js • MERN</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
