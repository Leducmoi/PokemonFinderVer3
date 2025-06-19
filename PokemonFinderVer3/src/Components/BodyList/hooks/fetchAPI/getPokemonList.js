import { getPokemonDetail } from "./getPokemonDetail";

export async function getPokemonList(limit, offset) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    const details = await Promise.all(
        data.results.map((poke) => getPokemonDetail(poke.url))
    );
    return details;
}