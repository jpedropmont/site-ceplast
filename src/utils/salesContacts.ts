export interface SalesContact {
  name: string;
  phone: string;
  email: string;
  specialty: string[];
}

export const salesContacts: SalesContact[] = [
  {
    name: 'Davyd Brasil',
    phone: '+5585997870923',
    email: 'davyd.ceplast@gmail.com',
    specialty: ['laticinios', 'bobinas'], // bobinas = segmento industrial
  },
  {
    name: 'João Pedro Monteiro',
    phone: '+5585997599275',
    email: 'joaopedro.ceplast@gmail.com',
    specialty: ['frigorificos', 'pescados'],
  },
];

/**
 * Obtém o contato de vendas apropriado baseado no segmento
 */
export const getSalesContact = (segmentId?: string): SalesContact => {
  // Mapear segmentos para vendedores específicos
  const segmentMapping: { [key: string]: string[] } = {
    frigorificos: ['João Pedro Monteiro'],
    pescados: ['João Pedro Monteiro'],
    laticinios: ['Davyd Brasil'],
    bobinas: ['Davyd Brasil'], // Segmento industrial
    'naturais-e-regionais': ['Davyd Brasil', 'João Pedro Monteiro'], // Aleatório entre os dois
  };

  const assignedSellers = segmentMapping[segmentId || ''];

  if (!segmentId || !assignedSellers || assignedSellers.length === 0) {
    // Se não houver segmento específico ou mapeamento, usa horário para decidir
    // Minuto par = João Pedro, Minuto ímpar = Davyd
    const currentMinute = new Date().getMinutes();
    const isEvenMinute = currentMinute % 2 === 0;
    return isEvenMinute
      ? salesContacts.find((c) => c.name === 'João Pedro Monteiro') ||
          salesContacts[0]
      : salesContacts.find((c) => c.name === 'Davyd Brasil') ||
          salesContacts[1];
  }

  if (assignedSellers.length === 1) {
    // Retorna o vendedor específico
    const contact = salesContacts.find((c) => c.name === assignedSellers[0]);
    return contact || salesContacts[0];
  }

  // Se há múltiplos vendedores, usa horário para escolher
  // Minuto par = João Pedro, Minuto ímpar = Davyd
  const currentMinute = new Date().getMinutes();
  const isEvenMinute = currentMinute % 2 === 0;
  const selectedSellerName = isEvenMinute
    ? assignedSellers.includes('João Pedro Monteiro')
      ? 'João Pedro Monteiro'
      : assignedSellers[0]
    : assignedSellers.includes('Davyd Brasil')
    ? 'Davyd Brasil'
    : assignedSellers[0];

  const contact = salesContacts.find((c) => c.name === selectedSellerName);
  return contact || salesContacts[0];
};

/**
 * Informações gerais da empresa
 */
export const companyInfo = {
  name: 'Ceplast Embalagens',
  email: 'ceplastembalagens@gmail.com',
  address: {
    street: 'Av. Desembargador Gonzaga, 533',
    neighborhood: 'Cidade dos Funcionários',
    city: 'Fortaleza',
    state: 'CE',
  },
};
