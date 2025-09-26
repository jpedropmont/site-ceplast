'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { ArrowRight, Shield, Leaf, Package } from 'lucide-react';
import { generateWhatsAppURL } from '@/utils/whatsapp';

export default function NaturaisRegionaisPage() {
  const products = [
    {
      name: 'Castanhas',
      image: '/assets/amendoim.jpg',
      description:
        'Embalagens que preservam crocância e sabor de castanhas diversas.',
    },
    {
      name: 'Amendoim',
      description:
        'Proteção contra umidade e pragas para amendoim cru e processado.',
    },
    {
      name: 'Macaxeira',
      image: '/assets/macaxeira.jpg',
      description: 'Soluções para macaxeira descascada e processada.',
    },
    {
      name: 'Tapioca',
      description: 'Embalagens para massa de tapioca e produtos derivados.',
    },
    {
      name: 'Frutas Secas',
      description: 'Proteção para frutas desidratadas e produtos naturais.',
    },
    {
      name: 'Produtos Regionais',
      description: 'Soluções personalizadas para alimentos típicos regionais.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Natural',
      description: 'Mantém propriedades naturais dos alimentos',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Embalagens eco-friendly para produtos naturais',
    },
    {
      icon: Package,
      title: 'Versatilidade',
      description: 'Soluções com e sem vácuo conforme necessidade',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#010066] to-[#bd0811] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Embalagens para Produtos Naturais e Regionais
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                Soluções especializadas para castanhas, amendoim, macaxeira,
                tapioca e produtos regionais. Preservamos autenticidade e
                qualidade dos alimentos naturais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={generateWhatsAppURL('quote', 'naturais-e-regionais')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 font-bold rounded-lg hover:bg-[#128C7E] transition-all duration-300"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/amendoim.jpg"
                  alt="Embalagens para Produtos Naturais"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#010066] text-center mb-12 animate-fade-in-up">
            Preservando o Natural
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-[#010066] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#010066] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#010066] text-center mb-12 animate-fade-in-up">
            Produtos Naturais e Regionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-[#010066] mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#010066] mb-8 animate-fade-in-up">
              Embalagens Especializadas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>Embalagens para castanhas</div>
              <div>Embalagens para amendoim</div>
              <div>Embalagens para macaxeira</div>
              <div>Embalagens para tapioca</div>
              <div>Embalagens para frutas secas</div>
              <div>Embalagens para produtos regionais</div>
              <div>Embalagens naturais</div>
              <div>Embalagens sustentáveis</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#010066] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Valorize seus Produtos Naturais
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Preserve a autenticidade e qualidade dos seus produtos regionais com
            nossas embalagens especializadas.
          </p>
          <a
            href={generateWhatsAppURL('quote', 'naturais-e-regionais')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#25D366] text-white px-10 py-5 font-bold text-lg rounded-lg hover:bg-[#128C7E] transition-all duration-300 animate-fade-in-up animate-delay-400"
          >
            Falar com Especialista
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
