import { memo, useEffect, useState } from "react";
import "./BodyList.scss";
import CardPokemon from "./innerbody/Card/CardPokemon.jsx";

function BodyList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 16;

  // Hàm fetch thêm Pokémon
  async function fetchPokemons(currentOffset) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`);
    const data = await res.json();
    const details = await Promise.all(
      data.results.map(async (poke) => {
        const res = await fetch(poke.url);
        const detail = await res.json();
        return {
          id: detail.id,
          name: detail.name,
          image: detail.sprites.front_default,
          types: detail.types.map((t) => t.type.name),
        };
      })
    );
    // Nối thêm vào danh sách cũ
    setPokemons(prev => [...prev, ...details]);
  }

  // Lần đầu load
  useEffect(() => {
    fetchPokemons(0);
  }, []);

  // Xử lý khi bấm Load More
  const handleLoadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    fetchPokemons(newOffset);
  };

  return (
    <div className="Bodylist">
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <div className="col-6 col-md-4 col-lg-3" key={pokemon.id}>
              <CardPokemon
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="load-more-wrapper">
              <button className="btn-loadMore" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(BodyList);