"use client";

import { forwardRef } from "react";
import { Zap, Quote } from "lucide-react";
import { motion } from "framer-motion";
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
        tags: ["Golang", "Redis", "React"],
        image: ChatApp,
        liveUrl: "#",
        githubUrl: "#",
    },
    // {
    //     title: "Khana Khazana",
    //     role: "FULL STACK DEVELOPER",
    //     problem: "A food-discovery and recipe engine designed to bridge the gap between amateur cooks and professional culinary standards.",
    //     impact: "60% Faster Search",
    //     tags: ["Flutter", "Firebase", "Redux"],
    //     image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&fit=crop",
    //     liveUrl: "#",
    //     githubUrl: "#",
    // }
];

const Projects = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="projects" ref={ref} className="w-full py-40 bg-[#020617] transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-emerald-500 font-black tracking-widest uppercase text-xs mb-4"
                    >
                        Selected Works
                    </motion.p>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
                        >
                            DIGITAL <br /> <span className="text-emerald-500">ENGINEERING</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-500 text-lg max-w-xl font-medium"
                        >
                            A deep dive into structural integrity, performance optimization, and refined user interfaces. These projects represent the intersection of logic and aesthetics.
                        </motion.p>
                    </div>
                </div>

                <div className="space-y-20">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${project.featured ? 'mb-32' : ''}`}
                        >
                            {/* Image Part */}
                            <div className={`lg:col-span-7 ${index % 2 !== 0 && project.featured ? 'lg:order-2' : ''}`}>
                                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900 group-hover:border-emerald-500/30 transition-all duration-700">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                                </div>
                            </div>

                            {/* Content Part */}
                            <div className="lg:col-span-5 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-xs font-black tracking-widest text-emerald-500 uppercase">
                                        <Zap size={14} />
                                        {project.role}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">{project.title}</h3>
                                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-2">
                                        <p className="text-xs font-black uppercase tracking-widest text-zinc-500">Problem Statement</p>
                                        <p className="text-zinc-400 font-medium leading-relaxed">{project.problem}</p>
                                    </div>
                                </div>

                                <div className="flex gap-12">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Impact</p>
                                        <p className="text-xl font-black text-white">{project.impact}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Stack</p>
                                        <div className="flex gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-sm font-bold text-blue-400">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {project.featured && (
                                    <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden italic">
                                        <Quote size={40} className="absolute -top-2 -left-2 text-emerald-500/10" />
                                        <p className="text-sm text-emerald-400 font-medium relative z-10 leading-relaxed">
                                            &quot;{project.lesson}&quot;
                                        </p>
                                    </div>
                                )}

                                <div className="flex items-center gap-6 pt-4">
                                    <a href={project.liveUrl} className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20">
                                        Live Demo
                                    </a>
                                    <a href={project.githubUrl} className="px-8 py-3 rounded-xl bg-blue-900/30 border border-blue-500/30 hover:border-blue-500 hover:bg-blue-900/50 text-blue-300 font-black text-sm transition-all hover:scale-105 active:scale-95">
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects;
