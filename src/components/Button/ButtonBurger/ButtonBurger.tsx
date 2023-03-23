import { FC } from "react";
import { ButtonBurgerProps } from ".";
import { StyledButtonBurger } from "./ButtonBurger.styles";

export const BurgerButton: FC<ButtonBurgerProps> = ({ onOpenSidebar }) => {
  return (
    <StyledButtonBurger as="button" onClick={onOpenSidebar}>
      <div></div>
    </StyledButtonBurger>
  );
};
