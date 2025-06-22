import { memo } from "react";
import "./TypeFilterContent.scss";
import bugIcon from "../../../../../assets/Image/Type_icons/bug.svg";
import fireIcon from "../../../../../assets/Image/Type_icons/fire.svg";
import grassIcon from "../../../../../assets/Image/Type_icons/grass.svg";
import waterIcon from "../../../../../assets/Image/Type_icons/water.svg";
import electricIcon from "../../../../../assets/Image/Type_icons/electric.svg";
import psychicIcon from "../../../../../assets/Image/Type_icons/psychic.svg";
import iceIcon from "../../../../../assets/Image/Type_icons/ice.svg";
import dragonIcon from "../../../../../assets/Image/Type_icons/dragon.svg";
import darkIcon from "../../../../../assets/Image/Type_icons/dark.svg";
import fairyIcon from "../../../../../assets/Image/Type_icons/fairy.svg";
import normalIcon from "../../../../../assets/Image/Type_icons/normal.svg";
import fightingIcon from "../../../../../assets/Image/Type_icons/fighting.svg";
import poisonIcon from "../../../../../assets/Image/Type_icons/poison.svg";
import groundIcon from "../../../../../assets/Image/Type_icons/ground.svg";
import rockIcon from "../../../../../assets/Image/Type_icons/rock.svg";
import steelIcon from "../../../../../assets/Image/Type_icons/steel.svg";
import ghostIcon from "../../../../../assets/Image/Type_icons/ghost.svg";
import flyingIcon from "../../../../../assets/Image/Type_icons/flying.svg";


function TypeFilterContent() {
  // Danh sách các loại type
  const types = [
    { name: "Bug", icon: bugIcon },
    { name: "Fire", icon: fireIcon },
    { name: "Grass", icon: grassIcon },
    { name: "Water", icon: waterIcon },
    { name: "Electric", icon: electricIcon },
    { name: "Psychic", icon: psychicIcon },
    { name: "Ice", icon: iceIcon },
    { name: "Dragon", icon: dragonIcon },
    { name: "Dark", icon: darkIcon },
    { name: "Fairy", icon: fairyIcon },
    { name: "Normal", icon: normalIcon },
    { name: "Fighting", icon: fightingIcon },
    { name: "Poison", icon: poisonIcon },
    { name: "Ground", icon: groundIcon },
    { name: "Rock", icon: rockIcon },
    { name: "Steel", icon: steelIcon },
    { name: "Ghost", icon: ghostIcon },
    { name: "Flying", icon: flyingIcon }
  ]
  return (
    <div>
      <h4>Chọn types:</h4>
      {/* Render danh sách types ở đây */}
      <div className="container">
        <ul className="row">
          {types.map((type) => (
            <li className="type col-md-4 col-sm-6 col-xs-6" key={type.name}>
              <div className={`type-item ${type.name}`}>
                <img src={type.icon} alt={`${type.name} Type-img`} className={type.name} />
                <span>{type.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(TypeFilterContent);
