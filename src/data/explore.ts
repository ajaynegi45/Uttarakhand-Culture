import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Landmark, Mountain, Utensils, Languages, History, PartyPopper, Binoculars } from "lucide-react";
import festivalImg from "@/assets/phoolDei.png";
import ruler from "@/assets/panwar_garhwal_temples.png";
import map from "@/assets/uttarakhand_district_explorer_map_background.png";
import mela from "@/assets/gauchar_mela_fair.png";
import GarhwaliLanguage from "@/assets/Garhwali-Language.png";
import recipes from "@/assets/bhatt_ki_churkani_dish.png";
import kedarnath from "@/assets/katyuri_medieval_temples.png";
import kumaoniLanguage from "@/assets/Language.webp"
import JaunsariLanguage from "@/assets/Jaunsari-Language.png"


/* --- Category --- */
export type CategoryId =
    | "music" | "food" | "tourist" | "stories"
    | "arts" | "temples" | "language"
    | "festival" | "history" | "district"
    | "all";

/* Category list */
export const CATEGORIES: { id: CategoryId; name: string; icon?: any; colorCss?: string }[] = [
    { id: "all",       name: "All",       icon: Mountain,   colorCss: "bg-muted/20 text-muted-foreground" },
    { id: "festival",  name: "Festival",  icon: PartyPopper,   colorCss: "bg-orange-100 text-orange-700" },
    { id: "food",      name: "Cuisine",   icon: Utensils,   colorCss: "bg-green-100 text-green-700" },
    { id: "tourist",    name: "Tourist",    icon: Binoculars,   colorCss: "bg-blue-100 text-blue-700" },
    { id: "history",   name: "History",   icon: History,   colorCss: "bg-amber-100 text-amber-700" },
    { id: "temples",   name: "Temples",   icon: Landmark,   colorCss: "bg-amber-100 text-amber-700" },
    { id: "language",  name: "Language",  icon: Languages,   colorCss: "bg-[#EFE6DC] text-[#5A3E2B]" },
];


/* --- Feature --- */
export interface IFeature {
    id: string;
    title: string;
    categories: CategoryId[];
    image: string;
    desc: string;
    colorCss: string;
    url: string;
    tags: string[];
}

/* Feature Data */
export const FEATURES: IFeature[] = [
    {
        id: "festival",
        title: "Festival",
        categories: ["festival"],
        image: festivalImg.src,
        desc: "Explore the vibrant festivals, from cultural traditions to colorful celebrations across the Himalayas.",
        colorCss: "bg-green-100 text-green-700",
        url: "/explore/festivals",
        tags: ["phool dei", "harvest", "uttarakhand", "kumaon", "garhwal"],
    },
    {
        id: "rulers",
        title: "Rulers",
        categories: ["history"],
        image: ruler.src,
        desc: "Mountain dynasties and their fortifications across centuries.",
        colorCss: "bg-orange-100 text-orange-700",
        url: "/explore/rulers",
        tags: ["dynasty", "kings", "panwar", "katyuri", "ancient", "history"],
    },
    {
        id: "district",
        title: "District",
        categories: ["tourist"],
        image: map.src,
        desc: "Explore 13 distinct districts, each with its own dialect, deity and destiny.",
        colorCss: "bg-amber-100 text-amber-700",
        url: "/explore/districts",
        tags: ["district", "kumaon", "almora", "bageshwar", "chamoli", "champawat", "dehradun", "haridwar", "nainital", "paurigarhwal", "pithoragarh", "rudraprayag", "tehrigarhwal", "udhamsinghnagar", "uttarkashi"],
    },
    {
        id: "fairs",
        title: "Fairs",
        categories: ["tourist", "festival"],
        image: mela.src,
        desc: "Explore all kauthik",
        colorCss: "bg-green-100 text-green-700",
        url: "/explore/fairs",
        tags: ["fairs", "mela", "kauthik"],
    },
    {
        id: "kumaoni",
        title: "Kumaoni",
        categories: ["language"],
        image: kumaoniLanguage.src,
        desc: "The melodic language spoken in the Kumaon region.",
        colorCss: "bg-[#EFE6DC] text-[#5A3E2B] border border-[#D2BBA7]",
        url: "/languages/kumaoni",
        tags: ["kumaoni", "dialect", "kumaon", "language"],
    },
    {
        id: "garhwali-language",
        title: "Garhwali",
        categories: ["language"],
        image: GarhwaliLanguage.src,
        desc: "The prominent language of the Garhwal division.",
        colorCss: "bg-[#EFE6DC] text-[#5A3E2B] border border-[#D2BBA7]",
        url: "/languages/garhwali",
        tags: ["garhwali", "dialect", "garhwal", "language"],
    },
    {
        id: "jaunsari",
        title: "Jaunsari",
        categories: ["language"],
        image: JaunsariLanguage.src,
        desc: "Explore the Jaunsari language of the Garhwal division.",
        colorCss: "bg-[#EFE6DC] text-[#5A3E2B] border border-[#D2BBA7]",
        url: "/languages/jaunsari",
        tags: ["jaunsari", "dialect", "jaunsari", "language"],
    },
    {
        id: "cuisine",
        title: "Cuisine",
        categories: ["food"],
        image: recipes.src,
        desc: "A nutritious black soybean curry typical to the region.",
        colorCss: "bg-green-100 text-green-700",
        url: "/explore/recipes",
        tags: ["bhatt", "churkani", "cuisine", "soybean", "recipes"],
    },
    {
        id: "temples",
        title: "Temples",
        categories: ["temples", "history", "tourist"],
        image: kedarnath.src,
        desc: "Cluster of ancient stone temples set among deodar forests, important pilgrimage site.",
        colorCss: "bg-amber-100 text-amber-700",
        url: "/explore/temples",
        tags: ["kedarnath", "shiva", "pilgrimage", "stone"],
    },
];


/* ---------------------------
   TOKENIZATION & NORMALIZATION
   --------------------------- */

/**
 * - Lowercases and strips punctuation (simple)
 * - You can replace this with a more advanced tokenizer/stemmer if needed
 *
 * Time: O(L) per string
 * Space: O(L)
 */
function tokenize(text: string): string[] {
    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]+/gu, " ")
        .split(/\s+/)
        .filter(Boolean);
}


/* --- Build searchable indexes --- */

/**
 * buildIndexes
 * - Builds:
 *    - invertedIndex: Map<token, Set<featureId>>
 *    - categoryMap: Map<category, Set<featureId>>
 *    - featureMap: Map<featureId, IFeature>
 *
 * Complexity:
 * - Time: O(N * L) where L is avg tokens per feature
 * - Space: O(V + N) where V is total unique tokens, N is number of features
 */
function buildIndexes(features: IFeature[]) {
    const categoryToIds = new Map<CategoryId, string[]>();
    const tokenToIds = new Map<string, string[]>();

    for (const feature of features) {
        // category index
        for (const Category of feature.categories) {
            const arr = categoryToIds.get(Category) ?? [];
            arr.push(feature.id);
            categoryToIds.set(Category, arr);
        }

        // token index from title, tags, desc
        const tokens = [
            ...tokenize(feature.title),
            ...feature.tags.flatMap(tokenize),
            ...tokenize(feature.desc),
        ];

        const seen = new Set<string>();
        for (const token of tokens) {
            if (seen.has(token)) continue;
            seen.add(token);
            const arr = tokenToIds.get(token) ?? [];
            arr.push(feature.id);
            tokenToIds.set(token, arr);
        }
    }

    return { categoryToIds, tokenToIds };
}

/* --- RELEVANCE SCORER --- */

/**
 * scoreFeature
 * - Heuristic scoring using title/tag/desc matches and query tokens.
 * - Lowercase comparisons assumed (we pass normalized tokens).
 *
 * Complexity:
 * - Time: O(m) where m = number of query tokens (assuming constant-time string includes checks)
 * - Space: O(1)
 */
function scoreFeature(feature: IFeature, queryTokens: string[], rawQuery: string) :number {
    let score = 0;
    const title = feature.title.toLowerCase();
    const desc = feature.desc.toLowerCase();
    const tagString = feature.tags.join(" ").toLowerCase();

    // exact phrase (raw query) strong boost
    if (rawQuery.length > 1 && (title.includes(rawQuery) || desc.includes(rawQuery) || tagString.includes(rawQuery))) {
        score += 100;
    }

    for (const token of queryTokens) {
        if (title.includes(token)) score += 20; // title higher weight
        if (tagString.includes(token)) score += 8; // tags medium
        if (desc.includes(token)) score += 3; // description lower
    }

    return score;
}






/* --- Hook: useExploreLogic --- */

export function useExploreLogic() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Immediate UI value (visible in input)
    const [searchQueryInput, setSearchQueryInput] = useState<string>(searchParams.get("q") || "");

    // Debounced value used for heavy work (filtering/search)
    const [debouncedQuery, setDebouncedQuery] = useState<string>(searchQueryInput);

    // Category state
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        (searchParams.get("cat") as string) || null
    );

    // debounce timer ref
    const debounceRef = useRef<number | null>(null);

    // Build indexes once (you already have this function)
    const { categoryToIds, tokenToIds } = useMemo(() => buildIndexes(FEATURES), []);

    // ---- FIXED setSearchQuery: update immediate state AND debounce the heavy update ----
    const setSearchQuery = useCallback((value: string) => {
        // 1) update immediate UI state so input shows typed text
        setSearchQueryInput(value);

        // 2) debounce the value used for actual searching
        if (debounceRef.current) window.clearTimeout(debounceRef.current);
        debounceRef.current = window.setTimeout(() => {
            setDebouncedQuery(value.trim());
        }, 1);
    }, []);

    // cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (debounceRef.current) window.clearTimeout(debounceRef.current);
        };
    }, []);

    // Sync URL with immediate input and category (replace to avoid history spam)
    useEffect(() => {
        const params = new URLSearchParams();
        if (searchQueryInput) params.set("q", searchQueryInput);
        if (selectedCategory && selectedCategory !== "all") params.set("cat", selectedCategory);
        const qs = params.toString();
        router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
    }, [searchQueryInput, selectedCategory, pathname, router]);


    /* --- Compute results (simple & fast) debouncedQuery + selectedCategory --- */

    /**
     * computeResults
     * - 1) get candidates via invertedIndex (or all keys if empty query)
     * - 2) if category filter active, filter candidates by categoryMap (intersection)
     * - 3) score candidates and sort descending
     *
     * Complexity:
     *  - Time: O(m + k + k * m + k log k) -> dominated by O(k log k) for sorting and O(k * m) for scoring
     *  - Space: O(k) for candidate arrays
     */
    const results = useMemo(() => {
        const rawQuery = (debouncedQuery || "").toLowerCase();
        const tokens = rawQuery ? tokenize(rawQuery) : [];

        // 1) start with all features
        let candidates = new Set(FEATURES.map((f) => f.id));

        // 2) category filter (intersection)
        if (selectedCategory && selectedCategory !== "all") {
            const ids = new Set(categoryToIds.get(selectedCategory) ?? []);
            candidates = new Set([...candidates].filter((id) => ids.has(id)));
        }

        // 3) search filter (OR semantics across tokens)
        if (tokens.length > 0) {
            const matched = new Set<string>();
            for (const tok of tokens) {
                const list = tokenToIds.get(tok);
                if (list) list.forEach((id) => matched.add(id));
            }
            candidates = new Set([...candidates].filter((id) => matched.has(id)));
        }

        // 4) score candidates
        const scored = [...candidates].map((id) => {
            const feature = FEATURES.find((x) => x.id === id)!;
            return { feature, score: scoreFeature(feature, tokens, rawQuery) };
        });

        // 5) sort by score desc, then title
        // scored.sort((a, b) => b.score - a.score || a.feature.title.localeCompare(b.feature.title));
        // scored.sort((a, b) => b.score - a.score);


        return scored.map((s) => s.feature);
    }, [debouncedQuery, selectedCategory, categoryToIds, tokenToIds]);

    const isFiltering = Boolean((debouncedQuery && debouncedQuery.length > 0) || (selectedCategory && selectedCategory !== "all"));

    // toggle category helper (click same -> clear)
    const handleCategoryChange = useCallback((cat: string | null) => {
        setSelectedCategory((prev) => (prev === cat ? null : cat));
    }, []);

    return {
        filteredFeatures: results,
        searchQuery: searchQueryInput,      // immediate value shown in input
        selectedCategory,
        setSearchQuery,                     // function bound to input onChange
        setSelectedCategory: handleCategoryChange,
        isFiltering,
    } as const;
}

