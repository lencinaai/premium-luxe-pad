// Fisher-Yates shuffle
function shuffle(arr: number[]): number[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Generates 3 pre-shuffled sequences of image indices (1..count).
 * Called once per page load. Each visitor picks one at random.
 */
export function getShuffledSequences(count: number): number[][] {
  const base = Array.from({ length: count }, (_, i) => i + 1);
  return [shuffle(base), shuffle(base), shuffle(base)];
}
