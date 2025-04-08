
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-fast-red to-red-700 text-white pt-24 pb-16">
      {/* Yellow decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 bg-fast-yellow rounded-full w-16 h-16 opacity-20"></div>
        <div className="absolute bottom-20 left-10 bg-fast-yellow rounded-full w-24 h-24 opacity-20"></div>
        <div className="absolute top-40 left-1/4 bg-fast-yellow rounded-full w-12 h-12 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sabor Incrível, <br />
            <span className="text-fast-yellow">Entrega Rápida!</span>
          </h1>
          <p className="text-lg mb-6 max-w-md">
            Os melhores lanches da cidade entregues na sua porta em minutos. Peça agora e satisfaça sua fome!
          </p>
          <div className="flex space-x-4">
            <Button asChild className="bg-fast-yellow text-fast-brown hover:bg-amber-400">
              <Link to="/menu">Ver Cardápio</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/promos">Promoções</Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3" 
              alt="Burger Hero" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-fast-yellow shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-fast-yellow text-fast-brown rounded-full py-2 px-4 font-bold shadow-lg transform rotate-6">
              Novidade!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
