import React from 'react';
import {Compass} from "lucide-react";
import Link from "next/link";

// --- Icons (Custom SVGs for specific aesthetics) ---

// A minimal abstract geometric shape hinting at Aipan art (traditional Uttarakhand floor art)
const AipanPattern = ({className}: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="40" className="opacity-20"/>
        <path d="M50 10 L90 50 L50 90 L10 50 Z" className="opacity-40"/>
        <path d="M50 25 L75 50 L50 75 L25 50 Z"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
    </svg>
);

// Abstract mountain peaks for the 404
const AbstractPeaks = ({className}: { className?: string }) => (
    <svg viewBox="0 0 200 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 90 L60 20 L110 90" className="text-[var(--secondary)]" fill="rgba(var(--secondary), 0.1)"/>
        <path d="M80 90 L130 30 L180 90" className="text-[var(--primary)]"/>
        <circle cx="160" cy="25" r="8" className="text-[var(--accent)]" fill="currentColor"/>
    </svg>
);

const NotFound = () => {
    return (


        <div
            className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in relative overflow-hidden bg-[var(--background)]">

            {/* Massive Background 404 - Serving as the 'Landscape' */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
            className="text-[25vw] font-serif font-bold text-[var(--foreground)] opacity-[0.03] leading-none translate-y-10 tracking-widest">
          404
        </span>
            </div>

            <div className="z-10 max-w-xl w-full flex flex-col items-center space-y-10">
                <div className="relative group">
                    {/* Floating animation for the illustration */}
                    <div className="animate-[float_6s_ease-in-out_infinite]">
                        <AbstractPeaks className="w-80 h-40"/>
                    </div>
                </div>

                <div className="space-y-1">
                    <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[var(--foreground)] tracking-tight">
                        Not found
                    </h1>
                    <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full"></div>
                    <p className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-md mx-auto pt-5">
                        The page you are looking for has vanished into the mist. It may have been moved or never
                        existed.
                    </p>
                </div>

                <Link href={"/"}
                      className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 ease-out bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] hover:shadow-lg hover:shadow-[var(--primary)]/20 hover:-translate-y-1 overflow-hidden"
                >
                    <span
                        className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                    <Compass className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300"/>
                    Find Your Way Home
                </Link>
            </div>
        </div>

    );
};

export default NotFound;