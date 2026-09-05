"use client";

import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Modercart from "./../../public/Moderncart.png";
import AurexArtisan from "./../../public/aurex.png";
import ChatApp from "./../../public/chatapp.png";
import Notesio from "./../../public/notesio.png";

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
  liveUrl: string;
  githubUrl: string;
}

const ALL_PROJECTS: Project[] = [
  {
        id: "1.",
        title: "Notesio SaaS & Kanban",
        role: "Full-stack Web Developer",
        description: "A feature-rich Note-Taking SaaS application and hybrid Kanban project management tool built for personal productivity and team collaboration.",
        tags: ["React", "Vite", "Tailwind CSS", "SaaS"],
        image: Notesio,
        liveUrl: "https://notesio-zeta.vercel.app/",
        githubUrl: "#",
    },
    {
        id: "2.",
        title: "Modern Cart Website",
        role: "Full-stack Web Developer",
        description: "A visually stunning Ecommerce website built with React and Tailwind CSS and responsive layout design.",
        tags: ["React", "Tailwind CSS", "HTML"],
        image: Modercart,
        liveUrl: "https://project-management-system-nine-ashen.vercel.app/",
        githubUrl: "https://github.com/harshps900/project-management-system",
    },
    {
        id: "3.",
        title: "Aurex Artisan Website",
        role: "Full-stack Web Developer",
        description: "A visually striking interactive website for an artisan export company built with smooth scrolling and responsive layout design.",
        tags: ["React", "Tailwind CSS", "HTML"],
        image: AurexArtisan,
        liveUrl: "https://www.aurexartisan.com/",
        githubUrl: "https://github.com/Ujjwal9329/artisan-exports-hub",
    },
    {
        id: "4.",
        title: "Chat Application",
        role: "Full-stack Web Developer",
        description: "A modern chat application with real-time messaging, user authentication, and a responsive interface built with React and Tailwind CSS.",
        tags: ["React", "Tailwind CSS", "HTML"],
        image: ChatApp,
        liveUrl: "",
        githubUrl: "#",
    },
  // {
  //   id: "4.",
  //   title: "We Think Elastic Awwards Website",
  //   role: "Experimental Web UI",
  //   description: "An experimental web layout application built to explore dynamic grid system transitions, smooth scroll animations, and interactive cursor effects.",
  //   tags: ["React.js", "GSAP", "Tailwind CSS", "Framer Motion"],
  //   image: Modercart,
  //   liveUrl: "https://github.com/harshps900",
  //   githubUrl: "https://github.com/harshps900",
  // },
];

export default function ProjectPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f4eb] text-[#000000] pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl space-y-16">
          
          {/* Header Banner */}
          <div className="space-y-4 pt-8">
            <p className="text-zinc-600 font-mono tracking-widest text-sm uppercase font-bold">
              / WORK & EXPERIMENTS
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display tracking-tight text-[#000000] uppercase">
              THINGS I MADE <span className="text-[#bda682]">ALONG THE WAY</span>
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ALL_PROJECTS.map((project) => (
              <div
                key={project.id}
                data-cursor="VIEW"
                className="flex flex-col bg-[#f7f4eb] border border-black/20 rounded-3xl overflow-hidden hover:border-black/60 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >

                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8e4d9] border-b border-black/15">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl font-mono font-bold text-zinc-500">{project.id}</span>
                      <h2 className="text-3xl font-display text-[#000000] group-hover:text-[#bda682] transition-colors leading-tight">
                        {project.title}
                      </h2>
                    </div>

                    <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
                      {project.role}
                    </p>

                    <p className="text-zinc-700 text-sm font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6 pt-4 border-t border-black/15">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full border border-black/20 text-zinc-700 text-xs font-mono font-medium bg-[#e8e4d9]/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {project.liveUrl && project.liveUrl !== "#" ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 rounded-full bg-[#000000] text-[#f7f4eb] font-display text-sm tracking-wider hover:bg-[#bda682] hover:text-[#000000] transition-colors"
                        >
                          Live Link ➔
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-zinc-400">
                          Demo Internal
                        </span>
                      )}

                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-bold text-[#000000] hover:text-[#bda682] uppercase tracking-wider transition-colors"
                        >
                          View GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="p-12 rounded-3xl bg-[#000000] text-[#f7f4eb] text-center space-y-6 shadow-2xl">
            <h2 className="text-4xl sm:text-6xl font-display uppercase tracking-tight">
              INTERESTED IN <span className="text-[#bda682]">COLLABORATING ?</span>
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto font-sans">
              Have a custom project or engineering role in mind? Let&apos;s build something great together.
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
