import { Html, Head, Main, NextScript } from "next/document";
import { Partytown } from '@builder.io/partytown/react';
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
        <Partytown debug={true} forward={['dataLayer.push', 'gtag']} />
        <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=GTM-P2SJ37K8"></script>
        <script type="text/partytown" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-P2SJ37K8');
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
