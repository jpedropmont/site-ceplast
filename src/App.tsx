import type React from 'react';
import { useEffect, useRef } from 'react';
import {
  Mail,
  MapPin,
  Package,
  Palette,
  Truck,
  CheckCircle,
  Clock,
} from 'lucide-react';
import ProductCard from './components/ProductCard';
import ContactCard from './components/ContactCard';

interface Product {
  id: number;
  name: string;
  description: string;
  applications: string;
  image: string;
}

interface Contact {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string; // Add email property
  image: string;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

function App() {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (!animationRef.current) return;

      const elements =
        animationRef.current.querySelectorAll('.animate-element');
      elements.forEach((el, index) => {
        setTimeout(() => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateX(0)';
        }, index * 200);
      });
    };

    animateElements();

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateElements();
        }
      },
      { threshold: 0.1 },
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: 'Nylon Poli',
      description:
        'Material de alta resistência mecânica, ideal para embalagens que exigem durabilidade e proteção contra rasgos. Possui excelente barreira contra gases e umidade.',
      applications: 'Produtos alimentícios, frigoríficos, laticínios',
      image: '/assets/nylonpoli.jpg',
    },
    {
      id: 2,
      name: 'Termoencolhível',
      description:
        'Encolhe com calor, selando o produto com segurança e transparência. Protege contra umidade, poeira e adulterações.',
      applications: 'Frigoríficos, laticínios, lacres',
      image: '/assets/mussarela.jpg',
    },
    {
      id: 3,
      name: 'PE (Polietileno)',
      description:
        'Filme plástico versátil, com alta resistência e flexibilidade. Usado para proteção contra umidade e poeira.',
      applications: 'Diversos segmentos industriais e alimentícios',
      image: '/assets/file-peixe.jpg',
    },
    {
      id: 4,
      name: 'PE + PET',
      description:
        'Combinação que une resistência mecânica e barreira aprimorada contra umidade e oxigênio. Ideal para produtos que precisam de conservação prolongada.',
      applications: 'Embalagens de alto desempenho',
      image: '/assets/bacon.jpg',
    },
    {
      id: 5,
      name: 'Laminado',
      description:
        'Embalagem composta por múltiplas camadas (PET, PE, PP), garantindo proteção extra e maior durabilidade. Oferece excelente vedação.',
      applications: 'Alimentos, higiene pessoal, farmacêuticos',
      image: '/assets/laminado.jpg',
    },
    {
      id: 6,
      name: 'MRP',
      description:
        'Uma alternativa do Nylon Poli, O MRP é uma embalagem estruturada que protege contra impactos, contaminação externa e extremas temperaturas.',
      applications:
        'Produtos frágeis e sensíveis, Diversos segmentos industriais e alimentícios',
      image: '/assets/amendoim.jpg',
    },
    {
      id: 7,
      name: 'Filme Stretch',
      description:
        'Filme plástico altamente elástico, utilizado para envolver e proteger cargas, garantindo estabilidade no transporte e armazenamento.',
      applications: 'Transporte, armazenamento, paletização',
      image: '/assets/stretch.jpg',
    },
    {
      id: 8,
      name: 'Bisnaga',
      description:
        'Embalagem flexível e prática para cremes, molhos e medicamentos. Permite fácil dosagem e evita desperdício.',
      applications: 'Cosméticos, alimentos pastosos, produtos farmacêuticos',
      image: '/assets/bisnaga.jpg',
    },
    {
      id: 9,
      name: 'Stand-up Pouch',
      description:
        'Embalagem com base reforçada, permitindo que fique em pé nas prateleiras. Pode ter fechamento ziplock, prolongando a vida útil do produto.',
      applications: 'Produtos alimentícios, Condimentos, Oleaginosas',
      image: '/assets/stand-up.jpg',
    },
  ];

  const salesContacts: Contact[] = [
    {
      id: 1,
      name: 'Davyd Brasil',
      position: 'Representante de Vendas',
      phone: '+5585997870923',
      email: 'davyd.ceplast@gmail.com',
      image: '/assets/davyd.jpg',
    },
    {
      id: 2,
      name: 'João Pedro Monteiro',
      position: 'Representante de Vendas',
      phone: '+5585997599275',
      email: 'joaopedro.ceplast@gmail.com',
      image: '/assets/joaopedro.jpg',
    },
  ];

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
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="relative h-12 w-40">
              <img
                src="/assets/logo-ceplast.png"
                alt="Ceplast Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#inicio"
                  className="text-[#010066] hover:text-[#bd0811] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-[#010066] hover:text-[#bd0811] transition-colors"
                >
                  Embalagens
                </a>
              </li>
              <li>
                <a
                  href="#tipos-embalagem"
                  className="text-[#010066] hover:text-[#bd0811] transition-colors"
                >
                  Tipos de Acabamento
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  className="text-[#010066] hover:text-[#bd0811] transition-colors"
                >
                  Processo
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-[#010066] hover:text-[#bd0811] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#contato"
            className="rounded-md bg-[#bd0811] px-4 py-2 text-white hover:bg-[#a00710] transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </header>

      {/* Showcase Section */}
      <section
        id="inicio"
        className="relative bg-gradient-to-r from-[#010066] to-[#01004d] py-16 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-full px-4">
              <div ref={animationRef} className="overflow-hidden text-center">
                <h1
                  className="animate-element text-4xl md:text-5xl font-bold mb-4 text-white opacity-0 transformtransition-all duration-700"
                  style={{ transitionDelay: '100ms' }}
                >
                  A Embalagem é a Vitrine do Seu Produto
                </h1>
                <p
                  className="animate-element text-lg mb-8 text-white/90 opacity-0 transform transition-all duration-700"
                  style={{ transitionDelay: '300ms' }}
                >
                  Mais que proteger, nossas embalagens valorizam, comunicam e
                  vendem. Transforme seu produto em uma experiência visual e
                  sensorial completa.
                </p>
                <div
                  className="animate-element flex flex-wrap gap-4 mt-8 opacity-0 transform transition-all duration-700 justify-center"
                  style={{ transitionDelay: '500ms' }}
                >
                  <a
                    href="#produtos"
                    className="inline-block rounded-md bg-[#bd0811] px-6 py-3 text-white hover:bg-[#a00710] transition-colors"
                  >
                    Conheça Nossas Soluções
                  </a>
                  <a
                    href="#contato"
                    className="inline-block rounded-md bg-white/10 border border-white/30 px-6 py-3 text-white hover:bg-white/20 transition-colors"
                  >
                    Solicite um Orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#010066] mb-6">
              Sobre a Ceplast
            </h2>
            <p className="text-gray-700 mb-8">
              A Ceplast é uma indústria especializada na produção de embalagens
              a vácuo de alta qualidade para diversos tipos de produtos, como
              queijos, carnes, linguiças, salsichas, macaxeiras, pescados,
              embutidos, fatiados, frangos e muito mais. Nossas embalagens
              garantem maior durabilidade e preservação das características
              originais dos produtos.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="flex flex-col items-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-[#010066] flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">20+</span>
                </div>
                <h3 className="text-xl font-semibold text-[#010066]">
                  Anos de Experiência
                </h3>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-[#bd0811] flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">300+</span>
                </div>
                <h3 className="text-xl font-semibold text-[#010066]">
                  Clientes Satisfeitos
                </h3>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-[#010066] flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">9+</span>
                </div>
                <h3 className="text-xl font-semibold text-[#010066]">
                  Tipos de Embalagens
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#010066] mb-4">
            Nossos Produtos
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Oferecemos uma ampla variedade de soluções de embalagens para
            atender às necessidades específicas do seu produto. Além dos
            produtos exibidos, também disponibilizamos outros tipos de
            embalagens personalizadas conforme sua necessidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Types Section */}
      <section id="tipos-embalagem" className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
                    <div className="h-40 md:h-full overflow-hidden rounded-lg">
                      <img
                        src="/assets/impresso.jpeg"
                        alt="Embalagem Impressa"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg?height=300&width=400';
                        }}
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
                      Embalagens sem impressão, ideais para uso interno, testes
                      de produto ou quando você precisa de uma solução rápida e
                      econômica.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#010066] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          Excelente custo-benefício
                        </span>
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
                    <div className="h-40 md:h-full overflow-hidden rounded-lg">
                      <img
                        src="/assets/liso.jpeg"
                        alt="Embalagem Lisa"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg?height=300&width=400';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
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

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#010066] mb-12">
            Fale com Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {salesContacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#010066] mb-6 text-center">
              Informações de Contato
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#bd0811] mr-3" />
                  <span>ceplastembalagens@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#bd0811] mr-3" />
                  <span>
                    Av. Desembargador Gonzaga, 1900 - Cidade dos Funcionários,
                    Fortaleza - CE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010066] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-center md:text-right">
              <p>
                &copy; {new Date().getFullYear()} CEPLAST INDUSTRIA E COMERCIO
                DE EMBALAGENS A VACUO LTDA. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
