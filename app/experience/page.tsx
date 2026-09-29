import type { Metadata } from "next";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Experience from "@/common/Experience";
import Script from "next/script";

export const metadata: Metadata = {
  title: { absolute: "Work Experience & Career | Harsh Pal Singh" },
  description: "Explore the professional experience and engineering trajectory of Harsh Pal Singh, Full Stack & Frontend Developer at SoftSource Technolabs.",
  keywords: [
    "Harsh Pal Singh Experience",
    "Frontend Developer Work History",
    "Software Engineer Career Timeline",
    "Full Stack Developer Portfolio",
  ],
  alternates: {
    canonical: "https://portfolio-mocha-two-84yz194zfg.vercel.app/experience",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-mocha-two-84yz194zfg.vercel.app/experience",
    title: "Work Experience & Career | Harsh Pal Singh",
    description: "Explore the professional experience and engineering trajectory of Harsh Pal Singh, Full Stack & Frontend Developer at SoftSource Technolabs.",
    siteName: "Harsh Pal Singh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Pal Singh - Work Experience & Career Timeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience & Career | Harsh Pal Singh",
    description: "Explore the professional experience and engineering trajectory of Harsh Pal Singh, Full Stack & Frontend Developer at SoftSource Technolabs.",
    images: ["/profile.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://portfolio-mocha-two-84yz194zfg.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Experience",
      "item": "https://portfolio-mocha-two-84yz194zfg.vercel.app/experience"
    }
  ]
};

export default function ExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] pt-28">
        <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 pt-4">
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
            / Career Journey
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mt-2">
            Work Experience & Career History
          </h1>
        </div>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
