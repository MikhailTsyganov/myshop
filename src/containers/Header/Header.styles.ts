import styled, { css } from "styled-components";

export const StyledHeader = styled.header<{ view?: "basket" }>`
  position: relative;
  padding: 16px 0 44px;
  background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary} 0,
      ${({ theme }) => theme.colors.secondary} 100%
    )
    no-repeat;

  &::after {
    position: absolute;
    top: calc(100% - 26px);
    content: "";
    display: block;
    width: 100%;
    height: 36px;
    border-radius: 24px 24px 0 0;

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

  @media ${({ theme }) => theme.media.sm} {
    padding: 10px 0 25px;
  }
`;

/* .logo {
  display: block;
  width: 240px;
  height: 60px;
  background-color: red;
} */
