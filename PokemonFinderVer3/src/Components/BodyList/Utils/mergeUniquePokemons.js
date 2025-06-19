export function mergeUniquePokemons(prev, next) {
  const ids = new Set(prev.map(p => p.id));
  const newPokemons = next.filter(p => !ids.has(p.id));
  return [...prev, ...newPokemons];
}