import { getSalesContact } from './salesContacts';

/**
 * Gera uma mensagem padrão personalizada para WhatsApp
 */
export const generateWhatsAppMessage = (
  contactName: string,
  context: 'general' | 'segment' | 'quote' = 'general',
  segmentName?: string,
): string => {
  void contactName;
  const baseMessage = `Olá! Vim pelo site da Ceplast.`;

  const contextMessages = {
    general: `
Quero tirar dúvidas e pedir um orçamento. Pode me ajudar?`,

    segment: `
Quero orçamento para embalagens de ${segmentName || 'produtos alimentícios'}.`,

    quote: `
Quero solicitar um orçamento. Como podemos seguir?`,
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
