'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const PackagingTypesSection = () => {
  return (
    <section
      id="tipos-embalagem"
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#010066] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bd0811] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-[#010066] mb-12">
          Tipos de Acabamento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Printed Packaging Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col h-full">
              <div className="bg-[#bd0811] text-white p-4">
                <h3 className="text-xl font-bold">Embalagens Impressas</h3>
              </div>
              <div className="p-6 flex flex-col md:flex-row gap-6 flex-grow">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Embalagens personalizadas com sua marca, informações
                    nutricionais, códigos de barras e elementos visuais que
                    destacam seu produto no mercado.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#bd0811] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Personalização completa com até 10 cores
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#bd0811] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Fortalecimento da identidade da marca
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#bd0811] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Destaque nas prateleiras do varejo
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-40 md:h-full overflow-hidden rounded-lg">
                    <Image
                      src="/assets/impresso.jpeg"
                      alt="Embalagem Impressa"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plain Packaging Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col h-full">
              <div className="bg-[#010066] text-white p-4">
                <h3 className="text-xl font-bold">Embalagens Lisas</h3>
              </div>
              <div className="p-6 flex flex-col md:flex-row gap-6 flex-grow">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Embalagens sem impressão, ideais para uso interno, testes de
                    produto ou quando você precisa de uma solução rápida e
                    econômica.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#010066] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Excelente custo-benefício</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#010066] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Prazos de entrega reduzidos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#010066] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Mesma qualidade de proteção e conservação
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-40 md:h-full overflow-hidden rounded-lg">
                    <Image
                      src="/assets/liso.jpeg"
                      alt="Embalagem Lisa"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingTypesSection;
