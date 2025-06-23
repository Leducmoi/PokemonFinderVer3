import { memo } from "react";
//Style://
import "./Main.scss";
import 'bootstrap-grid-only/bootstrap.css';
//Components://
import Header from "../Header/Header.jsx";
import BodyList from "../BodyList/BodyList.jsx";
import Menu from "../Menu/Menu.jsx";
//Hooks://
import usePokemonList from "../BodyList/hooks/usePokemonList.js";

function Main() {
  // Gọi hook 1 lần duy nhất ở đây, lấy toàn bộ state và hàm cần thiết
  const pokemonListHook = usePokemonList(20);

  return (
    <div>
      <Header />
      <Menu
        {...pokemonListHook}
      />
      <BodyList
        {...pokemonListHook}
      />
    </div>
  );
}

export default memo(Main);