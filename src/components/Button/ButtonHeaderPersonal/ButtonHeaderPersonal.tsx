import { FC } from "react";
import { ButtonHeaderPersonalProps } from ".";
import { StyledHeaderPersonalButton } from "./ButtonHeaderPersonal.styles";

export const HeaderPersonalButton: FC<ButtonHeaderPersonalProps> = (props) => {
  const { text, children } = props;
  return (
    <StyledHeaderPersonalButton {...props}>
      <>
        {children}
        <span>{text}</span>
      </>
    </StyledHeaderPersonalButton>
  );
};
