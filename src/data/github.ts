// export async function fetchGitHub(endpoint: string) {
//     const res = await fetch(`https://api.github.com${endpoint}`, {
//         // headers: {
//         //     Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         //     'X-GitHub-Api-Version': '2022-11-28',
//         // },
//         next: { revalidate: 3600 } // ISR for 1 hour
//     });
//
//     if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
//     return res.json();
// }
//
//
// export async function fetchContributors() {
//     const res = await fetch(`https://api.github.com/repos/ajaynegi45/Uttarakhand-Culture-NewUI/contributors`, {
//         next: { revalidate: 3600 } // ISR for 1 hour
//     });
//
//     if (!res.ok) throw new Error(`Failed to fetch Contributors`);
//     return res.json();
// }


// src/data/github.ts
export type Contributor = {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
};

/**
 * Generic GitHub fetch helper.
 * If you need higher rate limits, pass a token (server-side is recommended).
 */
export async function fetchGitHub<T = any>(endpoint: string): Promise<T> {
    const headers: Record<string, string> = {};

    const res = await fetch(`https://api.github.com${endpoint}`, { headers });
    if (!res.ok) {
        throw new Error(`Failed to fetch github endpoint ${endpoint}: ${res.status} ${res.statusText}`);
    }
    return await res.json() as Promise<T>;
}

/**
 * Fetch contributors for the repo.
 * token is optional and should be passed from server or NEXT_PUBLIC_GITHUB_TOKEN for client-side.
 */
export async function fetchContributors(): Promise<Contributor[]> {
    return fetchGitHub<Contributor[]>(
        "/repos/ajaynegi45/Uttarakhand-Culture-NewUI/contributors"
    );
}
