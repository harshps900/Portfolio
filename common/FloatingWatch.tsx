"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FloatingWatch() {
    const watchRef = useRef<HTMLDivElement>(null);
    const watchBezelRef = useRef<HTMLDivElement>(null);
    const watchDetailsRef = useRef<HTMLDivElement>(null);
    const profileImageRef = useRef<HTMLDivElement>(null);
    const [time, setTime] = useState({ hourDeg: 0, minDeg: 0, secDeg: 0 });

    useEffect(() => {
        let frameId: number;

        const updateClock = () => {
            const now = new Date();
            const ms = now.getMilliseconds();
            const secs = now.getSeconds() + ms / 1000;
            const mins = now.getMinutes() + secs / 60;
            const hours = (now.getHours() % 12) + mins / 60;

            setTime({
                hourDeg: hours * 30,
                minDeg: mins * 6,
                secDeg: secs * 6
            });

            frameId = requestAnimationFrame(updateClock);
        };

        frameId = requestAnimationFrame(updateClock);
        return () => cancelAnimationFrame(frameId);
    }, []);

    // Cursor-interactive 3D tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 30, stiffness: 150 });
    const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 30, stiffness: 150 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const xVal = (e.clientX - rect.left) / width - 0.5;
        const yVal = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(xVal);
        mouseY.set(yVal);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    useGSAP(() => {
        const watchEl = watchRef.current;
        if (!watchEl) return;

        const parentEl = watchEl.parentElement;
        if (!parentEl) return;

        const initAnimation = () => {
            const heroPlaceholder = document.getElementById("hero-watch-placeholder");
            const aboutPlaceholder = document.getElementById("about-image-placeholder");

            if (!heroPlaceholder || !aboutPlaceholder) {
                console.log("FloatingWatch placeholders missing in DOM. Retrying...");
                setTimeout(initAnimation, 100);
                return;
            }

            const parentRect = parentEl.getBoundingClientRect();
            const heroRect = heroPlaceholder.getBoundingClientRect();
            const aboutRect = aboutPlaceholder.getBoundingClientRect();

            console.log("FloatingWatch Dimensions:", {
                heroWidth: heroRect.width,
                aboutWidth: aboutRect.width,
                parentWidth: parentRect.width
            });

            // If layout is not ready yet, retry in 100ms
            if (heroRect.width === 0 || aboutRect.width === 0 || parentRect.width === 0) {
                setTimeout(initAnimation, 100);
                return;
            }

            // Center of Hero watch placeholder relative to parent container
            const startX = heroRect.left - parentRect.left + heroRect.width / 2;
            const startY = heroRect.top - parentRect.top + heroRect.height / 2;

            // Center of About image placeholder relative to parent container
            const endX = aboutRect.left - parentRect.left + aboutRect.width / 2;
            const endY = aboutRect.top - parentRect.top + aboutRect.height / 2;

            // Clear old ScrollTrigger instances on re-init to prevent duplicates
            ScrollTrigger.getAll().forEach(t => {
                if (t.vars.id === "watch-scroll-trigger") t.kill();
            });

            // Set initial position and fade-in the watch now that coordinates are resolved
            gsap.set(watchEl, {
                x: startX,
                y: startY,
                xPercent: -50,
                yPercent: -50,
                width: heroRect.width,
                height: heroRect.height,
                opacity: 1
            });

            // Calculate translation offsets and scale factor
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const targetScale = aboutRect.width / heroRect.width;

            // Setup scroll animation timeline
            const tl = gsap.timeline({
                id: "watch-scroll-trigger",
                scrollTrigger: {
                    trigger: "#home",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            });

            tl.to(watchEl, {
                x: startX + deltaX,
                y: startY + deltaY,
                scale: targetScale,
                backgroundColor: "rgba(255, 255, 255, 0)",
                ease: "power1.inOut"
            }, 0);

            // Fade out watch details completely
            if (watchDetailsRef.current) {
                tl.to(watchDetailsRef.current, {
                    opacity: 0,
                    ease: "power1.out"
                }, 0);
            }

            // Fade out watch bezel completely
            if (watchBezelRef.current) {
                tl.to(watchBezelRef.current, {
                    opacity: 0,
                    ease: "power1.out"
                }, 0);
            }

            // Fade in profile photo
            if (profileImageRef.current) {
                tl.to(profileImageRef.current, {
                    opacity: 1,
                    ease: "power1.in"
                }, 0);
            }
        };

        // Delay to ensure rendering calculations are correct
        const timer = setTimeout(initAnimation, 100);

        // Reinitialize on window resize
        window.addEventListener("resize", initAnimation);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", initAnimation);
        };
    }, { dependencies: [] });

    return (
        <div 
            ref={watchRef}
            style={{ perspective: 1000, opacity: 0 }} 
            className="absolute top-0 left-0 w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] z-40 pointer-events-auto"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: tiltX,
                    rotateY: tiltY,
                    transformStyle: "preserve-3d"
                }}
                className="relative w-full h-full flex items-center justify-center bg-[#ffffff] rounded-full z-10 select-none group cursor-pointer"
            >
                {/* Watch Bezel Ring (Fades Out - z-20) */}
                <div 
                    ref={watchBezelRef}
                    className="absolute inset-0 rounded-full border-[6px] border-[#bda682] shadow-[0_30px_70px_rgba(189,166,130,0.18),inset_0_0_20px_rgba(0,0,0,0.03)] z-20 pointer-events-none"
                />

                {/* Profile Image (Fades In - z-0) */}
                <div 
                    ref={profileImageRef}
                    className="absolute inset-0 rounded-full overflow-hidden opacity-0 z-0 pointer-events-none"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#bda682]/10 via-transparent to-transparent opacity-80 z-20" />
                    <Image 
                        src="/profile.jpg" 
                        alt="Harsh Pal Singh" 
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover brightness-95 contrast-105 saturate-[0.8] scale-105"
                    />
                </div>

                {/* Watch Face details (Renders on top of photo but fades out - z-10) */}
                <div ref={watchDetailsRef} className="absolute inset-0 w-full h-full flex items-center justify-center z-10 pointer-events-none">
                    <div 
                        className="absolute inset-1.5 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/10 rounded-full pointer-events-none z-20" 
                        style={{ transform: "translateZ(30px)" }}
                    />

                    <div className="absolute inset-3 border border-[#bda682]/20 rounded-full" style={{ transform: "translateZ(5px)" }} />
                    <div className="absolute inset-7 border border-[#bda682]/10 rounded-full" style={{ transform: "translateZ(7px)" }} />
                    <div className="absolute inset-16 border border-[#bda682]/15 rounded-full" style={{ transform: "translateZ(10px)" }} />

                    {/* Sub-dial: Date Complication at 6 o'clock (Transparent Background) */}
                    <div 
                        className="absolute bottom-[70px] w-20 h-20 rounded-full border border-[#bda682]/25 flex flex-col items-center justify-center bg-transparent shadow-inner z-0"
                        style={{ transform: "translateZ(8px)" }}
                    >
                        <span className="text-[6px] font-mono tracking-[0.25em] text-zinc-400 uppercase">GMT</span>
                        <span className="text-[9px] font-mono font-bold text-[#bda682] mt-0.5 tracking-wider">
                            {new Date().toLocaleDateString("en-US", { day: "2-digit", month: "short" })}
                        </span>
                    </div>

                    {/* Sub-dial at 12 o'clock (Transparent Background) */}
                    <div 
                        className="absolute top-[70px] w-14 h-14 rounded-full border border-[#bda682]/15 flex items-center justify-center bg-transparent z-0"
                        style={{ transform: "translateZ(8px)" }}
                    >
                        <div className="w-1 h-1 bg-[#bda682]/60 rounded-full" />
                    </div>

                    {/* Hour Indicators (Classic Roman Numerals) */}
                    <div 
                        className="absolute inset-5 text-center font-serif-luxury font-bold text-[#1c1b1a] select-none text-xs sm:text-sm tracking-wider"
                        style={{ transform: "translateZ(15px)" }}
                    >
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 text-sm sm:text-base">XII</span>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sm sm:text-base">III</span>
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm sm:text-base">VI</span>
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm sm:text-base">IX</span>
                    </div>

                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute inset-0 z-0" style={{ transform: "translateZ(6px)" }}>
                        {Array.from({ length: 12 }).map((_, i) => {
                            const angle = (i * 30 * Math.PI) / 180;
                            const x1 = 100 + 84 * Math.sin(angle);
                            const y1 = 100 - 84 * Math.cos(angle);
                            const x2 = 100 + 90 * Math.sin(angle);
                            const y2 = 100 - 90 * Math.cos(angle);
                            return (
                                <line
                                    key={i}
                                    x1={x1.toFixed(3)}
                                    y1={y1.toFixed(3)}
                                    x2={x2.toFixed(3)}
                                    y2={y2.toFixed(3)}
                                    stroke={i % 3 === 0 ? "#bda682" : "rgba(189, 166, 130, 0.3)"}
                                    strokeWidth={i % 3 === 0 ? "1.5" : "0.75"}
                                />
                            );
                        })}
                    </svg>

                    <div 
                        className="absolute top-28 left-1/2 -translate-x-1/2 flex flex-col items-center select-none pointer-events-none"
                        style={{ transform: "translateZ(12px)" }}
                    >
                        <span className="text-[10px] font-serif-luxury font-bold tracking-[0.3em] text-[#bda682] uppercase">HPS</span>
                        <span className="text-[5.5px] font-mono tracking-[0.35em] text-zinc-400 uppercase mt-0.5">CHRONO</span>
                    </div>

                    {/* Clock Hands */}
                    <div
                        className="absolute w-1.5 h-[65px] bg-[#967f59] origin-bottom shadow-md rounded-full"
                        style={{
                            transform: `rotate(${time.hourDeg}deg) translateZ(20px)`,
                            top: "50%",
                            left: "50%",
                            transformOrigin: "bottom center",
                            marginTop: "-65px",
                            marginLeft: "-3px",
                            transformStyle: "preserve-3d"
                        }}
                    />
                    <div
                        className="absolute w-1.5 h-[95px] bg-[#1c1b1a] origin-bottom shadow-md rounded-full"
                        style={{
                            transform: `rotate(${time.minDeg}deg) translateZ(22px)`,
                            top: "50%",
                            left: "50%",
                            transformOrigin: "bottom center",
                            marginTop: "-95px",
                            marginLeft: "-2px",
                            transformStyle: "preserve-3d"
                        }}
                    />
                    <div
                        className="absolute w-[1px] h-[110px] bg-[#bda682] origin-bottom shadow-sm"
                        style={{
                            transform: `rotate(${time.secDeg}deg) translateZ(24px)`,
                            top: "50%",
                            left: "50%",
                            transformOrigin: "bottom center",
                            marginTop: "-110px",
                            marginLeft: "-0.5px",
                            transformStyle: "preserve-3d"
                        }}
                    />

                    <div 
                        className="absolute w-3 h-3 bg-white border-2 border-[#bda682] rounded-full z-30" 
                        style={{ transform: "translateZ(26px)" }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
