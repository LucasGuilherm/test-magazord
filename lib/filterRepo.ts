import { GitHubRepo } from "@/types/github";

type filterOptions = {
  lista: GitHubRepo[];
  types?: string[];
  languages?: string[];
  search?: string;
};

/**
 * Filtra lista de repositórios do GitHub com base em tipos, linguagem e busca.
 */
const filterRepo = ({ lista, languages, types, search }: filterOptions) => {
  const textoBusca = search?.toUpperCase();

  const filtrarArchived = types?.includes("Archived");
  const filtrarSources = types?.includes("Sources");
  const filtrarMirrors = types?.includes("Mirrors");
  const filtrarForks = types?.includes("Forks");

  const filtrarLanguages = languages?.length && !languages.includes("All");

  const listaFiltrada = lista.filter((repo) => {
    // Busca no nome e descrição se tem texto de busca
    if (textoBusca) {
      const nomeEncontrado = repo.full_name.toUpperCase().includes(textoBusca);
      const descricaoEncontrado = repo.description
        ?.toUpperCase()
        .includes(textoBusca);

      if (!nomeEncontrado && !descricaoEncontrado) {
        return false;
      }
    }

    // Busca por tipo caso informado
    if (types?.length) {
      if (filtrarArchived && !repo.archived) {
        return false;
      }

      if (filtrarForks && !repo.fork) {
        return false;
      }

      if (filtrarMirrors && !repo.mirror_url) {
        return false;
      }

      const repoSource = !repo.fork && !repo.mirror_url;
      if (filtrarSources && !repoSource) {
        return false;
      }
    }

    // Busca por linguagem caso especificado
    if (filtrarLanguages && !languages.includes(repo.language)) {
      return false;
    }

    return true;
  });

  return listaFiltrada;
};

export default filterRepo;
