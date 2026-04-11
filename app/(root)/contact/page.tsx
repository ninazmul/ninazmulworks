import type { Metadata } from "next";
import { ContactUs } from "@/components/ContactUs";

export const metadata: Metadata = {
  title: "Contact Me | N.I. Nazmul",
  description:
    "Get in touch with N.I. Nazmul — Founder, CEO, and full-stack developer based in Dhaka, Bangladesh. Reach out for collaborations, SaaS projects, web development, mobile apps, and scalable digital solutions.",
  keywords: [
    "N.I. Nazmul contact",
    "software developer Bangladesh",
    "Next.js developer contact",
    "MERN stack developer",
    "mobile app developer Dhaka",
    "personal portfolio contact",
    "cloud solutions",
    "UI/UX designer",
    "SaaS architect",
    "tech entrepreneur",
  ],
  openGraph: {
    title: "Contact Me | N.I. Nazmul",
    description:
      "Have a project or idea? Contact N.I. Nazmul to collaborate on scalable web, mobile, and SaaS solutions.",
    url: "https://ninazmul.com/contact",
    siteName: "N.I. Nazmul Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact N.I. Nazmul",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me | N.I. Nazmul",
    description:
      "Reach out to N.I. Nazmul for collaborations in SaaS, web, mobile, and cloud solutions.",
    images: ["/assets/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white px-6 py-8">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold">Let’s Connect</h1>
        <p className="text-white/60 mt-6 text-sm md:text-base">
          Have a project, idea, or collaboration in mind? Reach out and let’s
          turn it into something impactful. Whether it’s a{" "}
          <strong>web application, mobile app, or SaaS platform</strong>, I’m
          here to help you build with confidence.
        </p>
      </section>

      {/* Info */}
      <section className="mt-16 border-y border-white/10 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-white/60">
          <div>
            <p className="font-medium text-white mb-1">Location</p>
            <p>Dhaka, Bangladesh</p>
            <p className="mt-2">
              Serving clients worldwide with a focus on{" "}
              <em>scalable digital solutions</em>.
            </p>
          </div>
          <div>
            <p className="font-medium text-white mb-1">Contact</p>
            <p>
              <a
                href="mailto:contact@artistycode.studio"
                className="underline hover:text-white"
              >
                contact@artistycode.studio
              </a>
            </p>
            <p>
              <a
                href="tel:+8801580845746"
                className="underline hover:text-white"
              >
                +880 1580845746
              </a>
            </p>
          </div>
          <div>
            <p className="font-medium text-white mb-1">Response Time</p>
            <p>Usually within 24 hours</p>
            <p className="mt-2">
              Dedicated to clear communication and fast collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mt-16">
        <ContactUs />
      </section>
    </main>
  );
}
