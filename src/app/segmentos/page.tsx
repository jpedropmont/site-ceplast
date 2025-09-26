'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SegmentsSection from '../../components/SegmentsSection';

export default function SegmentosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#010066] to-[#bd0811] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Nossos Segmentos
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Soluções especializadas em embalagens para cada setor, atendendo às
            necessidades específicas de cada mercado.
          </p>
        </div>
      </section>

      <div className="animate-fade-in-up animate-delay-400">
        <SegmentsSection />
      </div>

      <Footer />
    </main>
  );
}
