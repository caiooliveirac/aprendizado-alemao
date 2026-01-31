import { lessonCard } from "../components/lessonCard.js";

export function renderHome() {
  const main = document.createElement("main");

  const card = document.createElement("section");
  card.className = "card";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = "Protótipo";

  const title = document.createElement("h1");
  title.textContent = "Aulinhas de Alemão via Grok";

  const description = document.createElement("p");
  description.textContent =
    "Estrutura inicial para integrar prompts e respostas do Grok em aulinhas curtas.";

  const listTitle = document.createElement("h2");
  listTitle.textContent = "Próximas aulinhas";

  const list = document.createElement("div");
  list.className = "lesson-list";
  list.appendChild(
    lessonCard({
      title: "Saudações básicas",
      summary: "Aprenda cumprimentos essenciais e pratique com um exercício rápido.",
    })
  );
  list.appendChild(
    lessonCard({
      title: "Compras no mercado",
      summary: "Vocabulário para alimentos e um mini diálogo guiado.",
    })
  );

  card.appendChild(badge);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(listTitle);
  card.appendChild(list);
  main.appendChild(card);

  return main;
}
