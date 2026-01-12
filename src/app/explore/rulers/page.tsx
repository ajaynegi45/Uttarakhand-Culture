"use client";

import { motion } from "motion/react"
import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {eraGrouped, rulers} from "@/data/rulers";
import {ArrowRight, Crown, Mountain, Sparkles} from "lucide-react";

// Import all ruler images
import kunindaImg from "@/assets/kuninda_ruler_uttarakhand_culture.webp";
import nagaImg from "@/assets/naga_rulers_uttarakhand_culture.webp";
import mauryaImg from "@/assets/maurya_ruler_uttarakhand_culture.webp";
import kushanImg from "@/assets/kushan_ruler_uttarakhand_culture.webp";
import guptaImg from "@/assets/gupta_ruler_uttarakhand_culture.webp";
import katyuriImg from "@/assets/katyuri_medieval_temples.png";
import chandImg from "@/assets/chand_rulers_uttarakhand_culture.webp";
import panwarImg from "@/assets/panwar_garhwal_uttarakhand_culture.webp";
import gorkhagImg from "@/assets/gorkha_ruler_uttarakhand_culture.webp";
import britishImg from "@/assets/british_colonial_ruler_uttarakhand_culture.webp";
import tehriImg from "@/assets/tehri_ruler_uttarakhand_culture.webp";
import indiaImg from "@/assets/modern_ruler_uttarakhand_culture.webp";


import Image from 'next/image';
import Link from "next/link";

// Map ruler IDs to imported images
const rulerImages: { [key: string]: string } = {
    kuninda: kunindaImg.src,
    naga: nagaImg.src,
    maurya: mauryaImg.src,
    kushan: kushanImg.src,
    gupta: guptaImg.src,
    katyuri: katyuriImg.src,
    chand: chandImg.src,
    panwar: panwarImg.src,
    gorkha: gorkhagImg.src,
    british: britishImg.src,
    tehri: tehriImg.src,
    india: indiaImg.src,
};

export default function RulingPowers() {
    const eraDescriptions = {
        "Ancient": "The foundational ages when kingdoms first rose in the mountains, establishing traditions that would endure for millennia.",
        "Early Medieval": "The age of great dynasties, when temple culture flourished and mountain kingdoms reached their cultural zenith.",
        "Medieval to Pre-Modern": "Centuries of stability and prosperity under visionary rulers who shaped Uttarakhand's sacred identity.",
        "Late Medieval-Colonial": "An era of transition as foreign powers reshaped the mountains' political landscape.",
        "Modern": "The contemporary age where Uttarakhand, as a democratic state, preserves ancient wisdom while embracing progress."
    };

    return (
        <div className="min-h-screen bg-background">

            {/* Creative Hero Section - Full Redesign */}
            {/*<section className="relative pt-20 pb-16 px-4 md:px-6 overflow-hidden bg-primary">*/}
            {/*    /!* Animated background grid *!/*/}
            {/*    <div className="absolute inset-0 opacity-10">*/}
            {/*        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <defs>*/}
            {/*                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">*/}
            {/*                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>*/}
            {/*                </pattern>*/}
            {/*            </defs>*/}
            {/*            <rect width="100%" height="100%" fill="url(#grid)"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}

            {/*    /!* Floating crown icon animation *!/*/}
            {/*    <motion.div*/}
            {/*        animate={{y: [0, -30, 0]}}*/}
            {/*        transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}*/}
            {/*        className="absolute top-10 md:top-20 right-10 md:right-20 z-20"*/}
            {/*    >*/}
            {/*        <div className="p-4 md:p-6 bg-secondary/20 rounded-full backdrop-blur-md border border-white/20">*/}
            {/*            <Crown className="w-8 h-8 md:w-12 md:h-12 text-white/60"/>*/}
            {/*        </div>*/}
            {/*    </motion.div>*/}

            {/*    /!* Animated floating shapes *!/*/}
            {/*    <motion.div*/}
            {/*        animate={{y: [0, 40, 0]}}*/}
            {/*        transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}*/}
            {/*        className="absolute bottom-10 left-10 md:left-20 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full blur-3xl z-10"*/}
            {/*    />*/}

            {/*    <motion.div*/}
            {/*        animate={{y: [40, 0, 40]}}*/}
            {/*        transition={{duration: 10, repeat: Infinity, ease: "easeInOut"}}*/}
            {/*        className="absolute top-1/2 right-0 w-40 h-40 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl z-10"*/}
            {/*    />*/}

            {/*    <div className="max-w-5xl mx-auto relative z-30">*/}
            {/*        /!* Staggered text entrance *!/*/}
            {/*        <div className="space-y-6 md:space-y-8">*/}
            {/*            /!* Tagline - Handwritten *!/*/}
            {/*            <motion.div*/}
            {/*                initial={{opacity: 0, x: -50}}*/}
            {/*                animate={{opacity: 1, x: 0}}*/}
            {/*                transition={{delay: 0, duration: 0.8}}*/}
            {/*                className="flex items-center gap-3"*/}
            {/*            >*/}
            {/*                <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-white/40 to-white/10 rounded-full"/>*/}
            {/*                <span className="font-hand text-xl md:text-3xl text-white/90 leading-tight">*/}
            {/*    Journey Through Time*/}
            {/*  </span>*/}
            {/*            </motion.div>*/}

            {/*            /!* Main heading with split colors and dramatic effect *!/*/}
            {/*            <div className="space-y-2">*/}
            {/*                <motion.h1*/}
            {/*                    initial={{opacity: 0, y: 30}}*/}
            {/*                    animate={{opacity: 1, y: 0}}*/}
            {/*                    transition={{delay: 0.15, duration: 0.8}}*/}
            {/*                    className="text-4xl md:text-5xl lg:text-7xl font-serif font-black leading-tight text-white"*/}
            {/*                >*/}
            {/*                    RULING*/}
            {/*                </motion.h1>*/}

            {/*                <motion.h2*/}
            {/*                    initial={{opacity: 0, y: 30}}*/}
            {/*                    animate={{opacity: 1, y: 0}}*/}
            {/*                    transition={{delay: 0.3, duration: 0.8}}*/}
            {/*                    className="text-3xl md:text-4xl lg:text-6xl font-serif font-black leading-tight"*/}
            {/*                >*/}
            {/*    <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">*/}
            {/*      POWERS*/}
            {/*    </span>*/}
            {/*                </motion.h2>*/}

            {/*                <motion.p*/}
            {/*                    initial={{opacity: 0, y: 30}}*/}
            {/*                    animate={{opacity: 1, y: 0}}*/}
            {/*                    transition={{delay: 0.45, duration: 0.8}}*/}
            {/*                    className="text-xl md:text-2xl font-serif text-white/70 pt-2"*/}
            {/*                >*/}
            {/*                    of Uttarakhand*/}
            {/*                </motion.p>*/}
            {/*            </div>*/}

            {/*            /!* Divider with animated line *!/*/}
            {/*            <motion.div*/}
            {/*                initial={{scaleX: 0}}*/}
            {/*                animate={{scaleX: 1}}*/}
            {/*                transition={{delay: 0.6, duration: 0.8}}*/}
            {/*                className="h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent origin-left"*/}
            {/*            />*/}

            {/*            /!* Description with dramatic styling *!/*/}
            {/*            <motion.div*/}
            {/*                initial={{opacity: 0, y: 20}}*/}
            {/*                animate={{opacity: 1, y: 0}}*/}
            {/*                transition={{delay: 0.75, duration: 0.8}}*/}
            {/*                className="space-y-3 max-w-3xl"*/}
            {/*            >*/}
            {/*                <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">*/}
            {/*                    Witness 2000+ years of mountain dynasties. Kings and kingdoms that shaped legends, built*/}
            {/*                    temples, and wove the sacred heritage of Uttarakhand.*/}
            {/*                </p>*/}

            {/*                /!* Stat highlights *!/*/}
            {/*                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">*/}
            {/*                    <motion.div*/}
            {/*                        initial={{opacity: 0, scale: 0.8}}*/}
            {/*                        animate={{opacity: 1, scale: 1}}*/}
            {/*                        transition={{delay: 0.9}}*/}
            {/*                        className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-center"*/}
            {/*                    >*/}
            {/*                        <div className="text-2xl md:text-3xl font-bold text-amber-200">12</div>*/}
            {/*                        <div*/}
            {/*                            className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Dynasties*/}
            {/*                        </div>*/}
            {/*                    </motion.div>*/}

            {/*                    <motion.div*/}
            {/*                        initial={{opacity: 0, scale: 0.8}}*/}
            {/*                        animate={{opacity: 1, scale: 1}}*/}
            {/*                        transition={{delay: 1.05}}*/}
            {/*                        className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-center"*/}
            {/*                    >*/}
            {/*                        <div className="text-2xl md:text-3xl font-bold text-amber-200">2000+</div>*/}
            {/*                        <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Years*/}
            {/*                        </div>*/}
            {/*                    </motion.div>*/}

            {/*                    <motion.div*/}
            {/*                        initial={{opacity: 0, scale: 0.8}}*/}
            {/*                        animate={{opacity: 1, scale: 1}}*/}
            {/*                        transition={{delay: 1.2}}*/}
            {/*                        className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-center col-span-2 md:col-span-1"*/}
            {/*                    >*/}
            {/*                        <div className="text-2xl md:text-3xl font-bold text-amber-200">∞</div>*/}
            {/*                        <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Legacy*/}
            {/*                        </div>*/}
            {/*                    </motion.div>*/}
            {/*                </div>*/}
            {/*            </motion.div>*/}

            {/*            /!* CTA Button - More prominent *!/*/}
            {/*            <motion.div*/}
            {/*                initial={{opacity: 0, y: 20}}*/}
            {/*                animate={{opacity: 1, y: 0}}*/}
            {/*                transition={{delay: 1.35, duration: 0.8}}*/}
            {/*                className="pt-6 flex items-center gap-4"*/}
            {/*            >*/}
            {/*                <Button size="lg"*/}
            {/*                        className="px-8 md:px-12 py-6 md:py-7 bg-white text-primary hover:bg-amber-100 hover:scale-105 transition-all font-bold text-base md:text-lg shadow-lg hover:shadow-2xl">*/}
            {/*                    Explore Timeline <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2"/>*/}
            {/*                </Button>*/}

            {/*                /!* Scroll indicator *!/*/}
            {/*                <motion.div*/}
            {/*                    animate={{y: [0, 10, 0]}}*/}
            {/*                    transition={{duration: 2, repeat: Infinity}}*/}
            {/*                    className="hidden md:flex items-center gap-2 text-white/60"*/}
            {/*                >*/}
            {/*                    <span className="text-sm uppercase tracking-widest">Scroll</span>*/}
            {/*                    <Mountain className="w-5 h-5"/>*/}
            {/*                </motion.div>*/}
            {/*            </motion.div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}



            <section className="pt-32 pb-16 px-6 bg-linear-to-b from-amber-100 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="font-hand text-3xl text-secondary mb-2 block">Journey Through Time</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">Ruling Powers of Uttarakhand</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Witness 2000+ years of mountain dynasties. Kings and kingdoms that shaped legends, built temples and wove the sacred heritage of Uttarakhand.
                    </p>
                    </div>
            </section>


            {/* Timeline Sections */}
            <div className="space-y-32">
                {Object.entries(eraGrouped).map((eras, eraIdx) => {
                    const era = eras[0] as keyof typeof eraGrouped;
                    const rulersList = eras[1] as typeof rulers;

                    return (
                        <div key={era}>
                            {/* Era Header */}
                            <Section>
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    className="space-y-4 mb-16"
                                >
                                    <div
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                                        <span
                                            className="text-xs uppercase tracking-widest font-semibold text-secondary">{era}</span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                                        {era}
                                    </h2>

                                    <p className="text-lg text-muted-foreground max-w-2xl font-light">
                                        {eraDescriptions[era as keyof typeof eraDescriptions]}
                                    </p>
                                </motion.div>

                                {/* Ruler Cards Grid */}
                                <div className="space-y-12">
                                    {rulersList.map((ruler, idx) => {
                                        const rulerImage = rulerImages[ruler.id] || kunindaImg;

                                        return (
                                            <motion.div
                                                key={ruler.id}
                                                initial={{opacity: 0, y: 30}}
                                                whileInView={{opacity: 1, y: 0}}
                                                transition={{delay: idx * 0.1}}
                                                viewport={{once: true, margin: "-100px"}}
                                                className="group"
                                            >
                                                <Link href={`/rulers/${ruler.id}`} className="block">
                                                    <Card
                                                        className="overflow-hidden shadow-sm hover:shadow-lg border-border/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                                                            {/* Image Section */}
                                                            <div
                                                                className="md:col-span-1 relative h-80 md:h-auto overflow-hidden bg-gray-200">
                                                                <Image fill
                                                                       src={rulerImage}
                                                                       alt={ruler.name}
                                                                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                                />
                                                                {/* Decorative corner accent */}
                                                                {/*<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/20 to-transparent"/>*/}
                                                            </div>

                                                            {/* Content Section */}
                                                            <CardContent
                                                                className="md:col-span-2 p-4 md:p-8 lg:p-12 flex flex-col justify-center space-y-4 md:space-y-6">
                                                                {/* Period Badge */}
                                                                <div
                                                                    className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-3">
                                    <span
                                        className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider w-fit">
                                      {ruler.period}
                                    </span>
                                                                    <span
                                                                        className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                                      {ruler.type}
                                    </span>
                                                                </div>

                                                                {/* Title with Handwritten Touch */}
                                                                <div className="space-y-1">
                                                                    <span
                                                                        className="font-hand text-secondary text-lg md:text-2xl block">Era of</span>
                                                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary group-hover:text-secondary transition-colors flex items-center gap-2">
                                                                        {ruler.name}
                                                                        <ArrowRight
                                                                            className="w-4 md:w-5 h-4 md:h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                                                                    </h3>
                                                                </div>

                                                                {/* Intro */}
                                                                <p className="text-base md:text-lg text-secondary font-light italic">
                                                                    &#34;{ruler.intro}&#34;
                                                                </p>

                                                                {/* Description */}
                                                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                                    {ruler.description}
                                                                </p>

                                                                {/* Highlights */}
                                                                <div
                                                                    className="space-y-1.5 md:space-y-2 pt-3 md:pt-4 border-t border-border/30">
                                                                    {ruler.highlights.slice(0, 3).map((highlight, h_idx) => (
                                                                        <div key={h_idx}
                                                                             className="flex items-start gap-2 md:gap-3">
                                                                            <div
                                                                                className="w-1.5 h-1.5 bg-secondary rounded-full mt-1 md:mt-2 flex-shrink-0"/>
                                                                            <span
                                                                                className="text-xs md:text-sm text-muted-foreground">{highlight}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </CardContent>
                                                        </div>
                                                    </Card>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </Section>
                        </div>
                    );
                })}
            </div>

            {/* Legacy Section */}
            <Section className="py-20 bg-muted/30">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="max-w-3xl mx-auto text-center space-y-8"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                        <Sparkles className="w-4 h-4 text-secondary"/>
                        <span
                            className="text-xs uppercase tracking-widest font-semibold text-secondary">Enduring Legacy</span>
                    </div>

                    <div className="space-y-4">
                        <span className="font-hand text-3xl text-secondary block">Their Legacy Lives On</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                            A Legacy Woven Into Mountains
                        </h2>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Each ruler, each dynasty, each empire left their mark on these sacred mountains. Their decisions
                        shaped the temples we worship in today, the traditions we celebrate, and the spirit of
                        Uttarakhand that continues to inspire millions. These are not mere historical records—they are
                        the pulse of a living civilization that connects past, present, and future.
                    </p>

                    <Link href="/temples">
                        <Button size="lg"
                                className="px-8 mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                            Explore Sacred Temples <ArrowRight className="w-4 h-4 ml-2"/>
                        </Button>
                    </Link>
                </motion.div>
            </Section>
        </div>
    );
}
