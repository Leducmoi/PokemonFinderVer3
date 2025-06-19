import { memo } from "react";
import "./CardPokemon.scss";

function CardPokemon({ id, name, image, types }) {
    return (
        <div className="card-pokemon">
            <div className="card-pokemon__img">
                <img src={image} alt={name} />
            </div>
            <div className="card-pokemon__info">
                <p>#{String(id).padStart(4, '0')}</p>
                <h3>{name}</h3>
                <div>
                    {types.map((type) => (
                        <div key={type} className={`type-badge type-${type}`}>
                            {type}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default memo(CardPokemon);
