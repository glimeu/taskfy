import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Dark from '../styles/themes/Dark';
import GlobalStyle from '../styles/Global';
import UserProvider from '../hooks/User';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={Dark}>
    <UserProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserProvider>
  </ThemeProvider>
);

export default App;
