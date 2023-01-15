import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: {
        900: string;
        800: string;
        700: string;
        500: string;
      };
      gray: {
        700: string;
        200: string;
      };
      white: {
        300: string;
        200: string;
        100: string;
      };
      blue: {
        900: string;
      };
      error: {
        900: string;
      };
    };
  }
}
