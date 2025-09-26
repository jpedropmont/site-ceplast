import React, { useState } from 'react';
import Image from 'next/image';
import { generateWhatsAppURL } from '@/utils/whatsapp';

function CatalogSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const toggleImageExpansion = (imageSrc: string) => {
    setExpandedImage(expandedImage === imageSrc ? null : imageSrc);
  };
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* 1. CATEGORIA: TIPOS DE MATERIAL */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
              <h3 className="px-8 text-3xl font-light text-[#010066] whitespace-nowrap">
                1. TIPOS DE MATERIAL
              </h3>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                {
                  name: 'Nylon Poli',
                  desc: 'Indicado para embalagens a vácuo de carnes, pescados, queijos e outros alimentos perecíveis.',
                  image: '/assets/nylonpoli.jpg',
                },
                {
                  name: 'MRP (Maxima Resistencia a Perfuração)',
                  desc: 'Oferece maior barreira e resistência. Ideal para alimentos perfurantes.',
                  image: '/assets/mrp.webp',
                },
                {
                  name: 'PE (Polietileno)',
                  desc: 'Usado em embalagens simples ou como camada interna em estruturas laminadas.',
                  image: '/assets/pe.webp',
                },
                {
                  name: 'PET + PE (Poliéster + Polietileno)',
                  desc: 'Ideal para embalagens com impressão, usado em produtos secos ou úmidos.',
                  image: '/assets/pet-pe.webp',
                },
                {
                  name: 'Laminado',
                  desc: 'Estrutura composta por duas ou mais camadas (ex: PET/PE, PET/ALU/PE), usada para resistência, barreira e estética.',
                  image: '/assets/laminado.png',
                },
                {
                  name: 'Termoencolhível',
                  desc: 'Filme que encolhe com calor, utilizado para embalar carnes, frangos, queijos, etc.',
                  image: '/assets/termoencolhivel.jpg',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 relative cursor-pointer ${
                      expandedImage === item.image ? 'w-48 h-48' : 'w-32 h-32'
                    }`}
                    onClick={() => toggleImageExpansion(item.image)}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    {/* Texto "Imagem meramente ilustrativa" */}
                    <div className="absolute bottom-0.5 left-0.5 bg-black/70 text-white text-[10px] px-1 py-0.5 rounded-sm">
                      Imagem ilustrativa
                    </div>
                    {/* Lupa sempre visível */}
                    <div className="absolute top-2 right-2 bg-white/90 text-[#010066] rounded-full p-1.5 shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="border-l-3 border-[#bd0811] pl-6 py-4 hover:border-l-6 transition-all duration-300 min-h-[128px] flex flex-col justify-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#010066] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. CATEGORIA: TIPOS DE FORMATO */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
              <h3 className="px-8 text-3xl font-light text-[#010066] whitespace-nowrap">
                2. TIPOS DE FORMATO
              </h3>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                {
                  name: 'Sacos',
                  desc: 'Para vácuo ou produtos diversos, oferecendo praticidade no manuseio e armazenamento.',
                  image: '/assets/saco-simples.webp',
                },
                {
                  name: 'Bobinas',
                  desc: 'Para envase automático em máquinas, garantindo eficiência na linha de produção.',
                  image: '/assets/stretch.jpg',
                },
                {
                  name: 'Três Soldas',
                  desc: 'Embalagem padrão com solda lateral e inferior, proporcionando vedação segura.',
                  image: '/assets/tres-soldas.png',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-6"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div
                    className={`flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 relative cursor-pointer ${
                      expandedImage === item.image ? 'w-48 h-48' : 'w-32 h-32'
                    }`}
                    onClick={() => toggleImageExpansion(item.image)}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    {/* Texto "Imagem meramente ilustrativa" */}
                    <div className="absolute bottom-0.5 left-0.5 bg-black/70 text-white text-[10px] px-1 py-0.5 rounded-sm">
                      Imagem ilustrativa
                    </div>
                    {/* Lupa sempre visível */}
                    <div className="absolute top-2 right-2 bg-white/90 text-[#010066] rounded-full p-1.5 shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="border-l-3 border-[#010066] pl-6 py-4 hover:border-l-6 transition-all duration-300 min-h-[128px] flex flex-col justify-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#bd0811] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. CATEGORIA: TIPO DE ACABAMENTO / CUSTOMIZAÇÃO VISUAL */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
              <h3 className="px-8 text-3xl font-light text-[#010066] whitespace-nowrap">
                3. ACABAMENTO VISUAL
              </h3>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                {
                  name: 'Liso',
                  desc: 'Embalagem sem impressão, mantendo a transparência natural do material.',
                  image: '/assets/liso.jpeg',
                },
                {
                  name: 'Impresso',
                  desc: 'Embalagem com layout personalizado, ideal para branding e informações do produto.',
                  image: '/assets/impresso.jpeg',
                },
                {
                  name: 'Metalizado',
                  desc: 'Camada metalizada para aparência premium e proteção adicional contra luz.',
                  image: '/assets/laminado.png',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`flex-shrink-0 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 relative cursor-pointer ${
                      expandedImage === item.image ? 'w-48 h-48' : 'w-32 h-32'
                    }`}
                    onClick={() => toggleImageExpansion(item.image)}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    {/* Texto "Imagem meramente ilustrativa" */}
                    <div className="absolute bottom-0.5 left-0.5 bg-black/70 text-white text-[10px] px-1 py-0.5 rounded-sm">
                      Imagem ilustrativa
                    </div>
                    {/* Lupa sempre visível */}
                    <div className="absolute top-2 right-2 bg-white/90 text-[#010066] rounded-full p-1.5 shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="border-l-3 border-[#010066] pl-6 py-4 hover:border-l-6 transition-all duration-300 min-h-[128px] flex flex-col justify-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#bd0811] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href={generateWhatsAppURL('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 font-bold text-lg rounded-lg hover:bg-[#128C7E] transition-colors hover:shadow-xl transform hover:scale-105"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

export default CatalogSection;
