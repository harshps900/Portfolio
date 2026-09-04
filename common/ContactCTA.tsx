"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="w-full py-20 md:py-28 bg-[#f7f4eb] text-[#000000] border-t border-black/10">
            <div className="container mx-auto px-6 max-w-5xl text-center space-y-10">
                
                <p className="text-zinc-600 font-mono tracking-widest text-sm uppercase font-bold">
                    / HAVE A PROJECT IN MIND ?
                </p>

                <h2 className="text-6xl sm:text-8xl md:text-9xl font-display tracking-tight text-[#000000] uppercase leading-none">
                    GET IN <span className="text-[#bda682]">TOUCH</span>
                </h2>

                <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-700 font-sans leading-relaxed">
                    Great products aren&apos;t built by code alone — they&apos;re built through collaboration, creativity, and attention to detail. Let&apos;s build something exceptional together.
                </p>

                <div>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 rounded-full border-2 border-black bg-[#000000] text-[#f7f4eb] hover:bg-transparent hover:text-[#000000] font-display text-xl tracking-wider transition-all duration-300 shadow-xl"
                    >
                        LET&apos;S COLLABORATE ➔
                    </Link>
                </div>

                {/* Social links row */}
                <div className="flex flex-wrap items-center justify-center gap-8 pt-8 font-display text-sm tracking-wider">
                    <a
                        href="https://www.linkedin.com/in/harsh-pal-singh-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#bda682] transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span>LINKEDIN ➔</span>
                    </a>

                    <a
                        href="https://github.com/harshps900"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#bda682] transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        <span>GITHUB ➔</span>
                    </a>

                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#bda682] transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>INSTAGRAM ➔</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
