import { GitHubRepo } from "@/types/github";

type filterOptions = {
  lista: GitHubRepo[];
  types?: string[];
  languages?: string[];
  search?: string;
};
const filterRepo = ({ lista, languages, types, search }: filterOptions) => {
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

  return listaFiltrada;
};

export default filterRepo;
