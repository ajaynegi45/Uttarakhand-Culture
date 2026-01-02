"use client";

import Section from "@/components/Section";
import UttarakhandSVGMap from "@/components/UttarakhandSVGMap";
import {motion} from "framer-motion";
import {Compass, Map as MapIcon} from "lucide-react";

export default function DistrictExplorer() {
    return (
        <div className="min-h-screen bg-background">

            <section
                className="pt-32 pb-12 px-6 bg-linear-to-b from-emerald-50/50 to-transparent relative overflow-hidden">
                {/* Background Texture */}
                <div
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-paper-fibers.png')] opacity-100"/>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                    >
            <span className="flex items-center justify-center gap-2 font-hand text-3xl text-secondary mb-2">
              <Compass className="w-6 h-6 animate-spin-slow"/>
              District Explorer
            </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary leading-tight">
                            Map of Devbhoomi
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            Uttarakhand is a tapestry of 13 distinct districts, each with its own dialect, deity, and
                            destiny.
                            Click on a region to uncover its secrets.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Section centered className="-mt-12">
                <div
                    className="bg-white rounded-3xl p-2 md:p-3 shadow-2xl border border-border/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 md:p-6 opacity-10">
                        <MapIcon className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-primary"/>
                    </div>


                    <div className="relative z-10  w-full h-full flex justify-center items-center pt-4 md:pt-10">
                        {/* Hand-drawn Arrow Guide pointing to a district */}
                        <div
                            className="
              absolute 
              top-9 right-13 
              sm:top-28 sm:right-10
              md:top-20 md:right-80
              z-20 flex flex-col items-center gap-0 sm:gap-0
            "
                        >
                            {/* Text label */}
                            <span
                                className="text-xs sm:text-sm mb-2 font-hand text-secondary font-semibold text-center whitespace-nowrap animate-pulse ml-16 sm:ml-13 mb-0 ">
              Tap a district
            </span>

                            {/* Hand-drawn arrow */}
                            <svg
                                className="w-12 h-16 sm:w-14 sm:h-20 md:w-16 md:h-24 text-secondary drop-shadow-lg -mt-4 animate-pulse "
                                style={{transform: 'rotate(45deg)'}}
                                viewBox="0 0 40 60"
                                fill="none"
                            >
                                <path
                                    d="M 20 5 C 16.667 11.667 16.317 19.978 18.317 29.978 C 19.65 36.644 20 43.333 20 50"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    vectorEffect="non-scaling-stroke"
                                />
                                <path
                                    d="M 20 50 L 14 42 M 20 50 L 26 42"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </div>
                        <UttarakhandSVGMap onSelect={(id) => console.log("Selected:", id)}/>
                    </div>

                    <div className="mt-8 md:mt-20 mb-3 md:mb-5 text-center text-sm text-muted-foreground font-medium">
                        * Map representation is stylized and not to scale.
                    </div>
                </div>
            </Section>
        </div>
    );
}