import { useState } from "react";
import type { Question } from "../types/quiz";
import type { QuizCategory } from "../data/questions";
import { getHighscore, setHighscore } from "../data/storage";
import { useParams, useNavigate } from "react-router-dom";
import { questions as allQuizzes } from "../data/questions";

type Props = {
 // questions: Question[];
  onFinish: (score: number) => void;
};

export function QuizPage({ onFinish }: Props) {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const quiz: QuizCategory | undefined = allQuizzes.find((q) => q.id === quizId);
  if (!quiz) return <p>Quizet kunde inte hittas</p>;

  const questions: Question[] = quiz.questions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  
  function lockAnswer() {
    if (!selectedOptionId || isLocked) return;

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    if (isCorrect) setScore((s) => s + 1);

    setIsLocked(true);
  }

  function nextQuestion() {
    if (!isLocked) return;

    const nextIndex = currentIndex + 1;
    setSelectedOptionId(null);
    setIsLocked(false);

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      const prevHighscore = getHighscore();
      if (score > prevHighscore) 
        setHighscore(score);
      onFinish(score);
      navigate("/result");
    }
  }

  return (
    <main style={{ padding: 16, maxWidth: 520, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <span style={{ opacity: 0.8 }}>
          Fråga {currentIndex + 1} av {questions.length}
        </span>
        <span style={{ opacity: 0.8 }}>Poäng: {score}</span>
 
      </div>

      <h2 style={{ marginTop: 0 }}>{currentQuestion.question}</h2>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 10 }}>
        {currentQuestion.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrectOption = option.id === currentQuestion.correctOptionId;

          let border = "1px solid #555";
          if (isSelected) border = "2px solid white";
          if (isLocked && isCorrectOption) border = "2px solid lime";
          if (isLocked && isSelected && !isCorrectOption)
            border = "2px solid red";

          return (
            <li key={option.id}>
              <button
                onClick={() => {
                  if (!isLocked) setSelectedOptionId(option.id);
                }}
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 12,
                  border,
                  textAlign: "left",
                  opacity:
                    isLocked && !isSelected && !isCorrectOption ? 0.85 : 1,
                }}
              >
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>

      <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
        <button
          onClick={lockAnswer}
          disabled={!selectedOptionId || isLocked}
          style={{ width: "100%", padding: 14, borderRadius: 12 }}
        >
          Lås svar
        </button>

        <button
          onClick={nextQuestion}
          disabled={!isLocked}
          style={{ width: "100%", padding: 14, borderRadius: 12 }}
        >
          Nästa fråga
        </button>
      </div>
    </main>
  );
}
