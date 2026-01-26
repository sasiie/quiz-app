import type { QuizCategory } from "./questions";
import url from "../../public/questions.json";

interface QuizResponse {
  categories: QuizCategory[];
}

// Hämtar frågor från public/questions.json
export async function fetchQuestions(): Promise<QuizResponse> {
  const res = await fetch("/questions.json");

  if (!res.ok) throw new Error("Kunde inte läsa quiz");
  const data = await res.json();
  if (!Array.isArray(data?.categories)) {
    throw new Error("blabla");
  }
  return data;
}
