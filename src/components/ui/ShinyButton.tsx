"use client";
import React, { useRef, useState } from "react";

export default function ShinyButton() {
    const boundingRef = useRef<HTMLButtonElement | null>(null);
    const [coords, setCoords] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!boundingRef.current) return;

        const rect = boundingRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setCoords({ x, y });
    };

    return (
        <button
            ref={boundingRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setCoords({ x: 50, y: 50 })}
            className="group relative w-48 rounded-2xl bg-zinc-800 py-4 transition-transform active:scale-95"
            style={{
                // Passing coordinates to CSS variables
                "--x": `${coords.x}%`,
                "--y": `${coords.y}%`,
            } as React.CSSProperties}
        >
            {/* The "Shine" Layer */}
            <div
                className="absolute inset-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `
            radial-gradient(
              circle at var(--x) var(--y), 
              rgba(255,255,255,0.15) 0%, 
              transparent 40%
            ),
            linear-gradient(
              115deg,
              transparent 0%,
              transparent calc(var(--x) - 15%),
              rgba(255,255,255,0.2) var(--x),
              transparent calc(var(--x) + 15%),
              transparent 100%
            )
          `,
                }}
            />

            {/* Border Highlight (Inner Stroke) */}
            <div className="absolute inset-[1px] rounded-[15px] bg-zinc-900" />

            {/* Button Text */}
            <span className="relative z-10 bg-gradient-to-b from-white to-zinc-400 bg-clip-text font-medium text-transparent">
        Shiny Zinc
      </span>
        </button>
    );
}