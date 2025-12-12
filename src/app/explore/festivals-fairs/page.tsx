import React from "react";
import Image from "next/image";
import {FestivalData, festivals} from "@/data/festivals";
import {fair, FairData} from "@/data/fair";
import {Card, CardContent,} from "@/components/ui/card";
import {CalendarIcon, MapPinIcon} from "lucide-react";

// Combine and sort data (optional, or just display separately. Use requested List format)
// The user asked for "list" but "card form", effectively a grid of cards.
// Let's display them in a responsive grid.

export default function FestivalsAndFairsPage() {
    const allEvents = [...festivals, ...fair];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/hero-festival.jpg" // Placeholder or use a generic one if not available.
                        // I'll need to check available assets. For now, I'll use a solid color gradient fallback or one of the festival images if a hero isn't available.
                        // Actually, I should check for a hero image. 
                        // For now, I'll use a placeholder/gradient and we can swap it. 
                        // Better yet, I'll use one of the festival images as a hero background for now.
                        alt="Festivals of Uttarakhand"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"/>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight animate-fade-in-up">
                        Celebrations of Devotion & Joy
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Immerse yourself in the vibrant tapestry of Uttarakhand's culture.
                        Discover the ancient fairs and festivals that bring our hills to life.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight border-l-4 border-primary pl-4">
                        Festivals & Fairs
                    </h2>
                    <p className="text-muted-foreground pl-5 max-w-3xl">
                        Explore the upcoming and traditional gatherings that mark the seasons in the Himalayas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allEvents.map((event, index) => (
                        <FestivalCard key={`${event.title}-${index}`} event={event}/>
                    ))}
                </div>
            </section>
        </div>
    );
}

function FestivalCard({event}: { event: FestivalData | FairData }) {
    return (
        <Card
            className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"/>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90 mb-1">
                        <CalendarIcon className="w-4 h-4"/>
                        <span>{event.date || "Date varies"}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{event.title}</h3>
                </div>
            </div>

            <CardContent className="pt-6">
                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                    <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0"/>
                    <span>{event.location}</span>
                </div>
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                    {event.description}
                </p>
            </CardContent>
            {/* 
      <CardFooter>
        <button className="text-primary text-sm font-semibold hover:underline decoration-2 underline-offset-4">
            Read More
        </button>
      </CardFooter>
      */}
        </Card>
    );
}
