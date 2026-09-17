"use client";

import { motion } from "framer-motion";

const CAPABILITIES = [
  "React 19 & Next.js 16",
  "Full-Stack Architecture",
  "Tailwind CSS & Design Systems",
  "REST & GraphQL APIs",
  "Performance & SEO Optimization",
  "TypeScript & Scalable Codebases",
  "State Management & Micro-frontends",
  "AI Integration & Cloud Services",
];

export default function MarqueeBanner() {
  // Multiply capabilities array so 50% shift creates a seamless 100% loop
  const marqueeItems = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section className="w-full bg-[#0d0d10] border-y border-zinc-800/80 py-3.5 relative overflow-hidden select-none">
      {/* Gradient Fading Edge Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10" />

      {/* Infinite Framer Motion Scrolling Track */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap pr-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((cap, idx) => (
            <div key={`${cap}-${idx}`} className="flex items-center gap-6">
              <span className="text-xs font-mono tracking-wide text-zinc-300 hover:text-emerald-400 transition-colors">
                {cap}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


