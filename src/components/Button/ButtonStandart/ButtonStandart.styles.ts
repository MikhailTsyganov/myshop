import styled, { css } from "styled-components";

interface StyledButtonStandartProps {
  primary?: boolean;
  outlined?: boolean;
  display?: "flex";
  alignItems?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
  type?: "submit";
}

export const StyledButtonStandart = styled.button.attrs((props) => ({
  type: props.type || "button",
}))<StyledButtonStandartProps>`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  ${({ display, justify, alignItems }) => {
    switch (display) {
      case "flex":
        return css`
          display: flex;
          justify-content: ${justify || "center"};
          align-items: ${alignItems || "center"};
        `;

      default:
        return css`
          display: block;
        `;
    }
  }};

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `}
`;
