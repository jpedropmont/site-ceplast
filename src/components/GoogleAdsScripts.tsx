import Script from 'next/script';

const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();

/**
 * Carrega gtag.js apenas quando NEXT_PUBLIC_GOOGLE_ADS_ID está definido (ex.: AW-…).
 */
export function GoogleAdsScripts() {
  if (!googleAdsId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleAdsId)}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(googleAdsId)});
        `}
      </Script>
    </>
  );
}
