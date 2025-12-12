"use client";

import {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";

interface ProgressBarProps {
    target: number; // e.g., 50
    step?: number;  // default: 5
    speed?: number; // ms per step
}

export default function ProgressBar({target, step = 5, speed = 200}: ProgressBarProps) {
    const [value, setValue] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        let current = 0;

        const interval = setInterval(() => {
            current += step;

            if (current > target) {
                current = target;
            }

            setValue(current);

            controls.start({
                width: `${current}%`,
                transition: {duration: 0.25, ease: "easeOut"},
            });

            if (current === target) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [target, step, speed, controls]);


    return (
        <div className="space-y-2">
            <div
                className="flex justify-between text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
                <span>Development</span>
                <span>{value}%</span>
            </div>

            <div className="h-2 w-full bg-[var(--input)] rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[var(--primary)] rounded-full relative overflow-hidden"
                    initial={{width: "0%"}}
                    animate={controls}
                >
                    {/* shimmer effect */}
                    <div
                        className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite_linear] -skew-x-12 translate-x-[-100%]"/>
                </motion.div>
            </div>
        </div>
    );
}
