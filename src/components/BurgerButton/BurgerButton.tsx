import { FC } from "react";
import { BurgerButtonProps } from ".";
import { StyledBurgerButton } from "./BurgerButton.styles";

export const BurgerButton: FC<BurgerButtonProps> = ({ onOpenSidebar }) => {
  return (
    <StyledBurgerButton as="button" onClick={onOpenSidebar}>
      <div></div>
    </StyledBurgerButton>
  );
};
