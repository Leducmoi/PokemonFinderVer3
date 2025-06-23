import { memo } from "react";
import "./TypeFilterContent.scss";
import { POKEMON_TYPES } from "./innerContent/pokemonTypes";
import TypeItem from "./innerContent/TypeItem";
import TypeActionButtons from "./innerContent/TypeActionButtons";

function TypeFilterContent({
  filterByType,
  selectedTypes,
  setSelectedTypes,
  filterMode,
  setFilterMode,
}) {
  const handleTypeClick = (typeName) => {
    const lowerType = typeName.toLowerCase();
    if (selectedTypes.includes(lowerType)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== lowerType));
      setFilterMode("");
    } else if (selectedTypes.length < 2) {
      setSelectedTypes([...selectedTypes, lowerType]);
    }
  };

  const handleOnlyOneType = () => {
    console.log("Only one type clicked", selectedTypes);
    filterByType(selectedTypes, "one");
  };
  const handleMultipleTypes = () => {
    console.log("Can be multiple types clicked", selectedTypes);
    filterByType(selectedTypes, "multi");
  };
  const handleConfirm = () => {
    console.log("Confirm clicked", selectedTypes);
    filterByType(selectedTypes, "confirm");
  };

  return (
    <div>
      <h4>Chọn types:</h4>
      <div className="container">
        <ul className="row">
          {POKEMON_TYPES.map((type) => (
            <TypeItem
              key={type.name}
              type={type}
              selected={selectedTypes.includes(type.name.toLowerCase())}
              dimmed={
                selectedTypes.length > 0 &&
                !selectedTypes.includes(type.name.toLowerCase())
              }
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