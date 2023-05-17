import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#cb11ab',
    secondary: '#481173',
    semitransparent: 'rgba(255, 255, 255, 0.5)',
    white: '#fff',
    black: '#000',
    searchBackground: 'rgba(255, 255, 255, 0.2)',
    grey: '#868695',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    bgcCounter: '#f1f1f5',
    bgcBasket: '#f6f6f9',
  },
  media: {
    xxs: '(max-width: 575px)',
    xs: '(max-width: 767px)',
    sm: '(max-width: 1023px)',
    md: '(max-width: 1199px)',
    lg: '(min-width: 1200px)',
  },
  windowSize: {
    tablet: 768,
    desktop: 1024,
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
  
  ul,p {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none; 
    color: #000;
  }
  
  `;
