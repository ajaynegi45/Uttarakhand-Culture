import {StaticImageData} from "next/image";
import harela from "@/assets/harela.png";
import Ghughutiya from "@/assets/ghughutiya.png";
import GheeSankranti from "@/assets/gheeSankranti.png"
import EgaasBagwal from "@/assets/egaasBagwal.png";

import phoolDei from "@/assets/phoolDei.png";
import khatarua from "@/assets/khatarua.png";


export interface FestivalData {
    title: string;
    date: string;       // "DD-MM"
    location: string;
    description: string;
    image: StaticImageData;
}

export const festivals: FestivalData[] = [

    {
        date: "14-01",
        title: "Ghughutiya",
        location: "Kumaon",
        description: "Prepared from wheat flour and jaggery, ghughute are fried and strung into garlands. On the morning of Ghughutiya, children call out “Kale kauwa” and offer these to crows and returning migratory birds — a gesture of gratitude toward nature and ancestors.",
        image: Ghughutiya,
    },

    {
        date: "15-03",
        title: "Phool Dei",
        location: "Kumaon & Garhwal",
        description: "At the start of spring, children go from house to house, placing fresh flowers on doorsteps and singing simple blessing songs. Families give them rice and jaggery and pray for a happy year and a good harvest.",
        image: phoolDei,
    },
    {
        date: "16-07",
        title: "Harela",
        location: "UTTARAKHAND",
        description: "Among the people of Uttarakhand, every season has some festivals, and each festival is celebrated appropriately. Harela is a festival that marks the beginning of the rainy season or monsoon.",
        image: harela,
    },
    {
        date: "16-08",
        title: "Ghee Sankranti",
        location: "UTTARAKHAND",
        description: "Ghee Sankranti is a festival that portrays the gratitude of the locals who earn a living via the occupation of farming by marking the onset of the harvesting season. It is also known as the 'Olgia' festival and is celebrated on the first day of August (Bhado), a time wherein the crops are thriving, and the milk-laden cattle are ready to be milked. In terms of how the celebration has gradually evolved from over the years, the ancient tradition saw nephews and sons-in-laws give presents to their maternal uncles and fathers-in-laws respectively. However, today's context is summarised by the fact that agriculturists and artisans give presents to their landowners. Common presents that are exchanged include axes, ghee, datkhocha (metallic toothpick) and firewood. An important ritual of this festival includes that of eating ghee and chapatis stuffed with urad dal!",
        image: GheeSankranti,
    },
    {
        date: "02-10",
        title: "Dussehra (Vijayadashami)",
        location: "UTTARAKHAND",
        description: "Dussehra (Vijayadashami) commemorates Lord Rama’s victory over Ravana and the triumph of good over evil. In Uttarakhand, it is marked by Ramlila performances (dramatic retellings of the Ramayana), the burning of Ravana effigies, processions, and fairs. Villagers and townsfolk participate in community events, and it’s also a popular time for seasonal markets and family outings. The date moves each year with the lunar calendar.",
        image: harela,
    },
    {
        date: "21-10",
        title: "Diwali (Deepawali)",
        location: "UTTARAKHAND",
        description: "Diwali — the Festival of Lights — is celebrated across Uttarakhand with clay lamps (diyas), rangoli, fireworks, Lakshmi puja, and feasts. Homes and temples are cleaned and decorated, sweets and gifts are exchanged, and families gather for prayers and social visits. In the hills, Diwali is also a time to remember ancestors and celebrate the end of the harvest season. (Date follows the Hindu lunar calendar and changes every year.)",
        image: harela,
    },
    {
        date: "01-11",
        title: "Egaas Bagwal",
        location: "UTTARAKHAND",
        description: "Egaas Bagwal is a unique Uttarakhand festival observed roughly 11 days after Diwali. It is celebrated with singing, dancing, local delicacies, and a striking fire-rope tradition called 'Bhailo' where villagers spin a flaming rope — a dramatic symbol of light’s triumph over darkness. Homes are decorated, families come together for meals and rituals, and traditional folk performances are common. The festival reflects the region’s ancestral customs and communal spirit.",
        image: EgaasBagwal,
    },
    {
        date: "01-05",
        title: "Khatarua",
        location: "Kumaon",
        description: "It marks the end of the monsoon season and the beginning of autumn, with activities like lighting bonfires, where people throw produce like cucumbers into the flames, as well as cleaning cattle sheds and feeding animals. The festival is deeply connected to agricultural life, with traditions focused on the well-being of livestock and ensuring a good start to the cooler season. ",
        image: khatarua,
    }
];
