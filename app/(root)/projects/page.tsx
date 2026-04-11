import ProjectFilters from "@/components/ProjectFilters";
import { getAllProjects } from "@/lib/actions/project.actions";
import { Metadata } from "next";
import { featuredProjects } from "@/data";

export const metadata: Metadata = {
  title: "Projects | N.I. Nazmul",
  description:
    "Explore the personal portfolio of N.I. Nazmul — showcasing innovative SaaS platforms, scalable web applications, mobile apps, and premium digital solutions.",
  keywords: [
    "N.I. Nazmul",
    "Software Developer",
    "Full-Stack Engineer",
    "Next.js Developer",
    "MERN Stack",
    "Portfolio",
    "Web Development",
    "SaaS Architect",
    "UI/UX Designer",
    "Personal Projects",
    "Founder",
    "Tech Entrepreneur",
  ],
  openGraph: {
    title: "Projects | N.I. Nazmul",
    description:
      "Discover selected projects by N.I. Nazmul — building scalable SaaS platforms, web apps, and digital solutions.",
    url: "https://ninazmulworks.vercel.app/projects",
    siteName: "N.I. Nazmul Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "N.I. Nazmul Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | N.I. Nazmul",
    description:
      "Explore the portfolio of N.I. Nazmul — showcasing SaaS, web, mobile, and cloud solutions.",
    images: ["/assets/og-image.png"],
  },
};

export default async function Page() {
  const dbProjects = await getAllProjects() || [];
  const allProjects = [
    ...featuredProjects,
    ...dbProjects.filter((dp: any) => !featuredProjects.some(fp => fp.title === dp.title))
  ];

  return (
    <section className="bg-black text-white px-6 pt-32 pb-24 relative overflow-hidden min-h-screen">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 mb-6 tracking-tight">
            Projects Archive
          </h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            A technical ledger of my engineering work across **SaaS platforms**, 
            **Enterprise systems**, and **Scalable Web Architectures**. Merging 
            clean design with functional excellence.
          </p>
        </div>
        
        <ProjectFilters projects={allProjects} />
      </div>
    </section>
  );
}
