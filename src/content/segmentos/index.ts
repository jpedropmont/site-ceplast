// Icons are used in SegmentsSection.tsx component
// import { Beef, Milk, Fish, Leaf, Factory, Package } from 'lucide-react';

export interface Segment {
  id: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
  gradient: string;
  url: string;
  type: 'vacuum' | 'alternative' | 'bobinas';
  detailedDescription: string;
  benefits: string[];
  applications: string[];
  technicalSpecs?: string[];
}

export const segmentsData: Segment[] = [
  // Embalagens a vácuo
  {
    id: 'frigorificos',
    title: 'Frigoríficos',
    icon: 'Beef',
    description:
      'Embalagens a vácuo especializadas para carnes bovinas, suínas, aves e embutidos. Garantem frescor, aumentam a vida útil e mantêm a qualidade do produto.',
    detailedDescription:
      'Nossas embalagens a vácuo para frigoríficos são desenvolvidas com tecnologia avançada para garantir a máxima preservação de carnes e embutidos. Utilizamos filmes multicamadas de alta barreira que impedem a entrada de oxigênio e umidade, mantendo o produto fresco por mais tempo.',
    tags: ['Carnes', 'Embutidos', 'Aves'],
    gradient: 'bg-[#bd0811]',
    url: '/embalagens-a-vacuo/frigorificos',
    type: 'vacuum',
    benefits: [
      'Aumento da vida útil em até 5x',
      'Preservação da cor e textura natural',
      'Proteção contra contaminação',
      'Redução de perdas por deterioração',
      'Facilita o transporte e armazenamento',
    ],
    applications: [
      'Carnes bovinas frescas',
      'Linguiças e embutidos',
      'Carnes suínas',
      'Aves e frango',
      'Produtos curados',
    ],
    technicalSpecs: [
      'Filme multicamada de alta barreira',
      'Espessura personalizada conforme necessidade do cliente',
      'Resistência ao perfuro',
      'Controle rigoroso de qualidade em toda produção',
    ],
  },
  {
    id: 'laticinios',
    title: 'Laticínios',
    icon: 'Milk',
    description:
      'Embalagens a vácuo para queijos, iogurtes e derivados lácteos. Preservam sabor, textura e propriedades nutricionais.',
    detailedDescription:
      'Especializadas em preservar as características únicas dos produtos lácteos, nossas embalagens a vácuo mantêm a qualidade nutricional e sensorial de queijos e outros derivados do leite.',
    tags: ['Queijos', 'Iogurtes', 'Derivados Lácteos'],
    gradient: 'bg-[#010066]',
    url: '/embalagens-a-vacuo/laticinios',
    type: 'vacuum',
    benefits: [
      'Conservação do sabor original',
      'Proteção contra fungos e bactérias',
      'Manutenção da textura',
      'Preservação de propriedades nutricionais',
      'Apresentação atrativa no ponto de venda',
    ],
    applications: [
      'Queijos maturados',
      'Queijo coalho',
      'Mussarela',
      'Produtos lácteos especiais',
    ],
  },
  {
    id: 'pescados',
    title: 'Pescados',
    icon: 'Fish',
    description:
      'Embalagens especializadas para peixes, frutos do mar e produtos aquáticos. Opções com e sem vácuo para diferentes necessidades de conservação.',
    detailedDescription:
      'Desenvolvemos embalagens específicas para pescados que garantem a preservação da qualidade e frescor dos produtos aquáticos, com opções tanto a vácuo quanto em atmosfera modificada.',
    tags: ['Peixes', 'Frutos do Mar', 'Camarões'],
    gradient: 'bg-[#bd0811]',
    url: '/embalagens-a-vacuo/pescados',
    type: 'vacuum',
    benefits: [
      'Conservação do frescor',
      'Prevenção de odores',
      'Proteção contra oxidação',
      'Facilita o transporte refrigerado',
      'Apresentação premium',
    ],
    applications: [
      'Peixes inteiros e filés',
      'Camarões e lagostas',
      'Polvos e lulas',
      'Salmão e peixes nobres',
      'Frutos do mar processados',
    ],
  },
  {
    id: 'naturais-regionais',
    title: 'Naturais & Regionais',
    icon: 'Leaf',
    description:
      'Embalagens para produtos naturais e regionais como castanhas, macaxeira, tapioca e outros. Soluções com e sem vácuo conforme a necessidade do produto.',
    detailedDescription:
      'Nossas embalagens para produtos naturais e regionais são projetadas para preservar as características únicas de cada produto. Seja para castanhas que necessitam proteção contra rancificação, macaxeira que precisa manter sua qualidade nutricional, ou tapioca que deve preservar sua textura, oferecemos soluções específicas com tecnologia de vácuo ou embalagens tradicionais.',
    tags: [
      'Castanhas',
      'Nozes',
      'Oleaginosas',
      'Macaxeira',
      'Tapioca',
      'Produtos Regionais',
    ],
    gradient: 'bg-[#010066]',
    url: '/embalagens-a-vacuo/naturais-regionais',
    type: 'vacuum',
    benefits: [
      'Prevenção da rancificação',
      'Manutenção da crocância e textura',
      'Proteção contra pragas',
      'Preservação de óleos naturais',
      'Vida útil estendida',
      'Valorização de produtos regionais',
    ],
    applications: [
      'Castanha-do-pará',
      'Castanha de caju',
      'Nozes e amendoins',
      'Mix de oleaginosas',
      'Macaxeira processada',
      'Tapioca granulada',
      'Produtos regionais diversos',
    ],
  },
  {
    id: 'macaxeira-vacuo',
    title: 'Macaxeira (Vácuo)',
    icon: 'Leaf',
    description:
      'Embalagens a vácuo para macaxeira descascada e processada. Máxima preservação e vida útil estendida.',
    detailedDescription:
      'Nossas embalagens a vácuo para macaxeira são especialmente desenvolvidas para preservar a qualidade nutricional e estender a vida útil dos tubérculos. A tecnologia de vácuo impede a oxidação e mantém a cor natural.',
    tags: ['Macaxeira', 'Tubérculos', 'Vácuo'],
    gradient: 'bg-[#bd0811]',
    url: '/embalagens-a-vacuo/macaxeira',
    type: 'vacuum',
    benefits: [
      'Vida útil estendida em até 10x',
      'Preservação da cor natural',
      'Produto pronto para o preparo',
      'Proteção contra oxidação',
      'Higiene e segurança máxima',
    ],
    applications: [
      'Macaxeira descascada a vácuo',
      'Macaxeira em pedaços embalada',
      'Batata-doce processada',
      'Inhame preparado',
      'Mix de tubérculos',
    ],
    technicalSpecs: [
      'Filme multicamada de alta barreira',
      'Espessura personalizada conforme necessidade do cliente',
      'Resistência ao perfuro',
      'Controle rigoroso de qualidade em toda produção',
    ],
  },
  // Embalagens tradicionais
  {
    id: 'macaxeira-tradicional',
    title: 'Macaxeira (Tradicional)',
    icon: 'Leaf',
    description:
      'Embalagens tradicionais para macaxeira fresca. Proteção adequada com respiração controlada.',
    detailedDescription:
      'Embalagens tradicionais desenvolvidas especificamente para macaxeira fresca, permitindo respiração controlada do produto enquanto oferece proteção adequada durante transporte e armazenamento.',
    tags: ['Macaxeira', 'Tubérculos', 'Tradicional'],
    gradient: 'bg-[#010066]',
    url: '/embalagens/macaxeira',
    type: 'alternative',
    benefits: [
      'Respiração controlada do produto',
      'Proteção durante transporte',
      'Facilita o armazenamento',
      'Praticidade no manuseio',
      'Produto sempre fresco',
    ],
    applications: [
      'Macaxeira fresca',
      'Macaxeira inteira',
      'Batata-doce fresca',
      'Inhame fresco',
      'Tubérculos regionais',
    ],
  },
  {
    id: 'tapioca',
    title: 'Tapioca',
    icon: 'Package',
    description:
      'Embalagens tradicionais para massa de tapioca e produtos derivados. Mantém a textura e facilita o armazenamento.',
    detailedDescription:
      'Desenvolvemos embalagens específicas para massa de tapioca que preservam a textura única do produto, evitando ressecamento e facilitando o armazenamento e transporte.',
    tags: ['Tapioca', 'Massa', 'Regional'],
    gradient: 'bg-[#010066]',
    url: '/embalagens/tapioca',
    type: 'alternative',
    benefits: [
      'Preservação da textura',
      'Facilita o armazenamento',
      'Proteção contra umidade',
      'Praticidade de uso',
      'Produto sempre fresco',
    ],
    applications: [
      'Massa de tapioca fresca',
      'Tapioca granulada',
      'Beiju pronto',
      'Goma de tapioca',
      'Produtos derivados',
    ],
  },
  {
    id: 'bobinas',
    title: 'Bobinas',
    icon: 'Factory',
    description:
      'Filmes plásticos em bobinas para máquinas de embalar automáticas e semiautomáticas. Soluções industriais para produção em larga escala.',
    detailedDescription:
      'Fornecemos filmes plásticos em bobinas especialmente desenvolvidos para máquinas de embalar automáticas e semiautomáticas. Nossas bobinas garantem eficiência operacional e qualidade constante na produção industrial.',
    tags: ['Bobinas', 'Industrial', 'Automação'],
    gradient: 'bg-[#bd0811]',
    url: '/embalagens/bobinas',
    type: 'bobinas',
    benefits: [
      'Compatibilidade com equipamentos industriais',
      'Eficiência na produção em larga escala',
      'Qualidade constante e uniforme',
      'Redução de custos operacionais',
      'Suporte técnico especializado',
    ],
    applications: [
      'Máquinas automáticas de embalar',
      'Equipamentos semiautomáticos',
      'Linhas de produção industrial',
      'Sistemas de termosolda',
    ],
    technicalSpecs: [
      'Espessura personalizada conforme necessidade do cliente',
      'Larguras variadas conforme equipamento',
      'Controle rigoroso de qualidade em toda produção',
      'Compatibilidade com diversos sistemas de solda',
    ],
  },
];

export const vacuumSegments = segmentsData.filter((s) => s.type === 'vacuum');
export const alternativeSegments = segmentsData.filter(
  (s) => s.type === 'alternative',
);
export const bobinasSegments = segmentsData.filter((s) => s.type === 'bobinas');
