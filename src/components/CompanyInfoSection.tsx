'use client';

import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/utils/salesContacts';

const CompanyInfoSection = () => {
  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#010066] mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para atender suas
            necessidades e desenvolver a solução ideal para seu negócio.
          </p>
        </div>

        {/* Informações da Empresa */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in-up">
            {/* Header simples */}
            <div className="bg-[#010066] px-6 py-4 rounded-t-lg">
              <h3 className="text-xl font-semibold text-white text-center">
                Informações da Empresa
              </h3>
            </div>

            <div className="p-6">
              {/* Layout em coluna única */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#010066]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#010066] mb-2">
                      Email Corporativo
                    </h4>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-700 hover:text-[#010066] transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#010066]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#010066] mb-2">
                      Localização
                    </h4>
                    <p className="text-gray-700">
                      {companyInfo.address.street} -{' '}
                      {companyInfo.address.neighborhood} -{' '}
                      {companyInfo.address.city} - {companyInfo.address.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
