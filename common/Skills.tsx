"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { 
    Cpu, Code2, Database, Globe, Layers, 
    Layout, Server, Terminal, Box, Zap, Github  
} from "lucide-react";

const SKILLS = [
    { name: "Node.js", icon: <Server size={20} />, color: "text-emerald-500" },
    { name: "Express", icon: <Terminal size={20} />, color: "text-blue-500" },
    { name: "MongoDB", icon: <Database size={20} />, color: "text-emerald-400" },
    { name: "Github Actions", icon: <Github size={20} />, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: <Layout size={20} />, color: "text-cyan-400" },
    { name: "React/Next.js", icon: <Cpu size={20} />, color: "text-emerald-500" },
    { name: "TypeScript", icon: <Code2 size={20} />, color: "text-blue-600" },
    { name: "WebSocket", icon: <Zap size={20} />, color: "text-amber-400" },
];

const Skills = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="skills" ref={ref} className="w-full py-20 md:py-32 lg:py-40 bg-[#020617] transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
                    >
                        Technical <span className="text-emerald-500">Arsenal</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-2xl font-medium"
                    >
                        A curated selection of tools and technologies I use to build world-class digital products.
                    </motion.p>
                </div>

                <div className="relative overflow-hidden w-full flex flex-col gap-12">
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
                                    className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center gap-4 min-w-[220px] transition-all hover:bg-zinc-900 hover:border-emerald-500/30"
                                >
                                    <div className={`p-3 rounded-xl bg-zinc-900 border border-white/5 ${skill.color}`}>
                                        {skill.icon}
                                    </div>
                                    <span className="text-sm font-black text-white uppercase tracking-widest">{skill.name}</span>
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
                                    className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center gap-4 min-w-[220px] transition-all hover:bg-zinc-900 hover:border-emerald-500/30"
                                >
                                    <div className={`p-3 rounded-xl bg-zinc-900 border border-white/5 ${skill.color}`}>
                                        {skill.icon}
                                    </div>
                                    <span className="text-sm font-black text-white uppercase tracking-widest">{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient Overlays */}
                    <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
});

Skills.displayName = 'Skills';

export default Skills;
