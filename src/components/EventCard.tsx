import React from "react";
import Image, {StaticImageData} from "next/image";
import {Calendar, MapPin} from "lucide-react";
import {cn} from "@/lib/utils";

export interface EventCardProps {
    image: string | StaticImageData;
    title: string;
    date: string; // single date or a range (e.g. "2025-03-10" or "2025-03-10 to 2025-03-12")
    location: string;
    description: string;
    type?: string; // e.g., "Festival" or "Fair"
    badge?: string; // e.g., "bg-orange-500 text-white"
    color?: string; // Text color class for title
}

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function tryParseDate(str?: string): Date | null {
    if (!str) return null;
    // Allow ISO and many human-readable formats handled by Date constructor
    const d = new Date(str);
    if (!isNaN(d.getTime())) return d;
    // attempt to parse common patterns like "Mar 10, 2025"
    try {
        const parsed = Date.parse(str);
        if (!isNaN(parsed)) return new Date(parsed);
    } catch (e) {
        // fallthrough
    }
    return null;
}

function parseDateRange(dateStr: string): { start?: Date; end?: Date } {
    if (!dateStr) return {};
    // split on common separators: " to ", " - ", " – ", " — "
    const parts = dateStr.split(/\s(?:to|-)\s|\s[–—]\s/);
    if (parts.length >= 2) {
        const start = tryParseDate(parts[0].trim());
        const end = tryParseDate(parts[1].trim());
        return {start: start || undefined, end: end || undefined};
    }
    const single = tryParseDate(dateStr.trim());
    return {start: single || undefined, end: single || undefined};
}

function startOfDay(d: Date) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
}

function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatDate(d?: Date) {
    if (!d) return "";
    return new Intl.DateTimeFormat("en-IN", {month: "short", day: "numeric", year: "numeric"}).format(d);
}

export function EventCard({
                              image,
                              title,
                              date,
                              location,
                              description,
                              type = "Event",
                              badge = "bg-primary text-primary-foreground",
                              color = "text-foreground",
                          }: EventCardProps) {
    const {start, end} = parseDateRange(date);

    const today = startOfDay(new Date());
    let showBadge = true;
    let badgeText = `Upcoming ${type}`;

    if (!start && !end) {
        // couldn't parse the date: fall back to generic upcoming (still show badge)
        badgeText = `Upcoming ${type}`;
        showBadge = true;
    } else {
        const s = start ? startOfDay(start) : undefined;
        const e = end ? startOfDay(end) : s; // if end missing, treat as single-day event

        if (s && e) {
            if (e < today) {
                // completely in the past -> hide tag
                showBadge = false;
            } else if (isSameDay(s, today) || (s <= today && today <= e)) {
                // happening today
                showBadge = true;
                badgeText = `Today · ${type}`;
            } else if (s > today) {
                const daysUntil = Math.ceil((s.getTime() - today.getTime()) / MS_PER_DAY);
                if (daysUntil === 1) badgeText = `Tomorrow · ${type}`;
                else if (daysUntil < 7) badgeText = `In ${daysUntil} days · ${type}`;
                else badgeText = `Upcoming ${type}`;
            }
        } else if (s) {
            // only start known
            if (s < today) {
                showBadge = false;
            } else if (isSameDay(s, today)) {
                showBadge = true;
                badgeText = `Today · ${type}`;
            } else {
                const daysUntil = Math.ceil((s.getTime() - today.getTime()) / MS_PER_DAY);
                if (daysUntil === 1) badgeText = `Tomorrow · ${type}`;
                else if (daysUntil < 7) badgeText = `In ${daysUntil} days · ${type}`;
                else badgeText = `Upcoming ${type}`;
            }
        }
    }

    return (
        <div
            className="flex flex-col md:flex-row h-full w-full bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Image Side */}
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden min-h-[220px]">
                <div className="absolute inset-0 bg-black/10 z-10"/>

                <Image
                    fill
                    loading={"lazy"}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />

                {showBadge && (
                    <div
                        className={cn(
                            "absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm",
                            badge
                        )}
                    >
                        {badgeText}
                    </div>
                )}
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 px-2 py-6 sm:p-6 md:p-10 flex flex-col justify-center">
                <div
                    className="flex items-center gap-2 sm:gap-4 mb-4 text-sm font-medium text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4"/>
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4"/>
                        <span>{location}</span>
                    </div>
                </div>

                <h3
                    className={cn(
                        "text-xl md:text-3xl px-2 sm:px-0 lg:text-4xl font-serif font-bold mb-2 sm:mb-4",
                        color
                    )}
                >
                    {title}
                </h3>

                <p className="text-muted-foreground px-2 sm:px-0 leading-relaxed text-sm md:text-base line-clamp-4">
                    {description}
                </p>
            </div>
        </div>
    );
}
