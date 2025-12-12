"use client";

import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import {Code, Coffee, Heart, Server, Shield} from "lucide-react";
import {motion} from "framer-motion";
import Link from "next/link";

export default function Support() {
    return (
        <div className="min-h-screen bg-background">

            <section className="pt-32 pb-20 px-6 bg-primary text-white text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"/>
                <div className="max-w-3xl mx-auto relative z-10">
                    <Heart className="w-16 h-16 text-secondary mx-auto mb-6 animate-pulse"/>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Support the Mission
                    </h1>
                    <p className="text-xl text-white/80 leading-relaxed">
                        Help us sustain this digital archive of Uttarakhand&#39;s heritage.
                        Your contribution keeps the stories alive.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            icon: Server,
                            title: "Hosting & Domain",
                            desc: "Keeping the website fast, secure, and online 24/7 for users across the globe."
                        },
                        {
                            icon: Code,
                            title: "Development",
                            desc: "Funding the tools and resources needed to build new features and mobile apps."
                        },
                        {
                            icon: Shield,
                            title: "Preservation",
                            desc: "Resources to document, verify, and archive authentic cultural stories."
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
                                className="w-14 h-14 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                                <item.icon className="w-7 h-7 text-primary"/>
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section centered className="bg-muted/30">
                <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-secondary/20">
                    <h2 className="text-3xl font-serif font-bold mb-6">Make a Contribution</h2>
                    <p className="text-muted-foreground mb-8">
                        Every rupee goes directly into maintaining and improving Uttarakhand Culture.
                        We are transparent about our costs and usage.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[100, 500, 1000, 2000].map((amt) => (
                            <button key={amt}
                                    className="py-3 px-4 rounded-xl border border-border hover:border-secondary hover:bg-secondary/5 font-medium transition-colors">
                                ₹{amt}
                            </button>
                        ))}
                    </div>

                    <Button size="lg" className="w-full rounded-full text-lg bg-secondary hover:bg-secondary/90">
                        <Coffee className="w-5 h-5 mr-2"/> Donate Now
                    </Button>

                    <p className="mt-6 text-sm text-muted-foreground">
                        Secure payment powered by Razorpay/Stripe. <br/>
                        <Link href="/about/contact" className="underline hover:text-secondary">Contact us</Link> for
                        partnership opportunities.
                    </p>
                </div>
            </Section>

            <Section centered>
                <p className="text-lg font-medium">
                    Can&#39;t donate? You can still help! <Link href="/about/contribute"
                                                                className="text-secondary underline">Contribute
                    content</Link> or share our website.
                </p>
            </Section>
        </div>
    );
}
