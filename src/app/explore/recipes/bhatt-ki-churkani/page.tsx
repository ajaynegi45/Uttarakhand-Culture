"use client"

import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ChefHat, Clock, Users} from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "motion/react"
import bhattImg from "@/assets/bhatt_ki_churkani_recipe_uttarakhand_culture.webp";

export default function Page() {
    return (
        <div className="min-h-screen bg-background">

            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"/>
                <Image fill src={bhattImg} alt="Bhatt Ki Churkani" className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-20 text-white z-20">
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
                        <span
                            className="bg-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Main Course</span>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-hand font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-white/50 ">Bhatt Ki Churkani</h1>

                        <div className="flex items-center gap-6 text-lg">
                            <div className="flex items-center gap-2"><Clock className="w-5 h-5"/> 45 Mins</div>
                            <div className="flex items-center gap-2"><Users className="w-5 h-5"/> Serves 4</div>
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
                                Bhatt ki Churkani is a signature dish of Kumaon, made from black soybeans (Bhatt). It is
                                traditionally cooked in an iron kadhai, which enriches the dish with iron and gives it a
                                characteristic dark green/black color. It is best enjoyed with steamed rice and a dollop
                                of ghee.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">Ingredients</h2>
                            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                <li>1 cup Black Soybeans (Bhatt)</li>
                                <li>2 tbsp Wheat Flour (Atta)</li>
                                <li>1 onion, chopped</li>
                                <li>4-5 cloves garlic, crushed</li>
                                <li>1 inch ginger, grated</li>
                                <li>1 tsp Cumin seeds (Jeera)</li>
                                <li>1 tsp Coriander powder</li>
                                <li>1/2 tsp Turmeric powder</li>
                                <li>Red chili powder to taste</li>
                                <li>Salt to taste</li>
                                <li>Ghee or Mustard Oil for cooking</li>
                                <li>Fresh Coriander for garnish</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">Instructions</h2>
                            <ol className="space-y-6 text-muted-foreground list-decimal pl-5">
                                <li className="pl-2">Heat oil in an iron kadhai. Add the black soybeans (Bhatt) and fry
                                    them until they start crackling. Remove and keep aside.
                                </li>
                                <li className="pl-2">In the same oil, add cumin seeds and chopped onion. Sauté until
                                    golden brown. Add ginger and garlic paste.
                                </li>
                                <li className="pl-2">Add wheat flour and roast it with the onion mixture until it turns
                                    aromatic and slightly brown.
                                </li>
                                <li className="pl-2">Add turmeric, coriander powder, and chili powder. Mix well.</li>
                                <li className="pl-2">Add the fried soybeans back into the kadhai. Pour in 3-4 cups of
                                    hot water slowly while stirring to avoid lumps.
                                </li>
                                <li className="pl-2">Let it simmer on low heat for 20-30 minutes until the gravy
                                    thickens and the beans are soft. The color will darken due to the iron vessel.
                                </li>
                                <li className="pl-2">Garnish with fresh coriander and serve hot with rice.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-muted/30 p-6 rounded-2xl sticky top-24">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <ChefHat className="w-5 h-5 text-secondary"/> Chef&#39;s Tip
                            </h3>
                            <p className="text-sm text-muted-foreground italic mb-6">
                                &#34;Always use hot water to make the gravy. Cold water can harden the beans. Cooking in an
                                iron vessel is non-negotiable for the authentic taste!&#34;
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
