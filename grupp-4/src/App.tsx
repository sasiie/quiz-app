import { StartPage } from "./pages/StartPage";
import { useState } from "react";
import { QuizPage } from "./pages/QuizPage";
import { questions } from "./data/questions";
import { ResultatPage } from "./pages/ResultatPage";
import { quizes } from "./data/questions"

type View = "start" | "quiz" | "result";

function App() {
 const [view, setView] = useState<View>("start");
 const []
 const [finalscore, setFinalscore] = useState(0);

 function startQuiz() {
  setFinalscore(0);
  setView("quiz");
 }

 function finishQuiz(score: number) {
  setFinalscore(score);
  setView("result");
 }

 function restartQuiz() {
  setView("start");
 }

  return (
    <div>
    {view === "start" && <StartPage onStart={startQuiz} />}
    {view === "quiz" && (
      <QuizPage questions={questions} onFinish={finishQuiz} />
    )}
    {view === "result" && (
      <ResultatPage
      score={finalscore}
      total={questions.length}
      onRestart={restartQuiz}
      />
    )}
    </div>
  );
}

export default App;