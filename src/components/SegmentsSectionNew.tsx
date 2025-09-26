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
        'Embalagens a vácuo especializadas para carnes, aves e embutidos.',
      products: ['Carnes', 'Embutidos', 'Aves'],
    },
    {
      title: 'Laticínios',
      slug: 'laticinios',
      image: '/assets/tres-soldas.png',
      description: 'Embalagens para queijos, iogurtes e derivados lácteos.',
      products: ['Queijos', 'Iogurtes', 'Manteigas'],
    },
    {
      title: 'Pescados',
      slug: 'pescados',
      image: '/assets/file-peixe.jpg',
      description: 'Soluções para peixes, frutos do mar e produtos pesqueiros.',
      products: ['Peixes', 'Camarões', 'Frutos do Mar'],
    },
    {
      title: 'Naturais e Regionais',
      slug: 'naturais-e-regionais',
      image: '/assets/amendoim.jpg',
      description:
        'Embalagens para castanhas, frutas secas e produtos regionais.',
      products: ['Castanhas', 'Amendoim', 'Frutas Secas'],
    },
  ];

  return (
    <section id="segmentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid de Segmentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Imagem */}
              <div className="w-48 h-32 flex-shrink-0">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#010066] mb-3">
                  {segment.title}
                </h3>
                <p className="text-gray-700 mb-4">{segment.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {segment.products.map((product, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {product}
                    </span>
                  ))}
                </div>

                {/* Botão */}
                <a
                  href={generateWhatsAppURL(
                    'quote',
                    segment.slug,
                    segment.title,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-white bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#010066] mb-4">
            Não encontrou seu segmento?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Atendemos diversos outros mercados com soluções personalizadas.
            Entre em contato e vamos desenvolver a embalagem ideal para seu
            produto.
          </p>
          <a
            href={generateWhatsAppURL('quote')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 font-bold rounded-lg hover:bg-[#128C7E] transition-all duration-300"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
