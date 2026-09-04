"use client";

import { forwardRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Modercart from "./../public/Moderncart.png";
import AurexArtisan from "./../public/aurex.png";
import ChatApp from "./../public/chatapp.png";

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

const PROJECTS: Project[] = [
    {
        id: "1.",
        title: "Modern Cart Website",
        role: "Full-stack Web Developer",
        description: "A visually stunning Ecommerce website built with React and Tailwind CSS and responsive layout design.",
        tags: ["React", "Tailwind CSS", "HTML"],
        image: Modercart,
        liveUrl: "https://project-management-system-nine-ashen.vercel.app/",
        githubUrl: "https://github.com/harshps900/project-management-system",
    },
    {
        id: "2.",
        title: "Aurex Artisan Website",
        role: "Full-stack Web Developer",
        description: "A visually striking interactive website for an artisan export company built with smooth scrolling and responsive layout design.",
        tags: ["React", "Tailwind CSS", "HTML"],
        image: AurexArtisan,
        liveUrl: "https://www.aurexartisan.com/",
        githubUrl: "https://github.com/Ujjwal9329/artisan-exports-hub",
    },
    {
        id: "3.",
        title: "Chat Application",
        role: "Full-stack Web Developer",
        description: "A modern chat application with real-time messaging, user authentication, and a responsive interface built with React and Tailwind CSS.",
        tags: ["React", "Tailwind CSS", "HTML"],
        image: ChatApp,
        liveUrl: "",
        githubUrl: "#",
    },
];

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div 
            data-cursor="VIEW"
            className="flex flex-col bg-[#f7f4eb] border border-black/20 rounded-3xl overflow-hidden hover:border-black/60 hover:shadow-2xl transition-all duration-500 group h-full cursor-pointer"
        >
            {/* Project Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8e4d9] border-b border-black/15">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Project Content Body */}
            <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-4">
                    <div className="flex items-baseline gap-3">
                        <span className="text-xl font-mono font-bold text-zinc-500">{project.id}</span>
                        <h3 className="text-3xl font-display text-[#000000] group-hover:text-[#bda682] transition-colors leading-tight">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
                        {project.role}
                    </p>

                    <p className="text-zinc-700 text-sm font-sans leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-black/15">
                    {/* Technology tags */}
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

                    {/* Action Links */}
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
    );
};


const Projects = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="projects" ref={ref} className="w-full py-20 md:py-28 bg-[#f7f4eb] text-[#000000] border-t border-black/10">
            <div className="container mx-auto px-6 max-w-6xl space-y-16">
                
                {/* Section Header */}
                <div className="space-y-4">
                    <p className="text-zinc-600 font-mono tracking-widest text-sm uppercase font-bold">
                        / SELECTED WORK
                    </p>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-display tracking-tight text-[#000000] uppercase">
                        SELECTED <span className="text-[#bda682]">PROJECTS</span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="h-full">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="text-center pt-8">
                    <Link
                        href="/project"
                        className="inline-block px-10 py-4 rounded-full border-2 border-black bg-[#000000] text-[#f7f4eb] hover:bg-transparent hover:text-[#000000] font-display text-lg tracking-widest transition-all duration-300 shadow-lg"
                    >
                        More Projects ➔
                    </Link>
                </div>

            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects;


