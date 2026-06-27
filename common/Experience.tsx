"use client";

import { forwardRef } from "react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

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
        <section id="experience" ref={ref} className="w-full py-12 md:py-20 lg:py-24 bg-[#fbfaf7] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-12 lg:mb-16">
                    <p className="text-[#bda682] font-mono tracking-[0.25em] text-[10px] uppercase mb-4 font-bold">
                        Proven Track Record
                    </p>
                    <h2 
                        className="text-5xl md:text-7xl font-bold text-[#1c1b1a] tracking-tight max-w-4xl leading-none font-serif-luxury"
                    >
                        Engineering <span className="text-gold-gradient text-glow-gold font-serif-luxury">Growth</span> <br /> Through Systems
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Golden-tinted Timeline Track */}
                    <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#bda682] via-[#bda682]/80 to-[#967f59]" />

                    <div className="space-y-16">
                        {JOURNEY.map((item, index) => (
                            <div
                                key={index}
                                className="relative pl-8 md:pl-16 group"
                            >
                                {/* Bezel Marker Dot */}
                                <div className="absolute left-[0px] top-12 w-[9px] h-[9px] rounded-full bg-[#fbfaf7] border-2 border-[#bda682] shadow-[0_0_6px_rgba(189,166,130,0.4)] z-10 transition-colors group-hover:bg-[#bda682]" />
                                
                                <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-8 md:p-10 shadow-[0_12px_40px_rgba(189,166,130,0.03)] hover:border-[#bda682]/30 hover:shadow-[0_20px_50px_rgba(189,166,130,0.06)] transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-mono tracking-widest text-[#bda682] uppercase font-bold">
                                                {item.company}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#1c1b1a] tracking-tight font-serif-luxury">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="flex flex-col md:items-end gap-1.5 text-left md:text-right">
                                            <span className="px-3 py-1 rounded bg-[#bda682]/10 border border-[#bda682]/20 text-[#bda682] text-[9px] font-mono font-bold uppercase tracking-wider self-start md:self-end">
                                                {item.period}
                                            </span>
                                            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-bold self-start md:self-end">
                                                <MapPin size={12} className="text-[#bda682]/70" />
                                                {item.location}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-base text-zinc-600 font-medium leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100">
                                        {item.tags.map(tag => (
                                            <span 
                                                key={tag} 
                                                className="px-3 py-1 rounded bg-[#f5f4ef]/50 border border-zinc-200 text-zinc-600 text-[9px] font-mono font-bold uppercase tracking-widest"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#bda682]/5 rounded-full blur-[90px]" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-zinc-100/50 rounded-full blur-[90px]" />
        </section>
    );
});

Experience.displayName = 'Experience';

export default Experience;
