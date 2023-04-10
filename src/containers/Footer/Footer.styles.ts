import styled, { css } from "styled-components";

export const StyledFooter = styled.footer<{ view?: "basket" }>`
  position: relative;
  padding: 68px 0 48px;
  /* margin: 48px 0 0; */
  background-color: ${({ theme }) => theme.colors.secondary};

  &::before {
    position: absolute;
    top: 0;
    content: "";
    display: block;
    width: 100%;
    height: 36px;
    border-radius: 0 0 24px 24px;

    ${({ view, theme }) => {
      switch (view) {
        case "basket":
          return css`
            background-color: ${theme.colors.bgcBasket};
          `;

        default:
          return css`
            background-color: ${theme.colors.white};
          `;
      }
    }}
  }
`;
