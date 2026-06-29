"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { 
    Cpu, Code2, Database, Layout, Server, Terminal, Zap, Github  
} from "lucide-react";

const SKILLS = [
    { name: "React/Next.js", icon: <Cpu size={20} />, color: "text-[#bda682]" },
    { name: "TypeScript", icon: <Code2 size={20} />, color: "text-zinc-600" },
    { name: "Node.js", icon: <Server size={20} />, color: "text-[#bda682]" },
    { name: "Express", icon: <Terminal size={20} />, color: "text-zinc-600" },
    { name: "MongoDB", icon: <Database size={20} />, color: "text-[#bda682]" },
    { name: "WebSockets", icon: <Zap size={20} />, color: "text-zinc-600" },
    { name: "Tailwind CSS", icon: <Layout size={20} />, color: "text-[#bda682]" },
    { name: "Github Actions", icon: <Github size={20} />, color: "text-zinc-600" },
];

const Skills = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="skills" ref={ref} className="w-full py-12 md:py-20 lg:py-24 bg-[#fbfaf7] transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#bda682] font-mono tracking-[0.25em] text-[10px] uppercase mb-4"
                    >
                        Technical Complications
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-[#1c1b1a] tracking-tight mb-6 font-serif-luxury"
                    >
                        Technical <span className="text-gold-gradient text-glow-gold font-serif-luxury">Capabilities</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-2xl font-medium leading-relaxed"
                    >
                      Just as watch complications add functionality beyond telling time, these technologies enable me to develop responsive, interactive, and scalable web applications with seamless user experiences.
                    </motion.p>
                </div>

                {/* Desktop Layout: Infinite Horizontal Scroll Tickers */}
                <div className="relative overflow-hidden w-full hidden md:flex flex-col gap-12">
                    {/* Row 1: Left to Right */}
                    <div className="flex overflow-hidden group">
                        <motion.div 
                            className="flex whitespace-nowrap gap-8 py-4 px-4"
                            animate={{ x: [0, -1035] }}
                            transition={{ 
                                repeat: Infinity, 
                                ease: "linear", 
                                duration: 25 
                             }}
                        >
                            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white border border-zinc-200/60 rounded flex items-center gap-4 min-w-[220px] transition-all hover:border-[#bda682]/40 shadow-sm hover:shadow-md"
                                >
                                    <div className="p-3 rounded bg-zinc-50 border border-zinc-100 text-[#bda682]">
                                        {skill.icon}
                                    </div>
                                    <span className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-widest">{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2: Right to Left */}
                    <div className="flex overflow-hidden group">
                        <motion.div 
                            className="flex whitespace-nowrap gap-8 py-4 px-4"
                            animate={{ x: [-1035, 0] }}
                            transition={{ 
                                repeat: Infinity, 
                                ease: "linear", 
                                duration: 30 
                            }}
                        >
                            {[...SKILLS, ...SKILLS, ...SKILLS].reverse().map((skill, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white border border-zinc-200/60 rounded flex items-center gap-4 min-w-[220px] transition-all hover:border-[#bda682]/40 shadow-sm hover:shadow-md"
                                >
                                    <div className="p-3 rounded bg-zinc-50 border border-zinc-100 text-[#bda682]">
                                        {skill.icon}
                                    </div>
                                    <span className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-widest">{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient Overlays matching background theme */}
                    <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[#fbfaf7] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#fbfaf7] to-transparent z-10 pointer-events-none" />
                </div>

                {/* Mobile Layout: Elegant static grid */}
                <div className="grid grid-cols-2 gap-4 md:hidden">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="p-4 bg-white border border-zinc-200/60 rounded-2xl flex flex-col items-start gap-3 transition-all hover:border-[#bda682]/40 shadow-sm"
                        >
                            <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100 text-[#bda682]">
                                {skill.icon}
                            </div>
                            <span className="text-[10px] font-mono font-bold text-zinc-700 uppercase tracking-widest leading-none">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Skills.displayName = 'Skills';

export default Skills;
