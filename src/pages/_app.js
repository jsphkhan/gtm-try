import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-P2SJ37K8" />
    </>
  );
}
