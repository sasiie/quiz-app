import { useNavigate, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/StartPage";
import { QuizPage } from "./pages/QuizPage";
import { ResultatPage } from "./pages/ResultatPage";
import type { QuizCategory } from "./data/questions";
import { useState, useEffect } from "react";
import { fetchQuestions } from "./data/fetchQuestions";

function App() {
  const [quizes, setQuizes] = useState<QuizCategory[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions()
      .then((data) => setQuizes(data?.categories))
      .catch(() => setError("Kunde inte ladda"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Laddar..</p>;
  if (error) return <p>{error}</p>;

  const total = Array.isArray(quizes)
    ? quizes.reduce((sum, q) => sum + (q.questions?.length ?? 0), 0)
    : 0;
  return (
    <Routes>
      <Route path="/" element={<StartPage quizes={quizes} />} />

      <Route
        path="/quiz/:quizId"
        element={<QuizPage quizes={quizes} onFinish={setFinalScore} />}
      />

      <Route
        path="/result"
        element={
          <ResultatPage
            score={finalScore}
            total={total}
            onRestart={() => {
              setFinalScore(0);
              navigate("/");
            }}
          />
        }
      />
    </Routes>
  );
}

export default App;
