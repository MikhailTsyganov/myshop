import { FC } from "react";
import { HeaderProps } from ".";

import { BsFillPersonFill, BsCart4 } from "react-icons/bs";
import { Container } from "../../components/Container";
import { BurgerButton } from "../../components/BurgerButton";
import { Search } from "../../components/Search";
import { HeaderPersonalButton } from "../../components/HeaderPersonalButton";

import s from "./Header.module.css";

export const Header: FC<HeaderProps> = ({ height, onOpenSidebar }) => {
  return (
    <header style={{ height }} className={s.header}>
      <Container>
        <div className={s.menuWrapper}>
          <BurgerButton onOpenSidebar={onOpenSidebar} />
          {/* react-router */}
          {/* <a href="." className={s.logo}></a> */}

          <Search />
          <HeaderPersonalButton text="Войти">
            <BsFillPersonFill />
          </HeaderPersonalButton>
          <HeaderPersonalButton text="Корзина">
            <BsCart4 />
          </HeaderPersonalButton>
        </div>
      </Container>
    </header>
  );
};
