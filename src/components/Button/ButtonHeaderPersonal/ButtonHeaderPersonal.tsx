import { FC } from "react";
import { ButtonHeaderPersonalProps } from ".";
import { StyledHeaderPersonalButton } from "./ButtonHeaderPersonal.styles";

export const HeaderPersonalButton: FC<ButtonHeaderPersonalProps> = ({
  text,
  children,
}) => {
  return (
    <StyledHeaderPersonalButton>
      <>
        {children}
        <span>{text}</span>
      </>
    </StyledHeaderPersonalButton>
  );
};
