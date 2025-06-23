import { useState } from "react";
import { getPokemonList } from "../Utils/getPokemonList";
import { mergeUniquePokemons } from "../Utils/mergeUniquePokemons";
import { getNextOffset } from "../Utils/getNextOffset";
import { filterPokemonsByType } from "../Utils/filterPokemonsByType";

export default function usePokemonList(limit) {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filterMode, setFilterMode] = useState("");

  async function fetchPokemons(currentOffset = 0) {
    const details = await getPokemonList(limit, currentOffset);
    setPokemons((prev) => mergeUniquePokemons(prev, details));
    setOffset(currentOffset);
  }

  function loadMore() {
    const newOffset = getNextOffset(offset, limit);
    fetchPokemons(newOffset);
  }

  function filterByType(types, mode) {
    setSelectedTypes(types);
    setFilterMode(mode);
    setFiltered(filterPokemonsByType(pokemons, types, mode));
  }

  const displayPokemons = filtered.length > 0 ? filtered : pokemons;

  return {
    pokemons: displayPokemons,
    fetchPokemons,
    loadMore,
    filterByType,
    selectedTypes,
    setSelectedTypes,
    filterMode,
    setFilterMode,
  };
}