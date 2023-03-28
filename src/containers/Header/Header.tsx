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

export const Header: FC<HeaderProps> = ({ onOpenSidebar }) => {
  return (
    <StyledHeader>
      <Container>
        <Wrapper display="flex" flexWrap={{ md: "wrap" }}>
          <Wrapper display="flex">
            <BurgerButton onOpenSidebar={onOpenSidebar} />
            {/* react-router */}
            <Wrapper minWidth="240px" height="64px" bgc="red"></Wrapper>
          </Wrapper>
          <Wrapper
            display="flex"
            order={{ lg: 1 }}
            // margin={{ md: "0 0 0 auto" }}
          >
            <HeaderPersonalButton text="Войти">
              <BsFillPersonFill />
            </HeaderPersonalButton>
            <HeaderPersonalButton text="Корзина">
              <BsCart4 />
            </HeaderPersonalButton>
          </Wrapper>
          <Wrapper width="100%" margin={{ lg: "0 50px 0 20px", md: "8px 0 0" }}>
            <Search />
          </Wrapper>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};
