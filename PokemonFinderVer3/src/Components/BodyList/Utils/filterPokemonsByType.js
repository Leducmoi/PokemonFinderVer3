export function filterPokemonsByType(pokemons, selectedTypes, filterMode) {
  if (!selectedTypes.length) return pokemons;

  if (filterMode === "one") {
    // Chỉ lấy pokemon có đúng 1 hệ và hệ đó nằm trong selectedTypes
    return pokemons.filter(
      (p) => p.types.length === 1 && selectedTypes.includes(p.types[0])
    );
  }

  if (filterMode === "multi") {
    // Lấy pokemon có ít nhất 1 hệ thuộc selectedTypes
    return pokemons.filter(
      (p) => p.types.some((t) => selectedTypes.includes(t))
    );
  }

  if (selectedTypes.length === 2 && filterMode === "confirm") {
    // Lấy pokemon có đúng 2 hệ và trùng với selectedTypes
    return pokemons.filter(
      (p) =>
        p.types.length === 2 &&
        selectedTypes.every((type) => p.types.includes(type))
    );
  }

  return pokemons;
}