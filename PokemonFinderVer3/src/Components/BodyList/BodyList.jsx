import { memo, useEffect } from "react";
import "./BodyList.scss";
import CardPokemon from "./innerbody/Card/CardPokemon.jsx";
import LoadMoreButton from "./innerbody/LoadMoreButton/LoadMoreButton.jsx";
import usePokemonList from "./hooks/usePokemonList.js";

function BodyList() {
  const setLimit = 20;

  const { pokemons, fetchPokemons, loadMore } = usePokemonList(setLimit);

  useEffect(() => {
    fetchPokemons(0);
  }, []);

  return (
    <div className="Bodylist">
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <div className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3" key={pokemon.id}>
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
            <LoadMoreButton onClick={loadMore} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(BodyList);