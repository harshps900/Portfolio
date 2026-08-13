"use client";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

interface AchievementItem {
    id: string;
    metric: string;
    labelShort: string;
    label: string;
    title: string;
    company: string;
    description: string[];
    tags: string[];
    restAngle: number;
    hoverAngle: number;
}

const ACHIEVEMENTS: AchievementItem[] = [
    {
        id: "MOD-01/DASH",
        metric: "99.9%",
        labelShort: "INTEGRITY",
        label: "Backend Integration Stability",
        title: "Data-Driven Dashboard Architecture",
        company: "SoftSource Technolabs",
        description: [
            "Designed a modular dashboard using a reusable component architecture to handle and display complex relational database structures.",
            "Implemented custom state handlers and data visualization components, improving readability and administration of backend database operations."
        ],
        tags: ["React.js", "State Handlers", "Data Modeling"],
        restAngle: -120,
        hoverAngle: 60,
    },
    {
        id: "MOD-02/CMS",
        metric: "100%",
        labelShort: "CMS-FLOW",
        label: "Content Autonomy Rate",
        title: "Headless CMS Integration",
        company: "SoftSource Technolabs",
        description: [
            "Integrated a decoupled WordPress CMS backend with a custom React frontend utilizing native WordPress REST API services.",
            "Enabled non-technical managers to publish and update copy directly from the WordPress editor, updating the frontend UI seamlessly without code deployments."
        ],
        tags: ["WordPress API", "Headless CMS", "Next.js ISR"],
        restAngle: -120,
        hoverAngle: -24,
    },
    {
        id: "MOD-03/SCALE",
        metric: "Scale",
        labelShort: "SYSTEM",
        label: "Ecosystem Scalability",
        title: "MotorQuote Platform Engineering",
        company: "SoftSource Technolabs",
        description: [
            "Architected and built the modular frontend ecosystem for the MotorQuote platform, prioritizing layout responsiveness and fast load times.",
            "Designed complex input calculators and dynamic valuation forms engineered to scale cleanly across various screen resolutions."
        ],
        tags: ["Scalable Architecture", "Form Management", "CSS Layouts"],
        restAngle: -120,
        hoverAngle: 90,
    },
    {
        id: "MOD-04/REUSE",
        metric: "50%",
        labelShort: "VELOCITY",
        label: "Dev Lifecycle Reduction",
        title: "Modular Design Systems",
        company: "SoftSource Technolabs",
        description: [
            "Developed a shared library of highly configurable and reusable UI components, standardizing input structures and interactions across platforms.",
            "Reduced frontend development cycles for new client features by 50% through rapid layout assembly with pre-tested library modules."
        ],
        tags: ["Component Library", "Tailwind CSS", "Storybook"],
        restAngle: -120,
        hoverAngle: 110,
    }
];

// Dial component representing a luxury watch chronograph complication
const ComplicationDial = ({ 
    item, 
    isHovered 
}: { 
    item: AchievementItem; 
    isHovered: boolean;
}) => {
    // Generate 24 tick marks representing radial calibrations
    const ticks = [];
    for (let i = 0; i < 24; i++) {
        const angle = (i * 15 * Math.PI) / 180;
        let len = 6;
        let color = "rgba(189, 166, 130, 0.35)";
        let width = "0.75";
        
        // Major ticks at 0, 90, 180, 270 degrees
        if (i % 6 === 0) {
            len = 10;
            color = "#bda682";
            width = "1.5";
        } else if (i % 3 === 0) {
            len = 8;
            color = "rgba(189, 166, 130, 0.7)";
            width = "1";
        }
        
        const x1 = 70 + (62 - len) * Math.sin(angle);
        const y1 = 70 - (62 - len) * Math.cos(angle);
        const x2 = 70 + 62 * Math.sin(angle);
        const y2 = 70 - 62 * Math.cos(angle);
        
        ticks.push(
            <line
                key={i}
                x1={x1.toFixed(2)}
                y1={y1.toFixed(2)}
                x2={x2.toFixed(2)}
                y2={y2.toFixed(2)}
                stroke={color}
                strokeWidth={width}
            />
        );
    }

    const currentAngle = isHovered ? item.hoverAngle : item.restAngle;

    return (
        <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-white relative flex items-center justify-center border border-zinc-200/80 shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] select-none group-hover:border-[#bda682]/40 transition-all duration-500 shrink-0">
            {/* Outer golden bezel */}
            <div className="absolute inset-0 rounded-full border-[3px] border-zinc-100 group-hover:border-[#bda682]/20 transition-all duration-500" />
            
            {/* SVG layout */}
            <svg width="100%" height="100%" viewBox="0 0 140 140" className="absolute inset-0 z-10 overflow-visible">
                {/* Dial Ticks */}
                {ticks}

                {/* Sub-circle tracks */}
                <circle cx="70" cy="70" r="50" fill="none" stroke="rgba(189, 166, 130, 0.15)" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="70" cy="70" r="42" fill="none" stroke="rgba(189, 166, 130, 0.1)" strokeWidth="0.5" />
                
                {/* Metric label at top */}
                <text x="70" y="36" textAnchor="middle" fill="#967f59" className="text-[7px] font-mono font-bold tracking-[0.25em] select-none opacity-80">
                    {item.labelShort}
                </text>
                
                {/* Metric value display at bottom */}
                <text x="70" y="104" textAnchor="middle" fill="#1c1b1a" className="text-[13px] font-serif-luxury font-bold select-none leading-none tracking-tight">
                    {item.metric}
                </text>

                {/* Dial hand/needle with pivot */}
                <g 
                    style={{ 
                        transform: `rotate(${currentAngle}deg)`, 
                        transformOrigin: '70px 70px',
                        transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' 
                    }}
                    className="z-20"
                >
                    {/* The needle pointer */}
                    <line x1="70" y1="70" x2="70" y2="20" stroke="#bda682" strokeWidth="1.5" strokeLinecap="round" />
                    
                    {/* Counterbalance tail */}
                    <line x1="70" y1="70" x2="70" y2="78" stroke="#967f59" strokeWidth="1.5" />
                </g>
                
                {/* Center cap pivot pin */}
                <circle cx="70" cy="70" r="4.5" fill="#fbfaf7" stroke="#bda682" strokeWidth="1.5" className="z-30" />
                <circle cx="70" cy="70" r="1.5" fill="#bda682" className="z-30" />
            </svg>
        </div>
    );
};

const ComplicationCard = ({ item }: { item: AchievementItem }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full bg-white border border-zinc-200/80 rounded-[2.5rem] p-6 md:p-10 shadow-[0_12px_40px_rgba(189,166,130,0.02)] hover:border-[#bda682]/40 hover:shadow-[0_20px_50px_rgba(189,166,130,0.06)] transition-all duration-500 group relative overflow-hidden"
        >
            {/* Top Serial Number Strip */}
            <div className="flex justify-between items-center mb-6 border-b border-zinc-100 pb-4">
                <span className="text-[9px] font-mono tracking-widest text-[#bda682] uppercase font-bold">
                    {item.id}
                </span>
                <span className="px-3 py-1 rounded bg-[#f5f4ef] text-zinc-500 text-[9px] font-mono font-bold uppercase tracking-wider">
                    {item.company}
                </span>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Dial Column */}
                <div className="md:col-span-4 flex justify-center items-center relative">
                    <ComplicationDial item={item} isHovered={isHovered} />
                    
                    {/* Decorative outer ticks/ring around dial (Hidden on mobile) */}
                    <div className="absolute inset-0 border border-dashed border-[#bda682]/10 rounded-full scale-[1.3] pointer-events-none hidden md:block" />
                </div>

                {/* Details Column */}
                <div className="md:col-span-8 space-y-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-[#1c1b1a] tracking-tight font-serif-luxury group-hover:text-[#bda682] transition-colors duration-300">
                            {item.title}
                        </h3>
                    </div>

                    <ul className="space-y-3.5 text-zinc-500 text-sm leading-relaxed font-medium">
                        {item.description.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-left">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#bda682] mt-2 shrink-0 opacity-80" />
                                <span className="text-zinc-600 font-medium">{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 justify-center md:justify-start">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded bg-[#fbfaf7] border border-zinc-200 text-zinc-500 text-[9.5px] font-mono font-bold uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
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

                {/* Achievements List */}
                <div className="flex flex-col gap-4 max-w-5xl mx-auto relative">
                    {ACHIEVEMENTS.map((item, index) => (
                        <ComplicationCard key={index} item={item} />
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
