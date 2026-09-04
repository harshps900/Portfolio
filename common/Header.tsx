"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const NAV_ITEMS = [
  { number: "01.", label: "Home", href: "/" },
  { number: "02.", label: "About", href: "/about" },
  { number: "03.", label: "Project", href: "/project" },
  { number: "04.", label: "Experience", href: "/experience" },
  { number: "05.", label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Header Bar */}
      <header className="fixed top-0 left-0 w-full z-40 p-6 md:p-8 flex justify-end items-center pointer-events-none">
        {/* Brand Logo */}
        {/* <Link
          href="/"
          className="pointer-events-auto flex items-center gap-2 group"
        >
          <span className="font-display text-2xl md:text-3xl tracking-widest text-[#f7f4eb] drop-shadow-md bg-[#000000] px-4 py-1.5 rounded-full border border-white/20 group-hover:border-[#bda682] transition-colors">
            HPS
          </span>
        </Link> */}

        {/* Floating Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Navigation Menu"
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#000000] text-[#f7f4eb] border border-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer group"
        >
          <Menu className="w-6 h-6 text-[#f7f4eb] group-hover:text-[#bda682] transition-colors" />
        </button>
      </header>

      {/* Fullscreen Navigation Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 1, x: "100%" }}
            transition={{ duration: 0.55, ease: [0.86, 0, 0.34, 1] }}
            className="fixed inset-0 z-50 bg-[#000000] text-[#f7f4eb] flex flex-col justify-between p-8 md:p-16 overflow-y-auto"
          >
            {/* Close Button Header */}
            <div className="flex justify-end items-center">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Navigation Menu"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#bda682] transition-all cursor-pointer"
              >
                <X className="w-6 h-6 text-[#f7f4eb]" />
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="my-auto py-8">
              <nav className="flex flex-col gap-4 md:gap-6 max-w-4xl">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.04, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 md:gap-8 text-5xl sm:text-7xl md:text-8xl font-display hover:text-[#bda682] transition-colors"
                    >
                      <span className="text-lg sm:text-3xl font-mono text-zinc-500 group-hover:text-[#bda682] transition-colors">
                        {item.number}
                      </span>
                      <span className="tracking-wide">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Footer / Resume link */}
            <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-400">
              <p>© HARSH PAL SINGH • CREATIVE WEB DEVELOPER</p>
              <a
                href="/Harsh_Pal_Singh_Resume.pdf"
                download="Harsh_Pal_Singh_Resume.pdf"
                className="px-6 py-2.5 rounded-full bg-[#f7f4eb] text-[#000000] font-display text-sm hover:bg-[#bda682] transition-colors"
              >
                DOWNLOAD RESUME ➔
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


