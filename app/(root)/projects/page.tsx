import ProjectFilters from "@/components/ProjectFilters";
import { getAllProjects } from "@/lib/actions/project.actions";
import { Metadata } from "next";

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
    url: "https://ninazmul.com/projects",
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
  const projects = await getAllProjects();
  return (
    <section className="bg-black text-white px-6 py-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold">Projects</h1>
        <p className="text-white/60 mt-4 text-sm">
          A selection of my work across SaaS platforms, web applications, mobile
          apps, and cloud systems
        </p>
      </div>
      <ProjectFilters projects={projects} />
    </section>
  );
}
