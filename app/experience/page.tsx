"use client";

import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Link from "next/link";
import { MapPin } from "lucide-react";

const WORK_EXPERIENCE = [
 {
        id: "01 | 2025",
        title: "FRONTEND DEVELOPER",
        company: "SoftSource Technolabs",
        location: "Ahmedabad, Gujarat",
        period: "October 2025 — MARCH 2026",
        description: "Leading the frontend development of scalable web applications and enterprise products. Specializing in high-performance React.js and Next.js interfaces with seamless API integration.",
        tags: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    },
    {
        id: "02 | 2024",
        title: "React.js Intern",
        company: "Softsource Technolabs",
        location: "Ahmedabad, Gujarat",
        period: "June 2025 — September 2025",
        description: "Successfully completed a intensive 3-month internship program focused on modern frontend technologies. Contributed to live client projects under expert guidance and gained hands-on experience in building responsive, user-centric interfaces.",
        tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Version Control"],
    },
    {
        id: "03 | 2023",
        title: "MCA CLOUD COMPUTING",
        company: "Master of Computer Applications",
        location: "Vadodara, Gujarat",
        period: "2023 — 2025",
        description: "Advanced degree specializing in cloud infrastructure, scalable backend architectures, distributed computing, and modern database management.",
        tags: ["Cloud Systems", "Database Architecture", "Distributed Systems"],
    },
];

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f4eb] text-[#000000] pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl space-y-16">
          
          {/* Header Banner */}
          <div className="space-y-4 pt-8">
            <p className="text-zinc-600 font-mono tracking-widest text-sm uppercase font-bold">
              / CAREER & JOURNEY
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display tracking-tight text-[#000000] uppercase">
              MY WORK <span className="text-[#bda682]">EXPERIENCE</span>
            </h1>
            <p className="text-zinc-700 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
              A timeline of professional engineering roles, team contributions, and technical milestones that shaped how I build scalable web software.
            </p>
          </div>

          {/* Experience Timeline List */}
          <div className="space-y-8">
            {WORK_EXPERIENCE.map((item) => (
              <div
                key={item.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#e8e4d9]/60 border border-black/20 hover:border-black/50 hover:bg-[#e8e4d9] transition-all duration-300 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-sm font-mono font-bold text-[#bda682] uppercase tracking-widest">
                      {item.id} WORK
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display text-[#000000]">
                      {item.title} <span className="text-[#bda682]">@ {item.company}</span>
                    </h2>
                  </div>
                  <div className="space-y-1 text-left sm:text-right">
                    <p className="text-xs font-mono font-bold text-[#000000] tracking-wider">
                      {item.period}
                    </p>
                    <p className="text-xs font-mono text-zinc-600 flex items-center sm:justify-end gap-1">
                      <MapPin size={12} className="text-[#bda682]" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-800 text-base font-sans leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full border border-black/20 text-zinc-800 text-xs font-mono font-medium bg-[#f7f4eb]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="p-12 rounded-3xl bg-[#000000] text-[#f7f4eb] text-center space-y-6 shadow-2xl">
            <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight">
              READY TO <span className="text-[#bda682]">WORK TOGETHER ?</span>
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto font-sans">
              I am open for full-time engineering roles, freelance contracts, and software collaborations.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full bg-[#f7f4eb] text-[#000000] font-display text-lg tracking-wider hover:bg-[#bda682] hover:text-[#000000] transition-colors"
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
