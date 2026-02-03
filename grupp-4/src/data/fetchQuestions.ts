import type { QuizCategory } from "./questions";
import type { Question } from "../types/quiz";

type JsonCategory = {
  id: string;
  title: string;
  questions: {
    id: number;
    text: string;
    answers: string[];
    correct: number;
  }[];
};

type QuizResponse = {
  categories: JsonCategory[];
};

function toQuestion(q: JsonCategory["questions"][number]): Question {
  return {
    id: String(q.id),
    question: q.text,
    options: q.answers.map((text, index) => ({
      id: String(index), 
      text,
    })),
    correctOptionId: String(q.correct),
  };
}

export async function fetchQuestions(): Promise<QuizCategory[]> {
  const res = await fetch("/questions.json");
  if (!res.ok) throw new Error("Kunde inte läsa questions.json");

  const data: QuizResponse = await res.json();

  if (!Array.isArray(data.categories)) {
    throw new Error("questions.json måste ha categories som array");
  }

  
  return data.categories.map((cat) => ({
    id: cat.id,
    title: cat.title,
    questions: cat.questions.map(toQuestion),
  }));
}
