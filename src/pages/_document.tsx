/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://taskfy.vercel.app/" />

          <meta
            name="google-site-verification"
            content="cqR-9eTLBmnbh0XpDXQQLZpzqUzCXFie71s6ohl1HsI"
          />

          <meta name="author" content="Miguel Ângelo" />
          <meta
            name="description"
            content="Um lugar onde você pode criar listas, tarefas, lembretes e times, além de acompanhar o desempenho de tudo!"
          />
          <meta name="keywords" content="task, to-do, todo, list, teams, family, manager" />
          <meta name="theme-color" content="#00C6D3" />

          <meta name="robots" content="index, follow" />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="Um lugar onde você pode criar listas, tarefas, lembretes e times, além de acompanhar o desempenho de tudo!"
          />
          <meta name="twitter:title" content="Taskfy - A melhor forma de organizar seu trabalho" />
          <meta name="twitter:image" content="https://taskfy.vercel.app/img/preview.png" />
          <meta name="twitter:creator" content="@guel5g" />
          <meta name="twitter:site" content="@guel5g" />

          <meta name="geo.placename" content="Brasil" />
          <meta name="geo.region" content="BR" />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://taskfy.vercel.app/" />
          <meta property="og:title" content="Taskfy - A melhor forma para organizar seu trabalho" />
          <meta property="og:image" content="https://taskfy.vercel.app/img/preview.png" />
          <meta
            property="og:description"
            content="Um lugar onde você pode criar listas, tarefas, lembretes e times, além de acompanhar o desempenho de tudo!"
          />

          {/* <meta name="format-detection" content="telephone=no" /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
