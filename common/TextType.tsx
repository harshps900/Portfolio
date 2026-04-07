"use client";

import { useState, useEffect } from "react";

interface TextTypeProps {
    text: string[];
    typingSpeed?: number;
    pauseDuration?: number;
    showCursor?: boolean;
    cursorCharacter?: string;
}

export default function TextType({
    text,
    typingSpeed = 75,
    pauseDuration = 1600,
    showCursor = true,
    cursorCharacter = "|",
}: TextTypeProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = text[currentIndex % text.length];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentFullText.substring(0, displayText.length + 1));
                if (displayText.length + 1 === currentFullText.length) {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                setDisplayText(currentFullText.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => prev + 1);
                }
            }
        }, isDeleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, text, typingSpeed, pauseDuration]);

    return (
        <span className="inline-flex items-center">
            {displayText}
            {showCursor && (
                <span className="animate-pulse ml-1 font-normal">{cursorCharacter}</span>
            )}
        </span>
    );
}
