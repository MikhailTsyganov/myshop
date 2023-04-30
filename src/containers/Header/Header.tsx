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

import { useNavigate } from "react-router-dom";

export const Header: FC<HeaderProps> = (props) => {
  const { onOpenSidebar, view } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  const buttonHandler = (e: React.MouseEvent) => {
    switch (e.currentTarget.id) {
      case "logo":
        navigate("/");
        break;
      case "basket":
        navigate("/basket");
        break;

      default:
        break;
    }
  };

  return (
    <StyledHeader view={view}>
      <Container>
        <WrapperHeader display="flex">
          <WrapperStandart display="flex">
            <BurgerButton onOpenSidebar={onOpenSidebar} />
            <WrapperPLUG
              id="logo"
              minWidth="240px"
              height="37px"
              bgc="red"
              onClick={buttonHandler}
            ></WrapperPLUG>
          </WrapperStandart>
          <WrapperHeaderPersonalButton display="flex">
            <HeaderPersonalButton
              id="signin"
              text="Войти"
              onClick={buttonHandler}
            >
              <BsFillPersonFill fill={theme.colors.white} />
            </HeaderPersonalButton>
            <HeaderPersonalButton
              id="basket"
              text="Корзина"
              onClick={buttonHandler}
            >
              <BsCart4 fill={theme.colors.white} />
            </HeaderPersonalButton>
            {/* for screen < 1024px */}
            <HeaderPersonalButton id="search" onClick={buttonHandler}>
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
