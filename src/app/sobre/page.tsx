'use client';

import React from 'react';
import Header from '../../components/Header';
import AboutSection from '../../components/AboutSection';
import ProcessSection from '../../components/ProcessSection';
import CompanyInfoSection from '../../components/CompanyInfoSection';
import Footer from '../../components/Footer';

export default function SobrePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#010066] to-[#bd0811] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Sobre a Ceplast
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Mais de duas décadas de experiência em embalagens plásticas,
            oferecendo soluções inovadoras e de qualidade para diversos
            segmentos.
          </p>
        </div>
      </section>

      <AboutSection />
      <ProcessSection />
      <CompanyInfoSection />

      <Footer />
    </main>
  );
}
