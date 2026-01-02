import almoraImg from "@/assets/almora_district_uttarakhand_culture.webp";
import bageshwarImg from "@/assets/bageshwar_district__uttarakhand_culture.webp";
import chamoliImg from "@/assets/chamoli_district_Uttarakhand_Culture.webp";
import champawatImg from "@/assets/champawat_district_uttarakhand_culture.webp";
import dehradunImg from "@/assets/dehradun_district_uttarakhand_culture.webp";
import haridwarImg from "@/assets/haridwar_district_uttarakhand_culture.webp";
import nainitalImg from "@/assets/nainital_district_uttarakhand_culture.webp";
import pauriImg from "@/assets/pauri_garhwal_district_uttarakhand_culture.webp";
import pithoragarhImg from "@/assets/pithoragarh_district_uttarakhand_culture.webp";
import rudraprayagImg from "@/assets/rudraprayag_river_confluence.png";
import tehriImg from "@/assets/tehri_garhwal_district_uttarakhand_culture.webp";
import usnagarImg from "@/assets/udham_singh_nagar_district_uttarakhand_culture.webp";
import uttarkashiImg from "@/assets/uttarkashi_district_uttarakhand_culture.webp";
import almoraMap from "@/assets/almora-district-map-uttarakhand-culture.svg";

export interface District {
    id: string;
    name: string;
    region: "Kumaon" | "Garhwal";
    description: string;
    map?: any;
    geography: {
        area: string;
        forest_area?: string;
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
    sub_division?: string[],
    tehsil?: string[];
    block?: string[];
    image: string;
    color: string;
}

export const districts: District[] = [
    {
        id: "almora",
        name: "Almora",
        region: "Kumaon",
        description: "The cultural heart of Kumaon, known for its magnificent beauty, panoramic view of the Himalayas and rich cultural heritage.",
        map: almoraMap,
        geography: {
            area: "3,139 sq km",
            forest_area: "1309.40 sq km",
            hq: "Almora",
            altitude: "1,638 m",
            rivers: ["Ramganga", "Saryu", "Gomati", "Pinar", "Gagas", "Kosi", "Tarag Gadhera"]
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
        sub_division: ["Almora", "Jainti", "Dwarahat", "Ranikhet", "Bhikiyasain", "Sult"],
        tehsil: ["Almora", "Someshwar", "Dhaulchina", "Jainti", "Bhanoli", "Lamgara", "Dhyari - SubTehsil", "Dwarahat", "Chaukhutiya", "Jalali - SubTehsil", "Bagwalipokhar - SubTehsil", "Ranikhet", "Bhikiyasain", "Syalde", "Sult", "Machhor - SubTehsil"],
        block: ["Bhaisiachana", "Bhikiyasain", "Chaukhutiya", "Dhauladevi", "Dwarahat", "Hawalbag", "Lamgara", "Sult", "Syalde", "Takula", "Tarikhet"],
        image: almoraImg.src,
        color: "text-orange-700"
    },
    {
        id: "bageshwar",
        name: "Bageshwar",
        region: "Kumaon",
        description: "The land of Lord Shiva (Bagnath), situated at the confluence of Saryu and Gomti rivers. Known for its glaciers and ancient temples.",
        geography: {
            area: "2,302 sq km",
            hq: "Bageshwar",
            altitude: "1,004 m",
            rivers: ["Saryu", "Gomti", "Pindar", "Sunderdhunga"]
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
        sub_division: ["Bageshwar", "Garur", "Kapkot", "Kanda"],
        tehsil: ["Bageshwar", "Dugnakuri", "Garur", "Kafligair", "Kanda", "Kapkot"],
        block: ["Bageshwar", "Garur", "Kapkot"],
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
            rivers: ["Alaknanda", "Pindar", "Ramganga", "Nandakini", "Birahiganga", "Rishiganga", "Dhauliganga", "Laxman Ganga", "Juma Gad", "Duii Gadhera", "Kalpa Ganga", "Semkora", "Pai Gadhera", "Bal Khila River", "Bani Gad", "Chufala Gad", "Mola Gad", "Karni Gadhera", "Jetha Gad", "Nagal Gad", "Kail Ganga", "Pranmati", "Chor Gad", "Simlin Gad", "Khuna Gad", "Sari Gad", "Ghurgut", "Maigur Khansar"]
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
        // sub_division: ["Bageshwar", "Garur", "Kapkot", "Kanda"],
        tehsil: ["Chamoli", "Joshimath", "Pokhri", "Karanprayag", "Gairsain", "Tharali", "Dewal", "Narayanbagar", "AdiBadri", "Jilasu", "Nandprayag", "Ghat"],
        block: ["Dasholi", "Joshimath", "Ghat", "Pokhari", "Karanprayag", "Gairsain", "Narayanbagar", "Thrali", "Dewal"],
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
            rivers: ["Saryu", "Sharda", "Panar", "Lohawati", "Ladhiya", "Kalounia", "Machlad", "Ramgar"]
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
        sub_division: ["Pati", "Shri Poornagiri", "Champawat", "Lohaghat"],
        tehsil: ["Pati", "Shri Poornagiri", "Champawat", "Lohaghat", "Barakot", "Pulla - SubTehsill", "Munch - SubTehsil"],
        block: ["Champawat", "Pati", "Lohaghat", "Barakot"],
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
            rivers: ["Ganga", "Yamuna", "Tons", "Asan", "Kharasot", "Chandrabhaga", "Song", "Binj Rao", "Bindal Rao", "Pabbar"]
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
        // sub_division: [],
        tehsil: ["Dehradun Sadar", "Doiwala", "Rishikesh", "Vikasnagar", "Chakrata", "Kalsi", "Tyuni"],
        block: ["Raipur", "Doiwala", "Sahaspur", "Vikasnagar", "Chakrata", "Kalsi"],
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
            rivers: ["Ganga", "Saloni", "Piti", "Rawasana", "Kotwali Rao"]
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
        // sub_division: [],
        tehsil: ["Haridwar", "Roorkee", "Bhagwanpur", "Laksar"],
        block: ["Bahadrabad", "Bhagwanpur", "Roorkee", "Narsan", "Laksar", "Khanpur"],
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
        // sub_division: [],
        tehsil: ["Nainital", "Haldwani", "Ramnagar", "Kaladhungi", "Lalkuwan", "Dhari", "Khanshyu", "Kosiyakutoli", "Betalghat"],
        block: ["Haldwani", "Bhimtal", "Ramnagar", "Kotabag", "Dhari", "Betalghat", "Ramgarh", "Okhalkanda"],
        image: nainitalImg.src,
        color: "text-teal-700"
    },
    {
        id: "pauri",
        name: "Pauri Garhwal",
        region: "Garhwal",
        description: "Known for its diverse topography from the foothills to the snow-clad peaks. Home to Lansdowne and Khirsu.",
        geography: {
            area: "5,230 sq km",
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
        sub_division: ["Pauri", "Srinagar", "Lansdowne", "Kotdwar", "Thalisain", "Dhumakot"],
        tehsil: ["Pauri", "Chobattakhal", "Srinagar", "Lansdowne", "Satpuli", "Jakhanikhal", "Rikhnikhal - SubTehsil", "Kotdwar", "Yamkeshwar", "Thalisain", "Chakisain", "Bironkhal", "Dhumakot"],
        block: ["Pauri", "Kot", "Kaljikhal", "Khirsu", "Pabo", "Thalisain", "Bironkhal", "Nanidanda", "Ekeshwar", "Pokhra", "Rikhnikhal", "Jaiharikhal", "Dwarikhal", "Dugadda", "Yamkeshwar"],
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
            rivers: ["Girthi", "Keogad", "Kali", "Gori", "Dhauli", "Kutiyangti", "Sarju", "Ram Ganga East"]
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
        // sub_division: [],
        tehsil: ["Pithoragarh", "Didihat", "Gangolihat", "Berinag", "Dharchula", "Munsyari", "Kanalichina", "Devalthal", "Ganai Gangoli", "Bangapani", "Thal", "Tejam", "Pankhu"],
        block: ["Bin", "Munakot", "Didihat", "Kanalichina", "Dharchula", "Munsyari", "Gangolihat", "Berinag"],
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
            rivers: ["Mandakini", "Alaknanda", "Vasuki Ganga"]
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
        sub_division: ["Rudraprayag", "Jakholi", "Ukhimath"],
        tehsil: ["Rudraprayag", "Jakholi", "Ukhimath", "Basukedar"],
        block: ["Agustyamuni", "Jakholi", "Ukhimath"],
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
        sub_division: ["Narendranagar", "Tehri", "Pratapnagar", "Ghansali", "Kirtinagar"],
        tehsil: ["Narendranagar", "Gaja", "Pav ki Devi", "Tehri", "Jakhnidhar", "Dhanolti", "Nainbag", "Kandisaur", "Pratapnagar", "Madan Negi", "Ghansali", "Balganga", "Devprayag", "Kirtinagar"],
        block: ["Fakot(Narendranagar)", "Chamba", "Jaunpur", "Thauldhar", "Pratapnagar", "Jakhanidhar", "Hindolakhal", "Kirtinagar", "Bhilangna"],
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
            population: "16,48,302",
            literacy: "73.10%",
            languages: ["Hindi", "Punjabi", "Bengali", "Tharu"]
        },
        economy: ["Agriculture", "Industry"],
        history: {
            established: "1995",
            dynasties: ["Chand", "British"],
            key_events: "Named after freedom fighter Udham Singh."
        },
        sub_division: ["Jaspur", "Kashipur", "Bajpur", "Rudrapur", "Kichha", "Sitarganj", "Khatima"],
        tehsil: ["Jaspur", "Kashipur", "Khatima", "Bajpur", "Gadarpur", "Rudrapur", "Kichha", "Sitarganj"],
        block: ["Jaspur", "Kashipur", "Bajpur", "Gadarpur", "Rudrapur", "Sitarganj", "Khatima"],
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
            population: "330,090",
            literacy: "75.81%",
            languages: ["Garhwali", "Hindi"]
        },
        economy: ["Pilgrimage", "Adventure Tourism", "Agriculture"],
        history: {
            established: "1960",
            dynasties: ["Panwar"],
            key_events: "Ancient route for pilgrims and traders."
        },
        // sub_division: [],
        tehsil: ["Bhatwadi", "Dunda", "Chinyalisaud", "Badkot", "Purola", "Mori", "Joshiyara - SubTehsil", "Dhauntri - SubTehsil"],
        block: ["Bhatwadi", "Dunda", "Chinyalisaud", "Naugaon", "Purola", "Mori"],
        image: uttarkashiImg.src,
        color: "text-sky-700"
    }
];
