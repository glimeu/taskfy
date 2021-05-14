import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Dark from '../styles/themes/Dark';
import GlobalStyle from '../styles/Global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={Dark}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
