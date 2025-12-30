
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askTutor(question: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é um tutor da plataforma VSA Aulas. O aluno está assistindo à aula: "${context}". Responda à pergunta do aluno de forma clara, motivadora e técnica. Pergunta: ${question}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, estou com dificuldades para me conectar agora. Tente novamente em instantes.";
  }
}
