'use client';

import React from 'react';
import { ArrowRight, Package, Shield, Clock, Zap } from 'lucide-react';
import SegmentLayout from '../../../components/SegmentLayout';
import { segmentsData } from '../../../content/segmentos';
import { generateWhatsAppURL } from '@/utils/whatsapp';
import Image from 'next/image';

export default function BobinasPage() {
  const segment = segmentsData.find((s) => s.id === 'bobinas');
  if (!segment) return null;

  const benefits = [
    {
      icon: Package,
      title: 'Eficiência Operacional',
      description:
        'Aumento significativo na velocidade de produção e redução de desperdícios',
    },
    {
      icon: Shield,
      title: 'Qualidade Constante',
      description:
        'Controle rigoroso de qualidade garantindo uniformidade em toda a bobina',
    },
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description:
        'Redução de paradas para troca de material, otimizando o processo produtivo',
    },
    {
      icon: Zap,
      title: 'Compatibilidade Total',
      description:
        'Desenvolvidas especificamente para diversos tipos de máquinas e equipamentos',
    },
  ];

  const applications = [
    { name: 'Máquinas Automáticas de Embalar', image: null },
    { name: 'Equipamentos Semiautomáticos', image: null },
    { name: 'Linhas de Produção Industrial', image: null },
    { name: 'Sistemas de Termosolda', image: null },
  ];

  return (
    <SegmentLayout segment={segment}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#010066] to-[#bd0811] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Bobinas para Uso Industrial
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Filmes plásticos em bobinas desenvolvidos especialmente para
                  máquinas automáticas e semiautomáticas. Eficiência e qualidade
                  para sua produção industrial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={generateWhatsAppURL('quote', 'bobinas')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-[#010066] px-8 py-4 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">
                    Especificações Técnicas
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#bd0811] mr-2">•</span>
                      Espessura personalizada conforme equipamento
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd0811] mr-2">•</span>
                      Larguras variadas para diferentes máquinas
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd0811] mr-2">•</span>
                      Controle rigoroso de qualidade
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd0811] mr-2">•</span>
                      Compatibilidade com sistemas de solda
                    </li>
                  </ul>
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
            Vantagens para Sua Produção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="h-12 w-12 text-[#bd0811] mb-4" />
                <h3 className="text-xl font-bold text-[#010066] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#010066] text-center mb-12 animate-fade-in-up">
            Aplicações Industriais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-6 border border-gray-200 rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Package className="h-12 w-12 text-[#010066]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#010066] mb-2">
                    {application.name}
                  </h3>
                  <p className="text-gray-700">
                    Bobinas especializadas para uso em equipamentos industriais
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#010066] to-[#bd0811] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Equipamentos Industriais
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Entre em contato conosco e descubra como nossas bobinas industriais
            podem otimizar sua linha de produção.
          </p>
          <a
            href={generateWhatsAppURL('quote', 'bobinas')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#bd0811] text-white px-10 py-5 font-bold text-lg rounded-lg hover:bg-white hover:text-[#010066] transition-all duration-300 animate-fade-in-up animate-delay-400"
          >
            Falar com Especialista Industrial
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
        </div>
      </section>
    </SegmentLayout>
  );
}
