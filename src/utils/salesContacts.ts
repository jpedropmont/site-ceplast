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
 * Obtém o contato de vendas.
 * Agora todo o direcionamento é feito exclusivamente para o Davyd.
 */
export const getSalesContact = (segmentId?: string): SalesContact => {
  void segmentId;
  return salesContacts.find((c) => c.name === 'Davyd Brasil') || salesContacts[0];
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
