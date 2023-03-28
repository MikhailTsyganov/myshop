import styled, { css } from "styled-components";

interface ITitle {
  fSize?: string;
  black?: boolean;
  white?: boolean;
  grey?: boolean;
}

export const StyledTitle1 = styled.h1<ITitle>`
  color: ${(props) => props.color};
  margin: 0 auto;
  font-size: ${(props) => props.fSize || "24px"};

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
