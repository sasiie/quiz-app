import { useEffect } from "react";
import { fetchQuestions } from "../data/fetchQuestions";

// Startsidan
type Props = {
  onStart: () => void;
};

export function StartPage({ onStart }: Props) {
  // 👇 useEffect ska ligga INUTI funktionen
  useEffect(() => {
    fetchQuestions().then((data) => {
      console.log("QUIZ DATA:", data);
    });
  }, []);

  // 👇 return kommer efter useEffect
  return (
    <div className="screen">
      <div className="phone">
        <h1 className="title">Quiz App</h1>

        <button className="primary-button" onClick={onStart}>
          Starta Quiz
        </button>
      </div>
    </div>
  );
}
