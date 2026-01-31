# Build remoto

Este projeto é pensado para **build remoto** (CI/CD). Não há dependências para execução local.

## Saída do build

O script `npm run build` gera um diretório `dist/` estático contendo:

- `index.html` (ponto de entrada)
- `public/` (assets estáticos)
- `src/` (módulos JS e CSS)

## Pipeline mínimo (CI)

1. Instalar dependências (reprodutível):
   ```bash
   npm ci
   ```
2. Gerar o build estático:
   ```bash
   npm run build
   ```
3. Publicar o conteúdo de `dist/` (GitHub Pages ou Cloudflare Pages).

## Observações

- Não é necessário servidor local para desenvolvimento.
- O build é reproduzível em ambiente remoto com Node.js.
