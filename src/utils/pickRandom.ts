import { shuffle } from "./shuffle";

// Tar t.ex. 5 slumpade objekt från en lista
export function pickRandom<T>(items: T[], count: number): T[] {
  const mixed = shuffle(items);
  return mixed.slice(0, count);
}
