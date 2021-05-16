import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Dark from '../styles/themes/Dark';
import GlobalStyle from '../styles/Global';
import UserProvider from '../hooks/User';
import AlertProvider from '../hooks/Alert';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={Dark}>
    <AlertProvider>
      <UserProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UserProvider>
    </AlertProvider>
  </ThemeProvider>
);

export default App;
