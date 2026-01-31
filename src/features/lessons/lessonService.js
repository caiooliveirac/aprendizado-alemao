import { createGrokClient } from "../../services/grokClient.js";

export function buildLessonService({ apiKey }) {
  const client = createGrokClient({ apiKey });

  async function getLesson({ topic, level }) {
    const response = await client.generateLesson({
      prompt: `Crie uma aula rápida sobre ${topic}. Inclua vocabulário e um mini exercício.`,
      level,
    });

    return response;
  }

  return { getLesson };
}
