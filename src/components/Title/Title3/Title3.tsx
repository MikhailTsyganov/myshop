import { FC } from "react";
import { Title3Props } from ".";
import { StyledTitle3 } from "./Title3.styles";

export const Title3: FC<Title3Props> = (props) => {
  return <StyledTitle3 {...props}>{props.children}</StyledTitle3>;
};
