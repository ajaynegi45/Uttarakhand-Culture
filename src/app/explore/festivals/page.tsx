import React from "react";
import Image from "next/image";
import {festivals} from "@/data/festivals";
import {EventCard} from "@/components/EventCard";
import {formatDisplayDate} from "@/data/getUpcomingEvents";

export default function FestivalsPage() {
    // Use the first festival image or a specific one for the hero background
    const heroImage = festivals[0]?.image || "/assets/placeholder.jpg"; // Fallback if no festivals

    return (
        <div className="min-h-screen bg-background mt-5">
            {/* Improved Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0 select-none">
                    <Image
                        src={heroImage}
                        alt="Uttarakhand Festivals"
                        fill
                        className="object-cover opacity-90 scale-105 animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/10 to-black"/>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
                    <span
                        className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-4 animate-fade-in">
                        Cultural Heritage of Uttarakhand
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-fade-in-up drop-shadow-lg font-serif">
                        Festivals of the Himalayas
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md animate-fade-in-up delay-100">
                        Witness the divine celebrations, ancient rituals, and vibrant gatherings that define the soul of
                        Devbhoomi.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 py-20 space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">Upcoming Celebrations</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"/>
                    <p className="text-muted-foreground">
                        Join us in these timeless traditions that bring communities together.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {festivals.map((festival, index) => (
                        <div key={index} className="w-full h-[500px] md:h-[400px]">
                            {/* Height constraint to force the horizontal layout to look good within a container */}
                            <EventCard
                                image={festival.image}
                                title={festival.title}
                                date={formatDisplayDate(festival.date)}
                                location={festival.location}
                                description={festival.description}
                                type="Festival"
                                badge="bg-emerald-100 text-emerald-800"
                                color="text-emerald-700 dark:text-orange-400"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
