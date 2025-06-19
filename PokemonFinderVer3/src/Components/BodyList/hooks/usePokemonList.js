import { useState } from "react";
import { getPokemonList } from "../Utils/getPokemonList";
import {mergeUniquePokemons} from "../Utils/mergeUniquePokemons";
import {getNextOffset} from "../Utils/getNextOffset";

export default function usePokemonList(limit = 16) {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  async function fetchPokemons(currentOffset = 0) {
    const details = await getPokemonList(limit, currentOffset);
    setPokemons(prev => mergeUniquePokemons(prev, details));
    setOffset(currentOffset);
  }

  function loadMore() {
    const newOffset = getNextOffset(offset, limit);
    fetchPokemons(newOffset);
  }

  return { pokemons, fetchPokemons, loadMore };
}