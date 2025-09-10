import useListRepo from "@/hooks/githubApi/useListRepo";
import useFilterStore from "@/store/filterStore";
import { useNavigationStore } from "@/store/navigationTabStore";
import React, { useMemo } from "react";
import RepoItem from "./RepoItem";
import filterRepo from "@/lib/filterRepo";

const ListaRepositorios = () => {
  const typesStore = useFilterStore((state) => state.type);
  const languagesStore = useFilterStore((state) => state.language);
  const searchStore = useFilterStore((state) => state.search);
  const tabSelected = useNavigationStore((state) => state.tabSelected);

  const { data, isPending, isError, error } = useListRepo();

  // Aplica filtro
  const listaFiltrada = useMemo(() => {
    if (data) {
      return filterRepo({
        lista: data,
        types: typesStore,
        languages: languagesStore,
        search: searchStore,
      });
    }
  }, [tabSelected, languagesStore, typesStore, searchStore, data]);

  if (isPending) return <div>Carregando...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col gap-4">
      {listaFiltrada?.map((repo) => {
        return <RepoItem repoData={repo} key={repo.id} />;
      })}
    </div>
  );
};

export default ListaRepositorios;
