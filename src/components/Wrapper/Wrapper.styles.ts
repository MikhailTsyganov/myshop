import styled, { css } from "styled-components";

interface IStyledWrapper {
  display?: string;
  /////////ADD
  justify?: "start" | "center" | "end";
  align?: "start" | "center" | "end";
  width?: string;
  height?: string;
  margin?: string;
  bgc?: string;
  overflow?: "visible" | "hidden" | "scroll" | "auto";
}

export const StyledWrapper = styled.div<IStyledWrapper>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background-color: ${({ bgc }) => bgc};
  overflow: ${({ overflow }) => overflow};

  ${({ display, justify, align }) => {
    switch (display) {
      case "flex":
        return css`
          display: flex;
          justify-content: ${justify || "none"};
          align-items: ${align || "center"};
        `;

      case "sidebar":
        return css`
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          height: 100vh;
          padding: 20px 30px;
          background-color: ${({ theme }) => theme.colors.white};
          border-right: 1px solid ${({ theme }) => theme.colors.borderSidebar};
          z-index: 99999;
        `;

      case "home-info":
        return css`
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 35px;
            background: linear-gradient(rgba(255, 255, 255, 0), #fff);
            bottom: 0;
            left: 0;
            z-index: 5;
          }
        `;

      default:
        return css`
          display: block;
        `;
    }
  }};
`;
