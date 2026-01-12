// Här är startsidan

type Props = {
    onStart: () => void;
};

export function StartPage({ onStart }: Props) {
    return (
        <main style={{ padding: 16 }}>
            <h1> Quiz App</h1>
            <button onClick={onStart}> Starta Quiz</button>
        </main>
    );
}