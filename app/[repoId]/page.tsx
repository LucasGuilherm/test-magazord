"use client";

import { Skeleton } from "@/components/ui/skeleton";
import useGetRepo from "@/hooks/githubApi/useGetRepo";
import useListIssues from "@/hooks/githubApi/useListIssues";
import { ChevronLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const Repositorio = () => {
  const { repoId } = useParams<{ repoId: string }>();
  const { data, isPending, isError, error } = useGetRepo(repoId);
  const router = useRouter();

  // TODO: Melhorar indicação de carregamento e erro
  if (isPending) return <div>Carregando...</div>;
  if (isError) return <div>{error.message}</div>;

  const [mainNome, nomeProjeto] = data.full_name.split("/");

  return (
    <>
      <button onClick={() => router.back()} className="flex cursor-pointer">
        <ChevronLeft className="mr-2" />
        Voltar
      </button>

      <h1 className="text-4xl font-light">
        <span className="text-2xl">{mainNome} / </span>
        <span className="text-link font-medium">{nomeProjeto}</span>
      </h1>

      <p className={data.description ? "text-gray-600" : "text-gray-400"}>
        {data.description || "Nenhuma descrição"}
      </p>

      {/* Contadores (Forks, Stars, Issues) */}
      <div className="flex flex-wrap justify-between md:justify-start md:gap-12">
        <CounterDetail label="Forks" value={data.forks} />

        <CounterDetail label="Stars" value={data.stargazers_count} />

        <CounterDetail label="Issues abertas" value={data.open_issues} />
      </div>

      <IssuesList repoName={repoId} />
    </>
  );
};

const CounterDetail = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="p-4 md:p-0">
      <span className="text-4xl font-medium">{value}</span>

      <h2 className="text-sm text-zinc-700">{label}</h2>
    </div>
  );
};

const IssuesList = ({ repoName }: { repoName: string }) => {
  const { data, isPending, isError, error } = useListIssues(repoName);

  if (isPending) {
    return (
      <div className="flex flex-col gap-6">
        <Skeleton className="h-24 shadow" />
        <Skeleton className="h-24 shadow" />
      </div>
    );
  }

  if (isError) {
    return <span className="text-red-500">{error.message}</span>;
  }

  return (
    <div>
      <h2 className="mb-1 text-lg">Issues abertas</h2>

      {!data?.length && (
        <span className="text-zinc-400">Nenhuma issue aberta</span>
      )}

      <div className="flex flex-col gap-6">
        {data?.map((issue) => {
          return (
            <div
              key={issue.id}
              className="flex flex-col gap-1 rounded-2xl p-6 shadow-lg"
            >
              <h1 className="text-lg">{issue.title}</h1>
              <p className="text-zinc-600">{issue.user.login}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repositorio;
