// Hämtar frågor från public/questions.json
export async function fetchQuestions() {
  const response = await fetch("/questions.json"); // hämtar filen
  const data = await response.json(); // gör om till JS-objekt
  return data; // skickar tillbaka datan
}
