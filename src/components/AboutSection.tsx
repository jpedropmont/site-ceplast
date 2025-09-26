'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const images = [
    '/assets/laminado.png',
    '/assets/tres-soldas.png',
    '/assets/nylonpoli.jpg',
    '/assets/termoencolhivel.jpg',
    '/assets/stretch.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#010066] mb-6">
              Inovação em Embalagens que Fazem a Diferença
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Na Ceplast, cada embalagem é pensada para destacar seu produto no
              mercado. Nossa tecnologia garante proteção superior e apresentação
              impecável.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Desenvolvemos soluções personalizadas que atendem às necessidades
              específicas de cada cliente, desde pequenos produtores até grandes
              indústrias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/sobre"
                className="inline-flex items-center bg-[#010066] text-white px-6 py-3 font-semibold rounded-lg hover:bg-[#bd0811] transition-all duration-300"
              >
                Saiba Mais Sobre Nós
              </a>
              <a
                href="/segmentos"
                className="inline-flex items-center border-2 border-[#010066] text-[#010066] px-6 py-3 font-semibold rounded-lg hover:bg-[#010066] hover:text-white transition-all duration-300"
              >
                Nossos Segmentos
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="animate-fade-in-right">
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Embalagens Ceplast ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Indicadores discretos */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white shadow-lg'
                        : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
