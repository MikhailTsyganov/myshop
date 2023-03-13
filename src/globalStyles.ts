import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#cb11ab",
    secondary: "#481173",
    semitransparent: "rgba(255, 255, 255, 0.5)",
    white: "#fff",
    searchBackground: "rgba(255, 255, 255, 0.2)",
    borderSidebar: "#868695",
    backdrop: "rgba(0, 0, 0, 0.5)",
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
