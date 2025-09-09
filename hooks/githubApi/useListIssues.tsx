import fetchGitHub from "@/lib/fetchGitHub";
import { GitHubIssue, GitHubRepo } from "@/types/github";
import { useQuery } from "@tanstack/react-query";

const useListIssues = (repoName: GitHubRepo["name"]) => {
  return useQuery<GitHubIssue[], Error>({
    queryKey: ["listIssue", repoName],
    queryFn: () =>
      fetchGitHub(
        `repos/${process.env.NEXT_PUBLIC_GITHUB_USER}/${repoName}/issues`,
      ),
  });
};

export default useListIssues;
