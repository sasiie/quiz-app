// Här är startsidan
import { useNavigate } from "react-router-dom";
import type { QuizCategory } from "../data/questions";

type Props = {
    quizes: QuizCategory[];
};

export function StartPage({ quizes }: Props) {
    const navigate = useNavigate();
    const handleSelectQuiz = (quiz: QuizCategory) => {
        navigate(`/quiz/${quiz.id}`);
    };

    return (
        <main style={{ padding: 16, maxWidth: 520, margin: "0 auto" }}>
            <h1> Välj quiz</h1>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                {quizes.map((quiz) =>  (
                <li key={quiz.id}>
                    <button onClick={() => handleSelectQuiz(quiz)}
                    style={{
                        width: "100%",
                        padding: 16,
                        borderRadius: 12,
                        fontSize: 16,
                    }}>
                        {quiz.title}
                    </button>
                </li>
            ))}
            </ul>
           
        </main>
    );
}