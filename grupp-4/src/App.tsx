import { StartPage } from "./pages/StartPage";
import { useState } from "react";
import { QuizPage } from "./pages/QuizPage";
import { questions } from "./data/questions";

function App() {
 const [started, setStarted] = useState(false);

  return (
    <div>
      {!started && <StartPage onStart={() => setStarted(true)} />}
        {started && <QuizPage questions={questions} />}
    </div>
  );
}

export default App;