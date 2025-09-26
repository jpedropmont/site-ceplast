'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { ArrowRight, Shield, Thermometer, Beef } from 'lucide-react';
import { generateWhatsAppURL } from '@/utils/whatsapp';
import { image } from 'framer-motion/client';

export default function FrigorificosPage() {
  const products = [
    {
      name: 'Carnes Bovinas',
      image: '/assets/nylonpoli.jpg',
      description:
        'Embalagens especiais para cortes bovinos, preservando maciez e sabor natural.',
    },
    {
      name: 'Carnes Suínas',
      image: '/assets/suina.png',
      description:
        'Proteção ideal para bacon, linguiça e outros derivados suínos.',
    },
    {
      name: 'Aves',
      image: '/assets/frango.webp',
      description:
        'Soluções para frango inteiro, filés e produtos avícolas processados.',
    },
    {
      name: 'Embutidos',
      image: '/assets/linguica.jpeg',
      description:
        'Embalagens para salames, linguiças e produtos cárneos curados.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Total',
      description: 'Barreira contra oxidação e contaminação externa',
    },
    {
      icon: Thermometer,
      title: 'Controle Térmico',
      description: 'Mantém temperatura ideal durante armazenamento',
    },
    {
      icon: Beef,
      title: 'Qualidade Cárnea',
      description: 'Preserva cor, textura e propriedades organolépticas',
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
                Embalagens para Frigoríficos
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                Soluções especializadas para a indústria cárnea, garantindo
                qualidade, segurança e prolongamento da vida útil dos produtos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={generateWhatsAppURL('quote', 'frigoríficos')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 font-bold rounded-lg hover:bg-[#128C7E] transition-all duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/nylonpoli.jpg"
                  alt="Embalagens para Frigoríficos"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-sm">
                  Imagem ilustrativa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#010066] text-center mb-12 animate-fade-in-up">
            Especialidade em Produtos Cárneos
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
            Produtos Frigoríficos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <h3 className="text-xl font-bold text-[#010066] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#010066] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Produtos Cárneos com Qualidade Superior
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Garanta que seus produtos cárneos cheguem ao consumidor com todo
            frescor e qualidade.
          </p>
          <a
            href={generateWhatsAppURL('quote', 'frigoríficos')}
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
