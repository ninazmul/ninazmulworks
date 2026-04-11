import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { getAllProjects } from "@/lib/actions/project.actions";
import Link from "next/link";
import MagicButton from "./MagicButton";
import { PinContainer } from "./ui/Pin";

const RecentProjects = async () => {
  const projects = await getAllProjects();

  const categories = {
    WebApps: projects.filter((p: any) => p.category === "WebApps"),
    MobileApps: projects.filter((p: any) => p.category === "MobileApps"),
    Games: projects.filter((p: any) => p.category === "Games"),
  };

  const interleavedProjects: any[] = [];
  const maxLength = Math.max(
    categories.WebApps.length,
    categories.MobileApps.length,
    categories.Games.length,
  );

  for (let i = 0; i < maxLength; i++) {
    if (categories.WebApps[i]) interleavedProjects.push(categories.WebApps[i]);
    if (categories.MobileApps[i])
      interleavedProjects.push(categories.MobileApps[i]);
    if (categories.Games[i]) interleavedProjects.push(categories.Games[i]);
  }

  const displayedProjects = interleavedProjects.slice(0, 6); // Limit to 6 for "Featured" look

  return (
    <section id="projects" className="py-24 bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      {/* Heading */}
      <div className="text-center px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
          Featured Engineering
        </h2>
        <p className="text-zinc-500 mt-4 text-sm md:text-base font-light max-w-xl mx-auto">
          A collection of high-performance applications where 
          architecture meets seamless user experience.
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-16 mt-10 px-6 max-w-7xl mx-auto">
        {displayedProjects.map((item: any) => (
          <div key={item._id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <Link href={`/projects/${item._id}`}>
              <PinContainer
                title="Explore Architecture"
                href={`/projects/${item._id}`}
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-zinc-100/50 sm:basis-1/2 w-[20rem] lg:w-[22rem] h-[26rem] lg:h-[28rem] group/card relative">
                  {/* Glassmorphic Inner Wrapper */}
                  <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 pointer-events-none group-hover/card:bg-white/[0.05] transition-colors duration-500" />
                  
                  <div className="relative overflow-hidden rounded-xl border border-white/10 w-full mb-6 mt-2 h-[180px] lg:h-[200px]">
                    <Image
                      src={item.image || "/assets/images/og-image.png"}
                      alt={item.title || "Project cover"}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover transition duration-700 group-hover/card:scale-110 group-hover/card:rotate-1"
                    />
                    
                    {/* Tech Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 grayscale hover:grayscale-0">
                        <p className="text-xs font-mono text-zinc-300 leading-relaxed text-center">
                            {item.stack.split(',').map((s: string) => s.trim()).join(' • ')}
                        </p>
                    </div>
                  </div>

                  <h3 className="relative z-10 max-w-xs font-bold text-xl text-white mb-2 line-clamp-1 group-hover/card:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  
                  <p className="relative z-10 text-sm text-zinc-500 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Meta Action */}
                  <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-400 uppercase tracking-tighter">
                            {item.category}
                        </span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-white/50 group-hover/card:text-white transition-colors">
                        Check live
                        <FaLocationArrow className="ms-2 w-3 h-3 group-hover/card:-rotate-45 transition-transform" />
                    </div>
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="text-center mt-24">
        <Link href="/projects" className="group text-zinc-500 hover:text-white transition-colors text-sm font-light inline-flex items-center gap-2">
            View archives
            <span className="w-8 h-px bg-zinc-800 group-hover:w-12 transition-all duration-300" />
            <span className="font-mono">{projects.length} PROJECTS</span>
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
