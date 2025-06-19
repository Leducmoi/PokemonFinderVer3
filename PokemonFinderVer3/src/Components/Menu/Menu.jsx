import { memo } from "react";
import "./Menu.scss";
import Slider from "./InnerComponents/Slider.jsx";
import { AiOutlineCaretDown,AiOutlineSearch  } from "react-icons/ai";


function Menu() {
  
  return (
    <>
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="col-md-6 menu-filter">
              <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <div className="col-md-4 menu-filter-option">TYPES <AiOutlineCaretDown /></div>
                <div className="col-md-4 menu-filter-option">ABILITIES <AiOutlineCaretDown /></div>
                <div className="col-md-4 menu-filter-option">STATS <AiOutlineCaretDown /></div>
              </div>
              <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="col-md-3 menu-filter-reset">RESET</div>
                <div className="col-md-9 menu-filter-IdFilterSlider" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div className="col-md-4 menu-filter-IdFilterSlider-text">ID RANGE :</div>
                    <div className="col-md-6 menu-filter-IdFilterSlider-text"><Slider /></div>
                  </div>
                  
                </div>
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
    </>
  );
}

export default memo(Menu);
