
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Plus } from 'lucide-react';

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({ id, name, price, image });
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`} className="block">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-lg font-bold mb-1 text-fast-brown">{name}</h3>
          <p className="text-gray-600 text-sm mb-3 h-12 overflow-hidden">
            {description}
          </p>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-fast-red font-bold">R$ {price.toFixed(2)}</span>
          <Button 
            onClick={handleAddToCart} 
            size="sm" 
            className="bg-fast-yellow text-fast-brown hover:bg-amber-400"
          >
            <Plus size={16} className="mr-1" /> Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
