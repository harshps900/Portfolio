"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "py-4 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Link 
                        href="#home"
                        className="group flex flex-col"
                    >
                        <div className="flex items-center gap-0.5">
                            <span className="text-2xl font-black tracking-tighter text-white">HPS</span>
                            <span className="text-2xl font-black text-emerald-500 animate-pulse">.</span>
                        </div>
                        <span className="text-[8px] font-black tracking-[0.3em] text-zinc-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                            Engineering Identity
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
                    {NAV_LINKS.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-zinc-400 hover:text-emerald-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <a 
                        href="/api/download/Harsh_Pal_Singh_Resume.pdf"
                        className="px-6 py-2 rounded-xl bg-emerald-500 text-[#020617] font-black text-sm hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#020617] border-b border-white/5 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-black text-white hover:text-emerald-400"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a 
                                href="/api/download/Harsh_Pal_Singh_Resume.pdf"
                                download="Harsh_Pal_Singh_Resume.pdf"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 rounded-xl bg-emerald-500 text-center text-[#020617] font-black text-lg"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
