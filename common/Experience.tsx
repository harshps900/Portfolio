"use client";

import { forwardRef } from "react";
import { MapPin } from "lucide-react";

const JOURNEY = [
    {
        id: "01 | 2025",
        title: "FRONTEND DEVELOPER",
        company: "SoftSource Technolabs",
        location: "Ahmedabad, Gujarat",
        period: "October 2025 — MARCH 2026",
        description: "Leading the frontend development of scalable web applications and enterprise products. Specializing in high-performance React.js and Next.js interfaces with seamless API integration.",
        tags: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    },
    {
        id: "02 | 2024",
        title: "React.js Intern",
        company: "Softsource Technolabs",
        location: "Ahmedabad, Gujarat",
        period: "June 2025 — September 2025",
        description: "Successfully completed a intensive 3-month internship program focused on modern frontend technologies. Contributed to live client projects under expert guidance and gained hands-on experience in building responsive, user-centric interfaces.",
        tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Version Control"],
    },
    {
        id: "03 | 2023",
        title: "MCA CLOUD COMPUTING",
        company: "Master of Computer Applications",
        location: "Vadodara, Gujarat",
        period: "2023 — 2025",
        description: "Advanced degree specializing in cloud infrastructure, scalable backend architectures, distributed computing, and modern database management.",
        tags: ["Cloud Systems", "Database Architecture", "Distributed Systems"],
    },
];

const Experience = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="experience" ref={ref} className="w-full py-20 md:py-28 bg-[#f7f4eb] text-[#11140e] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl space-y-16">
                
                {/* Section Header */}
                <div className="space-y-4">
                    <p className="text-[#bda682] font-mono tracking-widest text-sm uppercase font-bold">
                        / EXPERIENCE & JOURNEY
                    </p>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-display tracking-tight text-[#11140e] uppercase">
                        WHERE I&apos;VE <span className="text-[#bda682]">CONTRIBUTED</span>
                    </h2>
                    <p className="text-zinc-600 font-sans text-base md:text-lg max-w-2xl">
                        A collection of places, projects and experiences that shaped the way I build for the web.
                    </p>
                </div>

                {/* Timeline Items Grid */}
                <div className="space-y-8">
                    {JOURNEY.map((item) => (
                        <div
                            key={item.id}
                            className="p-8 md:p-10 rounded-3xl bg-[#e8e4d9]/60 border border-[#181c12]/20 hover:border-[#181c12]/50 hover:bg-[#e8e4d9] transition-all duration-300 space-y-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <span className="text-sm font-mono font-bold text-[#bda682] uppercase tracking-widest">
                                        {item.id}
                                    </span>
                                    <h3 className="text-3xl sm:text-4xl font-display text-[#11140e]">
                                        {item.title} <span className="text-[#bda682]">@ {item.company}</span>
                                    </h3>
                                </div>
                                <div className="space-y-1 text-left md:text-right">
                                    <p className="text-xs font-mono font-bold text-[#11140e] tracking-wider">
                                        {item.period}
                                    </p>
                                    <p className="text-xs font-mono text-zinc-500 flex items-center md:justify-end gap-1">
                                        <MapPin size={12} className="text-[#bda682]" />
                                        {item.location}
                                    </p>
                                </div>
                            </div>

                            <p className="text-zinc-700 text-base font-sans leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full border border-[#11140e]/20 text-zinc-700 text-xs font-mono font-medium bg-[#f7f4eb]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
});

Experience.displayName = 'Experience';

export default Experience;
