"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
    return (
        <section className="w-full py-20 md:py-28 bg-[#f7f4eb] text-[#000000] border-t border-black/10">
            <div className="container mx-auto px-6 max-w-6xl space-y-16">
                
                {/* Header */}
                <div className="space-y-4">
                    <p className="text-zinc-600 font-mono tracking-widest text-sm uppercase font-bold">
                        About / The Web Developer
                    </p>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-display tracking-tight text-[#000000] uppercase">
                        CRAFTING SEAMLESS DIGITAL EXPERIENCES
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Profile Image */}
                    <div className="lg:col-span-5 relative max-w-md mx-auto w-full flex justify-center">
                        <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-3xl border-2 border-black/20 shadow-xl bg-[#000000] overflow-hidden relative">
                            <Image 
                                src="/profile.jpg" 
                                alt="Harsh Pal Singh" 
                                fill
                                sizes="(max-width: 768px) 100vw, 350px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Narrative Story */}
                    <div className="lg:col-span-7 space-y-6">
                        <p className="text-lg sm:text-xl font-sans text-zinc-800 leading-relaxed">
                            I&apos;m a Full Stack & Frontend Developer specializing in the <span className="font-bold text-[#000000]">MERN Stack, Next.js, and React</span>. I focus on writing clean, maintainable code and crafting smooth user interfaces that feel intuitive and responsive.
                        </p>
                        <p className="text-base sm:text-lg font-sans text-zinc-700 leading-relaxed">
                            With experience building real-world applications at <span className="font-bold text-[#000000]">SoftSource Technolabs</span>, I bring ideas to life through thoughtful design, server-side rendering, and production performance optimization.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="inline-block px-8 py-3.5 rounded-full border-2 border-black bg-[#000000] text-[#f7f4eb] hover:bg-transparent hover:text-[#000000] font-display text-lg tracking-wider transition-all duration-300 shadow-md"
                            >
                                More About Me ➔
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
