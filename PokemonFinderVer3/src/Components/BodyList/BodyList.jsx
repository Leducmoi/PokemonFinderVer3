import { memo, useEffect, useState } from "react";
import "./BodyList.scss";
import CardPokemon from "./innerbody/Card/CardPokemon.jsx";

function BodyList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=16");
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
      setPokemons(details);
    }
    fetchPokemons();
  }, []);

  return (
    <>
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
        </div>
      </div>
    </>
  );
}

export default memo(BodyList);
