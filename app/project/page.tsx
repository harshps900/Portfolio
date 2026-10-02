import type { Metadata } from "next";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Link from "next/link";
import Script from "next/script";
import { ProjectCard } from "@/common/Projects";
import { PROJECTS } from "@/common/projectsData";

export const metadata: Metadata = {
  title: { absolute: "Projects & Applications | Harsh Pal Singh" },
  description: "Explore web applications, client solutions, and full-stack software built by Harsh Pal Singh using React.js, Next.js, Node.js, and Tailwind CSS.",
  keywords: [
    "Harsh Pal Singh Projects",
    "Web Application Portfolio",
    "Full Stack Projects",
    "Next.js Applications Showcase",
  ],
  alternates: {
    canonical: "https://portfolio-mocha-two-84yz194zfg.vercel.app/project",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-mocha-two-84yz194zfg.vercel.app/project",
    title: "Projects & Applications | Harsh Pal Singh",
    description: "Explore web applications, client solutions, and full-stack software built by Harsh Pal Singh using React.js, Next.js, Node.js, and Tailwind CSS.",
    siteName: "Harsh Pal Singh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Pal Singh - Full Stack Projects Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Applications | Harsh Pal Singh",
    description: "Explore web applications, client solutions, and full-stack software built by Harsh Pal Singh using React.js, Next.js, Node.js, and Tailwind CSS.",
    images: ["/profile.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
          "name": "Projects",
          "item": "https://portfolio-mocha-two-84yz194zfg.vercel.app/project"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Harsh Pal Singh Projects & Software",
      "itemListElement": PROJECTS.map((proj, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": proj.title,
          "description": proj.description,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "url": (proj.liveUrl && proj.liveUrl !== "#") ? proj.liveUrl : "https://portfolio-mocha-two-84yz194zfg.vercel.app/project"
        }
      }))
    }
  ]
};

export default function ProjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-16">
          
          {/* Header Banner */}
          <div className="space-y-2 pt-4">
            <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest">
              / Work & Applications
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
              Selected Projects & Software
            </h1>
            <p className="text-zinc-400 font-normal text-sm max-w-xl">
              A comprehensive showcase of web applications, client solutions, and software projects built with React, Next.js, and Node.js.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#121215] border border-zinc-800/80 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100">
              Interested in Collaborating?
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-normal">
              Have a custom web project or engineering role in mind? Let&apos;s build something great together.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-sm font-medium transition-all"
              >
                Get In Touch ➔
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
