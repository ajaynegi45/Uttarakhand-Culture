import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Binoculars, History, Landmark, Languages, Mountain, PartyPopper, Utensils} from "lucide-react";
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
    {id: "all", name: "All", icon: Mountain, colorCss: "bg-muted/20 text-muted-foreground"},
    {id: "festival", name: "Festival", icon: PartyPopper, colorCss: "bg-orange-100 text-orange-700"},
    {id: "food", name: "Cuisine", icon: Utensils, colorCss: "bg-green-100 text-green-700"},
    {id: "tourist", name: "Tourist", icon: Binoculars, colorCss: "bg-blue-100 text-blue-700"},
    {id: "history", name: "History", icon: History, colorCss: "bg-amber-100 text-amber-700"},
    {id: "temples", name: "Temples", icon: Landmark, colorCss: "bg-amber-100 text-amber-700"},
    {id: "language", name: "Language", icon: Languages, colorCss: "bg-[#EFE6DC] text-[#5A3E2B]"},
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


/* =====================
   Helpers
   ===================== */

/**
 * tokenize(text)
 * - Lowercases, removes punctuation, splits on whitespace.
 * - Time: O(len(text)), Space: O(#tokens)
 */
function tokenize(text: string): string[] {
    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]+/gu, " ")
        .split(/\s+/)
        .filter(Boolean);
}

/* =====================
   Index builder (simple maps)
   - Good for 50-100 items: readable & efficient enough
   ===================== */

/**
 * buildIndexes(features)
 * - Builds:
 *   - categoryToIds: Map<CategoryId, string[]>
 *   - tokenToIds: Map<string, string[]>
 * - Time: O(N * L) where N = #features, L = avg tokens per feature
 * - Space: O(V + N) where V = #unique tokens (small here)
 */
function buildIndexes(features: IFeature[]) {
    const categoryToIds = new Map<CategoryId, string[]>();
    const tokenToIds = new Map<string, string[]>();

    for (const f of features) {
        // categories
        for (const c of f.categories) {
            const arr = categoryToIds.get(c) ?? [];
            arr.push(f.id);
            categoryToIds.set(c, arr);
        }

        // tokens from title, tags, desc
        const tokens = [
            ...tokenize(f.title),
            ...f.tags.flatMap((t) => tokenize(t)),
            ...tokenize(f.desc),
            f.id.toLowerCase(), // include id as searchable token
            ...f.categories.map((c) => c.toString().toLowerCase()), // include category names as searchable tokens
        ];

        const seen = new Set<string>();
        for (const t of tokens) {
            if (seen.has(t)) continue;
            seen.add(t);
            const arr = tokenToIds.get(t) ?? [];
            arr.push(f.id);
            tokenToIds.set(t, arr);
        }
    }

    return {categoryToIds, tokenToIds};
}

/* =====================
   Scoring logic
   - Matches in this priority order:
     1) Title (highest weight)
     2) id / category exact or substring
     3) Tags
     4) Description (lowest weight)
   - Substring-based and token-based scoring so partial typing works
   - Time: O(m) per feature where m = #query tokens (small)
   ===================== */

/**
 * computeScore(feature, rawQuery, tokens)
 * - rawQuery: entire lowercased query string (e.g. "temple")
 * - tokens: array of token strings from query (["temp", "le"])
 * Returns numeric score (higher = better)
 */
function computeScore(feature: IFeature, rawQuery: string, tokens: string[]) {
    let score = 0;
    const title = feature.title.toLowerCase();
    const desc = feature.desc.toLowerCase();
    const tagsCombined = feature.tags.join(" ").toLowerCase();
    const id = feature.id.toLowerCase();
    const categoriesCombined = feature.categories.join(" ").toLowerCase();

    // 1) Title phrase / substring checks (strongest)
    if (rawQuery.length > 1 && title.includes(rawQuery)) {
        score += 200; // exact substring of title
    } else {
        // token-level title matches
        for (const t of tokens) {
            if (title.includes(t)) score += 40;
        }
    }

    // 2) id and category matches (next strongest)
    // exact or substring in id or categories
    if (id.includes(rawQuery) || categoriesCombined.includes(rawQuery)) {
        score += 100;
    } else {
        for (const t of tokens) {
            if (id.includes(t)) score += 30;
            if (categoriesCombined.includes(t)) score += 25;
        }
    }

    // 3) tags
    if (tagsCombined.includes(rawQuery)) score += 60;
    else {
        for (const t of tokens) {
            if (tagsCombined.includes(t)) score += 15;
        }
    }

    // 4) description (lowest)
    if (desc.includes(rawQuery)) score += 10;
    else {
        for (const t of tokens) {
            if (desc.includes(t)) score += 2;
        }
    }

    return score;
}

/* =====================
   Hook: useExploreLogic (final)
   - API preserved:
     filteredFeatures, searchQuery, selectedCategory, setSearchQuery, setSelectedCategory, isFiltering
   - Behavior:
     • When user types (searchQuery non-empty) search across ALL categories
     • When searchQuery is empty and selectedCategory set, filter by that category
   ===================== */

export function useExploreLogic() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Visible input value (immediate)
    const [searchQueryInput, setSearchQueryInput] = useState<string>(
        (searchParams.get("q") as string) ?? ""
    );

    // Debounced value used for filtering (avoids recalculating on every keystroke)
    const [debouncedQuery, setDebouncedQuery] = useState<string>(searchQueryInput);

    // Category state (typed as CategoryId | null) — fixes TS2345
    const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(
        (searchParams.get("cat") as CategoryId) ?? null
    );

    const debounceRef = useRef<number | null>(null);

    // Build indexes once (easy and fast for 50-100 items)
    const {categoryToIds, tokenToIds} = useMemo(() => buildIndexes(FEATURES), []);

    // setSearchQuery: update immediate input AND debounce the heavy update
    const setSearchQuery = useCallback((value: string) => {
        setSearchQueryInput(value);

        if (debounceRef.current) window.clearTimeout(debounceRef.current);
        debounceRef.current = window.setTimeout(() => {
            setDebouncedQuery(value.trim().toLowerCase());
        }, 150);
    }, []);

    // cleanup debounce on unmount
    useEffect(() => {
        return () => {
            if (debounceRef.current) window.clearTimeout(debounceRef.current);
        };
    }, []);

    // Sync visible input + category to URL without creating history entries
    useEffect(() => {
        const params = new URLSearchParams();
        if (searchQueryInput) params.set("q", searchQueryInput);
        if (selectedCategory && selectedCategory !== "all") params.set("cat", selectedCategory);
        const qs = params.toString();
        router.replace(`${pathname}${qs ? `?${qs}` : ""}`, {scroll: false});
    }, [searchQueryInput, selectedCategory, pathname, router]);

    /**
     * Filtering logic:
     * - If there is an active search (debouncedQuery non-empty): search across ALL features ignoring selectedCategory.
     * - If there is NO search and selectedCategory is set: show features in that category only.
     *
     * Complexity:
     * - For each search: we iterate over up to N features and compute score → O(N * m)
     *   where m = #query tokens (very small).
     * - N = 50..100 in your case — trivial.
     */
    const results = useMemo(() => {
        const raw = debouncedQuery || "";
        const tokens = raw ? raw.split(/\s+/).filter(Boolean) : [];

        // Candidate set:
        // - If searching (raw non-empty): all features
        // - Else if category selected: only features in that category
        // - Else: all features
        let candidateIds: string[];
        if (!raw && selectedCategory && selectedCategory !== "all") {
            candidateIds = categoryToIds.get(selectedCategory) ?? [];
        } else {
            candidateIds = FEATURES.map((f) => f.id);
        }

        // Score each candidate (Title > id/category > tags > desc)
        const scored: { feature: IFeature; score: number }[] = [];
        for (const id of candidateIds) {
            // quick find feature (N small — O(N) find is fine). If you prefer, build featureMap for O(1).
            const feat = FEATURES.find((f) => f.id === id);
            if (!feat) continue;

            // If there's a search term, compute score; if no search term and category filter active, keep (score 0)
            let score = 0;
            if (raw) {
                score = computeScore(feat, raw, tokens);
            } else {
                // when no search term, we still want to show all category items — score 0
                score = 0;
            }

            // If raw exists and score is 0, skip non-matching items to avoid clutter (OR semantics)
            if (raw && score === 0) continue;

            scored.push({feature: feat, score});
        }

        // Sort by score DESC. If tie, sort by title ASC as tiebreaker
        scored.sort((a, b) => b.score - a.score);

        // Return features only
        return scored.map((s) => s.feature);
    }, [debouncedQuery, selectedCategory, categoryToIds]);

    const isFiltering = Boolean((debouncedQuery && debouncedQuery.length > 0) || (selectedCategory && selectedCategory !== "all"));

    // handleCategoryChange: toggle if same clicked, else set.
    const handleCategoryChange = useCallback((cat: CategoryId | null) => {
        setSelectedCategory((prev) => (prev === cat ? null : cat));
    }, []);

    return {
        filteredFeatures: results,
        searchQuery: searchQueryInput,
        selectedCategory,
        setSearchQuery,
        setSelectedCategory: handleCategoryChange,
        isFiltering,
    } as const;
}