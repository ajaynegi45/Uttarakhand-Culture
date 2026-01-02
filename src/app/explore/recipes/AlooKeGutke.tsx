import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ChefHat, Clock, Users} from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import {motion} from "framer-motion";
import alooImg from "../../assets/aloo_ke_gutke_recipes_uttarakhand_culture.webp";

export default function AlooKeGutke() {
    return (
        <div className="min-h-screen bg-background">

            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"/>
                <Image fill src={alooImg} alt="Aloo Ke Gutke" className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-20 text-white z-20">
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
                        <span
                            className="bg-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Snack / Side</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Aloo Ke Gutke</h1>
                        <div className="flex items-center gap-6 text-lg">
                            <div className="flex items-center gap-2"><Clock className="w-5 h-5"/> 20 Mins</div>
                            <div className="flex items-center gap-2"><Users className="w-5 h-5"/> Serves 2</div>
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
                                Aloo Ke Gutke is the quintessential Pahadi snack. These are spicy, stir-fried potato
                                wedges tempered with Jakhiya (wild mustard), which gives them a unique crunchy texture
                                and nutty flavor. It is a popular street food and a must-have during festivals.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">Ingredients</h2>
                            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                                <li>4-5 medium Potatoes, boiled and cubed</li>
                                <li>1 tsp Jakhiya seeds (Wild Mustard) - *Key Ingredient*</li>
                                <li>2-3 dry red chilies</li>
                                <li>1 tsp Turmeric powder</li>
                                <li>1 tsp Coriander powder</li>
                                <li>1/2 tsp Red chili powder</li>
                                <li>Salt to taste</li>
                                <li>2 tbsp Mustard Oil</li>
                                <li>Fresh Coriander for garnish</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">Instructions</h2>
                            <ol className="space-y-6 text-muted-foreground list-decimal pl-5">
                                <li className="pl-2">Boil the potatoes, peel them, and cut them into medium-sized cubes.
                                    Let them cool completely.
                                </li>
                                <li className="pl-2">Heat mustard oil in a pan until it smokes lightly. Reduce heat.
                                </li>
                                <li className="pl-2">Add the dry red chilies and Jakhiya seeds. Let them splutter (this
                                    adds the crunch).
                                </li>
                                <li className="pl-2">Add turmeric, coriander powder, and salt. Quickly stir to avoid
                                    burning the spices.
                                </li>
                                <li className="pl-2">Immediately add the potato cubes and toss them well so that they
                                    are evenly coated with the spices.
                                </li>
                                <li className="pl-2">Fry on medium heat for 5-7 minutes until the potatoes get a
                                    slightly crispy outer layer.
                                </li>
                                <li className="pl-2">Garnish generously with chopped coriander and serve hot with tea or
                                    cucumber raita.
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
                                &#34;If you can&#39;t find Jakhiya, you can use mustard seeds (rai) or cumin, but the authentic
                                taste comes only from Jakhiya. Also, ensure potatoes are cold before frying to keep them
                                firm.&#34;
                            </p>
                            <Link href="/recipes">
                                <Button variant="outline" className="w-full">
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
