import {FestivalData, festivals} from "./festivals";
import {fair as fairs, FairData} from "./fair";
import {EventData, events as rawEvents} from "./events";

// Interface wrapper to unify the simple data types
type SourceEvent = FestivalData | FairData | EventData;

export interface DashboardEvent {
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

/**
 * Helper function to find the next upcoming event from a list.
 *
 * Time Complexity: O(N) - We iterate through the list exactly once.
 * Space Complexity: O(1) - We only store a reference to the best match found so far.
 *
 * @param list - Array of events (Festival, Fair, or Event data)
 * @returns The single event object that is closest to the future (or today).
 */
const getNextEvent = (list: SourceEvent[]): SourceEvent => {
    const now = new Date();
    // Reset time to midnight to ensure accurate date-only comparisons
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayTime = today.getTime();

    let closestEvent: SourceEvent = list[0];
    let minDiff = Infinity;

    // Linear scan to find the event with the smallest positive time difference from today.
    for (const event of list) {
        const [day, month] = event.date.split('-').map(Number);

        // Construct a Date object for the event in the CURRENT year.
        const eventDate = new Date(now.getFullYear(), month - 1, day);
        let eventTime = eventDate.getTime();

        // If the event has already passed this year, assume it happens next year.
        if (eventTime < todayTime) {
            eventDate.setFullYear(eventDate.getFullYear() + 1);
            eventTime = eventDate.getTime();
        }

        const diff = eventTime - todayTime;

        // If this event is sooner than the previous best match, update our tracking variables.
        if (diff < minDiff) {
            minDiff = diff;
            closestEvent = event;
        }
    }

    return closestEvent;
};

/**
 * Aggregates upcoming events for the dashboard.
 * Fetches one upcoming item from each category and formats it for the UI.
 *
 * Overall Time Complexity: O(N + M + K) where N, M, K are the sizes of the input arrays.
 */
export const getUpcomingEvents = (): DashboardEvent[] => {
    // 1. Find the single next event for each category using our optimized O(N) helper.
    const nextFestival = getNextEvent(festivals);
    const nextFair = getNextEvent(fairs);
    const nextEvent = getNextEvent(rawEvents);

    // 2. Construct the final array, applying category-specific styling here
    //    instead of storing it in every data file (Space Optimization).
    return [
        {
            id: 1,
            type: "Festival",
            title: nextFestival.title,
            date: formatDisplayDate(nextFestival.date),
            location: nextFestival.location,
            description: nextFestival.description,
            image: nextFestival.image.src,
            color: "text-emerald-700",
            bg: "bg-emerald-50",
            badge: "bg-emerald-100 text-emerald-800"
        },
        {
            id: 2,
            type: "Fair",
            title: nextFair.title,
            date: formatDisplayDate(nextFair.date),
            location: nextFair.location,
            description: nextFair.description,
            image: nextFair.image.src,
            color: "text-orange-700",
            bg: "bg-orange-50",
            badge: "bg-orange-100 text-orange-800"
        },
        {
            id: 3,
            type: "Event",
            title: nextEvent.title,
            date: formatDisplayDate(nextEvent.date),
            location: nextEvent.location,
            description: nextEvent.description,
            image: nextEvent.image.src,
            color: "text-blue-700",
            bg: "bg-blue-50",
            badge: "bg-blue-100 text-blue-800"
        }
    ];
};


// Helper to format date for display (e.g. "July 16")
export const formatDisplayDate = (dateStr: string): string => {
    const [day, month] = dateStr.split('-').map(Number);
    const now = new Date();

    const eventDate = new Date(now.getFullYear(), month - 1, day);

    // Adjust year if date has passed
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (eventDate.getTime() < today.getTime()) {
        eventDate.setFullYear(eventDate.getFullYear() + 1);
    }

    return eventDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};
