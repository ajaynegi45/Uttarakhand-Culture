"use client";

import {temples} from "@/data/temples";
import Section from "@/components/Section";
import { motion } from "motion/react"
import {ArrowLeft, Building2, Calendar, Eye, Flame, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useParams} from "next/navigation";

import Image from 'next/image';
import Link from "next/link";

export default function TempleDetail() {

    const params = useParams();
    const id = params?.templeId as string;
    const temple = temples.find((t) => t.id === id);


    if (!temple) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Temple Not Found</h1>
                    <p className="text-muted-foreground mb-6">The temple you&#39;re looking for doesn&#39;t exist.</p>
                    <Link href="/explore/temples/directory">
                        <Button>Back to Directory</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Image Section */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                <Image fill
                       src={temple.image}
                       alt={temple.name}
                       className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"/>

                <div className="absolute inset-0 flex flex-col justify-end">
                    <Section className="pb-12 text-white space-y-4">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                        >
                            <Link href="/explore/temples/directory">
                                <Button variant="outline" size="sm"
                                        className="mb-4 bg-white/20 border-white/40 hover:bg-white/30 text-white">
                                    <ArrowLeft className="w-4 h-4 mr-2"/>
                                    Back to Directory
                                </Button>
                            </Link>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">{temple.name}</h1>
                            <div className="flex flex-wrap gap-4 text-lg">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5"/>
                                    {temple.district}, {temple.region}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Flame className="w-5 h-5"/>
                                    {temple.deity}
                                </div>
                            </div>
                        </motion.div>
                    </Section>
                </div>
            </div>

            {/* Main Content */}
            <Section className="py-16 space-y-16">
                {/* Quick Facts */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6"
                >
                    {[
                        {label: "Established", value: temple.establishedYear, icon: Calendar},
                        {label: "Altitude", value: temple.altitude, icon: Eye},
                        {label: "Architecture", value: temple.architecture, icon: Building2},
                        {label: "Region", value: temple.region, icon: MapPin}
                    ].map((fact, idx) => {
                        const Icon = fact.icon;
                        return (
                            <div key={idx} className="bg-muted/50 rounded-xl p-6 space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Icon className="w-4 h-4"/>
                                    <span className="text-sm font-semibold uppercase tracking-wide">{fact.label}</span>
                                </div>
                                <p className="font-bold text-lg">{fact.value}</p>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Main Story */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="prose prose-lg max-w-4xl mx-auto space-y-8"
                >
                    <div className="bg-amber-50/50 border-l-4 border-amber-600 p-8 rounded-r-lg">
                        <h2 className="text-3xl font-serif font-bold mb-4 text-amber-900">The Sacred Story</h2>
                        <p className="text-lg leading-relaxed italic text-amber-900">{temple.story}</p>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-serif font-bold">About {temple.name}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{temple.description}</p>
                </motion.div>

                {/* History */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-serif font-bold">Historical Significance</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{temple.history}</p>
                </motion.div>

                {/* Architecture Details */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="bg-muted/30 rounded-2xl p-8 space-y-8"
                >
                    <h2 className="text-3xl font-serif font-bold">Architectural Mastery</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold mb-2">Architectural Style</h3>
                                <p className="text-muted-foreground">{temple.architecture_details.style}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Construction Materials</h3>
                                <p className="text-muted-foreground">{temple.architecture_details.materials}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Historical Period</h3>
                                <p className="text-muted-foreground">{temple.architecture_details.period}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">Architectural Features</h3>
                            <div className="space-y-3">
                                {temple.architecture_details.features.map((feature, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"/>
                                        <p className="text-muted-foreground">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Spiritual Significance */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-serif font-bold">Spiritual Significance</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{temple.spiritual_significance}</p>
                </motion.div>

                {/* Festivals & Celebrations */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-serif font-bold">Festivals & Celebrations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {temple.festivals.map((festival, idx) => (
                            <div key={idx}
                                 className="flex items-center gap-3 bg-white p-4 rounded-lg border border-border/50">
                                <Calendar className="w-5 h-5 text-primary flex-shrink-0"/>
                                <span className="font-medium">{festival}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Nearby Attractions */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-serif font-bold">Nearby Attractions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {temple.nearby_attractions.map((attraction, idx) => (
                            <div key={idx}
                                 className="flex items-center gap-3 bg-white p-4 rounded-lg border border-border/50">
                                <div className="w-2 h-2 bg-primary rounded-full"/>
                                <span>{attraction}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visit Information */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="bg-blue-50 rounded-2xl p-8 space-y-6 border border-blue-200"
                >
                    <h2 className="text-3xl font-serif font-bold text-blue-900">Planning Your Visit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold mb-2 text-blue-900">Best Time to Visit</h3>
                            <p className="text-blue-800">{temple.best_visit_time}</p>
                        </div>
                        {temple.trekking_route && (
                            <div>
                                <h3 className="font-bold mb-2 text-blue-900">Trekking Route</h3>
                                <p className="text-blue-800">{temple.trekking_route}</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    className="text-center space-y-6 py-12"
                >
                    <h3 className="text-2xl font-bold">Ready to explore more temples?</h3>
                    <Link href="/temples/directory">
                        <Button size="lg">
                            View All Temples
                        </Button>
                    </Link>
                </motion.div>
            </Section>

        </div>
    );
}
