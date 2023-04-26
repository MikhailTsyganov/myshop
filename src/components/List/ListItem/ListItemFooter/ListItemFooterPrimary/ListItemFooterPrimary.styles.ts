import styled, { css } from "styled-components";

export const StyledListItemFooterPrimary = styled.section<{
  narrow?: boolean;
  marginTop?: boolean;
  app?: boolean;
  desktopWidth: boolean;
}>`
  width: calc(29% - 8px * 2);
  margin: 0 8px;

  ${({ narrow }) => {
    return (
      narrow &&
      css`
        width: calc(21% - 8px * 2);
      `
    );
  }}

  ${({ marginTop }) => {
    return (
      marginTop &&
      css`
        margin: 48px 0 0;
      `
    );
  }}

  & svg {
    display: none;
  }

  @media ${({ theme }) => theme.media.sm} {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
    padding: 12px 0;
    margin: 0;

    & svg {
      display: block;
      fill: ${({ theme }) => theme.colors.grey};
    }

    ${({ marginTop }) => {
      return (
        marginTop &&
        css`
          margin: 0;
        `
      );
    }}

    ${({ app }) => {
      return (
        app &&
        css`
          display: none;
        `
      );
    }}

${({ desktopWidth }) => {
      return desktopWidth
        ? css`
            ul {
              margin: 0;
            }
          `
        : css`
            ul {
              max-height: 0;
              overflow: hidden;
            }
          `;
    }}
  }
`;
