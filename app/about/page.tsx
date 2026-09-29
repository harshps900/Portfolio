import type { Metadata } from "next";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Achievements from "@/common/Achievements";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: { absolute: "About Full Stack Developer | Harsh Pal Singh" },
  description: "Learn about Harsh Pal Singh, Full Stack & Frontend Engineer specializing in React.js, Next.js, MERN stack, and modern web application development.",
  keywords: [
    "About Harsh Pal Singh",
    "Full Stack Developer Profile",
    "Frontend Engineer Bio",
    "React.js Developer Skills",
    "Next.js Developer History",
  ],
  alternates: {
    canonical: "https://portfolio-mocha-two-84yz194zfg.vercel.app/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-mocha-two-84yz194zfg.vercel.app/about",
    title: "About Full Stack Developer | Harsh Pal Singh",
    description: "Learn about Harsh Pal Singh, Full Stack & Frontend Engineer specializing in React.js, Next.js, MERN stack, and modern web application development.",
    siteName: "Harsh Pal Singh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Pal Singh - About Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Full Stack Developer | Harsh Pal Singh",
    description: "Learn about Harsh Pal Singh, Full Stack & Frontend Engineer specializing in React.js, Next.js, MERN stack, and modern web application development.",
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
      "name": "About",
      "item": "https://portfolio-mocha-two-84yz194zfg.vercel.app/about"
    }
  ]
};

const METRICS = [
  { number: "6+ Mos", label: "Practical Experience" },
  { number: "15+", label: "Projects Built" },
  { number: "10+", label: "Technologies Used" },
];

const INTERESTS = [
  { number: "01", title: "Photography", text: "Capturing visual perspectives and storytelling through architectural frames." },
  { number: "02", title: "Technical Writing", text: "Writing code breakdowns, architectural principles, and frontend patterns." },
  { number: "03", title: "Open Source", text: "Contributing to community web packages and building developer side tools." },
];

export default function AboutPage() {
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
              / Who I Am
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
              About Harsh Pal Singh
            </h1>
          </div>

          {/* Philosophy Statement */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-zinc-800/80 space-y-2">
            <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest">Philosophy</span>
            <p className="text-xl sm:text-2xl font-semibold text-zinc-200 leading-snug">
              &ldquo;Engineering software isn&apos;t just about making code run — it&apos;s about building intuitive, reliable experiences that solve real problems.&rdquo;
            </p>
          </div>

          {/* Profile Bio & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border border-zinc-800 bg-[#121215] overflow-hidden relative shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Harsh Pal Singh"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base font-normal text-zinc-300 leading-relaxed">
              <p>
                I&apos;m a Frontend & Full Stack Developer with 6+ months of practical experience building web applications using <span className="font-semibold text-zinc-100">React.js, Next.js, Node.js, and MongoDB</span>.
              </p>
              <p>
                Having engineered client features at <span className="font-semibold text-zinc-100">SoftSource Technolabs</span>, I combine modern component architecture with backend APIs to build production software.
              </p>
              <p>
                Driven to grow my career and continuously enhance my skills, I am open to <span className="font-semibold text-emerald-400">full-time developer jobs, remote roles, freelancing, and part-time projects</span>.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="p-6 rounded-2xl bg-[#121215] border border-zinc-800/80 space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-zinc-100">{metric.number}</p>
                <p className="text-xs font-medium text-zinc-400 tracking-wider">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <Achievements />

          {/* Personal Interests Grid */}
          <div className="space-y-6 pt-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest">Beyond Code</span>
              <h2 className="text-3xl font-bold text-zinc-100">Personal Interests</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INTERESTS.map((item) => (
                <div key={item.number} className="p-6 rounded-2xl bg-[#121215] border border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-zinc-200">{item.title}</h3>
                    <span className="text-xs font-mono text-zinc-500">{item.number}</span>
                  </div>
                  <p className="text-zinc-400 text-sm font-normal leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#121215] border border-zinc-800/80 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100">
              Ready to Work Together?
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-normal">
              Looking for a frontend or full-stack developer for your team or project? Let&apos;s talk.
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
