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
  bgc?: string; // TODO: delete
  flexWrap?: "wrap" | "no-wrap";
}

export const StyledWrapperStandart = styled.div<IStyledWrapper>`
  background-color: ${({ bgc }) => bgc};

  ${({ display, justify, alignItems }) => {
    switch (display) {
      case "flex":
        return css`
          display: flex;
          justify-content: ${justify || "center"};
          align-items: ${alignItems || "center"};
        `;

      // case "sidebar":
      //   return css`
      //     position: absolute;
      //     top: 0;
      //     left: 0;
      //     width: 300px;
      //     height: 100vh;
      //     padding: 20px 30px;
      //     background-color: ${({ theme }) => theme.colors.white};
      //     border-right: 1px solid ${({ theme }) => theme.colors.grey};
      //     z-index: 99999;
      //   `;

      // case "home-info":
      //   return css`
      //     position: relative;
      //     &::after {
      //       content: "";
      //       position: absolute;
      //       width: 100%;
      //       height: 35px;
      //       background: linear-gradient(rgba(255, 255, 255, 0), #fff);
      //       bottom: 0;
      //       left: 0;
      //       z-index: 5;
      //     }
      //   `;

      default:
        return css`
          display: block;
        `;
    }
  }};
`;
