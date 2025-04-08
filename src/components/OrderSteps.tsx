
import React from 'react';
import { ShoppingCart, Clock, Truck } from 'lucide-react';

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
      icon: <Truck size={32} />,
      title: "Receba e desfrute",
      description: "Receba seu pedido rapidamente e aproveite sua refeição"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-fast-red font-medium">Processo simples</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Como funciona</h2>
          <p className="text-gray-600 max-w-md mx-auto mt-2">
            Peça seu lanche em apenas 3 passos simples
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative">
              <div className="absolute -top-5 -left-5 bg-fast-yellow text-fast-brown rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="bg-fast-red/10 text-fast-red rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;
