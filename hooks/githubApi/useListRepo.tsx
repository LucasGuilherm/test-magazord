import fetchGitHub from "@/lib/fetchGitHub";
import { useNavigationStore } from "@/store/navigationTabStore";
import useRepoCountStore from "@/store/repoCountStore";
import { GitHubRepo } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

const useListRepo = () => {
  const setCount = useRepoCountStore((state) => state.setCount);
  const tabSelected = useNavigationStore((state) => state.tabSelected);

  return useQuery<GitHubRepo[], Error>({
    queryKey: ["repositorios", tabSelected],
    queryFn: async () => {
      const res: GitHubRepo[] = await fetchGitHub(
        `users/${process.env.NEXT_PUBLIC_GITHUB_USER}/${tabSelected ? "starred" : "repos"}`,
      );

      setCount({ tipo: tabSelected ? "starred" : "repo", count: res.length });

      return res;
    },
  });
};

export default useListRepo;
