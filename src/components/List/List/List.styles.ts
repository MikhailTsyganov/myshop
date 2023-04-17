import styled, { css } from "styled-components";
import { TDisplay } from "./List.props";

export const StyledList = styled.ul<{ display?: TDisplay }>`
  ${({ display }) => {
    switch (display) {
      case "grid":
        return css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
          grid-gap: 32px 16px;
        `;

      default:
        return css``;
    }
  }}
`;
