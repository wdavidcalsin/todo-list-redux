import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      third: string;
      inversColor: string;
      iconsColor: string;
      borderColor: string;

      background: string;
      text: string;
      textSecundary: string;
    };
  }
}
