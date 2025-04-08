
import React from 'react';
import { ShoppingCart, Utensils, Clock } from 'lucide-react';

const OrderSteps = () => {
  const steps = [
    {
      icon: <ShoppingCart size={32} />,
      title: "Escolha seus produtos",
      description: "Navegue pelo nosso cardápio e escolha seus lanches favoritos"
    },
    {
      icon: <Clock size={32} />,
      title: "Faça seu pedido",
      description: "Adicione ao carrinho e finalize seu pedido em poucos cliques"
    },
    {
      icon: <Utensils size={32} />,
      title: "Receba e desfrute",
      description: "Receba seu pedido rapidamente e aproveite sua refeição"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-fast-brown mb-2">Como Funciona</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Peça seu lanche em 3 passos simples
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-fast-yellow text-fast-brown rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-fast-brown mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;
