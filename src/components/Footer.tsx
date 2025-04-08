
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-fast-red font-bold text-2xl">FastFood<span className="text-fast-yellow">Fusion</span></span>
            </Link>
            <p className="text-sm mt-4 text-gray-600">
              Os melhores lanches da cidade entregues na sua porta com rapidez e qualidade garantida.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-fast-red">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-fast-red">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-fast-red">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Menu</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-600 hover:text-fast-red">Lanches</Link></li>
              <li><Link to="/menu" className="text-gray-600 hover:text-fast-red">Combos</Link></li>
              <li><Link to="/menu" className="text-gray-600 hover:text-fast-red">Bebidas</Link></li>
              <li><Link to="/menu" className="text-gray-600 hover:text-fast-red">Sobremesas</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Suporte</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-fast-red">Contato</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-fast-red">FAQ</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-fast-red">Sobre nós</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-fast-red">Termos de uso</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contato</h4>
            <p className="text-gray-600">Av. Fast Food, 1234</p>
            <p className="text-gray-600">São Paulo, SP</p>
            <p className="text-gray-600 mt-2">contato@fastfoodfusion.com</p>
            <p className="text-gray-600">+55 11 9999-8888</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-sm text-center text-gray-600">
            &copy; {new Date().getFullYear()} FastFoodFusion. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
