import {StaticImageData} from "next/image";
import harela from "@/assets/harela_festival_celebration.png";

import mela from "@/assets/gauchar_mela_fair.png"


export interface FairData {
    title: string;
    date: string;       // "DD-MM"
    location: string;
    description: string;
    image: StaticImageData;
}

export const fair: FairData[] = [
    {
        date: "14-01",
        title: "Uttarayani Mela",
        location: "UTTARAKHAND",
        description: "The Uttarayani Fair, celebrated on Makara Sankranti in January, is a vibrant cultural festival in Uttarakhand, with the grandest celebrations in Bageshwar. ",
        image: mela,
    },
    {
        date: "14-09",
        title: "14th Nainital Monsoon Mountain Marathon",
        location: "DSA GROUND, NAINITAL, UTTARAKHAND",
        description: `Gear up for the 14th Nainital Monsoon Mountain Marathon — “Run for Uttarakhand”, celebrating 25 years of Prosperity, Progress & Pride! Join us on 14th September at 7:00 AM at the DSA Ground, Nainital, and let every step you take echo the spirit of our hills. Don’t miss this chance to be part of a legacy of strength, unity, and determination. The last date to register is 28th August 2025. For more details or to register, scan the QR code, call us at +91 97587 27564, or email us at run2live.in@gmail.com.`,
        image: harela,
    }
];