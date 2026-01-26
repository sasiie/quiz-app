import { useNavigate } from "react-router-dom";
import type { QuizCategory } from "../data/questions";
import "../App.css";

type Props = {
  quizes: QuizCategory[];
};

export function StartPage({ quizes }: Props) {
  const navigate = useNavigate();
  //  useEffect ska ligga INUTI funktionen

  // return kommer efter useEffect
  return (
    <div className="screen">
      <div className="phone">
        <h1 className="title">Quiz App</h1>
        {quizes?.map((quiz) => (
          <button
            key={quiz.id}
            className="primary-button"
            onClick={() => navigate(`/quiz/${quiz.id}`)}
          >
            Starta Quiz {quiz.title}
          </button>
        ))}
      </div>
    </div>
  );
}
