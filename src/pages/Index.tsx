
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import OrderSteps from '@/components/OrderSteps';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <OrderSteps />
        
        {/* Promotional Banner */}
        <section className="py-10 bg-gradient-to-r from-fast-red to-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Entrega <span className="text-fast-yellow">GRÁTIS</span> na primeira compra!
            </h2>
            <p className="text-lg mb-6">
              Use o código <span className="font-bold bg-fast-yellow text-fast-brown px-2 py-1 rounded">BEMVINDO</span> no checkout
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
