export type GitHubUser = {
  name: string;
  avatar_url: string;
  bio?: string;
  company?: string;
  location?: string;
  blog?: string;
  social_accounts?: GitHubSocialAccount[];
};

export type GitHubSocialAccount = {
  provider: string;
  url: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks: number;
  language: string;
  fork: boolean;
  archived: boolean;
  open_issues: number;
  mirror_url: string | null;
};

export type GitHubIssue = {
  id: number;
  title: string;
  body: string;
  state: "open" | "closed";
  user: {
    login: string;
  };
};
