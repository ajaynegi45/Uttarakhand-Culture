"use client"

import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ChefHat, Clock, Users} from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "motion/react"
import mithaiImg from "@/assets/bal_mithai_recipes_uttarakhand_culture.webp";

export default function Page() {
    return (
        <div className="min-h-screen bg-background">

            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"/>
                <Image fill src={mithaiImg} alt="Bal Mithai" className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-20 text-white z-20">
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
                        <span
                            className="bg-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Dessert</span>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-hand font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-white/50 ">Bal Mithai</h1>

                        <div className="flex items-center gap-6 text-lg">
                            <div className="flex items-center gap-2"><Clock className="w-5 h-5"/> 1 Hr 30 Mins</div>
                            <div className="flex items-center gap-2"><Users className="w-5 h-5"/> Serves 10+</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">About the Dish</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Bal Mithai is the most iconic sweet of the Kumaon region, especially Almora. It is a
                                brown chocolate-like fudge made with roasted Khoya (dried whole milk) and coated with
                                white sugar balls. Its chewy texture and rich caramelized flavor make it a favorite
                                souvenir.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">Ingredients</h2>
                            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                <li>1 kg Khoya (Mawa)</li>
                                <li>500g Sugar (for Khoya)</li>
                                <li>1/2 cup Cocoa powder or Chocolate color (Optional, traditional version uses
                                    caramelized sugar)
                                </li>
                                <li>1 tbsp Ghee</li>
                                <li>1/2 cup Sugar balls (for coating)</li>
                                <li>Water as needed</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">Instructions</h2>
                            <ol className="space-y-6 text-muted-foreground list-decimal pl-5">
                                <li className="pl-2">Heat a heavy-bottomed pan and add the Khoya. Roast it on low flame,
                                    stirring continuously.
                                </li>
                                <li className="pl-2">Add sugar and keep stirring. The mixture will start to melt and
                                    then thicken again.
                                </li>
                                <li className="pl-2">Continue roasting until the Khoya turns dark brown (chocolate
                                    color). This takes time and patience. The sugar caramelizes to give the color.
                                </li>
                                <li className="pl-2">Add ghee and mix well for a glossy finish.</li>
                                <li className="pl-2">Pour the mixture into a greased tray and let it set for 4-5
                                    hours.
                                </li>
                                <li className="pl-2">Once set, cut into rectangular pieces.</li>
                                <li className="pl-2">Dip the pieces in sugar syrup lightly and roll them in the white
                                    sugar balls to coat them completely.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-muted/30 p-6 rounded-2xl sticky top-24">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <ChefHat className="w-5 h-5 text-secondary"/> Chef&#39;s Tip
                            </h3>
                            <p className="text-sm text-muted-foreground italic mb-6">
                                &#34;The key to perfect Bal Mithai is the roasting of the Khoya. Don&#39;t rush it! If it burns,
                                it will taste bitter. If undercooked, it won&#39;t have the signature chewiness.&#34;
                            </p>
                            <Link href="/explore/recipes">
                                <Button variant="default" className="w-full text-black/80 border border-input bg-background hover:bg-secondary hover:text-white hover:border-secondary hover:cursor-pointer ">
                                    <ArrowLeft className="w-4 h-4 mr-2"/> Back to Recipes
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Section>

        </div>
    );
}
