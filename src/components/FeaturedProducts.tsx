
import React from 'react';
import ProductCard from './ProductCard';
import { Utensils, Coffee, Pizza, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock data
const featuredProducts = [
  {
    id: 1,
    name: "Burger Duplo",
    description: "Dois hambúrgueres, queijo, alface, molho especial",
    price: 25.90,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3",
    category: 1
  },
  {
    id: 2,
    name: "Combo Família",
    description: "4 burgers, batatas grandes, 4 refrigerantes",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&q=80&w=1769&ixlib=rb-4.0.3",
    category: 1
  },
  {
    id: 3,
    name: "Milk Shake",
    description: "Milk shake cremoso de chocolate com chantilly",
    price: 15.90,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3",
    category: 3
  },
  {
    id: 4,
    name: "Porção de Batatas",
    description: "Batatas fritas crocantes com molho especial",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3",
    category: 2
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-fast-red font-medium">Mais pedidos</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">Populares</h2>
          </div>
          
          <Button asChild variant="link" className="text-fast-red hover:text-fast-red/80">
            <Link to="/menu" className="flex items-center">
              Ver todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
