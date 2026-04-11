import { HoverBorderGradient } from "./ui/HoverBorder";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white min-h-[90vh] flex items-center">
      {/* Absolute atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,_rgba(14,165,233,0.15)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 flex justify-center w-full py-10">
        <div className="flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] text-center">
          <p className="uppercase tracking-[0.3em] text-sm md:text-lg lg:text-2xl text-cyan-100/50 mb-6 font-medium">
            Nazmul Islam
          </p>

          {/* Premium metallic headline */}
          <TextGenerateEffect
            words="Innovating Beyond Boundaries"
            className="text-[32px] sm:text-[38px] md:text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-white to-neutral-500 animate-shimmer bg-[length:200%_100%]"
          />

          <p className="mt-6 mb-12 text-sm md:text-lg lg:text-xl md:tracking-wide text-neutral-400 max-w-2xl leading-relaxed">
            I craft full-stack web platforms, mobile applications, and digital ecosystems. My focus is on building seamless user experiences with clean code and cutting-edge technology to bring ideas to life.
          </p>

          <a href="#projects" aria-label="Explore Our Portfolio" className="block mt-4">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white px-6 py-2 flex items-center space-x-2"
            >
              <span>Explore Portfolio</span>
              <FaLocationArrow className="w-4 h-4 ml-2" />
            </HoverBorderGradient>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
