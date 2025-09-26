'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { generateWhatsAppURL } from '@/utils/whatsapp';
import Image from 'next/image';

const SegmentsSection = () => {
  const segments = [
    {
      title: 'Frigoríficos',
      slug: 'frigorificos',
      image: '/assets/nylonpoli.jpg',
      description:
        'Embalagens a vácuo especializadas para carnes bovinas, suínas, aves e embutidos. Garantem frescor, aumentam a vida útil e mantêm a qualidade do produto.',
      products: ['Carnes Bovinas', 'Aves', 'Embutidos', 'Suínos'],
    },
    {
      title: 'Laticínios',
      slug: 'laticinios',
      image: '/assets/tres-soldas.png',
      description:
        'Embalagens para queijos, iogurtes, manteigas e derivados lácteos. Preservam sabor, textura e propriedades nutricionais por mais tempo.',
      products: ['Queijos', 'Iogurtes', 'Manteigas', 'Derivados Lácteos'],
    },
    {
      title: 'Pescados',
      slug: 'pescados',
      image: '/assets/file-peixe.jpg',
      description:
        'Soluções para peixes frescos, congelados, frutos do mar e outros produtos pesqueiros. Preservam frescor e reduzem odores.',
      products: ['Peixes Frescos', 'Camarões', 'Frutos do Mar', 'Filés'],
    },
    {
      title: 'Naturais e Regionais',
      slug: 'naturais-e-regionais',
      image: '/assets/amendoim.jpg',
      description:
        'Embalagens para produtos regionais como castanhas, amendoim, frutas secas e outros. Soluções com e sem vácuo conforme necessidade.',
      products: ['Castanhas', 'Amendoim', 'Frutas Secas', 'Produtos Regionais'],
    },
  ];

  return (
    <section id="segmentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Segmentos */}
        <div className="space-y-20">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } animate-fade-in-up animate-delay-${index * 200 + 200}`}
            >
              {/* Imagem */}
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-[#010066] mb-4">
                    {segment.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {segment.description}
                  </p>
                </div>

                {/* Produtos */}
                <div>
                  <h4 className="text-sm font-semibold text-[#010066] mb-3 uppercase tracking-wider">
                    Produtos Atendidos
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {segment.products.map((product, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-gray-600 border-l-2 border-[#bd0811] pl-3"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={`/embalagens-a-vacuo/${segment.slug}`}
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg text-white bg-[#010066] hover:bg-[#bd0811] transition-colors duration-300"
                  >
                    Saber Mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href={generateWhatsAppURL('quote', segment.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold border-2 border-[#010066] text-[#010066] rounded-lg hover:bg-[#010066] hover:text-white transition-all duration-300"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-20 py-16 border-t border-gray-200 animate-fade-in-up animate-delay-800">
          <h3 className="text-3xl font-bold text-[#010066] mb-6">
            Não encontrou seu segmento?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Atendemos diversos outros mercados com soluções personalizadas.
            Entre em contato e vamos desenvolver a embalagem ideal para seu
            produto.
          </p>
          <a
            href={generateWhatsAppURL('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#bd0811] text-white px-10 py-5 font-bold text-lg rounded-lg hover:bg-[#010066] transition-colors duration-300 hover:shadow-xl transform hover:scale-105"
          >
            Falar com Especialista
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
