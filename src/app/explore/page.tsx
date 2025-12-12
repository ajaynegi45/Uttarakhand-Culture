"use client";

import Section from "@/components/Section";
import {motion} from "motion/react"
import {ArrowRight, Search, X as XIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {CATEGORIES, useExploreLogic} from "@/data/explore";

export default function Explore() {

    const {
        filteredFeatures,
        searchQuery,
        selectedCategory,
        setSearchQuery,
        setSelectedCategory,
        isFiltering
    } = useExploreLogic();

    return (
        <div className="min-h-screen bg-background mb-32 sm:mb-42">

            {/* Search Header */}
            <section className="pt-32 pb-12 px-2 sm:px-6 bg-background border-b border-border">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        className="text-4xl md:text-6xl font-serif font-bold mb-8"
                    >Explore the Heritage
                    </motion.h1>

                    <div className="relative max-w-2xl mb-12">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5"/>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for dances, food, temples..."
                            className="flex w-full border px-3 py-1 shadow-sm transition-colors pl-12 h-14 rounded-full text-lg bg-muted/30 border-border/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            aria-label="Search dances, food, temples"
                        />

                        {searchQuery && (
                            <button
                                aria-label="Clear search"
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full"
                                onClick={() => setSearchQuery("")}
                            >
                                <XIcon className="w-5 h-5 text-muted-foreground"/>
                            </button>
                        )}
                    </div>

                    {/* Categories */}
                    <div className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pt-1 pb-1 pl-1">
                        {CATEGORIES.map((cat, i) => {
                            const isSelected = selectedCategory === cat.id;
                            return (
                                <motion.button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    initial={{opacity: 0, scale: 0.95}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{delay: i * 0.03}}
                                    aria-pressed={isSelected}
                                    aria-label={`Filter by ${cat.name}`}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-transform hover:scale-105 cursor-pointer",
                                        cat.colorCss,
                                        isSelected ? "ring-[1.4px] ring-ring scale-101" : ""
                                    )}>
                                    <cat.icon className="w-4 h-4"/>
                                    {cat.name}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <Section className={"py-10 md:py-12 px-2.5 sm:px-6"}>
                {/*<div className="max-w-7xl mx-auto px-4 sm:px-6">*/}
                {/* Result count (aria-live for screen reader updates) */}
                <div className="flex items-center justify-between mb-6 ">
                    <div className="text-sm text-muted-foreground" aria-live="polite">
                        {isFiltering ? (
                            <span>Found <strong>{filteredFeatures.length}</strong> result{filteredFeatures.length !== 1 ? "s" : ""} </span>) : (
                            <span>Showing all {filteredFeatures.length} items</span>)}
                    </div>
                </div>


                <div role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFeatures.length === 0 ? (
                        <div role="listitem" className="col-span-full p-8 rounded-2xl bg-muted/20 text-center">
                            <h3 className="text-lg font-semibold mb-2">No matches</h3>
                            <p className="text-muted-foreground">Try broader keywords, different spellings, or clear the
                                category filter.</p>
                            <div className="mt-6">
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory(null);
                                    }}
                                    className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        </div>
                    ) : (
                        filteredFeatures.map((item, i) => (
                            <article role="listitem" key={item.id}
                                     className="group cursor-pointer h-full flex flex-col">

                                <Link key={item.title} href={item.url} className="no-underline">
                                    <motion.div
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{delay: i * 0.1}}
                                        viewport={{once: true}}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative h-64 rounded-2xl overflow-hidden mb-3">
                                            <div className={cn(
                                                "absolute top-2 left-2 sm:top-4 sm:left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                                                "backdrop-blur-xl bg-white/40 ",
                                                "text-[#5A3E2B]"
                                                // item.colorCss
                                            )}>{item.categories[0]}</div>

                                            {/*<div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/70 text-black/80" aria-hidden>{item.categories[0]} </div>*/}

                                            <Image
                                                fill
                                                src={item.image}
                                                alt={item.title}
                                                loading={"lazy"}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div
                                                className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"/>
                                        </div>

                                        <h3 className="text-2xl font-serif font-bold mb-1 group-hover:text-secondary transition-colors flex items-center gap-2">
                                            {item.title}
                                            <ArrowRight
                                                className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                                        </h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </motion.div>
                                </Link>
                            </article>
                        ))
                    )}
                </div>
            </Section>
        </div>
    );
}
