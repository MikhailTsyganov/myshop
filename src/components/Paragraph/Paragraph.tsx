import { FC } from "react";
import { ParagraphProps } from ".";
import { StyledParagraph } from "./Paragraph.styles";

export const Paragraph: FC<ParagraphProps> = (props) => {
  const { children } = props;
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};
