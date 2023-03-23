import styled, { css } from "styled-components";

interface StyledButtonStandartProps {
  primary?: boolean;
  outlined?: boolean;
  padding?: string;
  margin?: string;
  fSize?: string;
  fWeight?: string;
  borderRadius?: string;
  textAlign?: "start" | "center" | "end";
}

export const StyledButtonStandart = styled.button<StyledButtonStandartProps>`
  display: block;
  margin: ${({ margin }) => margin || "0 auto"};
  padding: ${({ padding }) => padding || 0};

  font-size: ${({ fSize }) => fSize || "16px"};
  font-weight: ${({ fWeight }) => fWeight || "600"};

  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `}
`;
