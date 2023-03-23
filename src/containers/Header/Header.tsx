import { FC } from "react";
import { HeaderProps } from ".";

import { BsFillPersonFill, BsCart4 } from "react-icons/bs";

import { StyledHeader } from "./Header.styles";
import {
  Wrapper,
  Container,
  BurgerButton,
  Search,
  HeaderPersonalButton,
} from "components";

export const Header: FC<HeaderProps> = ({ height, onOpenSidebar }) => {
  return (
    <StyledHeader height={height}>
      <Container>
        <Wrapper display="flex">
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
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};
