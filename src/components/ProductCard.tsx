interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#010066] mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
