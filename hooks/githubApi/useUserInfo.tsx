import fetchGitHub from "@/lib/fetchGitHub";
import { GitHubUser } from "@/types/github";
import { useQueries } from "@tanstack/react-query";

export const useUserInfo = () => {
  return useQueries({
    queries: [
      {
        queryFn: () => fetchGitHub(`users/${process.env.NEXT_PUBLIC_GITHUB_USER}`),
        queryKey: ["userInfo"],
      },
      {
        queryFn: () => fetchGitHub(`users/${process.env.NEXT_PUBLIC_GITHUB_USER}/social_accounts`),
        queryKey: ["userInfo", "socialLinks"],
      },
    ],
    combine: (res) => {
      return {
        userInfo: { ...res[0].data, social_accounts: res[1]?.data } as GitHubUser,
        isPending: res.some((r) => r.isPending),
        isError: res.some((r) => r.isError),
        error: res.find((r) => r.isError)?.error,
      };
    },
  });
};

export default useUserInfo;
