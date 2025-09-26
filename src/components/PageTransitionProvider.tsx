'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#010066] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-[#010066] font-medium">Carregando...</p>
        </div>
      </div>
    );
  }

  return <div className="fade-in">{children}</div>;
};
