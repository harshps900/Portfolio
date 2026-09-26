"use client";

import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "./projectsData";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col bg-[#121215] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all group h-full"
    >
      {/* Project Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content Body */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium text-emerald-400">{project.id}</span>
            <span className="text-xs font-medium text-zinc-400">{project.role}</span>
          </div>

          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm font-normal leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-4 border-t border-zinc-800/80">
          {/* Technology tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900/80 text-zinc-300 text-xs font-medium hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links using Standardized Buttons & Emerald Motion */}
          <div className="flex items-center gap-2 pt-1">
            {project.liveUrl && project.liveUrl !== "#" ? (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-medium transition-all"
              >
                <span>Live Link</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            ) : (
              <span className="text-xs text-zinc-500 font-medium">Internal Demo</span>
            )}

            {project.githubUrl && project.githubUrl !== "#" && (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300 text-xs font-medium transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="projects" ref={ref} className="w-full py-16 sm:py-24 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 space-y-12"
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
              / Selected Work
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/project"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
