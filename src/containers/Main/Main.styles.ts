import styled, { css } from "styled-components";

export const StyledMain = styled.main<{ view?: "basket" }>`
  position: relative;

  ${({ view, theme }) => {
    switch (view) {
      case "basket":
        return css`
          background-color: ${theme.colors.greyContainerBackground};
        `;

      default:
        return css`
          background-color: ${theme.colors.white};
        `;
    }
  }}
`;
