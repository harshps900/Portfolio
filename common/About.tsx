"use client";

import { forwardRef } from "react";
import Image from "next/image";

const About = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="about" ref={ref} className="w-full py-12 md:py-20 lg:py-24 bg-[#fbfaf7] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#bda682]/5 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    
                    {/* Left - Profile Image placeholder for FloatingWatch morphing */}
                    <div className="relative max-w-md mx-auto w-full flex justify-center">
                        {/* Outer concentric dial bezel */}
                        <div className="absolute -inset-4 border border-[#bda682]/20 rounded-full z-0 pointer-events-none" />
                        <div className="absolute -inset-8 border border-[#bda682]/10 rounded-full z-0 pointer-events-none" />

                        <div 
                            className="w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-full border-[4px] border-[#bda682] shadow-[0_20px_50px_rgba(189,166,130,0.15)] bg-white overflow-hidden relative flex items-center justify-center z-10"
                        >
                            {/* Natively show image on mobile viewports */}
                            <div className="absolute inset-0 block md:hidden">
                                <Image 
                                    src="/profile.jpg" 
                                    alt="Harsh Pal Singh" 
                                    fill
                                    sizes="(max-width: 768px) 100vw, 350px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div 
                                id="about-image-placeholder"
                                className="w-full h-full rounded-full opacity-0 pointer-events-none hidden md:block"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-6xl font-bold text-[#1c1b1a] tracking-tight leading-tight font-serif-luxury">
                                Precision in Every Pixel, <br />
                                <span className="text-gold-gradient text-glow-gold">Logic in Every Byte.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-zinc-600 font-medium leading-relaxed">
                                <p>
                                    With a strong foundation at <span className="text-[#bda682] font-bold">SoftSource Technolabs</span>, I specialize in building high-performance web systems that bridge the gap between complex backend architectures and seamless user experiences.
                                </p>
                                <p>
                                    My focus lies in <span className="text-[#bda682] font-bold">Server-Side Rendering (SSR)</span>, advanced performance optimization, and robust API integration. Much like the microscopic gears of a luxury watch, I ensure every logical component operates with absolute alignment and efficiency.
                                </p>
                            </div>
                        </div>

                        {/* Stats styled like sub-dials */}
                        <div className="flex flex-col sm:flex-row gap-12 pt-8 border-t border-zinc-200">
                            <div className="space-y-1 border-l-4 border-[#bda682] pl-6">
                                <p className="text-4xl font-bold text-[#1c1b1a] font-serif-luxury">1+ Years</p>
                                <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">ENGINEERING</p>
                            </div>
                            <div className="space-y-1 border-l-4 border-[#967f59] pl-6">
                                <p className="text-4xl font-bold text-[#1c1b1a] font-serif-luxury">10+ Labs</p>
                                <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">DEPLOYMENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About;
