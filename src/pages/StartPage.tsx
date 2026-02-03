import { useNavigate } from "react-router-dom";
import type { QuizCategory } from "../data/questions";
import "../App.css";
import { Header } from "../Komponenter/header";

type Props = {
  quizes: QuizCategory[];
};

export function StartPage({ quizes }: Props) {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="phone">
        <Header title="Välj quiz" />
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
