import React from "react";
import Image from "next/image";
import {fair} from "@/data/fair";
import {EventCard} from "@/components/EventCard";
import {formatDisplayDate} from "@/data/getUpcomingEvents";

export default function FairsPage() {
    // Fallback logic for hero image
    const heroImage = fair[0]?.image || "/assets/placeholder.jpg";

    return (
        <div className="min-h-screen bg-background mt-5">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0 select-none">
                    <Image
                        src={heroImage}
                        alt="Uttarakhand Fairs"
                        fill
                        className="object-cover opacity-90 scale-105 animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black"/>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
                    <span
                        className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-400/20 backdrop-blur-sm text-indigo-100 text-sm font-medium mb-4 animate-fade-in">
                        Historic Gatherings
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-fade-in-up drop-shadow-lg font-serif">
                        Traditional Fairs & Melas
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md animate-fade-in-up delay-100">
                        Experience the vibrant trade, culture, and community spirit at the legendary fairs of
                        Uttarakhand.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 py-20 space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">Commercial & Cultural Hubs</h2>
                    <div className="h-1 w-20 bg-orange-700 mx-auto rounded-full"/>
                    <p className="text-muted-foreground">
                        Where commerce meets culture — explore the bustling melas of the hills.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {fair.map((item, index) => (
                        <div key={index} className="w-full h-[500px] md:h-[400px]">
                            <EventCard
                                image={item.image}
                                title={item.title}
                                date={formatDisplayDate(item.date)}
                                location={item.location}
                                description={item.description}
                                type="Fair"
                                badge="bg-orange-100 text-orange-800"
                                color="text-orange-700 dark:text-indigo-400"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
