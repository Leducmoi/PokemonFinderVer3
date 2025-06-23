export function filterPokemonsByType(pokemons, selectedTypes, filterMode) {
  if (!selectedTypes.length) return pokemons;

  const lowerSelected = selectedTypes.map(t => t.toLowerCase());

  if (filterMode === "one") {
    // Chỉ lấy pokemon có đúng 1 hệ và hệ đó nằm trong selectedTypes
    return pokemons.filter(
      (p) => p.types.length === 1 && lowerSelected.includes(p.types[0].toLowerCase())
    );
  }

  if (filterMode === "multi") {
    // Lấy pokemon có ít nhất 1 hệ thuộc selectedTypes
    return pokemons.filter(
      (p) => p.types.some((t) => lowerSelected.includes(t.toLowerCase()))
    );
  }

  if (selectedTypes.length === 2 && filterMode === "confirm") {
    // Lấy pokemon có đúng 2 hệ và trùng với selectedTypes
    return pokemons.filter(
      (p) =>
        p.types.length === 2 &&
        lowerSelected.every((type) => p.types.map(t => t.toLowerCase()).includes(type))
    );
  }

  return pokemons;
}