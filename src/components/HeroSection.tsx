
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-white pt-24 pb-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-fast-red/5 rounded-l-3xl"></div>
        <div className="absolute bottom-12 left-1/4 bg-fast-yellow/10 w-64 h-64 rounded-full"></div>
        <div className="absolute top-20 right-1/4 bg-fast-red/10 w-40 h-40 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="inline-block px-4 py-1 mb-4 text-sm bg-fast-yellow/20 text-fast-brown rounded-full">
              Faça seu pedido agora
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Sabor na sua <span className="text-fast-red">porta em minutos</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Os melhores lanches da cidade entregues rapidamente. 
              Experimente nosso novo cardápio!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-fast-red text-white hover:bg-fast-red/90">
                <Link to="/menu">Pedir agora <ArrowRight size={16} className="ml-1" /></Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-fast-red text-fast-red hover:bg-fast-red/5">
                <Link to="/promos">Ver promoções</Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-fast-red/80 to-fast-red rounded-full absolute -z-10 blur-2xl opacity-20"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3" 
                alt="Burger Hero" 
                className="rounded-2xl shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-white"
              />
              
              <div className="absolute -bottom-5 -right-5 bg-white shadow-lg rounded-2xl py-2 px-4 font-bold text-fast-red flex items-center gap-2">
                <span className="bg-fast-yellow text-fast-brown text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  🔥
                </span>
                <span>Novidade!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
