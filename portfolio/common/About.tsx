"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Rocket } from "lucide-react";

const About = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="about" ref={ref} className="w-full py-40 bg-[#020617] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left - Graphic Placeholder */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative Corner Brackets */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-2xl z-20" />
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-blue-600/40 rounded-br-2xl z-20" />

                        <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative group bg-[#0f172a]">
                            <div className="absolute inset-0 bg-blue-600/10 rounded-[3rem] blur-3xl transition-all group-hover:bg-emerald-500/10 z-0" />
                            
                            {/* Profile Image */}
                            <img 
                                src="/profile.jpg" 
                                alt="Harsh Pal Singh" 
                                className="w-full h-full object-cover brightness-90 contrast-110 saturate-[0.8] group-hover:saturate-100 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100 z-10"
                            />

                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0)_50%,rgba(16,185,129,0.1)_50.2%,rgba(16,185,129,0)_50.4%)] bg-[length:100%_4px] animate-scan opacity-20 pointer-events-none z-20" />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 z-20" />
                            
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                                Precision in Every Pixel, <br />
                                <span className="text-emerald-500">Logic in Every Byte.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-zinc-400 font-medium leading-relaxed">
                                <p>
                                    With a strong foundation at <span className="text-white font-bold">SoftSource Technolabs</span>, I specialize in building high-performance web systems that bridge the gap between complex backend architectures and seamless user experiences.
                                </p>
                                <p>
                                    My focus lies in <span className="text-emerald-400 font-bold">Server-Side Rendering (SSR)</span>, advanced performance optimization, and robust API integration. I don&apos;t just write code; I engineer solutions that ensure speed, accessibility, and business scalability.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-12 pt-8 border-t border-zinc-800"
                        >
                            <div className="space-y-1 border-l-4 border-emerald-500 pl-6">
                                <p className="text-4xl font-black text-white">1+ Years</p>
                                <p className="text-xs font-black uppercase tracking-widest text-zinc-500">EXPERIENCE</p>
                            </div>
                            <div className="space-y-1 border-l-4 border-blue-600 pl-6">
                                <p className="text-4xl font-black text-white">10+ Labs</p>
                                <p className="text-xs font-black uppercase tracking-widest text-zinc-500">DEPLOYMENTS</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = 'About';

export default About;
