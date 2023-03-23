import { FC } from "react";
import { Title2Props } from ".";
import { StyledTitle2 } from "./Title2.styles";

export const Title2: FC<Title2Props> = (props) => {
  return <StyledTitle2 {...props}>{props.children}</StyledTitle2>;
};
