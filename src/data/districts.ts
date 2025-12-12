// import almoraImg from "@/assets/almora_district_landscape.png";
import almoraImg from "@/assets/almora_mountain_valley_landscape.png";
import bageshwarImg from "@/assets/bageshwar_sacred_valley.png";
import chamoliImg from "@/assets/chamoli_valley_of_flowers.png";
import champawatImg from "@/assets/champawat_historic_town.png";
import dehradunImg from "@/assets/dehradun_valley_view.png";
import haridwarImg from "@/assets/haridwar_sacred_ghats.png";
import nainitalImg from "@/assets/nainital_beautiful_lake.png";
import pauriImg from "@/assets/pauri_garhwal_green_hills.png";
import pithoragarhImg from "@/assets/pithoragarh_frontier_valley.png";
import rudraprayagImg from "@/assets/rudraprayag_river_confluence.png";
import tehriImg from "@/assets/tehri_garhwal_mountain_valley.png";
import usnagarImg from "@/assets/udham_singh_nagar_plains.png";
import uttarkashiImg from "@/assets/uttarkashi_sacred_peaks.png";

export interface District {
    id: string;
    name: string;
    region: "Kumaon" | "Garhwal";
    description: string;
    geography: {
        area: string;
        hq: string;
        altitude: string;
        rivers: string[];
    };
    demographics: {
        population: string;
        literacy: string;
        languages: string[];
    };
    economy: string[];
    history: {
        established: string;
        dynasties: string[];
        key_events: string;
    };
    subdivisions: string[];
    image: string;
    color: string;
}

export const districts: District[] = [
    {
        id: "almora",
        name: "Almora",
        region: "Kumaon",
        description: "The cultural heart of Kumaon, known for its magnificent beauty, panoramic view of the Himalayas, and rich cultural heritage.",
        geography: {
            area: "3,139 sq km",
            hq: "Almora",
            altitude: "1,638 m",
            rivers: ["Kosi", "Suyal"]
        },
        demographics: {
            population: "622,506",
            literacy: "80.47%",
            languages: ["Kumaoni", "Hindi"]
        },
        economy: ["Tourism", "Agriculture", "Copper Ware"],
        history: {
            established: "1568 (Founded by King Kalyan Chand)",
            dynasties: ["Katyuri", "Chand Dynasty", "Gorkha", "British"],
            key_events: "Capital of the Chand Kings. Major hub during the freedom struggle."
        },
        subdivisions: ["Almora Tehsil", "Dhanaulti Tehsil", "Ramnagar Tehsil", "Syalde Tehsil"],
        image: almoraImg.src,
        color: "text-orange-700"
    },
    {
        id: "bageshwar",
        name: "Bageshwar",
        region: "Kumaon",
        description: "The land of Lord Shiva (Bagnath), situated at the confluence of Saryu and Gomti rivers. Known for its glaciers and ancient temples.",
        geography: {
            area: "2,246 sq km",
            hq: "Bageshwar",
            altitude: "1,004 m",
            rivers: ["Saryu", "Gomti", "Pindar"]
        },
        demographics: {
            population: "259,898",
            literacy: "80.01%",
            languages: ["Kumaoni", "Hindi"]
        },
        economy: ["Agriculture", "Soapstone Mining"],
        history: {
            established: "1997 (Carved out of Almora)",
            dynasties: ["Katyuri", "Chand"],
            key_events: "Historically a major trade center between Tibet and Kumaon."
        },
        subdivisions: ["Bageshwar Tehsil", "Kanda Tehsil"],
        image: bageshwarImg.src,
        color: "text-emerald-700"
    },
    {
        id: "chamoli",
        name: "Chamoli",
        region: "Garhwal",
        description: "The abode of Gods, home to Badrinath, Valley of Flowers, and the Chipko Movement. A paradise for trekkers and pilgrims.",
        geography: {
            area: "8,030 sq km",
            hq: "Gopeshwar",
            altitude: "1,300 m - 7,816 m",
            rivers: ["Alaknanda", "Dhauliganga", "Nandakini"]
        },
        demographics: {
            population: "391,605",
            literacy: "82.65%",
            languages: ["Garhwali", "Hindi", "Bhotia"]
        },
        economy: ["Tourism", "Pilgrimage", "Agriculture"],
        history: {
            established: "1960",
            dynasties: ["Panwar", "Gorkha", "British"],
            key_events: "Birthplace of the Chipko Movement in the 1970s to save forests."
        },
        subdivisions: ["Gairsain Tehsil", "Chamoli Tehsil", "Tharali Tehsil"],
        image: chamoliImg.src,
        color: "text-blue-700"
    },
    {
        id: "champawat",
        name: "Champawat",
        region: "Kumaon",
        description: "The first capital of the Chand rulers, known for its stone architecture and the legend of the Man-Eater of Champawat.",
        geography: {
            area: "1,766 sq km",
            hq: "Champawat",
            altitude: "1,615 m",
            rivers: ["Ladhia", "Sharda"]
        },
        demographics: {
            population: "259,648",
            literacy: "79.83%",
            languages: ["Kumaoni", "Hindi"]
        },
        economy: ["Agriculture", "Horticulture"],
        history: {
            established: "1997",
            dynasties: ["Chand Dynasty"],
            key_events: "Original seat of the Chand Dynasty before moving to Almora."
        },
        subdivisions: ["Champawat Tehsil", "Pati Tehsil"],
        image: champawatImg.src,
        color: "text-yellow-700"
    },
    {
        id: "dehradun",
        name: "Dehradun",
        region: "Garhwal",
        description: "The capital city, nestled in the Doon Valley. A blend of city life, prestigious institutions, and natural beauty.",
        geography: {
            area: "3,088 sq km",
            hq: "Dehradun",
            altitude: "450 m - 640 m",
            rivers: ["Ganga", "Yamuna", "Tons"]
        },
        demographics: {
            population: "1,696,694",
            literacy: "84.25%",
            languages: ["Hindi", "Garhwali", "English", "Jaunsari"]
        },
        economy: ["Education", "Services", "Tourism", "Agriculture"],
        history: {
            established: "1817",
            dynasties: ["Garhwal Kingdom", "Gorkha", "British"],
            key_events: "Guru Ram Rai established his Derra here in 1676. Became capital of Uttarakhand in 2000."
        },
        subdivisions: ["Dehradun Tehsil", "Doiwala Tehsil", "Vikasnagar Tehsil"],
        image: dehradunImg.src,
        color: "text-green-700"
    },
    {
        id: "haridwar",
        name: "Haridwar",
        region: "Garhwal",
        description: "Gateway to the Gods. One of the seven holiest places in India, where the Ganga enters the plains.",
        geography: {
            area: "2,360 sq km",
            hq: "Haridwar",
            altitude: "314 m",
            rivers: ["Ganga"]
        },
        demographics: {
            population: "1,890,422",
            literacy: "73.43%",
            languages: ["Hindi", "Garhwali"]
        },
        economy: ["Industrial", "Tourism", "Agriculture"],
        history: {
            established: "1988",
            dynasties: ["Mauryan", "Kushan", "Gupta"],
            key_events: "Site of the Kumbh Mela every 12 years."
        },
        subdivisions: ["Haridwar Tehsil", "Bhim Nagar Tehsil", "Roorkee Tehsil"],
        image: haridwarImg.src,
        color: "text-orange-600"
    },
    {
        id: "nainital",
        name: "Nainital",
        region: "Kumaon",
        description: "The Lake District of India. Famous for its eye-shaped lake and colonial heritage.",
        geography: {
            area: "4,251 sq km",
            hq: "Nainital",
            altitude: "2,084 m",
            rivers: ["Kosi", "Gola"]
        },
        demographics: {
            population: "954,605",
            literacy: "83.88%",
            languages: ["Kumaoni", "Hindi"]
        },
        economy: ["Tourism", "Horticulture"],
        history: {
            established: "1891",
            dynasties: ["British", "Chand"],
            key_events: "Founded by P. Barron in 1841. Summer capital of United Provinces during British Raj."
        },
        subdivisions: ["Nainital Tehsil", "Bhimtal Tehsil", "Ramnagar Tehsil", "Haldwani Tehsil"],
        image: nainitalImg.src,
        color: "text-teal-700"
    },
    {
        id: "pauri",
        name: "Pauri Garhwal",
        region: "Garhwal",
        description: "Known for its diverse topography from the foothills to the snow-clad peaks. Home to Lansdowne and Khirsu.",
        geography: {
            area: "5,329 sq km",
            hq: "Pauri",
            altitude: "1,650 m - 3,000 m",
            rivers: ["Alaknanda", "Nayyar"]
        },
        demographics: {
            population: "687,271",
            literacy: "82.02%",
            languages: ["Garhwali", "Hindi"]
        },
        economy: ["Agriculture", "Tourism"],
        history: {
            established: "1840",
            dynasties: ["Garhwal Kingdom", "British"],
            key_events: "Shift of headquarters from Srinagar to Pauri in 1840."
        },
        subdivisions: ["Pauri Tehsil", "Rikhnikhal Tehsil", "Dugadda Tehsil", "Pokhri Tehsil", "Kyarkuli Tehsil"],
        image: pauriImg.src,
        color: "text-indigo-700"
    },
    {
        id: "pithoragarh",
        name: "Pithoragarh",
        region: "Kumaon",
        description: "Little Kashmir. A frontier district bordering Tibet and Nepal, known for the Soar Valley.",
        geography: {
            area: "7,090 sq km",
            hq: "Pithoragarh",
            altitude: "1,627 m",
            rivers: ["Kali", "Gori", "Ramganga"]
        },
        demographics: {
            population: "483,439",
            literacy: "82.25%",
            languages: ["Kumaoni (Soriyali)", "Hindi", "Rung"]
        },
        economy: ["Agriculture", "Trade", "Defense"],
        history: {
            established: "1960",
            dynasties: ["Katyuri", "Chand"],
            key_events: "Strategic importance on the Kailash Mansarovar route."
        },
        subdivisions: ["Pithoragarh Tehsil", "Dharchula Tehsil", "Munsiyari Tehsil", "Askot Tehsil"],
        image: pithoragarhImg.src,
        color: "text-red-700"
    },
    {
        id: "rudraprayag",
        name: "Rudraprayag",
        region: "Garhwal",
        description: "Named after Lord Shiva (Rudra), situated at the confluence of Alaknanda and Mandakini. Home to Kedarnath.",
        geography: {
            area: "1,984 sq km",
            hq: "Rudraprayag",
            altitude: "895 m - 6,940 m",
            rivers: ["Mandakini", "Alaknanda"]
        },
        demographics: {
            population: "242,285",
            literacy: "81.30%",
            languages: ["Garhwali", "Hindi"]
        },
        economy: ["Pilgrimage Tourism", "Agriculture"],
        history: {
            established: "1997",
            dynasties: ["Panwar"],
            key_events: "Named after the Rudra incarnation of Shiva."
        },
        subdivisions: ["Rudraprayag Tehsil", "Karnaprayag Tehsil"],
        image: rudraprayagImg.src,
        color: "text-amber-700"
    },
    {
        id: "tehri-garhwal",
        name: "Tehri Garhwal",
        region: "Garhwal",
        description: "Home to the massive Tehri Dam and the old capital of the Garhwal Kingdom (Old Tehri, now submerged).",
        geography: {
            area: "3,642 sq km",
            hq: "New Tehri",
            altitude: "1,750 m",
            rivers: ["Bhagirathi", "Bhilangna"]
        },
        demographics: {
            population: "618,931",
            literacy: "76.36%",
            languages: ["Garhwali", "Hindi"]
        },
        economy: ["Hydro Power", "Tourism", "Agriculture"],
        history: {
            established: "1949 (Merger with India)",
            dynasties: ["Shah Dynasty"],
            key_events: "Sudarshan Shah established the capital at Tehri after the British took over eastern Garhwal."
        },
        subdivisions: ["Tehri Tehsil", "Deoprayag Tehsil", "Uttarkashi Tehsil"],
        image: tehriImg.src,
        color: "text-cyan-700"
    },
    {
        id: "udham-singh-nagar",
        name: "Udham Singh Nagar",
        region: "Kumaon",
        description: "The Food Bowl of Uttarakhand. A plain area known for its agriculture and industry.",
        geography: {
            area: "2,542 sq km",
            hq: "Rudrapur",
            altitude: "200 m - 300 m",
            rivers: ["Kosi", "Dabka"]
        },
        demographics: {
            population: "1,648,902",
            literacy: "73.10%",
            languages: ["Hindi", "Punjabi", "Bengali", "Tharu"]
        },
        economy: ["Agriculture", "Industry"],
        history: {
            established: "1995",
            dynasties: ["Chand", "British"],
            key_events: "Named after freedom fighter Udham Singh."
        },
        subdivisions: ["Rudrapur Tehsil", "Kashipur Tehsil", "Bazpur Tehsil", "Khatima Tehsil"],
        image: usnagarImg.src,
        color: "text-lime-700"
    },
    {
        id: "uttarkashi",
        name: "Uttarkashi",
        region: "Garhwal",
        description: "Kashi of the North. Source of both the Ganga (Gangotri) and Yamuna (Yamunotri).",
        geography: {
            area: "8,016 sq km",
            hq: "Uttarkashi",
            altitude: "1,158 m",
            rivers: ["Bhagirathi", "Yamuna"]
        },
        demographics: {
            population: "330,086",
            literacy: "75.81%",
            languages: ["Garhwali", "Hindi"]
        },
        economy: ["Pilgrimage", "Adventure Tourism", "Agriculture"],
        history: {
            established: "1960",
            dynasties: ["Panwar"],
            key_events: "Ancient route for pilgrims and traders."
        },
        subdivisions: ["Uttarkashi Tehsil", "Purola Tehsil", "Barkot Tehsil"],
        image: uttarkashiImg.src,
        color: "text-sky-700"
    }
];
