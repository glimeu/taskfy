import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      title: string;
      textOne: string;
      textTwo: string;

      backgroundOne: string;
      backgroundTwo: string;
      backgroundThree: string;

      app: string;
      appLight: string;
    };
  }
}
