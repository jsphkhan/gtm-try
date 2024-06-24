import { GoogleTagManager } from '@next/third-parties/google'

/**
 * Tag Manager Integrated from 
 * https://tagmanager.google.com/#/container/accounts/6236365334/containers/188129135/workspaces/3 
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-P2SJ37K8" />
    </>
  );
}
