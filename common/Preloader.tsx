"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isComplete, setIsComplete] = useState(false);
    const [statusIndex, setStatusIndex] = useState(0);
    const [displayPercent, setDisplayPercent] = useState(0);

    const statuses = [
        "CALIBRATING GEAR TRAIN CONNECTIONS...",
        "ALIGNING CHRONOGRAPH ROTORS...",
        "SYNCHRONIZING DIGITAL ESCAPEMENTS...",
        "TESTING DIAL COMPLICATIONS...",
        "CHRONOMETER ONLINE"
    ];

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";

        const duration = 2800; // Smooth 2.8s load
        const startTime = performance.now();
        let frameId: number;

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-in-out curve
            const ease = progress < 0.5 
                ? 2 * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            const percentage = Math.round(ease * 100);
            
            setDisplayPercent(percentage);

            // Change status text directly based on percentage to avoid a second useEffect
            if (percentage < 20) {
                setStatusIndex(0);
            } else if (percentage < 45) {
                setStatusIndex(1);
            } else if (percentage < 70) {
                setStatusIndex(2);
            } else if (percentage < 95) {
                setStatusIndex(3);
            } else {
                setStatusIndex(4);
            }

            if (progress < 1) {
                frameId = requestAnimationFrame(tick);
            } else {
                setTimeout(() => {
                    setIsComplete(true);
                    document.body.style.overflow = "";
                }, 600);
            }
        };

        frameId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frameId);
            document.body.style.overflow = "";
        };
    }, []);

    // Path offset calculated directly
    const strokeDashoffset = 276.46 - (276.46 * displayPercent) / 100;

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ clipPath: "circle(150% at 50% 50%)" }}
                    exit={{ 
                        clipPath: "circle(0% at 50% 50%)",
                        transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } 
                    }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fbfaf7] text-[#1c1b1a] select-none"
                >
                    {/* Background Grid Accent */}
                    <div 
                        className="absolute inset-0 z-0 opacity-[0.06]" 
                        style={{ 
                            backgroundImage: 'radial-gradient(#bda682 1px, transparent 1px)', 
                            backgroundSize: '32px 32px' 
                        }} 
                    />

                    {/* Ambient Glows */}
                    <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#bda682]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-[#967f59]/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10 flex flex-col items-center gap-10">
                        
                        {/* Header: Developer Info */}
                        <div className="flex flex-col items-center text-center">
                            <motion.h2 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-zinc-400 text-[10px] font-mono tracking-[0.35em] uppercase"
                            >
                                Harsh Pal Singh
                            </motion.h2>
                            
                            <motion.h1 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.25 }}
                                className="text-[#bda682] text-sm font-extrabold uppercase tracking-[0.25em] mt-1.5 font-serif-luxury"
                            >
                                Frontend Developer
                            </motion.h1>
                        </div>

                        {/* Circular Emblem & Rotating Badge */}
                        <div className="relative flex items-center justify-center w-60 h-60">
                            {/* Rotating Circular Text Ring */}
                            <motion.svg 
                                width="220" 
                                height="220" 
                                viewBox="0 0 200 200" 
                                className="absolute"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            >
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                                        fill="transparent"
                                    />
                                    <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#bda682" />
                                        <stop offset="100%" stopColor="#967f59" />
                                    </linearGradient>
                                </defs>
                                <text className="text-[7.5px] tracking-[0.28em] font-bold fill-zinc-400 uppercase">
                                    <textPath href="#circlePath" startOffset="0%">
                                        • DESIGNER • DEVELOPER • ARCHITECT • ENGINEER • CREATOR
                                    </textPath>
                                </text>
                            </motion.svg>

                            {/* Inner Circle Progress Tracker */}
                            <svg width="140" height="140" viewBox="0 0 100 100" className="absolute">
                                {/* Base track ring */}
                                <circle 
                                    cx="50" 
                                    cy="50" 
                                    r="44" 
                                    fill="transparent" 
                                    stroke="rgba(0, 0, 0, 0.03)" 
                                    strokeWidth="1.5"
                                />
                                {/* Dynamic track */}
                                <motion.circle 
                                    cx="50" 
                                    cy="50" 
                                    r="44" 
                                    fill="transparent" 
                                    stroke="url(#gradient-stroke)" 
                                    strokeWidth="2"
                                    strokeDasharray="276.46" 
                                    strokeDashoffset={strokeDashoffset}
                                    strokeLinecap="round"
                                    transform="rotate(-90 50 50)"
                                />
                                {/* Central rotating polygon */}
                                <motion.polygon
                                    points="50,32 65,41 65,59 50,68 35,59 35,41"
                                    fill="transparent"
                                    stroke="rgba(189, 166, 130, 0.3)"
                                    strokeWidth="1.2"
                                    animate={{ rotate: -360 }}
                                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                    style={{ transformOrigin: "50px 50px" }}
                                />
                            </svg>

                            {/* Precise numerical counter */}
                            <div className="absolute flex flex-col items-center justify-center font-mono">
                                <span className="text-4xl font-extrabold tracking-tighter text-[#1c1b1a] tabular-nums leading-none">
                                    {displayPercent}
                                </span>
                                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-1.5">%</span>
                            </div>
                        </div>

                        {/* Status logs */}
                        <div className="h-6 overflow-hidden flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={statusIndex}
                                    initial={{ y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -8, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="text-[9px] tracking-[0.25em] font-mono text-[#bda682] font-bold uppercase"
                                >
                                    {statuses[statusIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                    </div>

                    {/* Footer Info */}
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-[10px] font-mono text-zinc-400 tracking-wider">
                        <span>[ HARSH PAL SINGH ]</span>
                        <span>[ PRECISION CHRONOMETER ]</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
