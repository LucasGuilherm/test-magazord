const githubApiURL = process.env.NEXT_PUBLIC_GITHUB_API;

const fetchGitHub = async (endpoint: string) => {
  const response = await fetch(`${githubApiURL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Falha ao realizar requisição para o GitHub");
  }

  return response.json();
};

export default fetchGitHub;
