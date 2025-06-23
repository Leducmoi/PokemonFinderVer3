import { memo, useState } from "react";
import "./TypeFilterContent.scss";
import { POKEMON_TYPES } from "./innerContent/pokemonTypes";
import TypeItem from "./innerContent/TypeItem";
import TypeActionButtons from "./innerContent/TypeActionButtons";

function TypeFilterContent( { filterByType }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filterMode, setFilterMode] = useState(""); 

  const handleTypeClick = (typeName) => {
    if (selectedTypes.includes(typeName)) {
      setSelectedTypes(selectedTypes.filter(t => t !== typeName));
      setFilterMode("");
    } else if (selectedTypes.length < 2) {
      setSelectedTypes([...selectedTypes, typeName]);
    }
  };

  const handleOnlyOneType = () => filterByType(selectedTypes, "one");
  const handleMultipleTypes = () => filterByType(selectedTypes, "multi");
  const handleConfirm = () => filterByType(selectedTypes, "confirm");

  return (
    <div>
      <h4>Chọn types:</h4>
      <div className="container">
        <ul className="row">
          {POKEMON_TYPES.map((type) => (
            <TypeItem
              key={type.name}
              type={type}
              selected={selectedTypes.includes(type.name)}
              dimmed={selectedTypes.length > 0 && !selectedTypes.includes(type.name)}
              onClick={handleTypeClick}
            />
          ))}
        </ul>
        <div className="type-wrapper-button">
          <TypeActionButtons
            selectedTypes={selectedTypes}
            onOnlyOneType={handleOnlyOneType}
            onMultipleTypes={handleMultipleTypes}
            onConfirm={handleConfirm}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(TypeFilterContent);