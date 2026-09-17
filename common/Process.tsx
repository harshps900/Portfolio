"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Layout, Rocket } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Code;
  highlights: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Architecture",
    subtitle: "Planning & Technical Spec",
    description: "Understanding product goals, mapping user journeys, and selecting optimal frontend and backend tech stacks.",
    icon: Layout,
    highlights: ["User Flow Mapping", "System Architecture", "Tech Stack Selection"],
  },
  {
    number: "02",
    title: "UI & Component System",
    subtitle: "Design & Design System",
    description: "Building responsive layout grids, reusable UI component tokens, and standardized styling rules.",
    icon: Code,
    highlights: ["Tailwind CSS Tokens", "Reusable Components", "Responsive Layouts"],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    subtitle: "Frontend & API Integration",
    description: "Writing scalable React & Next.js frontend code, Node.js REST API endpoints, and MongoDB schemas.",
    icon: Cpu,
    highlights: ["React.js & Next.js", "RESTful APIs & Node", "State & Data Models"],
  },
  {
    number: "04",
    title: "Optimization & Launch",
    subtitle: "QA & Cloud Deployment",
    description: "Conducting cross-browser testing, lighthouse performance tuning, SEO meta setup, and Vercel cloud deployment.",
    icon: Rocket,
    highlights: ["Lighthouse 90+ Score", "SEO & Meta Setup", "Vercel Cloud Deploy"],
  },
];

export default function Process() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60">
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
              / Development Process
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              How Products Are Built
            </h2>
            <p className="text-zinc-400 font-normal text-sm max-w-xl">
              A structured 4-step engineering workflow ensuring clean code, rapid delivery, and reliable production software.
            </p>
          </div>
          <div className="md:hidden flex items-center gap-2 text-xs font-mono text-emerald-400/80">
            <span>← Swipe steps →</span>
          </div>
        </div>

        {/* 4 Process Cards: Straight Horizontal Track on Mobile (SoftSource-style), 4-Col Grid on Desktop */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="w-[82vw] sm:w-[300px] md:w-full shrink-0 md:shrink snap-center p-6 rounded-2xl bg-[#121215] border border-zinc-800/80 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] transition-all space-y-5 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Number Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                    <span className="text-2xl font-bold font-mono text-emerald-400 group-hover:text-emerald-300">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-800/80 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
                      {step.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-xs font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-1.5">
                  {step.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
