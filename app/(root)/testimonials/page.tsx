import type { Metadata } from "next";
import Image from "next/image";
import { getAllReviews } from "@/lib/actions/review.actions";

export const metadata: Metadata = {
  title: "Client Testimonials | N.I. Nazmul",
  description:
    "Read verified client testimonials and reviews about N.I. Nazmul. Discover how my SaaS, web, and mobile solutions help businesses scale with confidence.",
  keywords: [
    "N.I. Nazmul testimonials",
    "client reviews",
    "developer feedback",
    "software developer Bangladesh",
    "Next.js developer reviews",
    "MERN stack developer testimonials",
    "mobile app development feedback",
    "cloud solutions reviews",
    "portfolio testimonials",
  ],
  openGraph: {
    title: "Client Testimonials | N.I. Nazmul",
    description:
      "Verified client feedback about N.I. Nazmul’s SaaS, web, and mobile solutions.",
    url: "https://ninazmul.com/testimonials",
    siteName: "N.I. Nazmul Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "N.I. Nazmul Client Testimonials",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | N.I. Nazmul",
    description:
      "Discover what clients say about N.I. Nazmul’s premium SaaS, web, and cloud solutions.",
    images: ["/assets/og-image.png"],
  },
};

export default async function Page() {
  const data = await getAllReviews();
  const reviews = data.filter((r: any) => r.verified);

  return (
    <section className="bg-black text-white px-6 py-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Client Testimonials
        </h1>
        <p className="text-white/60 mt-4 text-sm md:text-base">
          Real feedback from businesses and partners who trusted{" "}
          <strong>N.I. Nazmul</strong> to deliver scalable digital solutions.
        </p>
      </div>

      {/* List */}
      <div className="max-w-6xl mx-auto mt-10 space-y-10">
        {reviews.map((item: any) => (
          <article
            key={item._id}
            className="border border-white/20 bg-white/5 hover:bg-white/10 transition duration-300 rounded-xl p-6 hover:border-white/30"
          >
            {/* Quote */}
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              “{item.quote}”
            </p>

            {/* User */}
            <div className="flex items-center mt-6 gap-4">
              <Image
                src={item.image || "/assets/images/default-avatar.png"}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-xs text-white/50">{item.title}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty */}
      {reviews.length === 0 && (
        <p className="text-center text-white/50 mt-20">
          No testimonials available at the moment. Check back soon for client
          feedback.
        </p>
      )}
    </section>
  );
}
