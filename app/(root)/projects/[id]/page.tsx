import MagicButton from "@/components/MagicButton";
import { getProjectById } from "@/lib/actions/project.actions";
import Link from "next/link";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import ProjectHero from "@/components/ProjectHero";
import { GlassCard } from "@/components/ui/GlassCard";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const project = await getProjectById(resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found | Portfolio",
      description: "This project does not exist or has been removed.",
    };
  }

  return {
    title: `${project.title} | N.I. Nazmul Project`,
    description: project.description ?? "Explore this project in detail.",
    keywords: [
      project.title,
      project.category,
      ...(project.stack || []),
      "N.I. Nazmul portfolio",
      "Next.js development",
      "MERN stack applications",
      "cloud solutions",
      "software developer Bangladesh",
    ],
    openGraph: {
      title: `${project.title} | N.I. Nazmul`,
      description: project.description ?? "Explore this project in detail.",
      url: `https://ninazmulworks.vercel.app/projects/${project._id}`,
      siteName: "N.I. Nazmul Portfolio",
      images: project.image
        ? [{ url: project.image, width: 1200, height: 630, alt: project.title }]
        : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | N.I. Nazmul`,
      description: project.description ?? "Explore this project in detail.",
      images: project.image ? [project.image] : [],
    },
  };
}

const ProjectDetails = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const project = await getProjectById(resolvedParams.id);

  if (!project) {
    return (
      <section className="flex justify-center items-center h-[70vh] bg-black text-white">
        <p className="text-xl">Project not found.</p>
      </section>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section with detailed view */}
        <ProjectHero
          image={project.image}
          title={project.title}
          stack={project.stack}
          category={project.category}
        />

        {/* Project Technical Breakdown */}
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
                <GlassCard className="p-8 md:p-10 border-white/5">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-px bg-zinc-700" />
                        Engineering Overview
                    </h2>
                    <p className="text-zinc-400 leading-relaxed font-light whitespace-pre-line text-lg">
                        {project.description}
                    </p>
                </GlassCard>
            </div>

            <div className="space-y-6">
                <GlassCard className="p-8 border-white/5">
                    <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-600 mb-6">Technical Actions</h3>
                    <div className="space-y-4">
                        {project.url && (
                        <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <MagicButton
                                title="Deploy Live"
                                icon={<FaLocationArrow />}
                                position="right"
                                otherClasses="w-full bg-zinc-900 border-zinc-800"
                            />
                        </Link>
                        )}
                        {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <MagicButton
                                title="Source Code"
                                icon={<FaGithub />}
                                position="right"
                                otherClasses="w-full bg-black border-zinc-800"
                            />
                        </Link>
                        )}
                    </div>
                </GlassCard>

                <div className="px-4">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-800">
                        Status: Production Ready
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-800 mt-1">
                        Architecture: {project.category}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
