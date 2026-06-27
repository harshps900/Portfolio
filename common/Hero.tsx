"use client";

import { forwardRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

interface HeroProps {
    scrollToConnect?: () => void;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ scrollToConnect }, ref) => {
    return (
        <section
            id="home"
            ref={ref}
            className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-[#fbfaf7] pt-20"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-8" style={{ backgroundImage: 'radial-gradient(#bda682 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            
            {/* Ambient Gold Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#bda682]/10 rounded-full blur-[130px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#967f59]/5 rounded-full blur-[130px] delay-1000" />

            <div className="container mx-auto px-6 relative z-10 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#bda682]/10 border border-[#bda682]/20 text-[#bda682] text-[10px] font-mono tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#bda682] animate-ping" />
                            Calibrating Systems
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1c1b1a] leading-none font-serif-luxury">
                                Harsh Pal Singh
                            </h1>
                            <h2 className="text-xl md:text-2xl font-mono text-[#bda682] tracking-wider uppercase">
                                Frontend Engineer <span className="text-zinc-400 mx-2">|</span> Mern Stack Developer
                            </h2>
                        </div>

                        <p className="max-w-xl text-lg text-zinc-500 leading-relaxed font-medium">
                            Engineering high-performance web systems with the attention to detail of luxury horology. Focused on pixel-perfect accuracy, optimized latency, and robust code architectures.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link 
                                href="#projects"
                                className="px-8 py-4 rounded bg-[#bda682] hover:bg-[#bda682]/95 text-white font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#bda682]/15"
                            >
                                View Collections
                            </Link>
                            <Link 
                                href="#contact"
                                className="px-8 py-4 rounded bg-white border border-zinc-200 hover:border-[#bda682] text-zinc-600 hover:text-zinc-900 font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                            >
                                Request Connection
                            </Link>
                        </div>

                        <div className="pt-8 border-t border-zinc-200">
                            <p className="text-[10px] font-mono tracking-widest text-zinc-400 mb-4 uppercase">Horological Heritage</p>
                            <div className="flex items-center gap-3 text-zinc-600 font-bold group">
                                <span className="p-2 bg-white border border-zinc-200 rounded group-hover:bg-[#f5f4ef] transition-colors">
                                    <ShieldCheck size={18} className="text-[#bda682]" />
                                </span>
                                Ex-SoftSource Technolabs • Chrono Developer
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Clock Showcase Placeholder (hidden on mobile, block lg:block) */}
                    <div className="hidden lg:flex lg:col-span-5 justify-center relative">
                        <div 
                            id="hero-watch-placeholder"
                            className="w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-full opacity-0 pointer-events-none"
                        />
                        
                        {/* Decorative golden rays */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#bda682]/10 blur-2xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-900/5 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
