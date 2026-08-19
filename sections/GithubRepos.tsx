import { Star, GitFork, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { fetchGithubRepos } from "@/utils/github";
import { Container } from "@/components/ui/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export async function GithubRepos() {
  const repos = await fetchGithubRepos(profile.githubUsername, 6);

  if (repos.length === 0) return null;

  return (
    <section id="github" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Open Source"
          title="Latest on GitHub"
          description={`Live repositories pulled from github.com/${profile.githubUsername}.`}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <SpotlightCard key={repo.id} className="h-full p-6">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{repo.name}</h3>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${repo.name} on GitHub`}
                  className="text-neutral-400 hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-2 min-h-10 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {repo.description ?? "No description provided."}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
