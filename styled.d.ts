import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      semitransparent: string;
      white: string;
      black: string;
      searchBackground: string;
      grey: string;
      backdrop: string;
    };

    media: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  }
}
