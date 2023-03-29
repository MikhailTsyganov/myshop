import { FC } from "react";
import { WrapperPLUGProps } from ".";
import { StyledWrapperPLUG } from "./WrapperPLUG.styles";

export const WrapperPLUG: FC<WrapperPLUGProps> = (props) => {
  return <StyledWrapperPLUG {...props}></StyledWrapperPLUG>;
};
