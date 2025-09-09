import fetchGitHub from "@/lib/fetchGitHub";
import { GitHubRepo } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

const useGetRepo = (repoName: GitHubRepo["name"]) => {
  return useQuery<GitHubRepo, Error>({
    queryKey: ["repo", repoName],
    queryFn: () =>
      fetchGitHub(`repos/${process.env.NEXT_PUBLIC_GITHUB_USER}/${repoName}`),
  });
};

export default useGetRepo;
