import { memo, useState } from "react";
import "./Menu.scss";
import Slider from "./InnerComponents/Slider.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import MenuFilterOption from "./InnerComponents/MenuFilterOption.jsx";
import MenuFilterModal from "./InnerComponents/MenuFilterModal/MenuFilterModal.jsx";
import usePokemonList from "../BodyList/hooks/usePokemonList";


function Menu() {
  const [openFilter, setOpenFilter] = useState(null);
  const handleFilterOptionClick = (option) => {
    setOpenFilter(option);
  };
  const handleCloseModal = () => setOpenFilter(null);
  const {
    pokemons,
    fetchPokemons,
    loadMore,
    filterByType,
    selectedTypes,
    filterMode,
  } = usePokemonList(16);
  return (

    <>
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="col-md-6 menu-filter">
              <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <MenuFilterOption label="TYPES" onClick={() => handleFilterOptionClick("TYPES")} />
                <MenuFilterOption label="ABILITIES" onClick={() => handleFilterOptionClick("ABILITIES")} />
                <MenuFilterOption label="STATS" onClick={() => handleFilterOptionClick("STATS")} />
              </div>
              <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="col-md-9 col-sm-9 col-xs-9 menu-filter-IdFilterSlider" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="col-md-4 col-sm-4 col-xs-4 menu-filter-IdFilterSlider-text">ID RANGE :</div>
                    <div className="col-md-6 col-sm-6 col-xs-6 menu-filter-IdFilterSlider-text"><Slider /></div>
                  </div>

                </div>
                <div className="col-md-3 col-sm-3 col-xs-3 menu-filter-reset">RESET</div>

              </div>
            </div>
            <div className="col-md-3 menu-other"></div>
            <div className="col-md-3 menu-search">
              <input
                type="text"
                className="form-control menu-search-input"
                placeholder="Search by name or id."
              />
              <button className="btn btn-primary menu-search-button"><AiOutlineSearch /></button>
            </div>
          </div>
        </div>
      </div>

      <MenuFilterModal
        openFilter={openFilter}
        onClose={handleCloseModal}
        filterByType={filterByType}
        selectedTypes={selectedTypes}
        filterMode={filterMode}
      />
    </>
  );
}

export default memo(Menu);
