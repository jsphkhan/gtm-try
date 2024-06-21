import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2SJ37K8');
          `
        }}></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-P2SJ37K"
          strategy="afterInteractive"
        />
        {/* GTM No Script */}
        {/* <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2SJ37K8"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript> */}
        {/* End GTM No Script */}
      </body>
    </Html>
  );
}
