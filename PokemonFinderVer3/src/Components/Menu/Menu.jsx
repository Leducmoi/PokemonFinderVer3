import { memo,useState } from "react";
import "./Menu.scss";
import Slider from "@mui/material/Slider";


function Menu() {
  const [value1, setValue1] = useState([1, 1025]);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const valuetext = (value) => `${value}`;
  return (
    <>
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="col-md-6 menu-filter" style={{ background: "lightblue", height: "100px" }}>
              <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <div className="col-md-4 menu-filter-option">TYPES</div>
                <div className="col-md-4 menu-filter-option">ABILITIES</div>
                <div className="col-md-4 menu-filter-option">STATS</div>
              </div>
              <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="col-md-3 menu-filter-reset">RESET</div>
                <div className="col-md-7 menu-filter-IdFilterSlider">
                  <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    min={1}
                    max={1025}
                  />

                </div>
              </div>
            </div>
            <div className="col-md-3 menu-other" style={{ background: "lightgreen", height: "100px" }}></div>
            <div className="col-md-3 menu-search" style={{ background: "lightcoral", height: "100px" }}>
              <input
                type="text"
                className="form-control menu-search-input"
                placeholder="Search by name, type, ability, etc."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Menu);
