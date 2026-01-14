//här ligger frågorna och svaren

import type { Question } from "../types/quiz";

export type QuizCategory = {
  id: string;
  title: string;
  questions: Question[];
};

export const quizes: QuizCategory[] = [
  {
    id: "Matte",
    title: "Mattematik",
    questions: [
      {
        id: "q1",
        question: "Vad är 2+2?",
        options: [
          { id: "a", text: "sovit hela tiden" },
          { id: "b", text: "pluggat" },
          { id: "c", text: "chillat" },
        ],
        correctOptionId: "a",
      },
    ],
  },
];
