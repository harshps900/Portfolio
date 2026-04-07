"use client";

import { forwardRef } from 'react';
import Link from 'next/link';
import { Download, Mail, Zap, ShieldCheck, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
    scrollToConnect?: () => void;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ scrollToConnect }, ref) => {
    return (
        <section
            id="home"
            ref={ref}
            className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020617] pt-20"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black tracking-widest uppercase"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            Available for scale
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none"
                            >
                                Harsh Pal Singh<span className="text-emerald-500"></span>
                            </motion.h1>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-3xl font-bold text-blue-400 tracking-tight"
                            >
                                Frontend Engineer <span className="text-zinc-600 mx-2">|</span> React <span className="text-zinc-600 mx-2">|</span> Next.js
                            </motion.h2>
                        </div>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed font-medium"
                        >
                            I build <span className="text-white font-bold">scalable, production-grade</span> web applications with real business impact, focused on engineering logic and user experience.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-6"
                        >
                            <Link 
                                href="#projects"
                                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20"
                            >
                                View Projects
                            </Link>
                            <Link 
                                href="#contact"
                                className="px-8 py-4 rounded-xl bg-blue-900/30 border border-blue-500/30 hover:border-blue-500 hover:bg-blue-900/50 text-blue-300 font-black text-lg transition-all hover:scale-105 active:scale-95"
                            >
                                Hire Me
                            </Link>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="pt-8 border-t border-zinc-800"
                        >
                            <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-4">Validated Experience</p>
                            <div className="flex items-center gap-3 text-zinc-300 font-bold group">
                                <span className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                                    <ShieldCheck size={18} className="text-emerald-500" />
                                </span>
                                Ex-SoftSource Technolabs
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Performance Card */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group lg:ml-auto max-w-md w-full"
                        >
                            <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-3xl transition-all group-hover:bg-blue-600/30" />
                            <div className="relative p-10 bg-[#0f172a] border border-blue-500/20 rounded-[2.5rem] shadow-2xl backdrop-blur-xl overflow-hidden">
                                {/* Header */}
                                <div className="space-y-6 mb-12">
                                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: "98%" }}
                                            transition={{ duration: 1.5, delay: 0.8 }}
                                            className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-black text-white">Performance First</h3>
                                        <p className="text-zinc-500 text-sm font-medium">98+ Lighthouse scores across all production deployments.</p>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-blue-900/20 border border-blue-500/10 space-y-3">
                                        <div className="p-2 bg-blue-900/40 rounded-lg w-fit text-blue-400">
                                            <Cpu size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Architecture</p>
                                            <p className="text-sm font-bold text-white">Scalable APIs</p>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-emerald-900/20 border border-emerald-500/10 space-y-3">
                                        <div className="p-2 bg-emerald-900/40 rounded-lg w-fit text-emerald-400">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Metric</p>
                                            <p className="text-sm font-bold text-white">0.8s LCP</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Decorative floating elements */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
