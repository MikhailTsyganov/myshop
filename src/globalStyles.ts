import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#cb11ab",
    secondary: "#481173",
    semitransparent: "rgba(255, 255, 255, 0.5)",
    white: "#fff",
    black: "#000",
    searchBackground: "rgba(255, 255, 255, 0.2)",
    grey: "#868695",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
  media: {
    xs: "(max-width: 767px)",
    sm: "(min-width: 768px) and (max-width: 1023px)",
    md: "(min-width: 1024px) and (max-width: 1199px)",
    lg: "(min-width: 1200px)",
  },
};

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
  }`;
