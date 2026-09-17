"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 space-y-12"
      >
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
            / About Developer
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Crafting Scalable Digital Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] bg-[#121215] overflow-hidden relative shadow-xl transition-all"
            >
              <Image 
                src="/profile.jpg" 
                alt="Harsh Pal Singh" 
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Right Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-zinc-300 font-normal leading-relaxed">
              I&apos;m a Full Stack & Frontend Developer specializing in the <span className="font-semibold text-emerald-400">MERN Stack, Next.js, and React</span>. My focus is writing maintainable, clean code and engineering intuitive user interfaces that deliver speed and clarity.
            </p>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed">
              Having built production applications at <span className="font-semibold text-zinc-200">SoftSource Technolabs</span>, I bring product ideas to life through server-side rendering, robust API integration, and clean design architecture.
            </p>

            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-sm font-medium transition-all"
                >
                  More About Me ➔
                </Link>
              </motion.div>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
