'use client';

import React from 'react';
import { Package, Palette, Truck, CheckCircle, Clock } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ProcessSection = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Criação da Arte',
      description:
        'Nossa equipe de design trabalha com você para criar a arte perfeita para sua embalagem, sem custo para o cliente.',
      icon: <Palette className="h-10 w-10 text-white" />,
      color: 'bg-[#010066]',
    },
    {
      id: 2,
      title: 'Aprovação',
      description:
        'Você recebe provas digitais para aprovação antes da produção em larga escala.',
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      color: 'bg-[#bd0811]',
    },
    {
      id: 3,
      title: 'Produção',
      description:
        'Após aprovação, iniciamos a produção com materiais de alta qualidade e tecnologia avançada.',
      icon: <Package className="h-10 w-10 text-white" />,
      color: 'bg-[#010066]',
    },
    {
      id: 4,
      title: 'Entrega',
      description:
        'Entregamos seu pedido no prazo combinado, com acompanhamento logístico. Consulte condições para obter frete grátis.',
      icon: <Truck className="h-10 w-10 text-white" />,
      color: 'bg-[#bd0811]',
    },
  ];

  return (
    <section
      id="processo"
      className="py-16 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-[#010066] mb-6">
          Nosso Processo
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Da criação à entrega, acompanhamos cada etapa do desenvolvimento da
          sua embalagem para garantir a máxima qualidade e satisfação.
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${step.color} rounded-full p-3 flex-shrink-0`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#010066] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#010066] mb-4">
              Acompanhamento Contínuo
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-[#010066] rounded-full p-4">
                  <Clock className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-3/4">
                <p className="text-gray-700">
                  Durante todo o processo, desde o primeiro contato até a
                  entrega final, mantemos uma comunicação constante para
                  garantir a melhor experiência possível. Oferecemos suporte
                  técnico especializado e um acompanhamento personalizado para
                  cada cliente. Com nossa equipe baseada no Nordeste,
                  priorizamos o atendimento presencial sempre que viável,
                  proporcionando um serviço ainda mais próximo e eficiente.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#bd0811]"></div>
                    <span className="text-sm">Atendimento Personalizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#010066]"></div>
                    <span className="text-sm">Suporte Técnico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#bd0811]"></div>
                    <span className="text-sm">Feedback Contínuo</span>
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

export default ProcessSection;
