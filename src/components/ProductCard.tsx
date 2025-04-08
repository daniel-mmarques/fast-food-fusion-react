
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Plus, Minus, Check } from 'lucide-react';
import { toast } from 'sonner';

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  const { addItem, updateQuantity, items } = useCart();
  
  const existingItem = items.find(item => item.id === id);
  const quantity = existingItem ? existingItem.quantity : 0;
  
  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    toast.success(`${name} adicionado ao carrinho`);
  };
  
  const handleUpdateQuantity = (newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };
  
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <Link to={`/product/${id}`} className="block relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-lg font-semibold mb-1 text-gray-800 group-hover:text-fast-red transition-colors">{name}</h3>
          <p className="text-gray-600 text-sm mb-3 h-12 line-clamp-2 overflow-hidden">
            {description}
          </p>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-fast-red font-bold">R$ {price.toFixed(2)}</span>
          
          {quantity === 0 ? (
            <Button 
              onClick={handleAddToCart} 
              size="sm" 
              className="bg-fast-yellow text-fast-brown hover:bg-amber-400 rounded-full w-8 h-8 p-0"
            >
              <Plus size={16} />
            </Button>
          ) : (
            <div className="flex items-center gap-1 bg-gray-100 rounded-full">
              <Button 
                onClick={() => handleUpdateQuantity(quantity - 1)} 
                size="sm" 
                variant="ghost" 
                className="rounded-full w-7 h-7 p-0 text-gray-600"
              >
                <Minus size={14} />
              </Button>
              <span className="w-5 text-center text-sm">{quantity}</span>
              <Button 
                onClick={() => handleUpdateQuantity(quantity + 1)} 
                size="sm" 
                className="bg-fast-yellow text-fast-brown hover:bg-amber-400 rounded-full w-7 h-7 p-0"
              >
                <Plus size={14} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
