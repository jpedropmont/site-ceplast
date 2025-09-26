import type React from 'react';
import Image from 'next/image';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 h-80 transform hover:-translate-y-2">
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-xs font-semibold text-[#010066]">
            {product.subcategory}
          </span>
        </div>

        {/* Product Name on Hover */}
        <div className="absolute bottom-3 left-3 right-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-white font-bold text-lg leading-tight">
            {product.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 h-32 flex flex-col">
        <h3 className="text-lg font-bold text-[#010066] mb-2 line-clamp-1 group-hover:text-[#bd0811] transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Applications with Better Design */}
        {product.applications && product.applications.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.applications.slice(0, 2).map((app, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs rounded-full font-medium border border-blue-200/50"
              >
                {app}
              </span>
            ))}
            {product.applications.length > 2 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">
                +{product.applications.length - 2} mais
              </span>
            )}
          </div>
        )}
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#010066] via-[#bd0811] to-[#010066] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>

      {/* Corner Accent */}
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-l-[#010066] border-t-[20px] border-t-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ProductCard;
