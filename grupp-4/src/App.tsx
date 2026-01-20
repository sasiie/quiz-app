import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/StartPage";
import { QuizPage } from "./pages/QuizPage";
import { ResultatPage } from "./pages/ResultatPage";
import { questions } from "./data/questions";
import { useState } from "react";

function App() {
  const [finalScore, setFinalScore] = useState(0);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<StartPage quizes={questions} />} />


        <Route
          path="/quiz/:quizId"
          element={
            <QuizPage
              onFinish={(score) => setFinalScore(score)}
            />
          }
        />


        <Route
          path="/result"
          element={
            <ResultatPage
              score={finalScore}
              total={questions.length}
              onRestart={() => {
                setFinalScore(0);
                window.location.href = "/"; //Vi bör använda const useNavigate
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
