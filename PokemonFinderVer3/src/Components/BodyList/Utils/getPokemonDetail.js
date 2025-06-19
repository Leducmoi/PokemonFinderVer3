export async function getPokemonDetail(url) {
    const res = await fetch(url);
    const detail = await res.json();
    return {
        id: detail.id,
        name: detail.name,
        image: detail.sprites.front_default,
        types: detail.types.map((t) => t.type.name),
    };
}