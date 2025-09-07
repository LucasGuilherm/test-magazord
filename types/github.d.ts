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
