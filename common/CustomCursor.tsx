"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile touch screens
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrameId: number;

    const lerp = (start: number, end: number, amt: number) => {
      return (1 - amt) * start + amt * end;
    };

    const updatePosition = () => {
      // Direct DOM mutation for 120fps ultra-fast tracking with zero React re-render lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      ringX = lerp(ringX, mouseX, 0.25);
      ringY = lerp(ringY, mouseY, 0.25);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animFrameId = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, select, textarea, [role='button'], [data-cursor]");

      if (interactive) {
        setIsHovered(true);
        const dataText = interactive.getAttribute("data-cursor");
        setCursorText(dataText || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    animFrameId = requestAnimationFrame(updatePosition);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-[99999] overflow-hidden transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Precision Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-[#bda682] rounded-full transition-transform duration-150 ease-out ${
          isMouseDown ? "scale-50" : isHovered ? "scale-0" : "scale-100"
        }`}
      />

      {/* Trailing Outer Ring / Pill Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center transition-all duration-200 ease-out ${
          cursorText
            ? "px-4 py-2 bg-[#bda682] text-[#000000] rounded-full font-display text-xs tracking-widest shadow-2xl scale-100"
            : isHovered
            ? "w-14 h-14 border-2 border-[#bda682] bg-[#bda682]/20 rounded-full backdrop-blur-[1px] scale-110"
            : isMouseDown
            ? "w-7 h-7 border border-[#000000] rounded-full scale-90"
            : "w-9 h-9 border border-[#000000]/50 rounded-full"
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
