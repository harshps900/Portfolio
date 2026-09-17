"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 py-4 transition-all">
        <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="font-semibold text-sm tracking-wider text-zinc-100 group-hover:text-emerald-400 transition-colors">
              Harsh Pal Singh
            </span>
            <span className="text-xs text-emerald-400 font-mono">/ Dev</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-medium py-1 transition-colors ${
                    isActive ? "text-emerald-400" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href="/Harsh_Pal_Singh_Resume.pdf"
              download="Harsh_Pal_Singh_Resume.pdf"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-300 text-xs font-medium transition-colors"
            >
              Resume ➔
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open Navigation Menu"
            className="md:hidden p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-pointer"
          >
            <Menu className="w-5 h-5 text-zinc-200" />
          </motion.button>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay Drawer for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl text-zinc-100 flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            {/* Header row in mobile overlay */}
            <div className="flex justify-between items-center pb-6 border-b border-zinc-800/80">
              <span className="font-semibold text-sm tracking-wider text-zinc-100">
                Harsh Pal Singh <span className="text-emerald-400 font-mono text-xs">/ Dev</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Navigation Menu"
                className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-pointer"
              >
                <X className="w-5 h-5 text-zinc-200" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="my-auto py-8">
              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.03, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-semibold text-zinc-300 hover:text-emerald-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Footer / Resume link */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
              <p>© HARSH PAL SINGH</p>
              <a
                href="/Harsh_Pal_Singh_Resume.pdf"
                download="Harsh_Pal_Singh_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-400 text-zinc-950 hover:bg-emerald-300 text-sm font-semibold transition-all"
              >
                Download Resume ➔
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
