"use client";

import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import { motion } from "motion/react"
import {ArrowLeft, Mountain} from "lucide-react";
import Link from "next/link";

// Assets
import nandaImg from "@/assets/nanda_devi_peak_uttarakhand_culture.webp";

export default function NandaDevi() {
    return (
        <div className="min-h-screen bg-background">

            {/* Hero */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    initial={{scale: 1.3}}
                    animate={{scale: 1}}
                    transition={{duration: 10}}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{backgroundImage: `url(${nandaImg.src})`}}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80"/>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-20 text-white">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                    >
               <span
                   className="bg-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                  Goddess of the Himalayas
               </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Nanda Devi</h1>
                        <p className="text-xl md:text-2xl max-w-2xl font-light text-white/90">
                            The Bliss-Giving Goddess, the patron deity of Uttarakhand, and the guardian of the peaks.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Story Content */}
            <Section>
                <div className="max-w-3xl mx-auto leading-relaxed text-lg text-muted-foreground space-y-8">
                    <div
                        className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                        <p>
                            Nanda Devi is not merely a mountain; she is an emotion, a living deity for the people of
                            Kumaon and Garhwal. Standing at 7,816 meters, it is the second-highest mountain in India,
                            but its spiritual stature towers above all.
                        </p>
                    </div>

                    <p>
                        Legend has it that Nanda was a beautiful princess of the Chand dynasty (some legends say she was
                        the daughter of a chieftain in the Rishiganga valley). A roguish prince fell in love with her
                        and pursued her relentlessly. To escape him, she climbed up into the high snows. The mountains,
                        sensing her purity and distress, opened up and embraced her, transforming her into a stone
                        peak—eternal, unassailable, and pure.
                    </p>

                    <div
                        className="my-12 border-l-4 border-secondary pl-6 py-2 italic text-xl text-foreground font-serif">
                        "She is the daughter who comes home. Every year, during the Nanda Devi Raj Jat Yatra, we bid her
                        farewell as she returns to her husband's abode in the Kailash."
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-primary">The Raj Jat Yatra</h3>
                    <p>
                        The Nanda Devi Raj Jat is a pilgrimage that takes place once every 12 years. It is often called
                        the "Himalayan Mahakumbh". Devotees trek barefoot for over 280 kilometers, carrying a palanquin
                        of the goddess from Nauti village to Homkund, located at the base of Nanda Ghunti.
                    </p>
                    <p>
                        A four-horned ram (Chausingha Khadu) leads the procession. It is believed that this ram guides
                        the devotees to the goddess's abode and then disappears into the mountains, symbolizing the
                        goddess's acceptance of the offerings.
                    </p>

                    <div className="bg-muted/30 p-8 rounded-2xl mt-12">
                        <h4 className="font-bold mb-4 flex items-center gap-2">
                            <Mountain className="w-5 h-5 text-secondary"/> Quick Facts
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between border-b border-border/50 pb-2">
                                <span>Elevation</span>
                                <span className="font-bold">7,816 m (25,643 ft)</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                                <span>Location</span>
                                <span className="font-bold">Chamoli District, Uttarakhand</span>
                            </li>
                            <li className="flex justify-between border-b border-border/50 pb-2">
                                <span>Significance</span>
                                <span className="font-bold">Patron Goddess of Uttarakhand</span>
                            </li>
                            <li className="flex justify-between pb-2">
                                <span>Sanctuary</span>
                                <span className="font-bold">Nanda Devi National Park (UNESCO Site)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-8 flex justify-center">
                        <Link href="/explore">
                            <Button variant="outline" className="rounded-full">
                                <ArrowLeft className="w-4 h-4 mr-2"/> Back to Explore
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
