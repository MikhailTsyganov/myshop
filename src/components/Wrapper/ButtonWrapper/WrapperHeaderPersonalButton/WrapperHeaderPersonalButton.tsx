import { FC } from "react";
import { WrapperHeaderPersonalButtonProps } from ".";
import { StyledWrapperHeaderPersonalButton } from "./WrapperHeaderPersonalButton.styles";

export const WrapperHeaderPersonalButton: FC<
  WrapperHeaderPersonalButtonProps
> = (props) => {
  const { children } = props;
  return (
    <StyledWrapperHeaderPersonalButton {...props}>
      {children}
    </StyledWrapperHeaderPersonalButton>
  );
};
