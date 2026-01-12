"use client";

import Section from "@/components/Section";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {ArrowRight, Clock, Users} from "lucide-react";
import { motion } from "motion/react"

import Image from 'next/image';
import Link from "next/link";

// Assets
import bhattImg from "@/assets/bhatt_ki_churkani_recipe_uttarakhand_culture.webp";
import alooImg from "@/assets/aloo_ke_gutke_recipes_uttarakhand_culture.webp";
import mithaiImg from "@/assets/bal_mithai_recipes_uttarakhand_culture.webp";

const recipes = [
    {
        id: "bhatt-ki-churkani",
        title: "Bhatt ki Churkani",
        category: "Main Course",
        time: "45 mins",
        serves: "4",
        image: bhattImg.src,
        desc: "A protein-rich black soybean curry cooked in an iron skillet, giving it a distinct dark color and earthy flavor. A staple of Kumaoni cuisine.",
        link: "/explore/recipes/bhatt-ki-churkani"
    },
    {
        id: "aloo-ke-gutke",
        title: "Aloo Ke Gutke",
        category: "Snack / Side",
        time: "20 mins",
        serves: "2",
        image: alooImg.src,
        desc: "Spicy, stir-fried potatoes tempered with Jakhiya (wild mustard) seeds. Best enjoyed with a cup of chai or as a side dish with Raita.",
        link: "/explore/recipes/aloo-ke-gutke"
    },
    {
        id: "bal-mithai",
        title: "Bal Mithai",
        category: "Dessert",
        time: "1 hr 30 mins",
        serves: "10",
        image: mithaiImg.src,
        desc: "The famous brown fudge of Almora made from roasted khoya and coated with white sugar balls. A sweet symbol of Uttarakhand.",
        link: "/explore/recipes/bal-mithai"
    }
];

export default function RecipesList() {
    return (
        <div className="min-h-screen bg-background">

            <section className="pt-32 pb-12 px-6 bg-white border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        className="text-4xl md:text-6xl font-serif font-bold mb-6"
                    >
                        Pahadi Rasoi
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Simple ingredients, rustic methods, and divine taste. Explore the authentic recipes from the
                        kitchens of Uttarakhand.
                    </p>
                </div>
            </section>

            <Section className="bg-muted/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {recipes.map((recipe, i) => (
                        <motion.div
                            key={recipe.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: i * 0.1}}
                            viewport={{once: true}}
                        >
                            <Link href={recipe.link} className="group block h-full">

                                <Card
                                    className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image src={recipe.image} alt={recipe.title}
                                               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                               fill loading={"lazy"}/>
                                        <div
                                            className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {recipe.category}
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors">{recipe.title}</h3>

                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4"/> {recipe.time}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4"/> Serves {recipe.serves}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground line-clamp-3 mb-6">
                                            {recipe.desc}
                                        </p>

                                        <Button variant={"default"} className="w-full text-black/80 border border-input bg-background group-hover:bg-secondary hover:bg-secondary group-hover:text-white group-hover:border-secondary hover:border-secondary hover:cursor-pointer">
                                            View Recipe <ArrowRight className="w-4 h-4 ml-2"/>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>

        </div>
    );
}
