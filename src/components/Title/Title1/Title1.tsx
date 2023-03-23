import { FC } from "react";
import { Title1Props } from ".";
import { StyledTitle1 } from "./Title1.styles";

export const Title1: FC<Title1Props> = (props) => {
  return <StyledTitle1 {...props}>{props.children}</StyledTitle1>;
};
