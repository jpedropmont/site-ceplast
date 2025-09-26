'use client';

import React from 'react';
import {
  ArrowLeft,
  CheckCircle,
  Package,
  Truck,
  Shield,
  Clock,
} from 'lucide-react';
import Link from 'next/link';
import { Segment } from '@/content/segmentos';
import { generateWhatsAppURL } from '@/utils/whatsapp';

interface SegmentLayoutProps {
  segment: Segment;
  children?: React.ReactNode;
}

const iconMap = {
  Beef: '🥩',
  Milk: '🥛',
  Fish: '🐟',
  Leaf: '🌿',
  Package: '📦',
  Factory: '🏭',
};

const SegmentLayout: React.FC<SegmentLayoutProps> = ({ segment, children }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com botão voltar */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#010066] hover:text-[#bd0811] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Voltar para Página Inicial</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="text-2xl">
                {iconMap[segment.icon as keyof typeof iconMap] || '📦'}
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#010066]">
                  {segment.title}
                </h1>
                <p className="text-sm text-gray-600">
                  {segment.type === 'vacuum'
                    ? 'Embalagem a Vácuo'
                    : 'Embalagem Especial'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className={`${segment.gradient} text-white py-20 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">
              {iconMap[segment.icon as keyof typeof iconMap] || '📦'}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Embalagens para {segment.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {segment.detailedDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {segment.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#010066] mb-6">
              Principais Benefícios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra como nossas embalagens especializadas podem transformar
              seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segment.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#010066] mb-6">
              Aplicações Específicas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Produtos ideais para utilizar nossa tecnologia de embalagem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segment.applications.map((application, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <Package className="h-8 w-8 text-[#bd0811] mb-4" />
                <h3 className="font-semibold text-[#010066] mb-2">
                  {application}
                </h3>
                <p className="text-sm text-gray-600">
                  Embalagem especializada para garantir qualidade e conservação
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especificações Técnicas */}
      {segment.technicalSpecs && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#010066] mb-6">
                Especificações Técnicas
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Detalhes técnicos das nossas embalagens especializadas
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {segment.technicalSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <Shield className="h-6 w-6 text-[#bd0811] flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vantagens da Ceplast */}
      <section className="py-20 bg-[#010066] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que Escolher a Ceplast?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Mais de 20 anos de experiência em embalagens especializadas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-[#bd0811] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Experiência</h3>
              <p className="text-white/90">
                Mais de 20 anos no mercado de embalagens especializadas
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-[#bd0811] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Qualidade</h3>
              <p className="text-white/90">
                Embalagens de alta qualidade com rigoroso controle de produção
              </p>
            </div>

            <div className="text-center">
              <Truck className="h-12 w-12 text-[#bd0811] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Logística</h3>
              <p className="text-white/90">
                Entrega especializada no Norte e Nordeste
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#010066] mb-6">
              Fale com Nossa Equipe
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e solicite um orçamento personalizado para
              embalagens de {segment.title.toLowerCase()}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generateWhatsAppURL('segment', segment.id, segment.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#bd0811] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#a00710] transition-colors"
              >
                Solicitar Orçamento
              </a>
              <Link
                href="/"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center border-2 border-[#010066] text-[#010066] px-8 py-4 rounded-lg font-semibold hover:bg-[#010066] hover:text-white transition-colors"
              >
                Ver Outros Segmentos
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Você será direcionado para nossa equipe especializada
            </p>
          </div>
        </div>
      </section>

      {children}
    </div>
  );
};

export default SegmentLayout;
