import { Html, Head, Main, NextScript } from "next/document";
// import Script from 'next/script';

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
        {/* <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-P2SJ37K8"
          strategy="afterInteractive"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
