"use client";

import { motion } from "motion/react"
import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import {ArrowRight, Heart, Landmark, Mountain} from "lucide-react";

import Link from "next/link";

export default function TemplesOverview() {
    const architectureStyles = [
        {
            title: "Kumaoni Architecture",
            icon: Mountain,
            description: "Emphasizes simplicity and harmony with nature. Characterized by stone construction, wooden interiors, and integration with natural landscapes.",
            features: ["Stone walls and slate roofs", "Wooden temple doors with carved motifs", "Direct connection to natural sacred sites", "Minimal ornamentation"]
        },
        {
            title: "Garhwali Architecture",
            icon: Landmark,
            description: "Combines ancient Hindu gopuram style with Himalayan adaptations. Features ornate carvings, intricate woodwork, and pyramid-shaped roofs adapted to heavy snowfall.",
            features: ["Ornate wooden pillars", "Carved religious iconography", "Pagoda-style roofs", "Brass and copper decorations"]
        }
    ];

    const significance = [
        {
            title: "Spiritual Sanctuary",
            description: "Each temple serves as a place of deep meditation and divine connection for millions of pilgrims who undertake sacred journeys.",
            icon: Heart
        },
        {
            title: "Cultural Repository",
            description: "Temples preserve centuries of artistic traditions, musical practices, and ceremonial knowledge unique to Himalayan communities.",
            icon: Mountain
        },
        {
            title: "Historical Documentation",
            description: "Stone inscriptions and architectural elements tell stories of kingdoms, dynasties, and the evolution of mountain civilization.",
            icon: Landmark
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Creative Hero Section */}
            <section className="relative pt-32 pb-24 px-6 bg-primary text-white overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{rotate: 360}}
                        transition={{duration: 25, repeat: Infinity, ease: "linear"}}
                        className="absolute top-10 right-10 w-80 h-80 border border-white/10 rounded-full"
                    />
                    <motion.div
                        animate={{y: [0, -30, 0]}}
                        transition={{duration: 8, repeat: Infinity}}
                        className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    {/* Handwritten intro */}
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0}}
                        className="mb-8"
                    >
            <span className="font-hand text-4xl md:text-5xl text-white/80 block leading-tight">
              Divine Abodes
            </span>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: 0.1}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
                    >
                        <Landmark className="w-4 h-4 text-amber-200"/>
                        <span className="text-sm font-semibold">Sacred Himalayan Heritage</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2, duration: 0.8}}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
                    >
                        Sacred Temples
                        <br/>
                        <span className="text-amber-200">of Uttarakhand</span>
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8 max-w-3xl mx-auto"
                    >
                        Journey through millennia of devotion, architecture, and spirituality where ancient stones echo
                        eternal mantras and mountains whisper divine secrets.
                    </motion.p>

                    {/* Decorative separator */}
                    {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-amber-200/40" />
            <Landmark className="w-5 h-5 text-amber-200/60" />
            <div className="w-12 h-px bg-amber-200/40" />
          </motion.div> */}


                    <motion.div>
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <Mountain className="w-5 h-5 text-amber-200"/>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"/>
                            <Landmark className="w-5 h-5 text-amber-200"/>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"/>
                            <Mountain className="w-5 h-5 text-amber-200"/>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                    >
                        <Link href="/explore/temples/directory">
                            <Button size="lg"
                                    className="px-8 bg-white text-primary hover:bg-secondary hover:text-white font-semibold">
                                Explore All Temples <ArrowRight className="w-4 h-4 ml-2"/>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <Section centered className="py-20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="space-y-6"
                    >
                        <span className="font-hand text-3xl text-secondary block">Sacred Spaces</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
                            The Spiritual Heart of Himalayas
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Uttarakhand, known as the &#34;Land of Gods,&#34; is home to some of the most sacred temples
                            in Hindu civilization. These are not merely architectural structures, but living
                            repositories of spiritual wisdom, historical narratives, and cultural continuity.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Each temple stands as a testament to the unwavering faith of millions who have journeyed
                            through centuries, climbing treacherous mountain paths to seek the divine. Built by master
                            craftsmen using locally sourced materials, these temples represent solutions to engineering
                            challenges posed by extreme altitudes and harsh weather conditions.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Architecture Styles */}
            <Section className="py-20 bg-muted/30">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-12 space-y-4"
                >
                    <span className="text-secondary font-medium tracking-wider uppercase text-sm block">Architectural Styles</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                        Himalayan Temple Architecture
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        An intricate blend of ancient Hindu traditions, local mountain culture, and practical mountain
                        engineering
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {architectureStyles.map((style, idx) => {
                        const Icon = style.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: idx * 0.15}}
                                viewport={{once: true}}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary flex-shrink-0">
                                        <Icon className="w-6 h-6"/>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-primary">{style.title}</h3>
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed">{style.description}</p>

                                <div className="space-y-3">
                                    {style.features.map((feature, f_idx) => (
                                        <div key={f_idx} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"/>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Spiritual Significance */}
            <Section className="py-20">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-12 space-y-4"
                >
                    <span
                        className="text-secondary font-medium tracking-wider uppercase text-sm block">Sacred Essence</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                        Spiritual Significance & Traditions
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {significance.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: idx * 0.15}}
                                viewport={{once: true}}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center hover:shadow-lg transition-shadow"
                            >
                                <div
                                    className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Icon className="w-8 h-8 text-secondary"/>
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-4 text-primary">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Featured Temples Preview */}
            <Section className="py-20 bg-muted/30">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-12 space-y-4"
                >
                    <span
                        className="text-secondary font-medium tracking-wider uppercase text-sm block">Featured Temples</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                        Explore Our Temple Collection
                    </h2>
                </motion.div>

                <div className="text-center">
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        From the towering peaks of Kedarnath to the serene valleys of Jageshwar, discover the temples
                        that have stood as beacon lights for spiritual seekers across centuries.
                    </p>

                    <Link href="/explore/temples/directory">
                        <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                            View All Temples <ArrowRight className="w-4 h-4 ml-2"/>
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
