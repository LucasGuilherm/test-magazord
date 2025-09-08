"use client";

import FilterBar from "@/components/FilterBar";
import RepoItem from "@/components/RepoItem";
import TabNavigation from "@/components/TabNavigation";
import UserProfile from "@/components/UserProfile";
import useListRepo from "@/hooks/githubApi/useListRepo";
import useFilterStore from "@/store/filterStore";
import { useNavigationStore } from "@/store/navigationTabStore";
import { GitHubRepo } from "@/types/github";
import { useMemo } from "react";

export default function Home() {
  const typesStore = useFilterStore((state) => state.type);
  const languagesStore = useFilterStore((state) => state.language);
  const searchStore = useFilterStore((state) => state.search);
  const tabSelected = useNavigationStore((state) => state.tabSelected);

  const { data, isPending, isError, error } = useListRepo();

  const listaFiltrada = useMemo(() => {
    if (data) {
      return filter({
        lista: data,
        types: typesStore,
        languages: languagesStore,
        starred: tabSelected === 1,
        search: searchStore,
      });
    }
  }, [tabSelected, languagesStore, typesStore, searchStore, data]);

  if (isPending) return <div>Carregando...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className="flex max-w-5xl flex-1 flex-col items-center gap-16 md:flex-row md:items-start">
      <UserProfile />

      <div className="flex w-full flex-1 flex-col gap-12">
        <TabNavigation />

        <FilterBar />

        <div className="flex flex-col gap-4">
          {listaFiltrada?.map((repo) => {
            return <RepoItem repoData={repo} key={repo.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

type filterOptions = {
  lista: GitHubRepo[];
  types?: string[];
  languages?: string[];
  starred: boolean;
  search?: string;
};
const filter = ({
  lista,
  languages,
  types,
  starred,
  search,
}: filterOptions) => {
  let listaFiltrada = lista;

  if (search) {
    listaFiltrada = listaFiltrada.filter(
      (item) =>
        item.full_name.toUpperCase().includes(search.toUpperCase()) ||
        item.description?.toUpperCase().includes(search.toUpperCase()),
    );
  }

  if (types?.includes("archived")) {
    listaFiltrada = listaFiltrada.filter((item) => item.archived);
  }

  if (types?.includes("fork")) {
    listaFiltrada = listaFiltrada.filter((item) => item.fork);
  }

  if (languages?.length && !languages.includes("All")) {
    listaFiltrada = listaFiltrada.filter((item) =>
      languages.includes(item.language),
    );
  }

  listaFiltrada = listaFiltrada.filter((item) => {
    if (starred && item.stargazers_count) return item;
    if (!starred && !item.stargazers_count) return item;
  });

  return listaFiltrada;
};
