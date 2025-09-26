'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const PrefetchLinks = () => {
  const router = useRouter();

  useEffect(() => {
    // Prefetch todas as rotas principais após 1 segundo
    const timer = setTimeout(() => {
      router.prefetch('/sobre');
      router.prefetch('/segmentos');
      router.prefetch('/produtos');
      router.prefetch('/contato');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
};
