"use client";

import { forwardRef } from "react";
import Image, { StaticImageData } from "next/image";
import Modercart from "./../public/Moderncart.png";
import AurexArtisan from "./../public/aurex.png";
import ChatApp from "./../public/chatapp.png";

interface Project {
    title: string;
    role: string;
    problem: string;
    impact: string;
    tags: string[];
    image: string | StaticImageData;
    liveUrl: string;
    githubUrl: string;
    featured?: boolean;
    lesson?: string;
}

const PROJECTS: Project[] = [
    {
        title: "ModerCart",
        role: "Lead Frontend Engineer",
        problem: "Building a scalable and responsive eCommerce platform that delivers fast product browsing and smooth cart interactions under dynamic user loads.",
        impact: "40% Faster Load Time",
        tags: ["React.js", "Next.js", "TypeScript"],
        lesson: "Implementing efficient state management and memoization significantly reduced unnecessary re-renders, improving performance and user experience.",
        image: Modercart,
        liveUrl: "https://project-management-system-nine-ashen.vercel.app/",
        githubUrl: "https://github.com/harshps900/project-management-system",
        featured: true
    },
    {
        title: "AurexArtisan",
        role: "Web Developer",
        problem: "A comprehensive e-commerce platform for artisans to showcase and sell their products, with features like product management, order tracking, and reviews.",
        impact: "Increase conversion by 40%",
        tags: ["ReactJS", "Responsive", "TailwindCSS"],
        lesson: "Implementing efficient state management and memoization significantly reduced unnecessary re-renders, improving performance and user experience.",
        image: AurexArtisan,
        liveUrl: "https://www.aurexartisan.com/",
        githubUrl: "https://github.com/Ujjwal9329/artisan-exports-hub",
    },
    {
        title: "Go-Chat",
        role: "System Architect",
        problem: "Ultra-fast messaging platform built for high-scale communication, focusing on minimal latency and message persistence.",
        impact: "10k+ Concurrent users",
        tags: ["Firebase", "Tailwind", "React"],
        image: ChatApp,
        liveUrl: "",
        githubUrl: "",
    },
];

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="flex flex-col bg-white border border-zinc-200/80 rounded-[2rem] shadow-[0_12px_40px_rgba(189,166,130,0.02)] hover:border-[#bda682]/40 hover:shadow-[0_20px_50px_rgba(189,166,130,0.06)] transition-all duration-500 group overflow-hidden h-full">
            {/* Project Image Header */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-100 bg-[#fbfaf7]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 scale-100 group-hover:scale-103 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>

            {/* Project Content Body */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                    <span className="text-[9px] font-mono tracking-[0.15em] text-[#bda682] uppercase font-bold block">
                        {project.role} • {project.impact}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1c1b1a] tracking-tight leading-snug font-serif-luxury group-hover:text-[#bda682] transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium">
                        {project.problem}
                    </p>
                </div>

                <div className="mt-6 space-y-6">
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full border border-zinc-200 text-zinc-500 text-[8.5px] font-mono font-bold uppercase tracking-wider bg-[#fbfaf7]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer links */}
                    <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                        {project.liveUrl && project.liveUrl !== "#" ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold uppercase tracking-wider text-[#bda682] hover:text-[#bda682]/80 flex items-center transition-colors duration-300"
                            >
                                Live Demo →
                            </a>
                        ) : (
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 cursor-not-allowed">
                                Demo Unavailable
                            </span>
                        )}

                        {project.githubUrl && project.githubUrl !== "#" ? (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-[#bda682] transition-colors duration-300"
                            >
                                View Code
                            </a>
                        ) : (
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 cursor-not-allowed">
                                Private Code
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="projects" ref={ref} className="w-full py-12 md:py-20 lg:py-24 bg-[#fbfaf7] transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="mb-12 lg:mb-16">
                    <p className="text-[#bda682] font-mono tracking-[0.25em] text-[10px] uppercase mb-4 font-bold">
                        Selected Collections
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1c1b1a] tracking-tight max-w-4xl leading-none font-serif-luxury">
                            Frontend <br />
                            <span className="text-gold-gradient text-glow-gold font-serif-luxury font-bold">Engineering</span>
                        </h2>
                        <p className="text-zinc-500 text-base max-w-xl font-medium leading-relaxed">
                            A portfolio of custom digital editions. Built with precision, alignment, and legibility as core tenets, matching the complexity of mechanical complications.
                        </p>
                    </div>
                </div>

                {/* Projects Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="h-full">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects;
