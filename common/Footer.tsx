"use client";

import Link from "next/link";
import { Github, Linkedin, Palette, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full bg-[#0e100a] text-[#f7f4eb] pt-20 pb-8 px-6 overflow-hidden relative border-t border-[#f7f4eb]/10">
            <div className="container mx-auto max-w-6xl space-y-16 relative z-10">
                
                {/* Top Row: Brand & Quick Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-zinc-800">
                    <div className="space-y-2">
                        <span className="font-display text-3xl tracking-widest text-[#f7f4eb]">
                            HPS
                        </span>
                        <p className="text-zinc-400 font-mono text-xs max-w-sm">
                            Designing and engineering interactive digital experiences with clean code & thoughtful motion.
                        </p>
                    </div>

                    {/* Social Nav Items */}
                    <div className="flex flex-wrap items-center gap-6 text-sm font-display tracking-wider">
                        <a
                            href="https://www.linkedin.com/in/harsh-pal-singh-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#bda682] transition-colors"
                        >
                            LINKEDIN ➔
                        </a>
                        <a
                            href="https://github.com/harshps900"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#bda682] transition-colors"
                        >
                            GITHUB ➔
                        </a>
                        <a
                            href="https://www.behance.net/educationtime"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#bda682] transition-colors"
                        >
                            BEHANCE ➔
                        </a>
                        
                        <button
                            onClick={scrollToTop}
                            aria-label="Scroll to Top"
                            className="p-3 rounded-full border border-zinc-700 hover:border-[#bda682] hover:text-[#bda682] transition-colors cursor-pointer"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Bottom Row: Copyright */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
                    <p>© 2026 HARSH PAL SINGH • CREATIVE WEB DEVELOPER</p>
                    <p>BUILT WITH NEXT.JS, REACT & TAILWIND CSS</p>
                </div>

                {/* Giant Full-Width Typographic Brand Watermark */}
                <div className="pt-8 text-center overflow-hidden select-none pointer-events-none opacity-20">
                    <h2 className="text-[12vw] sm:text-[14vw] md:text-[15vw] font-display uppercase tracking-tighter leading-none text-[#f7f4eb] whitespace-nowrap">
                        HARSH PAL SINGH
                    </h2>
                </div>

            </div>
        </footer>
    );
}

