import { getSalesContact } from './salesContacts';

/**
 * Gera uma mensagem padrão personalizada para WhatsApp
 */
export const generateWhatsAppMessage = (
  contactName: string,
  context: 'general' | 'segment' | 'quote' = 'general',
  segmentName?: string,
): string => {
  const baseMessage = `Olá ${contactName}, tudo bem?

Estou visitando o site da Ceplast e gostaria de conhecer mais sobre as soluções em embalagens especializadas.`;

  const contextMessages = {
    general: `

Tenho interesse em:
• Embalagens a vácuo para maior conservação
• Embalagens tradicionais para produtos específicos
• Soluções personalizadas para meu segmento

Poderia me enviar mais informações sobre produtos, preços e condições de fornecimento?

Aguardo seu contato!`,

    segment: `

Tenho interesse em embalagens para ${segmentName || 'produtos alimentícios'}.

Gostaria de receber:
• Informações técnicas
• Preços e condições
• Prazo de entrega

Obrigado!`,

    quote: `

Gostaria de solicitar um orçamento personalizado para minha empresa.

Informações que posso fornecer:
• Tipo de produto a embalar
• Volume mensal estimado
• Especificações desejadas
• Prazo de entrega

Quando seria possível agendar uma conversa para detalhar melhor minha necessidade?

Agradeço a atenção!`,
  };

  return baseMessage + contextMessages[context];
};

/**
 * Gera URL completa do WhatsApp com mensagem codificada usando direcionamento inteligente
 */
export const generateWhatsAppURL = (
  context: 'general' | 'segment' | 'quote' = 'general',
  segmentId?: string,
  segmentName?: string,
): string => {
  const contact = getSalesContact(segmentId);
  const message = generateWhatsAppMessage(contact.name, context, segmentName);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${contact.phone}?text=${encodedMessage}`;
};
