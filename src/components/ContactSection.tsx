'use client';

import React from 'react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { WhatsAppTrackedLink } from '@/components/WhatsAppTrackedLink';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#010066] mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Fale com a Ceplast pelo WhatsApp e tire suas dúvidas.
          </p>
        </div>

        {/* CTA principal (sem exibir vendedores) */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-[#010066] mb-3">
              Entrar em contato
            </h3>
            <p className="text-gray-700 mb-6">
              Clique no botão abaixo para falar conosco.
            </p>
            <WhatsAppTrackedLink
              analyticsLocation="contact_section_primary_whatsapp"
              waContext="general"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#128C7E] transition-colors font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </WhatsAppTrackedLink>
          </div>
        </div>

        {/* Informações Gerais */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up animate-delay-400">
            <h3 className="text-2xl font-bold text-[#010066] mb-6 text-center">
              Informações da Empresa
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contato Geral */}
              <div>
                <h4 className="text-lg font-semibold text-[#010066] mb-4">
                  Contato Geral
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#bd0811] mr-3 flex-shrink-0" />
                    <a
                      href="mailto:ceplastembalagens@gmail.com"
                      className="text-gray-700 hover:text-[#010066] transition-colors"
                    >
                      ceplastembalagens@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#bd0811] mr-3 flex-shrink-0 mt-1" />
                    <div className="text-gray-700">
                      <p>Av. Desembargador Gonzaga, 533</p>
                      <p>Cidade dos Funcionários</p>
                      <p>Fortaleza - CE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div>
                <h4 className="text-lg font-semibold text-[#010066] mb-4">
                  Horário de Funcionamento
                </h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span className="font-medium">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="text-gray-500">Fechado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8 pt-8 border-t border-gray-100">
              <WhatsAppTrackedLink
                analyticsLocation="contact_section_company_card_whatsapp"
                waContext="general"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#bd0811] text-white px-8 py-4 font-bold text-lg rounded-lg hover:bg-[#010066] transition-colors hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Iniciar Conversa no WhatsApp
              </WhatsAppTrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
