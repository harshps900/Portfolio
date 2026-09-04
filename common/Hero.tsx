"use client";

import Link from "next/link";
import TextType from "./TextType";

export default function Hero() {
    return (
        <section
            id="home"
            className="w-full min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-[#181c12] text-[#f7f4eb] pt-28 pb-20 px-6"
        >
            {/* Ambient Accents */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bda682]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#967f59]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center justify-center space-y-8">
                
                {/* Greeting Chip */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7f4eb]/10 border border-[#f7f4eb]/20 text-[#f7f4eb] text-xs sm:text-sm font-mono tracking-widest uppercase">
                    HI, I&apos;M <span className="font-bold text-[#bda682]">HARSH PAL SINGH</span>
                </div>

                {/* Main Display Title */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display tracking-tight leading-[0.95] text-[#f7f4eb] max-w-5xl uppercase">
                    CREATIVE WEB DEVELOPER
                </h1>

                {/* Subtitle Animated Text */}
                <div className="text-base sm:text-xl md:text-2xl font-mono text-[#bda682] tracking-wider uppercase flex items-center justify-center gap-2">
                    <span>SPECIALIZING IN</span>
                    <span className="text-[#f7f4eb] font-bold underline decoration-[#bda682]/50 underline-offset-4">
                        <TextType
                            text={["MERN Stack", "Interactive UI", "Next.js & React", "High Performance"]}
                            typingSpeed={70}
                            pauseDuration={1800}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </span>
                </div>

                {/* Description Tagline */}
                <p className="max-w-2xl text-base sm:text-lg text-zinc-300 font-sans font-normal leading-relaxed text-center">
                    Designing and developing interactive web experiences that are fast, beautiful, and built with purpose — crafted through thoughtful design, smooth motion, and clean code.
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Link
                        href="/contact"
                        className="px-8 py-3.5 rounded-full border border-[#f7f4eb] bg-[#f7f4eb] text-[#181c12] hover:bg-[#bda682] hover:border-[#bda682] hover:text-[#181c12] font-display text-lg tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Get In Touch ➔
                    </Link>

                    <a
                        href="/Harsh_Pal_Singh_Resume.pdf"
                        download="Harsh_Pal_Singh_Resume.pdf"
                        className="px-8 py-3.5 rounded-full border border-[#f7f4eb]/30 text-[#f7f4eb] hover:border-[#bda682] hover:text-[#bda682] font-display text-lg tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        Download CV
                    </a>
                </div>

            </div>
        </section>
    );
}


