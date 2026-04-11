import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "react-hot-toast";
import ScrollToTops from "@/components/ScrollToTops";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ninazmulworks.vercel.app"), // replace with your portfolio domain
  title: "N.I. Nazmul | Personal Portfolio",
  description:
    "Portfolio of N.I. Nazmul — Full-Stack Software Developer. Showcasing innovative software projects, SaaS platforms, and premium branding work.",
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
    "Personal Portfolio",
    "Founder",
    "CEO",
    "Tech Entrepreneur",
  ],
  icons: {
    icon: "/assets/images/logo2.png", // replace with your personal logo if available
    shortcut: "/assets/images/logo2.png",
    apple: "/assets/images/logo2.png",
  },
  alternates: {
    canonical: "https://ninazmulworks.vercel.app/",
  },
  openGraph: {
    title: "N.I. Nazmul | Personal Portfolio",
    description:
      "Explore the work and projects of N.I. Nazmul — building scalable SaaS platforms, certificate verification systems, and luxury-grade branding solutions.",
    url: "https://ninazmulworks.vercel.app/",
    siteName: "N.I. Nazmul Portfolio",
    images: [
      {
        url: "https://ninazmulworks.vercel.app/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "N.I. Nazmul Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N.I. Nazmul | Personal Portfolio",
    description:
      "Founder & developer showcasing premium SaaS, Next.js projects, and innovative branding.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.variable}>
          <Toaster />
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
          <ScrollToTops />
        </body>
      </html>
    </ClerkProvider>
  );
}
