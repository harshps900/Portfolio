import type { Metadata } from "next";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Contact from "@/common/Contact";
import Script from "next/script";

export const metadata: Metadata = {
  title: { absolute: "Contact & Hire Developer | Harsh Pal Singh" },
  description: "Get in touch with Harsh Pal Singh for full-time software developer roles, project inquiries, contract work, or technical collaboration.",
  keywords: [
    "Contact Harsh Pal Singh",
    "Hire Full Stack Developer",
    "Hire React Developer",
    "Hire Next.js Engineer",
    "Web Developer Project Inquiry",
    "Freelance Frontend Developer",
  ],
  alternates: {
    canonical: "https://portfolio-mocha-two-84yz194zfg.vercel.app/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-mocha-two-84yz194zfg.vercel.app/contact",
    title: "Contact & Hire Developer | Harsh Pal Singh",
    description: "Get in touch with Harsh Pal Singh for full-time software developer roles, project inquiries, contract work, or technical collaboration.",
    siteName: "Harsh Pal Singh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Harsh Pal Singh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Hire Developer | Harsh Pal Singh",
    description: "Get in touch with Harsh Pal Singh for full-time software developer roles, project inquiries, contract work, or technical collaboration.",
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
      "name": "Contact",
      "item": "https://portfolio-mocha-two-84yz194zfg.vercel.app/contact"
    }
  ]
};

export default function ContactPage() {
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
            / Let&apos;s Connect
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mt-2">
            Get In Touch & Project Inquiry
          </h1>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
