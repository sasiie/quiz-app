//här ligger frågorna och svaren

import type { Question } from "../types/quiz";

export const questions: Question[] = [
    {
        id: "q1",
        question: "Vad gjorde du under jul?",
        options: [
            { id: "a", text: "sovit hela tiden"},
            { id: "b", text: "pluggat"},
            { id: "c", text: "chillat"},
 ],
 correctOptionId: "a",
    },
];