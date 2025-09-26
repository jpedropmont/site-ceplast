import type React from 'react';
import { Phone, MessageCircle, User, Briefcase } from 'lucide-react';
import { Contact } from '../types';
import { generateWhatsAppURL } from '../utils/whatsapp';

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const formatPhoneForCall = (phone: string) => {
    return phone.replace(/\+/, '');
  };

  const handleConversion = (url: string) => {
    if (
      typeof window !== 'undefined' &&
      typeof window.gtag_report_conversion === 'function'
    ) {
      window.gtag_report_conversion(url);
    } else {
      window.location.href = url;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-[#010066]">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-[#010066]/10 rounded-full p-3 mr-4">
            <User className="h-8 w-8 text-[#010066]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#010066]">{contact.name}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <Briefcase className="h-4 w-4 mr-1" />
              <p>{contact.position}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={`tel:${formatPhoneForCall(contact.phone)}`}
            onClick={(e) => {
              e.preventDefault();
              handleConversion(`tel:${formatPhoneForCall(contact.phone)}`);
            }}
            className="flex items-center justify-center gap-2 bg-[#010066] text-white px-4 py-3 rounded-md hover:bg-[#bd0811] transition-colors group"
          >
            <Phone className="h-5 w-5 group-hover:animate-pulse" />
            <span className="font-medium">Ligar Agora</span>
          </a>
          <a
            href={generateWhatsAppURL('general')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleConversion(generateWhatsAppURL('general'));
            }}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-md hover:bg-[#128C7E] transition-colors group"
          >
            <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">Contato direto</div>
            <div className="text-[#010066] font-medium">
              {contact.phone
                .replace(/\+55/, '')
                .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-sm text-gray-500">Email</div>
            <div className="text-[#010066] font-medium">{contact.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => void;
  }
}

export default ContactCard;
