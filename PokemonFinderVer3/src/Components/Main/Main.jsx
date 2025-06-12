//Resource://
import { memo } from "react";
//Style://
import "./Main.scss";
//Components://
import Header from "../Header/Header.jsx";
import BodyList from "../BodyList/BodyList.jsx";

function Main() {
  return (
    <div>
      <Header />
      <BodyList />
    </div>
  );
}

export default memo(Main);
