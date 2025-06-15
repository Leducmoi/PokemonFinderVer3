//Resource://
import { memo } from "react";
//Style://
import "./Main.scss";
import 'bootstrap-grid-only/bootstrap.css';
//Components://
import Header from "../Header/Header.jsx";
import BodyList from "../BodyList/BodyList.jsx";
import Menu from "../Menu/Menu.jsx";

function Main() {
  return (
    <div>
      <Header />
      <Menu />
      <BodyList />
    </div>
  );
}

export default memo(Main);
