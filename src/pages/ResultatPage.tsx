import { getHighscore } from "../data/storage";
import { useNavigate } from "react-router-dom";
import { Header } from "../Komponenter/header";

type Props = {
    score: number,
    total: number,
    onRestart: () => void,
};

export function ResultatPage({ score, total, onRestart }: Props) {
    const highscore = getHighscore();
      const navigate = useNavigate();

    const isNewHighscore = score === highscore && score > 0;

    return (
        <main style={{ padding: 16, maxWidth: 520, margin: "0 auto" }}>
            <Header
  title="Resultat"
  onBack={() => navigate("/")}
/>

            <h1>Resultat</h1>
            <p>
                Du fick <strong>{score}</strong> av <strong>{total}</strong> rätt.
            </p>
            <p>
                Highscore: <strong>{highscore}</strong>
            </p>
        {isNewHighscore && (
            <p style={{ color: "lime", fontWeight: 600}}>
                Ny highscore!
            </p>
        )}
        <button
        onClick={onRestart}
            style={{
            marginTop: 16,
            width: "100%",
            padding: 14,
            borderRadius: 12,
        }}>
        Spela igen
        </button>
        </main>
    );
}
