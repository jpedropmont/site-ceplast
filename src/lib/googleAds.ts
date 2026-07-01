/**
 * Conversões Google Ads via gtag.
 * Configure em produção:
 * - NEXT_PUBLIC_GOOGLE_ADS_ID          → ex.: AW-123456789
 * - NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO → ex.: AW-123456789/AbCdEfGhIjKlMnOpQr
 * O valor send_to vem em Ferramentas → Medições → Conversões → sua conversão → Marcador do site.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function reportGoogleAdsConversion(): void {
  const sendTo =
    typeof process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO === 'string'
      ? process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO.trim()
      : '';

  if (!sendTo || typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'conversion', {
    send_to: sendTo,
  });
}
