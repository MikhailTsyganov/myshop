import { FC } from "react";
import { ParagraphStandartProps } from ".";
import { StyledParagraphStandart } from "./ParagraphStandart.styles";

export const ParagraphStandart: FC<ParagraphStandartProps> = (props) => {
  const {} = props;
  return <StyledParagraphStandart {...props}></StyledParagraphStandart>;
};
