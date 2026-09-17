"use client";

import { forwardRef } from "react";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  type: "work" | "education";
}

export const JOURNEY: ExperienceItem[] = [
  {
    id: "01",
    title: "Frontend Developer",
    company: "SoftSource Technolabs",
    location: "Ahmedabad, Gujarat",
    period: "Oct 2025 — Mar 2026",
    description: "Leading frontend engineering for scalable web applications and enterprise software products. Built high-performance React.js and Next.js interfaces with seamless REST API integrations.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    type: "work",
  },
  {
    id: "02",
    title: "React.js Intern",
    company: "Softsource Technolabs",
    location: "Ahmedabad, Gujarat",
    period: "Jun 2025 — Sep 2025",
    description: "Completed an intensive 3-month engineering internship program focused on modern frontend web stack. Built responsive client applications and user-centric web features under senior mentorship.",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
    type: "work",
  },
  {
    id: "03",
    title: "MCA Cloud Computing",
    company: "Master of Computer Applications",
    location: "Vadodara, Gujarat",
    period: "2023 — 2025",
    description: "Advanced Master's degree specializing in cloud infrastructure, web architectures, distributed systems, and database management.",
    tags: ["Cloud Systems", "Database Systems", "Software Architecture"],
    type: "education",
  },
];

const Experience = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="experience" ref={ref} className="w-full py-16 sm:py-24 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 space-y-12"
      >
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
            / Experience & Journey
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Work Experience Timeline
          </h2>
          <p className="text-zinc-400 font-normal text-sm max-w-xl">
            A chronological timeline of professional engineering roles, team contributions, and academic milestones.
          </p>
        </div>

        {/* Visual Vertical Timeline Tree */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-zinc-800/80 space-y-10 ml-2 sm:ml-4 my-8">
          {JOURNEY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Timeline Connector Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-emerald-400 transition-colors z-10">
                <span className="w-2 h-2 rounded-full bg-zinc-100 group-hover:bg-emerald-400 transition-colors" />
              </div>

              {/* Timeline Experience Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-zinc-800/80 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium">
                      {item.type === "work" ? (
                        <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                      <span className="uppercase tracking-wider">{item.type}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                      {item.title} <span className="text-zinc-400 font-normal">@ {item.company}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-medium text-zinc-400">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/80 text-emerald-300">
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <MapPin size={12} className="text-emerald-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm font-normal leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md border border-zinc-800 text-zinc-300 text-xs font-medium bg-zinc-900/60 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
