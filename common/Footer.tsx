"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#09090b] text-[#f4f4f5] py-12 border-t border-zinc-800/60">
      <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 space-y-8">
        
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-zinc-800/60">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-zinc-200">Harsh Pal Singh</p>
            <p className="text-xs text-zinc-400 max-w-md">
              Full Stack & Frontend Developer specializing in React, Next.js, and interactive web products.
            </p>
          </div>

          {/* Social Nav Items */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-medium">
            <a
              href="https://www.linkedin.com/in/harsh-pal-singh-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors"
            >
              LinkedIn ➔
            </a>
            <a
              href="https://github.com/harshps900"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors"
            >
              GitHub ➔
            </a>
            <a
              href="https://www.behance.net/educationtime"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors"
            >
              Behance ➔
            </a>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll to Top"
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Harsh Pal Singh. All rights reserved.</p>
          <p>Built with Next.js, React & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
