import { useNavigationStore } from "@/store/navigationTabStore";
import { GitHubRepo } from "@/types/github";
import { StarIcon } from "@heroicons/react/24/solid";
import { GitFork } from "lucide-react";
import Link from "next/link";
import React from "react";

type repoItemProps = {
  repoData: GitHubRepo;
};

const RepoItem = ({ repoData }: repoItemProps) => {
  const tabSelected = useNavigationStore((state) => state.tabSelected);
  const [mainNome, nomeProjeto] = repoData.full_name.split("/");

  return (
    <Link href={`/${repoData.name}`}>
      <div className="flex cursor-pointer flex-col gap-4 py-6 transition-all hover:shadow-xl md:px-8">
        <h1 className="text-lg font-light">
          {mainNome} /{" "}
          <span className="text-link font-semibold">{nomeProjeto}</span>
        </h1>

        {repoData.description && (
          <p className="text-sm text-gray-500">{repoData.description}</p>
        )}

        <div className="flex items-center gap-11">
          {!!tabSelected && !!repoData.language ? (
            <span>{repoData.language}</span>
          ) : (
            <div className="flex gap-2">
              <StarIcon className="size-6" />
              <span>{repoData.stargazers_count}</span>
            </div>
          )}

          <div className="flex gap-2">
            <GitFork className="size-6" />
            <span>{repoData.forks}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RepoItem;
