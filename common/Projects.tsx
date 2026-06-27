"use client";

import { forwardRef, useRef } from "react";
import { Zap, Quote } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Modercart from "./../public/Moderncart.png";
import AurexArtisan from "./../public/aurex.png";
import ChatApp from "./../public/chatapp.png";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

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
        problem: "A comprehensive e-commerce platform for artisans to showcase and sell their products, with features like product management, order tracking, and customer reviews.",
        impact: "Increase conversion by 40%",
        tags: ["ReactJS", "Responsive", "TailwindCSS"],
        lesson: "Implementing efficient state management and memoization significantly reduced unnecessary re-renders, improving performance and user experience.",
        image: AurexArtisan,
        liveUrl: "https://www.aurexartisan.com/",
        githubUrl: "https://github.com/Ujjwal9329/artisan-exports-hub",
    },
    {
        title: "Go-Chat",
        role: "SYSTEM ARCHITECT",
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
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    // Stacking Cards Scroll Animation
    useGSAP(() => {
        if (!cardRef.current || !wrapperRef.current) return;

        // Scale down the card underneath as the next card stacks on top of it
        if (index < PROJECTS.length - 1) {
            gsap.to(cardRef.current, {
                scale: 0.92,
                opacity: 0.65,
                y: -15,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 130px",
                    end: "bottom 130px",
                    scrub: true,
                }
            });
        }
    }, { scope: wrapperRef });

    // Cursor-interactive 3D tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { damping: 35, stiffness: 180 });
    const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { damping: 35, stiffness: 180 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const xVal = (e.clientX - rect.left) / width - 0.5;
        const yVal = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(xVal);
        mouseY.set(yVal);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div ref={wrapperRef} style={{ perspective: 1500 }} className="sticky top-[100px] md:top-[140px] w-full py-4 lg:py-6 overflow-visible">
            <div
                ref={cardRef}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-white border border-zinc-200/80 rounded-[2rem] p-6 lg:p-12 transition-all duration-500 hover:border-[#bda682]/40 shadow-[0_20px_50px_rgba(189,166,130,0.06)]"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* 3D Interactive Card Image */}
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <motion.div 
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX: tiltX,
                            rotateY: tiltY,
                            transformStyle: "preserve-3d"
                        }}
                        className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-200/80 bg-[#fbfaf7] transition-all duration-500 shadow-lg hover:shadow-[#bda682]/5 hover:border-[#bda682]/40"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover transition-transform duration-700 scale-100 group-hover:scale-102 opacity-85 group-hover:opacity-100 brightness-[0.98] contrast-102"
                            style={{ transform: "translateZ(25px)" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#fbfaf7]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                    </motion.div>
                </div>

                {/* Content Layout */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.2em] text-[#bda682] uppercase font-bold">
                            <Zap size={12} className="text-[#bda682]" />
                            {project.role}
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-[#1c1b1a] tracking-tight leading-none font-serif-luxury">{project.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium pt-2">{project.problem}</p>
                    </div>

                    {/* Stats details */}
                    <div className="flex gap-10 pt-2">
                        <div className="space-y-1">
                            <p className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">Impact</p>
                            <p className="text-base font-bold text-[#1c1b1a] font-serif-luxury">{project.impact}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono font-bold text-[#bda682]">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {project.featured && project.lesson && (
                        <div className="p-4 rounded bg-[#fbfaf7] border-l-4 border-[#bda682] italic relative overflow-hidden">
                            <Quote size={20} className="absolute -top-1 -left-1 text-[#bda682]/5" />
                            <p className="text-xs text-zinc-600 font-medium relative z-10 leading-relaxed">
                                {project.lesson}
                            </p>
                        </div>
                    )}

                    <div className="flex items-center gap-4 pt-4">
                        {project.liveUrl && project.liveUrl !== "#" ? (
                            <a 
                                href={project.liveUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 rounded bg-[#bda682] hover:bg-[#bda682]/90 text-white text-center font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#bda682]/15"
                            >
                                Live Demo
                            </a>
                        ) : (
                            <button 
                                disabled
                                className="px-6 py-2.5 rounded bg-zinc-100 text-zinc-400 cursor-not-allowed font-bold text-xs border border-zinc-200 uppercase tracking-wider"
                            >
                                Coming Soon
                            </button>
                        )}

                        {project.githubUrl && project.githubUrl !== "#" ? (
                            <a 
                                href={project.githubUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 rounded bg-white border border-zinc-200 hover:border-[#bda682]/40 hover:bg-zinc-50 text-zinc-600 text-center font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                            >
                                Source Code
                            </a>
                        ) : (
                            <button 
                                disabled
                                className="px-6 py-2.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-400 cursor-not-allowed font-bold text-xs uppercase tracking-wider"
                            >
                                Private Repo
                            </button>
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
                <div className="mb-10 lg:mb-14">
                    <p className="text-[#bda682] font-mono tracking-[0.25em] text-[10px] uppercase mb-3 font-bold">
                        Selected Collections
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <h2
                            className="text-5xl md:text-7xl font-bold text-[#1c1b1a] tracking-tighter leading-none font-serif-luxury"
                        >
                            Frontend <br /> <span className="text-gold-gradient text-glow-gold font-serif-luxury font-bold">ENGINEERING</span>
                        </h2>
                        <p
                            className="text-zinc-500 text-base max-w-xl font-medium leading-relaxed"
                        >
                            A portfolio of custom digital editions. Built with precision, alignment, and legibility as core tenets, matching the complexity of mechanical complications.
                        </p>
                    </div>
                </div>

                <div className="space-y-4 lg:space-y-6">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects;
