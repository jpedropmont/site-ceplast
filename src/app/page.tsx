'use client';

import React from 'react';
import Header from '../components/Header';
import ShowcaseSection from '../components/ShowcaseSection';
import AboutSection from '../components/AboutSection';
import CompanyInfoSection from '../components/CompanyInfoSection';
import Footer from '../components/Footer';
import { PrefetchLinks } from '../components/PrefetchLinks';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PrefetchLinks />
      <Header />
      <ShowcaseSection />
      <AboutSection />

      {/* CTA Section - Resumo dos Segmentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#010066] mb-6">
              Atendemos Diversos Segmentos
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
              Frigoríficos, Laticínios, Pescados, Produtos Regionais e Soluções
              Industriais
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-200">
            <a
              href="/segmentos"
              className="inline-flex items-center bg-[#010066] text-white px-8 py-4 font-bold rounded-lg hover:bg-[#bd0811] transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              Ver Todos os Segmentos
            </a>
            <a
              href="/produtos"
              className="inline-flex items-center border-2 border-[#010066] text-[#010066] px-8 py-4 font-bold rounded-lg hover:bg-[#010066] hover:text-white transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              Nossos Produtos
            </a>
          </div>
        </div>
      </section>

      <CompanyInfoSection />
      <Footer />
    </main>
  );
}
