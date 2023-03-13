import { FC } from "react";
import { HeaderPersonalButtonProps } from ".";
import { StyledButton } from "./HeaderPersonalButton.styles";

export const HeaderPersonalButton: FC<HeaderPersonalButtonProps> = ({
  text,
  children,
}) => {
  return (
    <StyledButton>
      {children}
      <span>{text}</span>
    </StyledButton>
  );
};
