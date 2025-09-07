import { StarIcon } from "@heroicons/react/24/solid";
import { GitFork } from "lucide-react";
import React from "react";

type RepoType = {
  id: number;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks: number;
  language?: string;
};

const RepoItem = ({ ...props }: RepoType) => {
  const [mainNome, nomeProjeto] = props.full_name.split("/");

  return (
    <div className="flex cursor-pointer flex-col gap-4 px-8 py-6 transition-all hover:shadow-xl">
      <h1 className="text-lg font-light">
        {mainNome} /{" "}
        <span className="text-link font-semibold">{nomeProjeto}</span>
      </h1>

      {props.description && (
        <p className="text-sm text-gray-500">{props.description}</p>
      )}

      <div className="flex items-center gap-11">
        {!!props.language && <span>{props.language}</span>}

        {!!props.stargazers_count && (
          <div className="flex gap-2">
            <StarIcon className="size-6" />
            <span>{props.stargazers_count}</span>
          </div>
        )}

        {!!props.forks && (
          <div className="flex gap-2">
            <GitFork className="size-6" />
            <span>{props.forks}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoItem;
