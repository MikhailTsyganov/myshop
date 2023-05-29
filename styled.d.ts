import "styled-components";

declare module "styled-components" {
  export interface UseTheme {
    colors: {
      primary: string;
      secondary: string;
      semitransparent: string;
      white: string;
      black: string;
      searchBackground: string;
      grey: string;
      lightGrey: string;
      backdrop: string;
      bgcCounter: string;
    };

    media: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };

    windowSize: {
      tablet: number;
      desktop: number;
    };
  }
}
