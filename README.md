# Aprendizado Alemão

Base inicial para uma aplicação web educacional que consome a API do Grok para gerar aulinhas de alemão.

## Objetivo

- Manter o código-fonte leve e versionado localmente.
- Executar o **build apenas em ambiente remoto** (CI/CD ou EC2).
- Publicar um **output estático** compatível com GitHub Pages ou Cloudflare Pages.

## Estrutura de pastas

```
public/
  # assets estáticos (imagens, ícones, fontes)
src/
  assets/             # imagens, ícones, fontes
  components/         # componentes reutilizáveis de UI
  config/             # configurações do app
  features/
    lessons/          # domínio de aulinhas (prompts, parsing, fluxo)
  pages/              # páginas/rotas
  services/           # integração com APIs (ex.: cliente Grok)
  styles/             # estilos globais e temas
  utils/              # helpers e utilidades

docs/
  architecture.md     # decisões e visão geral
  build.md            # pipeline de build remoto

index.html            # ponto de entrada HTML
```

## Arquivos base criados

- `index.html`: HTML raiz da aplicação.
- `src/main.js`: bootstrap da UI.
- `src/pages/homePage.js`: layout inicial e exemplos de aulinhas.
- `src/components/lessonCard.js`: card simples para exibir aula.
- `src/services/grokClient.js`: cliente base da API.
- `src/features/lessons/lessonService.js`: serviço de domínio para gerar aulas.
- `src/styles/global.css`: estilos globais.
- `scripts/build.js`: build estático para CI.

## Build remoto

- Build reprodutível via `npm ci` + `npm run build`.
- O artefato final é `dist/`.
- Consulte `docs/build.md` para detalhes do pipeline.
