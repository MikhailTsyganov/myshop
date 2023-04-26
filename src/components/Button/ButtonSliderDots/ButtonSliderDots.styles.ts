import styled, { css } from "styled-components";
import { StyledButtonCircle } from "../ButtonCircle/ButtonCircle.styles";

export const StyledButtonSliderDots = styled(StyledButtonCircle)<{
  slide: number; /////////// WWWTTTTFFFFF
}>`
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;

  ${({ id, slide }) => {
    switch (Math.abs(slide - Number(id))) {
      case 0:
        return css`
          padding: 6px;
          opacity: 1;
        `;
      case 1:
        return css`
          padding: 4px;
        `;
      case 2:
        return css`
          padding: 2px;
        `;
      default:
        return css`
          opacity: 0;
          pointer-events: none;
        `;
    }
  }}
`;
