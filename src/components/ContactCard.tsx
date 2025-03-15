import { Phone } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  position: string;
  phone: string;
  image: string;
}

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
      <div className="flex flex-col items-center p-6">
        <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
          <img
            src={contact.image || '/placeholder.svg'}
            alt={contact.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-xl font-semibold text-[#010066]">{contact.name}</h3>
        <p className="text-gray-600 mb-4">{contact.position}</p>
        <a
          href={`https://wa.me/${contact.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full gap-2 bg-[#25D366] text-white py-2 px-4 rounded-md hover:bg-[#128C7E] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Falar via WhatsApp
        </a>
        <a
          href={`tel:${contact.phone}`}
          className="flex items-center justify-center w-full gap-2 mt-2 border border-[#010066] text-[#010066] py-2 px-4 rounded-md hover:bg-[#010066] hover:text-white transition-colors"
        >
          <Phone size={20} />
          Ligar
        </a>
      </div>
    </div>
  );
}
