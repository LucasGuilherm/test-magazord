# Projeto Avaliação Magazord

Esse é um projeto para o teste Magazord

## Link Demonstração

[test-magazord-beta.vercel.app](https://test-magazord-beta.vercel.app)

## Instalação

Etapas para instalação do projeto

```bash
# Clonar projeto
git clone https://github.com/LucasGuilherm/test-magazord.git

cd test-magazord

# Instalar dependencias
npm install
```

## Variáveis de ambiente

Criar um arquivo **.env** com as seguintes variáveis:

```env
NEXT_PUBLIC_GITHUB_API=https://api.github.com/
NEXT_PUBLIC_GITHUB_USER=facebook
```

⚠️ Substitua **NEXT_PUBLIC_GITHUB_USER** pelo nome/slug do usuário do GitHub que deseja consultar.

## Iniciando projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## Tecnologias usadas

Lista de pricipais tecnologias usadas no projeto:

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [TanStack Query](https://tanstack.com/query/latest)
- [Typescript](https://www.typescriptlang.org/)

## Estrutura de pastas

```
test-magazord
├── node_modules/               # Dependências do projeto
├── public/                     # Arquivos estáticos (imagens, ícones, fontes)
│   └── LogoGitHub.svg
├── app/                        # Rotas Next
│   ├── layout.tsx              # Layout raiz
│   ├── page.tsx                # Página inicial (repositórios)
│   └── [repoId]/               # Rota de detalhe do repositório
│       └── page.tsx
├── components/                 # Componentes globais
│   └── ButtonSelect.tsx
├── hooks/                      # Hooks customizados (api github com useQuery)
│   └── useIsMobile.ts
├── lib/                        # Funções utilitárias
│   └── fetchGitHub.ts
├── providers/                  # Providers globais
│   └── QueryClientProvider.tsx
├── stores/                     # Zustand
│   └── filterStore.ts
├── types/                      # Definições TypeScript
│   └── github.d.ts
├── .env                        # Variáveis de ambiente
├── .gitignore
├── next.config.js              # Configuração do Next.js
├── package.json
├── tsconfig.json               # Configuração do TypeScript
└── README.md
```

## API GitHub / QueryClient

Para organizar as requisições à API do GitHub, foi criado o fetcher `fetchGitHub.ts`.
Esse fetcher é utilizado dentro de hooks customizados (`hooks/githubApi/\*`) e funciona em conjunto com **TanStack Query** para controlar requisições assíncronas.

Exemplo de hook:

```typescript
const useGetRepo = (repoName: GitHubRepo["name"]) => {
  return useQuery<GitHubRepo, Error>({
    queryKey: ["repo", repoName],
    queryFn: () =>
      fetchGitHub(`repos/${process.env.NEXT_PUBLIC_GITHUB_USER}/${repoName}`),
  });
};
```

## Desafios

- Um dos principais desafios que tive no início foi definir como implementar a responsividade da página. Após implementar o sistema de breakpoints do Tailwind, esse processo ficou mais fácil.

- Outro desafio que tive foi entender o que exatamente precisava ser buscado da API do GitHub; apenas olhando o projeto no Figma, isso não fica muito claro. Acredito que uma tarefa explicando com mais detalhes os requisitos do projeto tornaria o processo mais fácil.

## Melhorias / Alterações

- Uma das melhorias a serem feitas para aumentar a usabilidade da página é sincronizar os filtros do projeto nos queryParams da URL. Isso permite salvar o estado da página mesmo depois de atualizar a tela e também possibilita compartilhar links já com os filtros aplicados. Isso é extremamente útil, principalmente se a quantidade de opções de filtros aumentar no futuro.

- Se o SEO for uma preocupação para esse projeto seria interessante restruturar os compoentes e paginas para serem Server Componentes do Nextjs.
