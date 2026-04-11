import { services } from "@/data";
import { GlassCard } from "./ui/GlassCard";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black text-white px-6 relative">
      {/* Background radial gradient to give an atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">My Expertise</h1>
        <p className="text-white/60 mt-4 text-sm md:text-base">
          I help businesses design, build, and scale high-performance digital
          products.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-20 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {services.map((service) => (
          <GlassCard
            key={service.id}
            className="p-8"
          >
            {/* Title */}
            <h2 className="text-lg md:text-xl font-medium">{service.title}</h2>

            {/* Description */}
            <p className="text-sm text-white/60 mt-2 leading-relaxed">
              {service.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
