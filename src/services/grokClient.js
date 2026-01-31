import { appConfig } from "../config/appConfig.js";

export function createGrokClient({ apiKey, baseUrl = appConfig.grokBaseUrl } = {}) {
  async function request(path, options = {}) {
    if (!apiKey) {
      throw new Error("Informe a API key do Grok para continuar.");
    }

    const response = await fetch(`${baseUrl}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Erro na API Grok: ${message}`);
    }

    return response.json();
  }

  async function generateLesson({ prompt, level = "A1" }) {
    return request("/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        model: "grok-beta",
        messages: [
          { role: "system", content: "Você é um tutor de alemão." },
          { role: "user", content: `Nível ${level}: ${prompt}` },
        ],
      }),
    });
  }

  return { generateLesson };
}
