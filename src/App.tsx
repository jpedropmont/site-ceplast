import {
  Phone,
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
import './index.css';

function App() {
  const products = [
    {
      id: 1,
      name: 'Nylon Poli',
      description: 'Ideal para queijos e produtos lácteos',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 2,
      name: 'Termo Encolhível',
      description: 'Perfeita para carnes e linguiças',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 3,
      name: 'PE',
      description: 'Versátil para diversos alimentos',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 4,
      name: 'PE + Pet',
      description: 'Excelente para embalagens resistentes',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 5,
      name: 'PE Laminado',
      description: 'Ideal para embalagens laminadas',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 6,
      name: 'MRP',
      description: 'Excelente para macaxeira e vegetais',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 7,
      name: 'Filme Stretch',
      description: 'Perfeito para embalar produtos diversos',
      image: '/placeholder.svg?height=300&width=400',
    },
  ];

  const salesContacts = [
    {
      id: 1,
      name: 'Davyd Brasil',
      position: 'Representante de Vendas',
      phone: '+5585997870923',
      image: '/assets/davyd.jpg',
    },
    {
      id: 2,
      name: 'João Pedro Monteiro',
      position: 'Representante de Vendas',
      phone: '+5585997599275',
      image: '/assets/joaopedro.jpg',
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: 'Criação da Arte',
      description:
        'Nossa equipe de design trabalha com você para criar a arte perfeita para sua embalagem.',
      icon: <Palette className="h-10 w-10 text-white" />,
      color: 'bg-[#010066]',
    },
    {
      id: 2,
      title: 'Aprovação',
      description:
        'Você recebe provas digitais e físicas para aprovação antes da produção em larga escala.',
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
        'Entregamos seu pedido no prazo combinado, com acompanhamento logístico em tempo real.',
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
                  href="#aplicacoes"
                  className="text-[#010066] hover:text-[#bd0811] transition-colors"
                >
                  Aplicações
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

      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-gradient-to-r from-[#010066] to-[#01004d] py-20 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Embalagens a Vácuo de Alta Qualidade
            </h1>
            <p className="text-lg mb-8">
              Soluções de embalagens para conservar a qualidade e frescor dos
              seus produtos por mais tempo.
            </p>
            <a
              href="#produtos"
              className="inline-block rounded-md bg-[#bd0811] px-6 py-3 text-white hover:bg-[#a00710] transition-colors"
            >
              Conheça Nossos Produtos
            </a>
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
              a vácuo de alta qualidade para diversos tipos de alimentos, como
              queijos, carnes, linguiças, macaxeira e muito mais. Nossas
              embalagens garantem maior durabilidade e preservação das
              características originais dos produtos.
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
                  <span className="text-white text-2xl">7+</span>
                </div>
                <h3 className="text-xl font-semibold text-[#010066]">
                  Tipos de Embalagens
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-[#010066]">
                  <img
                    src="/assets/monteiro.png"
                    alt="Diretor da Ceplast"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.2)' }}
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#010066] mb-4">
                  Mensagem do Diretor
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p className="italic text-lg">
                    "Na Ceplast, nossa missão é fornecer soluções de embalagem
                    que não apenas protejam seus produtos, mas também agreguem
                    valor à sua marca. Há mais de uma década, temos investido
                    constantemente em tecnologia e inovação para oferecer o que
                    há de melhor em embalagens a vácuo."
                  </p>
                  <p>
                    Nosso compromisso com a qualidade e a satisfação do cliente
                    nos tornou referência no mercado. Trabalhamos diariamente
                    para superar expectativas e construir relacionamentos
                    duradouros com nossos parceiros comerciais.
                  </p>
                  <p>
                    Convidamos você a conhecer nossas soluções e descobrir como
                    podemos contribuir para o sucesso do seu negócio.
                  </p>
                  <div className="pt-4">
                    <p className="font-bold text-[#010066]">Luizmar Monteiro</p>
                    <p className="text-sm">Diretor Executivo | Ceplast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#010066] mb-12">
            Nossos Produtos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Products Section */}
      <section id="aplicacoes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#010066] mb-12">
            Produtos Embalados com Nossa Tecnologia
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Nossas embalagens a vácuo são ideais para diversos tipos de
            alimentos, garantindo maior durabilidade, preservação do sabor e
            qualidade por mais tempo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Queijo Coalho',
                image: '/assets/queijo-coalho.jpeg',
              },
              {
                name: 'Queijo Mussarela',
                image: '/assets/queijo-mussarela.jpg',
              },
              {
                name: 'Macaxeira',
                image: '/assets/macaxeira.jpg',
              },
              {
                name: 'Linguiça',
                image: '/assets/linguica.jpeg',
              },
              {
                name: 'Carnes',
                image: '/assets/picanha.jpeg',
              },
              {
                name: 'Outros Itens',
                image: null,
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-50 rounded-full p-2 mb-3 w-28 h-28 flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <Package className="w-20 h-20 text-gray-400" />
                  )}
                </div>
                <h3 className="text-center font-medium text-[#010066]">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Nossos clientes confiam na qualidade das nossas embalagens para
              manter seus produtos frescos e protegidos.
            </p>
            <a
              href="#contato"
              className="inline-block rounded-md bg-[#bd0811] px-6 py-3 text-white hover:bg-[#a00710] transition-colors"
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-16 bg-white">
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
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
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

            <div className="mt-12 bg-gray-50 rounded-lg p-6">
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
                    entrega final, nossa equipe mantém comunicação constante
                    para garantir que sua experiência seja a melhor possível.
                    Oferecemos suporte técnico especializado e acompanhamento
                    personalizado para cada cliente.
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

            <div className="mt-8 text-center">
              <a
                href="#contato"
                className="inline-block rounded-md bg-[#bd0811] px-6 py-3 text-white hover:bg-[#a00710] transition-colors"
              >
                Inicie Seu Projeto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#010066] mb-12">
            Fale com Nossos Vendedores
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
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#bd0811] mr-3" />
                  <span>(85) 98733-8532</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#bd0811] mr-3" />
                  <span>ceplastembalagens@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#bd0811] mr-3" />
                  <span>
                    Rua Deputado Sebastião Brasilino de Freitas, 1900 - Parque
                    Iracema - Fortaleza - CE
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-right">
              <p>
                &copy; {new Date().getFullYear()} Ceplast Embalagens a Vácuo.
                Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
