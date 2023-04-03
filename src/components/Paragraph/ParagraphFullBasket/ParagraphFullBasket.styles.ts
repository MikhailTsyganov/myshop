import styled, { css } from "styled-components";
import { ParagraphStandart } from "../ParagraphStandart";

interface IStyledParagraphFullBasket {
  big?: boolean;
  small?: boolean;
}

export const StyledParagraphFullBasket = styled(
  ParagraphStandart
)<IStyledParagraphFullBasket>`
  ${({ big }) =>
    big &&
    css`
    font-size: 24px;
     line-height: 32px;
     font-weight: 700;
}`}
  ${({ small }) =>
    small &&
    css`
    font-size: 14px;
    line-height: 20px;
}`}
`;
