import React from "react";

function TypeItem({ type, selected, dimmed, onClick }) {
  return (
    <li
      className="type col-md-4 col-sm-6 col-xs-6"
      onClick={() => onClick(type.name)}
    >
      <div
        className={`type-item ${type.name} ${selected ? "selected" : ""} ${dimmed ? "dim" : ""}`}
      >
        <img src={type.icon} alt={`${type.name} Type-img`} className={type.name} />
        <span>{type.name}</span>
      </div>
    </li>
  );
}

export default React.memo(TypeItem);