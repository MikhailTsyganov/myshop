import { FC } from "react";
import { useTheme } from "styled-components";
import { BsFillPersonFill, BsCart4 } from "react-icons/bs";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { HeaderProps } from ".";
import { StyledHeader } from "./Header.styles";

import {
  Container,
  BurgerButton,
  Search,
  HeaderPersonalButton,
  WrapperStandart,
  WrapperPLUG,
  WrapperHeaderPersonalButton,
  WrapperSearch,
  WrapperHeader,
} from "components";

export const Header: FC<HeaderProps> = (props) => {
  const { onOpenSidebar, view } = props;
  const theme = useTheme();

  return (
    <StyledHeader view={view}>
      <Container>
        <WrapperHeader display="flex">
          <WrapperStandart display="flex">
            <BurgerButton onOpenSidebar={onOpenSidebar} />
            {/* react-router */}
            <WrapperPLUG minWidth="240px" height="37px" bgc="red"></WrapperPLUG>
          </WrapperStandart>
          <WrapperHeaderPersonalButton display="flex">
            <HeaderPersonalButton text="Войти">
              <BsFillPersonFill fill={theme.colors.white} />
            </HeaderPersonalButton>
            <HeaderPersonalButton text="Корзина">
              <BsCart4 fill={theme.colors.white} />
            </HeaderPersonalButton>
            {/* for screen < 1024px */}
            <HeaderPersonalButton>
              <HiOutlineMagnifyingGlass fill="transparent" />
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
