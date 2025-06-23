import { memo } from "react";
import "./MenuFilterModal.scss";
//import component 
import TypeFilterContent from "./TypeFilterContent/TypeFilterContent.jsx";
import AbilityFilterContent from "./AbilityFilterContent/AbilityFilterContent.jsx";
import StatFilterContent from "./StatFilterContent/StatFilterContent.jsx";
import usePokemonList from "../../../BodyList/hooks/usePokemonList.js";

function MenuFilterModal({ openFilter, onClose }) {
    const {
        filterByType,
        selectedTypes,
        filterMode,
        setSelectedTypes,
        setFilterMode,
    } = usePokemonList(16);

    
    if (!openFilter) return null;

    return (
        <div className="menu-filter-modal">
            <div className="menu-filter-modal-content">
                <button onClick={onClose} className="close-modal-btn">Đóng</button>
                <h4>{openFilter} Filter</h4>
                {openFilter === "TYPES" &&
                    <TypeFilterContent
                        filterByType={filterByType}
                        selectedTypes={selectedTypes}
                        setSelectedTypes={setSelectedTypes}
                        filterMode={filterMode}
                        setFilterMode={setFilterMode}

                    />}
                {openFilter === "ABILITIES" && <AbilityFilterContent />}
                {openFilter === "STATS" && <StatFilterContent />}
            </div>
        </div>
    );
}

export default memo(MenuFilterModal);