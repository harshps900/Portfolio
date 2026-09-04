"use client";

import { forwardRef } from "react";

interface AchievementItem {
    id: string;
    metric: string;
    labelShort: string;
    title: string;
    company: string;
    description: string;
    tags: string[];
}

const ACHIEVEMENTS: AchievementItem[] = [
    {
        id: "01.",
        metric: "99.9%",
        labelShort: "STABILITY",
        title: "Data-Driven Dashboard Architecture",
        company: "SoftSource Technolabs",
        description: "Designed modular frontend dashboard architecture to manage complex enterprise data models with zero UI downtime.",
        tags: ["React.js", "State Management", "Data Modeling"],
    },
    {
        id: "02.",
        metric: "100%",
        labelShort: "CMS-FLOW",
        title: "Headless Content Management API",
        company: "SoftSource Technolabs",
        description: "Integrated WordPress REST API endpoints with custom Next.js frontend, enabling real-time content updates by non-technical managers.",
        tags: ["WordPress REST API", "Headless CMS", "Next.js"],
    },
    {
        id: "03.",
        metric: "50%",
        labelShort: "VELOCITY",
        title: "Modular UI Component System",
        company: "SoftSource Technolabs",
        description: "Built a reusable UI design component library, cutting feature delivery lead times by 50% across development cycles.",
        tags: ["Component Library", "Tailwind CSS", "Design System"],
    },
    {
        id: "04.",
        metric: "Scale",
        labelShort: "SYSTEMS",
        title: "MotorQuote Scalable Platform",
        company: "SoftSource Technolabs",
        description: "Engineered scalable input form calculators and dynamic quote processing engines designed to handle high concurrency.",
        tags: ["Scalable Architecture", "Form State", "CSS Layouts"],
    }
];

const Achievements = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="achievements" ref={ref} className="w-full py-20 md:py-28 bg-[#f7f4eb] text-[#11140e] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl space-y-16">
                
                {/* Header */}
                <div className="space-y-4">
                    <p className="text-[#bda682] font-mono tracking-widest text-sm uppercase font-bold">
                        / ACHIEVEMENTS & MILESTONES
                    </p>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-display tracking-tight text-[#11140e] uppercase">
                        PRECISION & <span className="text-[#bda682]">IMPACT</span>
                    </h2>
                    <p className="text-zinc-600 font-sans text-base md:text-lg max-w-xl">
                        Quantifiable engineering milestones and performance metrics delivered across production projects.
                    </p>
                </div>

                {/* Achievements Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ACHIEVEMENTS.map((item) => (
                        <div
                            key={item.id}
                            className="p-8 rounded-3xl bg-[#f7f4eb] border-2 border-dashed border-[#11140e]/30 hover:border-[#11140e] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline border-b border-[#11140e]/15 pb-4">
                                    <span className="text-4xl font-display text-[#bda682]">
                                        {item.metric}
                                    </span>
                                    <span className="text-xs font-mono font-bold text-zinc-500">
                                        {item.id}
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                                        {item.labelShort} • {item.company}
                                    </span>
                                    <h3 className="text-2xl font-display text-[#11140e] leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-700 text-sm font-sans leading-relaxed pt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#11140e]/15">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 rounded-full border border-[#11140e]/20 text-zinc-700 text-[10px] font-mono font-medium bg-[#e8e4d9]/50"
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

Achievements.displayName = "Achievements";

export default Achievements;

