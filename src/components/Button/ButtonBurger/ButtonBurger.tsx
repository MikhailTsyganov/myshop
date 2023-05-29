import { FC } from "react";
import { ButtonBurgerProps } from ".";
import { StyledButtonBurger } from "./ButtonBurger.styles";

export const BurgerButton: FC<ButtonBurgerProps> = (props) => {
  return (
    <StyledButtonBurger as="button" {...props}>
      <div></div>
    </StyledButtonBurger>
  );
};
