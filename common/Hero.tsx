"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MatrixRain from "./MatrixRain";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[90vh] flex items-center justify-center relative bg-[#09090b] text-[#f4f4f5] pt-32 pb-20 border-b border-zinc-800/60 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Emerald Glow Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Matrix Canvas Rain Background */}
      <MatrixRain />

      {/* Hero Foreground Content */}
      <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center justify-center space-y-8 relative z-10">
        
        {/* Availability Badge with ShinyText */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-emerald-800/60 text-zinc-300 text-xs font-medium shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" />
          <ShinyText text="Available for work" className="text-zinc-200" />
        </motion.div>

        {/* Main Display Headline with SplitText */}
        <div className="max-w-3xl">
          <SplitText
            text="Full Stack & Frontend Developer"
            className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-100"
          />
        </div>

        {/* Subtitle Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed text-center"
        >
          Designing and engineering high-performance React & Next.js web applications, MERN stack products, and interactive digital experiences with clean code and purpose.
        </motion.p>

        {/* Standardized Action Buttons with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-sm font-medium transition-all shadow-sm"
            >
              Get In Touch ➔
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/project"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur-md text-zinc-200 hover:bg-zinc-800 text-sm font-medium transition-all"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>

        {/* Matrix Metrics Row with Emerald Accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-800/60 w-full max-w-3xl"
        >
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 backdrop-blur-sm space-y-0.5 transition-colors">
            <p className="text-xl font-bold font-mono text-zinc-100">1 Year</p>
            <p className="text-xs text-zinc-400 font-medium">Experience</p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 backdrop-blur-sm space-y-0.5 transition-colors">
            <p className="text-xl font-bold font-mono text-zinc-100">10+</p>
            <p className="text-xs text-zinc-400 font-medium">Projects Built</p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 backdrop-blur-sm space-y-0.5 transition-colors">
            <p className="text-xl font-bold font-mono text-emerald-400">99.9%</p>
            <p className="text-xs text-zinc-400 font-medium">System Uptime</p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 backdrop-blur-sm space-y-0.5 transition-colors">
            <p className="text-xl font-bold font-mono text-zinc-100">MERN / Next</p>
            <p className="text-xs text-zinc-400 font-medium">Core Stack</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
