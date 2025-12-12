import {StaticImageData} from "next/image";
import kumbh from "@/assets/haridwar_sacred_ghats.png"

export interface EventData {
    title: string;
    date: string;       // "DD-MM"
    location: string;
    description: string;
    image: StaticImageData;
}

export const events: EventData[] = [
    {
        date: "16-08",
        title: "Kumbh Mela (Mini)",
        location: "Haridwar",
        description: "A spiritual gathering of millions on the banks of the Ganga. While the Purna Kumbh happens every 12 years, the Ardh Kumbh and annual Magh Mela attract pilgrims seeking spiritual cleansing and peace.",
        image: kumbh,
    }
];
