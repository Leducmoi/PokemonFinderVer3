import { useState } from "react";
import { getPokemonList } from "./fetchAPI/getPokemonList";

export default function usePokemonList(limit = 16) {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);


    // Fetch pokemons from the API with a given limit and offset
    async function fetchPokemons(currentOffset = 0) {
        const details = await getPokemonList(limit, currentOffset);
        setPokemons(prev => {
            const ids = new Set(prev.map(p => p.id));
            const newPokemons = details.filter(p => !ids.has(p.id));
            return [...prev, ...newPokemons];
        });
        setOffset(currentOffset);
    }


    // Load more pokemons by increasing the offset of button click
    // and fetching the next set of pokemons
    function loadMore() {
        fetchPokemons(offset + limit);
    }

    return { pokemons, fetchPokemons, loadMore };
}