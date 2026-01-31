export function lessonCard({ title, summary }) {
  const container = document.createElement("div");
  container.className = "lesson-item";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const description = document.createElement("p");
  description.textContent = summary;

  container.appendChild(heading);
  container.appendChild(description);

  return container;
}
