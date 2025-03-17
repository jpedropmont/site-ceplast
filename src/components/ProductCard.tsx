import type React from 'react';
import {
  Package,
  ShoppingBag,
  Utensils,
  Droplet,
  Box,
  Shield,
  Heart,
  Star,
  Smile,
  Warehouse,
  BicepsFlexed,
  Pill,
  Milk,
  Beef,
  ShowerHead,
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  applications: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getApplicationIcon = (application: string) => {
    if (application.toLowerCase().includes('alimentícios'))
      return <Utensils className="w-4 h-4" />;
    if (application.toLowerCase().includes('frigoríficos'))
      return <Beef className="w-4 h-4" />;
    if (application.toLowerCase().includes('laticínios'))
      return <Milk className="w-4 h-4" />;
    if (application.toLowerCase().includes('farmacêuticos'))
      return <Pill className="w-4 h-4" />;
    if (application.toLowerCase().includes('transporte'))
      return <ShoppingBag className="w-4 h-4" />;
    if (application.toLowerCase().includes('diversos segmentos industriais'))
      return <Box className="w-4 h-4" />;
    if (application.toLowerCase().includes('embalagens de alto desempenho'))
      return <Shield className="w-4 h-4" />;
    if (application.toLowerCase().includes('higiene pessoal'))
      return <ShowerHead className="w-4 h-4" />;
    if (application.toLowerCase().includes('produtos frágeis e sensíveis'))
      return <Heart className="w-4 h-4" />;
    if (application.toLowerCase().includes('condimentos'))
      return <Star className="w-4 h-4" />;
    if (application.toLowerCase().includes('produtos fitness'))
      return <BicepsFlexed className="w-4 h-4" />;
    if (application.toLowerCase().includes('produtos de limpeza'))
      return <Droplet className="w-4 h-4" />;
    if (application.toLowerCase().includes('cosméticos'))
      return <Smile className="w-4 h-4" />;
    if (application.toLowerCase().includes('alimentos'))
      return <Utensils className="w-4 h-4" />;
    if (application.toLowerCase().includes('armazenamento'))
      return <Warehouse className="w-4 h-4" />;
    if (application.toLowerCase().includes('paletização'))
      return <Package className="w-4 h-4" />;
    return <Package className="w-4 h-4" />;
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Split applications into an array
  const applicationsList = product.applications
    .split(',')
    .map((app) => capitalizeFirstLetter(app.trim()));

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 h-full flex flex-col">
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white z-20">
          {product.name}
        </h3>
      </div>

      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-gray-700 text-sm mb-4">{product.description}</p>
        </div>

        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-[#010066] mb-2">
            Aplicações:
          </h4>
          <ul className="space-y-1.5 h-24 overflow-y-auto">
            {applicationsList.map((app, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 text-xs py-1 px-2 rounded-md ${
                  index % 2 === 0
                    ? 'bg-[#010066]/5 text-[#010066]'
                    : 'bg-[#bd0811]/5 text-[#bd0811]'
                }`}
              >
                {getApplicationIcon(app)}
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
