import React from 'react';
import { generateWhatsAppURL } from '@/utils/whatsapp';

function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#010066] mb-6">
            Catálogo de Produtos
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Organizados por categoria para facilitar sua escolha
          </p>
        </div>

        {/* Product Categories */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Por tipo de material */}
            <div className="bg-gray-50 rounded-xl p-6 animate-fade-in-up hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-[#bd0811] rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold text-[#010066]">
                  Por tipo de material
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Nylon Poli</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">MRP</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">PE</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">PET + PE</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Laminado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Termoencolhível</span>
                </div>
              </div>
            </div>

            {/* Por tipo de formato */}
            <div
              className="bg-gray-50 rounded-xl p-6 animate-fade-in-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-[#bd0811] rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">F</span>
                </div>
                <h3 className="text-xl font-bold text-[#010066]">
                  Por tipo de formato
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Sacos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Bobinas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Três Soldas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Embalagem Termoencolhível
                  </span>
                </div>
              </div>
            </div>

            {/* Por acabamento visual */}
            <div
              className="bg-gray-50 rounded-xl p-6 animate-fade-in-up hover:shadow-lg transition-shadow"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-[#bd0811] rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#010066]">
                  Por acabamento visual
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Liso</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Impresso</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Transparente</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Metalizado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#bd0811] rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Pigmentado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-gray-600 mb-6 text-lg">
            Precisa de uma solução específica? Fale conosco!
          </p>
          <a
            href={generateWhatsAppURL('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 font-bold text-lg rounded-lg hover:bg-[#128C7E] transition-colors hover:shadow-xl transform hover:scale-105"
          >
            <span className="mr-3">→</span>
            Solicitar Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
