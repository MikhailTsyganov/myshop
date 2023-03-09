import { FC } from "react";
import { HeaderProps } from ".";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsFillPersonFill, BsCart4 } from "react-icons/bs";

import s from "./Header.module.css";

export const Header: FC<HeaderProps> = ({ height, onOpenSidebar }) => {
  return (
    <header style={{ height }} className={s.header}>
      <div className={s.container}>
        <div className={s.menuWrapper}>
          <button type="button" className={s.burger} onClick={onOpenSidebar}>
            <div></div>
          </button>
          {/* react-router */}
          <a href="/" className={s.logo}></a>
          <label className={s.searchWrapper}>
            <HiOutlineMagnifyingGlass className={s.magnify} />
            <input type="text" className={s.search} placeholder="Я ищу..." />
          </label>
          <button className={s.personalButton}>
            <BsFillPersonFill />
            <span>Войти</span>
          </button>
          <button className={s.personalButton}>
            <BsCart4 />
            <span>Корзина</span>
          </button>
        </div>
      </div>
    </header>
  );
};
