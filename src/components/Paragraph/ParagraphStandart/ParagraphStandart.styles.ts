import styled, { css } from "styled-components";

interface IParagraph {
  fSize?: string;
  black?: boolean;
  white?: boolean;
  grey?: boolean;
}

export const StyledParagraphStandart = styled.p<IParagraph>`
  font-size: ${(props) => props.fSize || "16px"};

  ${({ black }) =>
    black &&
    css`
      color: ${({ theme }) => theme.colors.black};
    `}
  ${({ white }) =>
    white &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ grey }) =>
    grey &&
    css`
      color: ${({ theme }) => theme.colors.grey};
    `}
`;
