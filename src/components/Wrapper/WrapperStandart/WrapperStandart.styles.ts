import styled, { css } from "styled-components";

interface IStyledWrapper {
  display?: "flex";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  alignItems?: "start" | "center" | "end";
  alignContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "stretch";
  flexDirection?: "row" | "column";
  flexWrap?: "wrap" | "no-wrap";
}

export const StyledWrapperStandart = styled.div<IStyledWrapper>`
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
`;
