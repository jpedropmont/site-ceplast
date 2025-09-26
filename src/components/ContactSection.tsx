'use client';

import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  User,
  Briefcase,
  Clock,
} from 'lucide-react';
import { generateWhatsAppURL } from '@/utils/whatsapp';

interface Contact {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string;
  specialty: string;
  availability: string;
}

const ContactSection = () => {
  const salesContacts: Contact[] = [
    {
      id: 1,
      name: 'Davyd Brasil',
      position: 'Especialista em Vendas',
      phone: '+5585997870923',
      email: 'davyd.ceplast@gmail.com',
      specialty: 'Frigoríficos e Laticínios',
      availability: 'Seg - Sex: 8h às 18h',
    },
    {
      id: 2,
      name: 'João Pedro Monteiro',
      position: 'Consultor Técnico',
      phone: '+5585997599275',
      email: 'joaopedro.ceplast@gmail.com',
      specialty: 'Pescados e Produtos Regionais',
      availability: 'Seg - Sex: 8h às 17h',
    },
  ];

  const formatPhoneForCall = (phone: string) => {
    return phone.replace(/\+/, '');
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#010066] mb-6">
            Fale com Nossa Equipe
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para atender suas
            necessidades e desenvolver a solução ideal para seu negócio.
          </p>
        </div>

        {/* Cards de Contato */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {salesContacts.map((contact, index) => (
            <div
              key={contact.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header do Card */}
              <div className="bg-gradient-to-r from-[#010066] to-[#bd0811] text-white p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-3 mr-4">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{contact.name}</h3>
                    <div className="flex items-center mt-1 opacity-90">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span className="text-sm">{contact.position}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 space-y-4">
                {/* Especialidade */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-[#010066] mb-2 uppercase tracking-wider">
                    Especialidade
                  </h4>
                  <p className="text-gray-700">{contact.specialty}</p>
                </div>

                {/* Horário */}
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-[#010066]" />
                  <span className="text-sm">{contact.availability}</span>
                </div>

                {/* Botões de Ação */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <a
                    href={generateWhatsAppURL(
                      contact.phone,
                      contact.name,
                      'quote',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg hover:bg-[#128C7E] transition-colors font-semibold"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${formatPhoneForCall(contact.phone)}`}
                    className="flex items-center justify-center gap-2 border-2 border-[#010066] text-[#010066] px-4 py-3 rounded-lg hover:bg-[#010066] hover:text-white transition-colors font-semibold"
                  >
                    <Phone className="h-4 w-4" />
                    Ligar
                  </a>
                </div>

                {/* Email */}
                <div className="pt-2 border-t border-gray-100">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center text-gray-600 hover:text-[#010066] transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">{contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
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
              <a
                href={generateWhatsAppURL(
                  '+5585997870923',
                  'Davyd Brasil',
                  'quote',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#bd0811] text-white px-8 py-4 font-bold text-lg rounded-lg hover:bg-[#010066] transition-colors hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Iniciar Conversa no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
