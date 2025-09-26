'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { generateWhatsAppURL } from '@/utils/whatsapp';

export default function LaticiniosPage() {
  const products = [
    {
      name: 'Queijos',
      description:
        'Embalagens que preservam sabor, textura e aroma dos queijos artesanais e industriais.',
    },
    {
      name: 'Bisnagas',
      description:
        'Embalagens especializadas para bisnagas de produtos lácteos como cream cheese, requeijão e similares.',
    },
    {
      name: 'Bebidas lácteas',
      description:
        'Soluções de embalagem para bebidas lácteas, mantendo qualidade e frescor do produto.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Proteção contra Luz',
      description: 'Evita degradação de vitaminas e alterações de sabor',
    },
    {
      icon: Clock,
      title: 'Conservação Prolongada',
      description: 'Mantém frescor e qualidade nutricional por mais tempo',
    },
    {
      icon: Star,
      title: 'Qualidade Premium',
      description: 'Apresentação profissional que valoriza o produto',
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
                Embalagens para Laticínios
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                Soluções especializadas para queijos, iogurtes, manteigas e
                derivados lácteos. Preservamos sabor, textura e propriedades
                nutricionais com tecnologia avançada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={generateWhatsAppURL('quote', 'laticinios')}
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
                  src="/assets/tres-soldas.png"
                  alt="Embalagens para Laticínios"
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
            Vantagens para Laticínios
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
            Produtos Especializados
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

      {/* CTA */}
      <section className="py-16 bg-[#010066] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Valorize seus Produtos Lácteos
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Nossas embalagens garantem que seus laticínios cheguem ao consumidor
            com toda qualidade e frescor.
          </p>
          <a
            href={generateWhatsAppURL('quote', 'laticinios')}
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
