# Arquitetura inicial

## Contexto

- Aplicação web educacional para aprendizado de alemão.
- O código é escrito localmente e versionado com Git.
- O build **não** acontece localmente.

## Princípios

- **Build remoto** (CI/CD ou EC2) com Node.js.
- **Artefato estático** publicado em GitHub Pages ou Cloudflare Pages.
- **Sem dependência de estado local** (reprodutível via `npm ci`).

## Camadas

- **pages/**: páginas e montagem de layout.
- **components/**: componentes de UI reutilizáveis.
- **features/lessons/**: regras da aula, prompts e parsing.
- **services/**: cliente HTTP e integração com APIs externas.
- **styles/**: estilos globais e tokens visuais.
- **config/**: configurações do app e endpoints.

## Build e deploy

- Build estático via `scripts/build.js`.
- Saída em `dist/`.
- CI recomendado em `.github/workflows/build.yml`.
