"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 text-center space-y-8"
      >
        
        <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
          / Let&apos;s Connect
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
          Interested in Collaborating?
        </h2>

        <p className="max-w-xl mx-auto text-base text-zinc-400 font-normal leading-relaxed">
          Whether you have an upcoming web project, engineering position, or software idea to bring to life, I&apos;d love to connect.
        </p>

        <div>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-sm font-medium transition-all shadow-sm"
            >
              Start a Conversation ➔
            </Link>
          </motion.div>
        </div>

        {/* Social links row */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-zinc-400 font-medium">
          <motion.a
            whileHover={{ y: -2 }}
            href="https://www.linkedin.com/in/harsh-pal-singh-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-emerald-400" />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com/harshps900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Instagram className="w-4 h-4 text-emerald-400" />
            <span>Instagram</span>
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}
