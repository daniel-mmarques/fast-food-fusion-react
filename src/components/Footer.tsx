
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-fast-brown text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-fast-yellow">FastFoodFusion</h3>
            <p className="text-sm">
              Os melhores lanches da cidade entregues na sua porta.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-fast-yellow">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-fast-yellow">Home</Link></li>
              <li><Link to="/menu" className="text-sm hover:text-fast-yellow">Cardápio</Link></li>
              <li><Link to="/promos" className="text-sm hover:text-fast-yellow">Promoções</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-fast-yellow">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-fast-yellow">Contato</h4>
            <p className="text-sm">Av. Fast Food, 1234</p>
            <p className="text-sm">São Paulo, SP</p>
            <p className="text-sm">contato@fastfoodfusion.com</p>
            <p className="text-sm">+55 11 9999-8888</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} FastFoodFusion. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
