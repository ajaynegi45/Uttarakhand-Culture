"use client";

import Link from "next/link";
import {Mountain, MoveLeft} from "lucide-react";
import React from "react";
import ProgressBar from "@/components/ui/progress-bar";

interface ProgressBarProps {
    target: number; // e.g., 50
    step?: number;  // default: 5
    speed?: number; // ms per step
}


// A minimal abstract geometric shape hinting at Aipan art (traditional Uttarakhand floor art)
const AipanPattern = ({className}: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="40" className="opacity-20"/>
        <path d="M50 10 L90 50 L50 90 L10 50 Z" className="opacity-40"/>
        <path d="M50 25 L75 50 L50 75 L25 50 Z"/>
        <circle cx="50" cy="50" r="5" fill="currentColor"/>
    </svg>
);

// Enhanced Abstract mountain peaks for the 404
const AbstractPeaks = ({className}: { className?: string }) => (
    <svg viewBox="0 0 200 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Background Mist */}
        <path d="M0 100 Q50 90 100 100 T200 100" className="text-[var(--input)]" strokeWidth="2" fill="none"/>

        {/* Secondary Peak */}
        <path d="M20 120 L70 40 L120 120" className="text-[var(--secondary)]" fill="rgba(var(--secondary), 0.05)"/>

        {/* Primary Peak */}
        <path d="M80 120 L130 20 L180 120" className="text-[var(--primary)]"/>

        {/* Sun/Moon Accent */}
        <circle cx="160" cy="30" r="12" className="text-[var(--accent)]" fill="currentColor" opacity="0.8"/>

        {/* Broken Path */}
        <path d="M120 110 L130 100 M135 95 L140 90" stroke="currentColor" strokeDasharray="2 2"/>
    </svg>
);


export default function UnderConstructionPage() {
    return (

        <div
            className="min-h-screen flex flex-col items-center justify-center p-6 pt-25 text-center animate-fade-in relative overflow-hidden">

            {/* Rotating Background Pattern for Creativity */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <div className="animate-[spin_60s_linear_infinite]">
                    <AipanPattern className="w-[800px] h-[800px] text-[var(--primary)]"/>
                </div>
            </div>

            <div className="z-10 max-w-lg w-full flex flex-col items-center space-y-12">

                {/* Central visual */}
                {/*<div className="relative w-32 h-32 flex items-center justify-center">*/}
                {/*    /!* Outer ring *!/*/}
                {/*    <div className="absolute inset-0 border-2 border-[var(--input)] rounded-full"></div>*/}

                {/*    /!* Loading arc *!/*/}
                {/*    <div className="absolute inset-[-4px] border-4 border-transparent border-t-[var(--secondary)] rounded-full animate-spin"></div>*/}

                {/*    /!* Inner static element *!/*/}
                {/*    <div className="absolute inset-4 bg-[var(--card)] rounded-full shadow-sm flex items-center justify-center border border-[var(--border)]">*/}
                {/*        <Hammer className="w-8 h-8 text-[var(--primary)] animate-pulse" />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Abstract "Weaving" Icon / Spinner */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-[var(--muted)] rounded-full"></div>
                    <div
                        className="absolute inset-0 border-t-2 border-[var(--secondary)] rounded-full animate-spin duration-[3s]"></div>
                    <div className="absolute inset-4 border-2 border-[var(--primary)] rounded-full opacity-20"></div>
                    <Mountain className="w-8 h-8 text-secondary opacity-80"/>
                </div>


                <div className="space-y-6">
                    <h1 className="font-serif text-4xl md:text-5xl font-medium  text-secondary">
                        Site In Progress
                    </h1>
                    <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                        We are currently building this digital archive. <br/>
                        Check back soon to explore the heritage of Uttarakhand.
                    </p>
                </div>

                {/* Status Card */}
                <div
                    className="w-full bg-[var(--card)] border border-[var(--border)] p-6 rounded-[var(--radius)] shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
                            <span className="text-sm font-semibold text-[var(--foreground)]">Current Status</span>
                        </div>
                        <span className="text-sm font-mono text-[var(--muted-foreground)]">v0.8.0-alpha</span>
                    </div>

                    {/*<div className="space-y-2">*/}
                    {/*    <div className="flex justify-between text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">*/}
                    {/*        <span>Development</span>*/}
                    {/*        <span>50%</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="h-2 w-full bg-[var(--input)] rounded-full overflow-hidden">*/}
                    {/*        <div className="h-full bg-[var(--primary)] w-[50%] rounded-full relative overflow-hidden">*/}
                    {/*            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite_linear] -skew-x-12 translate-x-[-100%]"></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <ProgressBar target={85} step={5} speed={1000}/>

                </div>

                <Link
                    href={"/"}
                    className="text-sm font-medium text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-200 flex items-center gap-2 group"
                >
                    <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1"/>
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
