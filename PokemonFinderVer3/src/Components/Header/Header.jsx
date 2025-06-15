import { memo } from "react";
//Assets://
import LOGO from "../../assets/Image/Logo_Pokemon_API.png";
//Style://
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-imageLogo">
            <img src={LOGO} alt="Pokemon API Logo" />
          </div>
          <h1 className="header-text">Welcome to the Pokemon Finder</h1>
          <p className="header-text">Find your favorite Pokemon and learn more about them!</p>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
