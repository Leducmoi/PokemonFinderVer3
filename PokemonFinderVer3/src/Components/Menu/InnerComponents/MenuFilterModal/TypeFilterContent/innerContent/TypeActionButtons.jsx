import React from "react";

function TypeActionButtons({ selectedTypes, onOnlyOneType, onMultipleTypes, onConfirm }) {
  if (selectedTypes.length === 1) {
    return (
      <>
        <button onClick={onOnlyOneType}>Only one type</button>
        <button onClick={onMultipleTypes}>Can be multiple types</button>
      </>
    );
  }
  if (selectedTypes.length === 2) {
    return <button onClick={onConfirm}>Confirm</button>;
  }
  return null;
}

export default React.memo(TypeActionButtons);