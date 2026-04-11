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

  const displayedProjects = interleavedProjects.slice(0, 9);

  return (
    <section id="projects" className="py-20 bg-black text-white">
      {/* Heading */}
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Selected Work</h1>
        <p className="text-white/60 mt-3 text-sm md:text-base">
          A curated set of my recent projects across web, mobile, and games.
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap items-center justify-center gap-10 mt-16 px-6 max-w-7xl mx-auto">
        {displayedProjects.map((item: any) => (
          <div key={item._id} className="h-[32rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <Link href={`/projects/${item._id}`}>
              <PinContainer
                title="View Case Study"
                href={`/projects/${item._id}`}
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[24rem]">
                  {/* Glassmorphic Inner Wrapper */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 pointer-events-none" />
                  
                  <div className="relative overflow-hidden rounded-xl border border-white/10 w-full mb-6 mt-2 h-[180px]">
                    <Image
                      src={item.image || "/assets/images/og-image.png"}
                      alt={item.title || "Project cover"}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover transition duration-700 group-hover/pin:scale-110"
                    />
                  </div>

                  <h3 className="relative z-10 max-w-xs font-bold text-lg text-slate-100 mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  
                  <p className="relative z-10 text-sm text-slate-400 font-normal line-clamp-2">
                    {item.description}
                  </p>

                  {/* Meta */}
                  <div className="relative z-10 flex items-center justify-between text-xs text-cyan-200 mt-auto pt-4">
                    <span>{item.stack}</span>
                    <span>{item.category}</span>
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      {projects.length > 9 && (
        <div className="flex justify-center mt-16">
          <Link href="/projects">
            <MagicButton
              title="View All Projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default RecentProjects;
