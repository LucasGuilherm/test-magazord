import fetchGitHub from "@/lib/fetchGitHub";
import useRepoCountStore from "@/store/repoCountStore";
import { GitHubRepo } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

const useListRepo = () => {
  const setCount = useRepoCountStore((state) => state.setCount);

  return useQuery<GitHubRepo[], Error>({
    queryKey: ["repositorios"],
    queryFn: async () => {
      const res: GitHubRepo[] = await fetchGitHub(
        `users/${process.env.NEXT_PUBLIC_GITHUB_USER}/repos`,
      );

      const starredCount = res.reduce((acc, item) => {
        return item.stargazers_count ? acc + 1 : acc;
      }, 0);

      setCount({ tipo: "starred", count: starredCount });
      setCount({ tipo: "repo", count: res.length - starredCount });

      return res;
    },
  });
};

export default useListRepo;
