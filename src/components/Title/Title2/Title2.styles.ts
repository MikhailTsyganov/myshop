import styled, { css } from "styled-components";

interface ITitle {
  margin?: string;
  fSize?: string;
  black?: boolean;
  white?: boolean;
  grey?: boolean;
}

export const StyledTitle2 = styled.h2<ITitle>`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0 auto"};
  font-size: ${(props) => props.fSize || "20px"};

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
