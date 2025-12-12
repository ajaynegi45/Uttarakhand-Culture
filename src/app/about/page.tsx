"use client";

import Section from "@/components/Section";
import {motion} from "framer-motion";
import {Globe, Heart, Mountain, Users} from "lucide-react";
import {useRouter} from "next/navigation";

export default function About() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Header */}
            <section className="pt-32 pb-20 px-6 bg-primary text-white relative overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"/>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Our Mission
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="text-xl md:text-2xl text-white/80 font-light leading-relaxed"
                    >
                        To preserve the fading echoes of the Himalayas and amplify them for the world to hear.
                    </motion.p>
                </div>
            </section>

            {/* The Story */}
            <Section centered>
                <div className="max-w-3xl mx-auto">
                    <span className="font-hand text-3xl text-secondary block mb-4">Why we exist</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">
                        Bridging the Generational Gap
                    </h2>
                    <div className="prose prose-lg text-muted-foreground">
                        <p className="mb-6">
                            Uttarakhand, the &#39;Devbhoomi&#39; (Land of Gods), is home to a rich tapestry of culture,
                            language, and traditions that date back millennia. However, as modernization sweeps through
                            the hills, many of these stories are being lost.
                        </p>
                        <p className="mb-6">
                            Young people are moving to cities, dialects are fading, and the intricate details of our
                            rituals are being forgotten.
                            <strong className="text-primary"> Uttarakhand Culture</strong> was born out of a desire to
                            stop
                            this erosion.
                        </p>
                        <p className="mb-8">
                            We solve the problem of <span className="italic">accessibility</span>. Cultural knowledge
                            shouldn&#39;t be hidden in dusty books or fading memories; it should be vibrant, digital,
                            and easy to explore. We are creating a living archive that connects the youth to their roots
                            in a language they understand—digital, visual, and immersive.
                        </p>

                        <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
                            <h3 className="text-xl font-bold font-serif text-primary mb-2">Open Source Project</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                This project is open-source because culture belongs to everyone. We believe in
                                community-driven preservation.
                                Developers can contribute code, fix bugs, or build new features.
                            </p>
                            <a href="https://github.com/ajaynegi45/Uttarakhand-Culture-NewUI" target="_blank"
                               rel="noopener noreferrer"
                               className="inline-flex items-center text-secondary font-bold hover:underline">
                                View on GitHub <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values Grid */}
            <Section className="bg-muted/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Heart,
                            title: "Preservation",
                            desc: "Documenting oral histories, folk songs, and art forms before they disappear."
                        },
                        {
                            icon: Users,
                            title: "Community",
                            desc: "A platform built by the people, for the people. Every story is a contribution."
                        },
                        {
                            icon: Globe,
                            title: "Modernity",
                            desc: "Presenting ancient wisdom through modern design and technology."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: i * 0.1}}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center"
                        >
                            <div
                                className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                                <item.icon className="w-8 h-8 text-secondary"/>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Team/Contact Teaser */}
            <Section centered>
                <div className="bg-primary rounded-3xl p-12 text-white text-center relative overflow-hidden">
                    <Mountain
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-white/5 pointer-events-none"/>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-6">Join the Movement</h2>
                        <p className="max-w-xl mx-auto text-white/80 mb-8">
                            Are you a writer, photographer, or just someone who loves Uttarakhand? We need your help to
                            grow this archive.
                        </p>
                        <button onClick={() => router.push("/about/contribute")}
                                className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors shadow-lg">
                            Get Involved
                        </button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
