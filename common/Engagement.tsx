"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Code2, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

import SpotlightCard from "./SpotlightCard";

export interface EngagementCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Briefcase;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const ENGAGEMENT_MODELS: EngagementCard[] = [
  {
    id: "01",
    badge: "Full-Time Position",
    title: "Full-Time Engineering",
    subtitle: "Permanent Developer Role",
    description: "Joining your core software team as a Frontend or Full-Stack Engineer to build scalable web applications.",
    icon: Briefcase,
    features: [
      "React.js & Next.js Ecosystem",
      "REST API & State Architecture",
      "Production Code Quality & Standards",
    ],
    ctaLabel: "Discuss Opportunity ➔",
    ctaHref: "/contact",
  },
  {
    id: "02",
    badge: "End-To-End App",
    title: "Project-Based Development",
    subtitle: "Custom Application Build",
    description: "Full-cycle product design and web development from technical specification to Vercel production deployment.",
    icon: Code2,
    features: [
      "SaaS & Web App Builds",
      "Responsive Component Systems",
      "Vercel Cloud Deployment & Domain",
    ],
    ctaLabel: "Start Project ➔",
    ctaHref: "/contact",
  },
  {
    id: "03",
    badge: "Optimization & Audit",
    title: "Frontend Architecture & Speed",
    subtitle: "Codebase Refactor & Audit",
    description: "Upgrading existing web applications to Next.js, component refactoring, and Lighthouse 90+ performance tuning.",
    icon: Zap,
    features: [
      "Next.js App Router Migration",
      "Lighthouse 90+ Score Tuning",
      "Design System Refactoring",
    ],
    ctaLabel: "Optimize Application ➔",
    ctaHref: "/contact",
  },
];

export default function Engagement() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60 relative">
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
            / Engagement Models
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Ways We Can Work Together
          </h2>
          <p className="text-zinc-400 font-normal text-sm max-w-xl">
            Flexible collaboration structures for engineering teams, startups, and custom software projects.
          </p>
        </div>

        {/* 3 SoftSource-Inspired Engagement Cards with React Bits Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model, idx) => {
            const IconComponent = model.icon;
            return (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                className="h-full"
              >
                <SpotlightCard className="p-6 sm:p-8 space-y-6 flex flex-col justify-between group h-full">
                  <div className="space-y-4">
                    {/* Top Icon & Badge Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                      <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-md">
                        {model.badge}
                      </span>
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-800/80 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1">
                      <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
                        {model.subtitle}
                      </span>
                      <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white leading-snug">
                        {model.title}
                      </h3>
                    </div>

                    <p className="text-zinc-400 text-xs font-normal leading-relaxed">
                      {model.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2">
                      {model.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standardized Primary Button */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        href={model.ctaHref}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-medium transition-all"
                      >
                        <span>{model.ctaLabel}</span>
                      </Link>
                    </motion.div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
