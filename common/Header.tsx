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
                isScrolled ? "py-4 bg-[#fbfaf7]/90 backdrop-blur-xl border-b border-zinc-200/60" : "py-8 bg-transparent"
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
                        <div className="flex items-center gap-1.5">
                            <span className="text-2xl font-bold tracking-widest text-gold-gradient text-glow-gold font-serif-luxury">HPS</span>
                            <span className="text-[9px] font-mono text-[#bda682] tracking-wider font-bold">EST. 2025</span>
                        </div>
                        <span className="text-[7px] font-bold tracking-[0.35em] text-zinc-500 uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Precision Engineering
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
                    {NAV_LINKS.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-zinc-500 hover:text-[#bda682] transition-colors"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <a 
                        href="/Harsh_Pal_Singh_Resume.pdf"
                        download="Harsh_Pal_Singh_Resume.pdf"
                        className="px-5 py-2.5 rounded bg-[#bda682] text-white font-black text-xs hover:bg-[#bda682]/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#bda682]/10 border border-[#bda682]/20"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-[#1c1b1a] p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} className="text-[#bda682]" /> : <Menu size={28} className="text-[#bda682]" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#fbfaf7] border-b border-zinc-200/60 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-black text-zinc-600 hover:text-[#bda682] uppercase tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a 
                                href="/Harsh_Pal_Singh_Resume.pdf"
                                download="Harsh_Pal_Singh_Resume.pdf"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 rounded bg-[#bda682] text-center text-white font-black text-sm uppercase tracking-widest"
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
