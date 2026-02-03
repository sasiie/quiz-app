const HIGHSCORE_KEY = "quiz_highscore";

export function getHighscore(): number {
    const value = localStorage.getItem(HIGHSCORE_KEY);
    return value ? Number(value) : 0;
}

export function setHighscore(score: number) {
    localStorage.setItem(HIGHSCORE_KEY, String(score));
}