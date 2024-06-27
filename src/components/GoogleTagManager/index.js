/** 
 * copied from https://github.com/vercel/next.js/blob/canary/packages/third-parties/src/google/gtm.tsx
 * to have more control over the Script tag
*/

import Script from 'next/script'

export default function GoogleTagManager(props) {
  const { gtmId, dataLayerName = 'dataLayer', dataLayer } = props

  const gtmLayer = dataLayerName !== 'dataLayer' ? `&l=${dataLayerName}` : ''

  return (
    <>
      <Script
        id="_next-gtm-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ''}
      })(window,'${dataLayerName}');`,
        }}
      />
      <Script
        id="_next-gtm"
        strategy="beforeInteractive"
        data-ntpc="GTM"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}${gtmLayer}`}
      />
    </>
  )
}