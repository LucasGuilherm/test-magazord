"use client";

import FilterBar from "@/components/FilterBar";
import RepoItem from "@/components/RepoItem";
import TabNavigation from "@/components/TabNavigation";
import UserProfile from "@/components/UserProfile";

const repoList = [
  {
    id: 1,
    full_name: "LucasGuilherm/DevFlix-Alura",
    description: null,
    stargazers_count: 0,
    forks: 2,
  },
  {
    id: 2,
    full_name: "LucasGuilherm/DevFlix-Alura 2",
    description: "teste 123",
    stargazers_count: 1,
    forks: 3,
  },
  {
    id: 3,
    full_name: "LucasGuilherm/DevFlix-Alura 2",
    description: "teste 123",
    stargazers_count: 2,
    forks: 0,
    language: "Javascript",
  },
];

export default function Home() {
  return (
    <div className="flex max-w-5xl flex-1 flex-col items-center gap-16 md:flex-row md:items-start">
      <UserProfile />

      <div className="flex flex-1 flex-col gap-12">
        <TabNavigation />

        <FilterBar />

        <div className="flex flex-col gap-4">
          {repoList.map((repo) => {
            return (
              <RepoItem
                full_name={repo.full_name}
                key={repo.id}
                description={repo.description}
                id={repo.id}
                forks={repo.forks}
                stargazers_count={repo.stargazers_count}
                language={repo.language}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
