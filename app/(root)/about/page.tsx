import type { Metadata } from "next";
import Link from "next/link";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About Me | N.I. Nazmul",
  description:
    "Personal portfolio of N.I. Nazmul — Founder, CEO, and full-stack developer. Showcasing innovative SaaS platforms, scalable web solutions, and premium branding projects.",
  keywords: [
    "N.I. Nazmul",
    "Software Developer",
    "Full-Stack Engineer",
    "Next.js Developer",
    "MERN Stack",
    "Portfolio",
    "UI/UX Designer",
    "SaaS Architect",
    "Personal Portfolio",
    "Founder",
    "CEO",
    "Tech Entrepreneur",
  ],
  openGraph: {
    title: "About Me | N.I. Nazmul",
    description:
      "Discover the journey of N.I. Nazmul — building scalable SaaS platforms, certificate verification systems, and luxury-grade branding solutions.",
    url: "https://ninazmul.com/about",
    siteName: "N.I. Nazmul Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "N.I. Nazmul Portfolio About",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | N.I. Nazmul",
    description:
      "Founder & developer showcasing premium SaaS, Next.js projects, and innovative branding.",
    images: ["/assets/og-image.png"],
  },
};

const Page = () => {
  return (
    <section className="bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">About Me</h1>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            I’m <strong>N.I. Nazmul</strong>, a full-stack developer, product
            architect, and founder. My work focuses on building scalable SaaS
            platforms, certificate verification systems, and premium digital
            experiences that combine engineering precision with design clarity.
          </p>
        </div>

        {/* Core Sections */}
        <div className="mt-20 space-y-16">
          {/* Who I Am */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium">Who I Am</h2>
            <p className="text-white/60 mt-4 leading-relaxed">
              I’m passionate about creating future-ready digital platforms that
              inspire trust and deliver measurable impact. With expertise in
              Next.js, MERN stack, scalable cloud systems, and UI/UX strategy, I
              bridge the gap between technical execution and business outcomes.
            </p>
          </div>

          {/* Journey */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium">My Journey</h2>
            <p className="text-white/60 mt-4 leading-relaxed">
              Over the years, I’ve led projects across fintech, healthcare,
              e-commerce, and enterprise sectors. My focus has always been on
              building solutions that are not only functional but also
              engineered for performance, security, and long-term growth.
            </p>
          </div>

          {/* What I Do */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium">What I Do</h2>
            <ul className="mt-4 space-y-2 text-white/60">
              <li>• Enterprise-grade web applications (MERN, Next.js)</li>
              <li>• Scalable mobile apps (React Native, Flutter)</li>
              <li>• Custom CMS & e-commerce platforms</li>
              <li>• Interactive games & digital experiences</li>
              <li>
                • API systems, backend architecture & cloud-native deployments
              </li>
            </ul>
          </div>

          {/* Approach */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium">How I Work</h2>
            <ul className="mt-4 space-y-2 text-white/60">
              <li>• Strategy-first approach to reduce risk</li>
              <li>• Agile development with rapid iterations</li>
              <li>• Clean, scalable architecture with strong typing</li>
              <li>• Continuous feedback, testing, and improvement</li>
              <li>• Accessibility and performance as core principles</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium">Technologies</h2>
            <p className="text-white/60 mt-4">
              React, Next.js, Node.js, Express, MongoDB, TypeScript, Tailwind
              CSS, Firebase, Flutter, Laravel, and modern cloud systems (AWS,
              Azure, Vercel). I engineer solutions with strong typing,
              maintainable schemas, and scalable infrastructure.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium">Vision</h2>
            <p className="text-white/60 mt-4">
              My vision is to build globally competitive digital products that
              are scalable, efficient, and meaningful—empowering businesses and
              individuals to thrive in the era of digital transformation.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center mt-24 text-center">
          <p className="text-white/60 mb-6 max-w-md">
            Have an idea or project in mind? Let’s build something impactful
            together.
          </p>

          <Link href="/contact">
            <MagicButton
              title="Get in Touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
