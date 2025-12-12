import React, {useCallback, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Calendar, ChevronLeft, ChevronRight, MapPin} from "lucide-react";
import {cn} from "@/lib/utils";
import Image from "next/image";

interface Event {
    id: number;
    type: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    color: string;
    bg: string;
    badge: string;
}

interface ThreeDEventCarouselProps {
    events: Event[];
    autoRotate?: boolean;
    interval?: number;
    className?: string;
}

export const ThreeDEventCarousel = ({
                                        events = [],
                                        autoRotate = true,
                                        interval = 5000,
                                        className,
                                    }: ThreeDEventCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % events.length);
    }, [events.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
    }, [events.length]);

    useEffect(() => {
        if (autoRotate && !isPaused) {
            const timer = setInterval(nextSlide, interval);
            return () => clearInterval(timer);
        }
    }, [autoRotate, interval, isPaused, nextSlide]);

    const getImageVariant = (position: string) => {
        if (position === "active") {
            return {
                zIndex: 20,
                opacity: 1,
                scale: 1,
                x: 0,
                rotateY: 0,
                z: 0,
            };
        } else if (position === "prev") {
            return {
                zIndex: 10,
                opacity: 0.1,
                scale: 0.4,
                x: "-60%",
                rotateY: 30,
                z: -150,
            };
        } else if (position === "next") {
            return {
                zIndex: 10,
                opacity: 0.1,
                scale: 0.4,
                x: "60%",
                rotateY: -30,
                z: -150,
            };
        } else {
            return {
                zIndex: 0,
                opacity: 0,
                scale: 0.5,
                x: 0,
                rotateY: 0,
                z: -300,
            };
        }
    };

    const getPosition = (index: number) => {
        if (index === activeIndex) return "active";

        const len = events.length;
        const isPrev = (index === (activeIndex - 1 + len) % len);
        const isNext = (index === (activeIndex + 1) % len);

        if (isPrev) return "prev";
        if (isNext) return "next";
        return "hidden";
    };

    const activeEvent = events[activeIndex];

    return (
        <div
            className={cn("relative w-full max-w-6xl mx-auto", className)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div
                className="relative w-full h-[500px] md:h-[450px]"
                style={{perspective: "1500px"}}
            >
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{transformStyle: "preserve-3d"}}
                >
                    <AnimatePresence initial={false} mode="popLayout">
                        {events.map((event, index) => {
                            const position = getPosition(index);
                            if (position === "hidden") return null;

                            return (
                                <motion.div
                                    key={event.id}
                                    className="absolute w-[90%] md:w-[85%] h-[90%] rounded-3xl shadow-2xl overflow-hidden bg-white"
                                    initial={getImageVariant("hidden")}
                                    animate={getImageVariant(position)}
                                    exit={getImageVariant("hidden")}
                                    transition={{
                                        duration: 0.2,
                                        ease: [0.25, 0.1, 0.25, 1.0],
                                    }}
                                    onClick={() => {
                                        if (position === "prev") prevSlide();
                                        if (position === "next") nextSlide();
                                    }}
                                    drag="x"
                                    dragConstraints={{left: 0, right: 0}}
                                    onDragEnd={(e, {offset}) => {
                                        const swipe = offset.x;
                                        if (swipe < -50) {
                                            nextSlide();
                                        } else if (swipe > 50) {
                                            prevSlide();
                                        }
                                    }}
                                >
                                    {/* Card Content - Image and Info Side by Side */}
                                    <div className="flex flex-col md:flex-row h-full">
                                        {/* Image Side */}
                                        <div
                                            className="md:w-1/2 relative h-64 md:h-full overflow-hidden pointer-events-none  min-h-[220px] md:min-h-0">
                                            <div className="absolute inset-0 bg-black/10 z-10"/>

                                            <Image fill
                                                   loading={"lazy"}
                                                   src={event.image}
                                                   alt={event.title}
                                                   className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                            />

                                            <div className={cn(
                                                "absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm",
                                                event.badge
                                            )}>
                                                Upcoming {event.type}
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="md:w-1/2 px-2  py-4 sm:p6 md:p-10 flex flex-col justify-center">
                                            <div
                                                className="flex items-center gap-2 sm:gap-4 mb-4 text-sm font-medium text-muted-foreground flex-wrap">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-4 h-4"/>
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4"/>
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>

                                            <h3 className={cn("text-xl md:text-3xl px-2 sm:px-0 lg:text-4xl font-serif font-bold mb-2 sm:mb-4 ", event.color)}>
                                                {event.title}
                                            </h3>

                                            <p className="text-muted-foreground px-2 sm:px-0 leading-relaxed text-sm md:text-base">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-3 rounded-full bg-white/90 hover:bg-white text-neutral-900 transition-all backdrop-blur-sm shadow-lg hover:scale-110 opacity-60 sm:opacity-100 cursor-pointer"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6"/>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-3  rounded-full bg-white/90 hover:bg-white text-neutral-900 transition-all backdrop-blur-sm shadow-lg hover:scale-110 opacity-60 sm:opacity-100 cursor-pointer"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6"/>
                </button>

                {/* Dots Navigation */}
                <div className="absolute left-1/2 -translate-x-1/2 z-30 flex gap-3 ">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                                index === activeIndex
                                    ? "bg-neutral-900 w-8"
                                    : "bg-neutral-400/50 hover:bg-neutral-900/80"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};