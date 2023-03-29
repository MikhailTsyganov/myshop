import { FC } from "react";
import { HeaderProps } from ".";

import { BsFillPersonFill, BsCart4 } from "react-icons/bs";

import { StyledHeader } from "./Header.styles";
import {
  Container,
  BurgerButton,
  Search,
  HeaderPersonalButton,
} from "components";
import { WrapperStandart } from "components/Wrapper/WrapperStandart";
import { WrapperPLUG } from "components/Wrapper/WrapperPLUG";
import { WrapperHeaderPersonalButton } from "components/Wrapper/ButtonWrapper/WrapperHeaderPersonalButton";
import { WrapperSearch } from "components/Wrapper/WrapperSearch";
import { WrapperHeader } from "components/Wrapper/WrapperHeader";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useTheme } from "styled-components";

export const Header: FC<HeaderProps> = ({ onOpenSidebar }) => {
  const theme = useTheme();
  console.log(theme.colors);

  return (
    <StyledHeader>
      <Container>
        <WrapperHeader display="flex">
          <WrapperStandart display="flex">
            <BurgerButton onOpenSidebar={onOpenSidebar} />
            {/* react-router */}
            <WrapperPLUG minWidth="240px" height="64px" bgc="red"></WrapperPLUG>
          </WrapperStandart>
          <WrapperHeaderPersonalButton display="flex">
            <HeaderPersonalButton text="Войти">
              <BsFillPersonFill />
            </HeaderPersonalButton>
            <HeaderPersonalButton text="Корзина">
              <BsCart4 />
            </HeaderPersonalButton>
            {/* for screen < 1024px */}
            <HeaderPersonalButton>
              <HiOutlineMagnifyingGlass fill="red" />
            </HeaderPersonalButton>
            {/*  */}
          </WrapperHeaderPersonalButton>
          <WrapperSearch>
            <Search />
          </WrapperSearch>
        </WrapperHeader>
      </Container>
    </StyledHeader>
  );
};
