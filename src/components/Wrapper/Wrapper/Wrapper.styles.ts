import styled, { css } from "styled-components";

interface IObjectKeys {
  [key: string]: number | string | undefined;
}

interface IMedia extends IObjectKeys {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
}

interface IStyledWrapper {
  display?: string;
  justify?: "start" | "center" | "end";
  align?: "start" | "center" | "end";
  minWidth?: string;
  width?: string;
  height?: string;
  margin?: IMedia | string;
  bgc?: string;
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  order?: IMedia | number;
  flexWrap?: IMedia | string;
}

export const StyledWrapper = styled.div<IStyledWrapper>`
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background-color: ${({ bgc }) => bgc};
  /* order: ${({ order }) => order}; */
  overflow: ${({ overflow }) => overflow};

  ${({ margin, theme }) => {
    if (typeof margin === "string") {
      return css`
        margin: ${margin};
      `;
    }

    if (typeof margin === "object") {
      let templateLiteral = ``;
      Object.entries(margin).forEach((item) => {
        const size = theme.media[item[0]];

        templateLiteral += `
          @media ${size} {
            margin: ${item[1]};
          }
        `;
      });

      return templateLiteral;
    }
  }};

  ${({ flexWrap }) => {
    if (typeof flexWrap === "string") {
      return css`
        flex-wrap: ${flexWrap};
      `;
    }

    if (typeof flexWrap === "object") {
      for (let key in flexWrap) {
        return css`
          @media ${({ theme }) => theme.media[key]} {
            flex-wrap: ${flexWrap[key]};
          }
        `;
      }
    }
  }};

  ${({ order }) => {
    if (typeof order === "number") {
      return css`
        order: ${order};
      `;
    }

    if (typeof order === "object") {
      for (let key in order) {
        return css`
          @media ${({ theme }) => theme.media[key]} {
            order: ${order[key]};
          }
        `;
      }
    }
  }};

  ${({ display, justify, align }) => {
    switch (display) {
      case "flex":
        return css`
          display: flex;
          justify-content: ${justify || "none"};
          align-items: ${align || "center"};
        `;

      case "inline":
        return css`
          display: inline;
        `;
      case "inlineBlock":
        return css`
          display: inline-block;
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
          border-right: 1px solid ${({ theme }) => theme.colors.grey};
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
