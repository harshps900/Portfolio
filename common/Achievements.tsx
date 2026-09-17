"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

export interface AchievementItem {
  id: string;
  metric: string;
  labelShort: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "01",
    metric: "99.9%",
    labelShort: "STABILITY",
    title: "Enterprise Dashboard Architecture",
    company: "SoftSource Technolabs",
    description: "Designed modular frontend dashboard architecture to manage complex enterprise data models with high client reliability.",
    tags: ["React.js", "State Management", "Data Models"],
  },
  {
    id: "02",
    metric: "100%",
    labelShort: "INTEGRATION",
    title: "Headless CMS API Integration",
    company: "SoftSource Technolabs",
    description: "Integrated WordPress REST API endpoints with custom Next.js frontend, enabling real-time content management.",
    tags: ["WordPress REST API", "Headless CMS", "Next.js"],
  },
  {
    id: "03",
    metric: "50%",
    labelShort: "VELOCITY",
    title: "Modular Component System",
    company: "SoftSource Technolabs",
    description: "Built a reusable UI design component library, accelerating feature delivery timelines across team development cycles.",
    tags: ["Component Library", "Tailwind CSS", "Design System"],
  },
  {
    id: "04",
    metric: "Scale",
    labelShort: "PERFORMANCE",
    title: "MotorQuote Form Engine",
    company: "SoftSource Technolabs",
    description: "Engineered scalable input form calculators and dynamic quote processing engines designed for high concurrency.",
    tags: ["Scalable Layout", "Form State", "CSS Architecture"],
  }
];

const Achievements = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="achievements" ref={ref} className="w-full py-20 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-6 max-w-6xl space-y-12"
      >
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
            / Metrics & Impact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Engineering Impact
          </h2>
          <p className="text-zinc-400 font-normal text-sm max-w-xl">
            Quantifiable engineering milestones and performance improvements delivered across production projects.
          </p>
        </div>

        {/* Achievements Cards Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-[#121215] border border-zinc-800/80 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-zinc-800/80 pb-3">
                  <span className="text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {item.metric}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {item.id}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs text-emerald-400/90 font-medium uppercase tracking-wider block">
                    {item.labelShort} • {item.company}
                  </span>
                  <h3 className="text-base font-semibold text-zinc-200 group-hover:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs font-normal leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 pt-3 border-t border-zinc-800/80">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md border border-zinc-800 text-zinc-400 text-xs font-medium bg-zinc-900/40 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
});

Achievements.displayName = "Achievements";

export default Achievements;
