import { forwardRef } from "react";
import { ButtonCounterProps } from ".";
import { StyledButtonCounter } from "./ButtonCounter.styles";

export const ButtonCounter = forwardRef<HTMLDivElement, ButtonCounterProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <div ref={ref}>
        <StyledButtonCounter {...props}>{children}</StyledButtonCounter>
      </div>
    );
  }
);
