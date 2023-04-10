import { ButtonCounterProps } from ".";
import { StyledButtonCounter } from "./ButtonCounter.styles";
import { FC } from "react";

export const ButtonCounter: FC<ButtonCounterProps> = (props) => {
  // console.log(props);

  const { children, isDisabled } = props;

  return (
    <StyledButtonCounter disabled={isDisabled} {...props}>
      {children}
    </StyledButtonCounter>
  );
};
