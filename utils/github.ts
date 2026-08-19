import type { GithubRepo } from "@/types";

const GITHUB_API = "https://api.github.com";

export async function fetchGithubRepos(
  username: string,
  limit = 6
): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const repos: GithubRepo[] = await res.json();

    return repos
      .filter((repo) => !repo.name.includes(".github.io"))
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit);
  } catch {
    return [];
  }
}
