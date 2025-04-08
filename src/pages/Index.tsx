
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import OrderSteps from '@/components/OrderSteps';
import CategoryBar from '@/components/CategoryBar';
import { Utensils, Coffee, Pizza, IceCream } from 'lucide-react';

const Index = () => {
  // Mock categories
  const categories = [
    { id: 1, name: "Lanches", icon: <Pizza size={16} /> },
    { id: 2, name: "Acompanhamentos", icon: <Utensils size={16} /> },
    { id: 3, name: "Bebidas", icon: <Coffee size={16} /> },
    { id: 4, name: "Sobremesas", icon: <IceCream size={16} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection />
        
        {/* Category Bar */}
        <div className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <CategoryBar 
              categories={categories} 
              selectedCategory={null} 
              onSelectCategory={() => {}} 
            />
          </div>
        </div>
        
        <FeaturedProducts />
        <OrderSteps />
        
        {/* Promotional Banner */}
        <section className="py-10 bg-gradient-to-r from-fast-red to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Entrega <span className="text-fast-yellow">GRÁTIS</span> na primeira compra!
            </h2>
            <p className="text-lg mb-6">
              Use o código <span className="font-bold bg-fast-yellow text-fast-brown px-3 py-1 rounded-lg">BEMVINDO</span> no checkout
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
