"use client";

import { forwardRef } from "react";

interface AchievementItem {
    id: string;
    metric: string;
    labelShort: string;
    label: string;
    title: string;
    company: string;
    description: string[];
    tags: string[];
}

const ACHIEVEMENTS: AchievementItem[] = [
    {
        id: "MOD-01/DASH",
        metric: "99.9%",
        labelShort: "INTEGRITY",
        label: "Backend Integration Stability",
        title: "Data-Driven Dashboard Architecture",
        company: "SoftSource",
        description: [
            "Designed a modular dashboard using a reusable component architecture to handle complex relational database structures.",
            "Implemented custom state handlers and data visualization components, improving administration of backend database operations."
        ],
        tags: ["React.js", "State Handlers", "Data Modeling"],
    },
    {
        id: "MOD-02/CMS",
        metric: "100%",
        labelShort: "CMS-FLOW",
        label: "Content Autonomy Rate",
        title: "Headless CMS Integration",
        company: "SoftSource",
        description: [
            "Integrated a decoupled WordPress CMS backend with a custom React frontend utilizing native WordPress REST API services.",
            "Enabled non-technical managers to publish and update copy directly from the WordPress editor, updating the frontend UI seamlessly."
        ],
        tags: ["WordPress API", "Headless CMS", "Next.js ISR"],
    },
    {
        id: "MOD-03/SCALE",
        metric: "Scale",
        labelShort: "SYSTEM",
        label: "Ecosystem Scalability",
        title: "MotorQuote Platform Engineering",
        company: "SoftSource",
        description: [
            "Architected and built the modular frontend ecosystem for the MotorQuote platform, prioritizing layout responsiveness and fast load times.",
            "Designed complex input calculators and dynamic valuation forms engineered to scale cleanly across screen resolutions."
        ],
        tags: ["Scalable Architecture", "Form Management", "CSS Layouts"],
    },
    {
        id: "MOD-04/REUSE",
        metric: "50%",
        labelShort: "VELOCITY",
        label: "Dev Lifecycle Reduction",
        title: "Modular Design Systems",
        company: "SoftSource",
        description: [
            "Developed a shared library of highly configurable and reusable UI components, standardizing input structures and interactions.",
            "Reduced frontend development cycles for new client features by 50% through rapid layout assembly with pre-tested library modules."
        ],
        tags: ["Component Library", "Tailwind CSS", "Storybook"],
    }
];

const ComplicationCard = ({ item }: { item: typeof ACHIEVEMENTS[number] }) => {
    return (
        <div 
            className="w-full bg-white border border-zinc-200/80 rounded-[2rem] p-6 md:p-8 shadow-[0_12px_40px_rgba(189,166,130,0.02)] hover:border-[#bda682]/40 hover:shadow-[0_20px_50px_rgba(189,166,130,0.06)] transition-all duration-500 group flex flex-col justify-between relative overflow-hidden h-full"
        >
            <div>
                {/* Header with Metric on Left and ID on Right */}
                <div className="flex justify-between items-baseline mb-6 border-b border-zinc-100 pb-4">
                    <span className="text-3xl md:text-4xl font-bold font-serif-luxury text-gold-gradient text-glow-gold transition-transform duration-500 group-hover:scale-105">
                        {item.metric}
                    </span>
                    <span className="text-[7.5px] font-mono tracking-wider text-[#bda682] uppercase font-bold">
                        {item.id}
                    </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <span className="text-[9px] font-mono tracking-[0.15em] text-[#bda682] uppercase font-bold block">
                        {item.labelShort} • {item.company}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#1c1b1a] tracking-tight leading-snug font-serif-luxury group-hover:text-[#bda682] transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium pt-2">
                        {item.description.join(" ")}
                    </p>
                </div>
            </div>

            {/* Bottom tags */}
            <div className="flex flex-wrap gap-1.5 pt-5 mt-6 border-t border-zinc-100">
                {item.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#fbfaf7] border border-zinc-200 text-zinc-500 text-[8.5px] font-mono font-bold uppercase tracking-wider"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Achievements = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="achievements" ref={ref} className="w-full py-12 md:py-20 lg:py-24 bg-[#fbfaf7] relative overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="mb-12 lg:mb-16">
                    <p className="text-[#bda682] font-mono tracking-[0.25em] text-[10px] uppercase mb-4 font-bold">
                        Proven Caliber
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1c1b1a] tracking-tight max-w-4xl leading-none font-serif-luxury">
                            Precision & <br />
                            <span className="text-gold-gradient text-glow-gold font-serif-luxury font-bold">Value Delivered</span>
                        </h2>
                        <p className="text-zinc-500 text-base max-w-xl font-medium leading-relaxed">
                            Quantifiable achievements and engineering milestones realized during professional roles, intensive training, and project development.
                        </p>
                    </div>
                </div>

                {/* Achievements Grid (4 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative">
                    {ACHIEVEMENTS.map((item, index) => (
                        <div key={index} className="h-full">
                            <ComplicationCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#bda682]/2 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
});

Achievements.displayName = "Achievements";

export default Achievements;
