import styled, { css } from "styled-components";

interface ITitle3 {
  margin?: string;
  fSize?: string;
  black?: boolean;
  white?: boolean;
  grey?: boolean;
}

export const StyledTitle3 = styled.h3<ITitle3>`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0 auto"};
  font-size: ${(props) => props.fSize || "18px"};

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
