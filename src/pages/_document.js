import { Html, Head, Main, NextScript } from "next/document";

/**
 * Renders only on server side
 */
export default function Document() {
  console.log('**** Document render ****');
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
