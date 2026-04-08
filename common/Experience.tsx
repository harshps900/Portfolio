"use client";

import { forwardRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const JOURNEY = [
    {
        type: "work",
        title: "Frontend Developer",
        company: "SoftSource Technolabs",
        location: "Ahmedabad, Gujarat",
        period: "June 2025 - March 2026",
        description: "Leading the development of scalable UI ecosystems and production-level frontend architectures with a focus on React.js and Next.js.",
        tags: ["React", "NextJS", "TailwindCSS", "Github Actions"],
        icon: <Briefcase size={20} />,
    },
    {
        type: "training",
        title: "MERN Stack Training",
        company: "AccioJob",
        location: "Remote",
        period: "October 2024 - April 2025",
        description: "Intensive training in MongoDB, Express, React, and Node.js with a strong focus on core JavaScript fundamentals.",
        tags: ["MERN", "JavaScript", "Fullstack"],
        icon: <GraduationCap size={20} />,
    },
    {
        type: "education",
        title: "MCA Cloud Computing",
        company: "Master of Computer Applications",
        location: "Vadodara, Gujarat",
        period: "2023 - 2025",
        description: "Specialized in cloud infrastructure, scalable application design, and distributed systems. Gained deep understanding of modern computing paradigms.",
        tags: ["Cloud", "Development", "Architecture"],
        icon: <GraduationCap size={20} />,
    },
    
];

const Experience = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="experience" ref={ref} className="w-full py-20 md:py-32 lg:py-40 bg-[#020617] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-32">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-emerald-500 font-black tracking-widest uppercase text-xs mb-4"
                    >
                        Proven Track Record
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-4xl leading-none"
                    >
                        Engineering <span className="text-emerald-500">Growth</span> <br /> Through Systems
                    </motion.h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />

                    <div className="space-y-32">
                        {JOURNEY.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative pl-12 md:pl-20"
                            >
                                {/* Dot */}
                                <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-xs font-black uppercase text-zinc-500 tracking-widest">
                                            <span>{item.company}</span>
                                            <span className="text-emerald-500">{item.period}</span>
                                        </div>
                                        <h3 className="text-4xl font-black text-white tracking-tight">{item.title}</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-lg bg-blue-900/20 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-zinc-600 text-sm font-bold">
                                            <MapPin size={14} />
                                            {item.location}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
        </section>
    );
});

Experience.displayName = 'Experience';

export default Experience;
