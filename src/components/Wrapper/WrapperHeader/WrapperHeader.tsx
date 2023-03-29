import { FC } from "react";
import { WrapperHeaderProps } from ".";
import { StyledWrapperHeader } from "./WrapperHeader.styles";

export const WrapperHeader: FC<WrapperHeaderProps> = (props) => {
  const { children } = props;
  return <StyledWrapperHeader {...props}>{children}</StyledWrapperHeader>;
};
