type Props = {
    score: number,
    total: number,
    onRestart: () => void;
};

export function ResultatPage({ score, total, onRestart }: Props) {
    return (
        <main style={{ padding: 16, maxWidth: 520, margin: "0 auto" }}>
            <h1>Resultat</h1>
            <p>
                Du fick <strong>{score}</strong> av <strong>{total}</strong> rätt.
            </p>

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
