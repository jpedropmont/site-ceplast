'use client';

import { track } from '@vercel/analytics';
import type { ComponentProps, MouseEvent } from 'react';
import { reportGoogleAdsConversion } from '@/lib/googleAds';
import { generateWhatsAppURL } from '@/utils/whatsapp';

export type WhatsAppMessageContext = 'general' | 'segment' | 'quote';

export type WhatsAppTrackedLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  analyticsLocation: string;
  waContext: WhatsAppMessageContext;
  segmentId?: string;
  segmentName?: string;
};

export function WhatsAppTrackedLink({
  analyticsLocation,
  waContext,
  segmentId,
  segmentName,
  onClick,
  ...rest
}: WhatsAppTrackedLinkProps) {
  const href = generateWhatsAppURL(waContext, segmentId, segmentName);

  return (
    <a
      {...rest}
      href={href}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        track('whatsapp_click', {
          location: analyticsLocation,
          wa_context: waContext,
          ...(segmentId ? { segment_id: segmentId } : {}),
        });
        reportGoogleAdsConversion();
        onClick?.(e);
      }}
    />
  );
}
