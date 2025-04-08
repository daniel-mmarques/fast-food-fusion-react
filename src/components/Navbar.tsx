
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-fast-red font-bold text-2xl">FastFood<span className="text-fast-yellow">Fusion</span></span>
          </Link>
          
          {/* Desktop Search */}
          <div className="hidden md:flex relative max-w-md w-full mx-4">
            <Input 
              type="search" 
              placeholder="Buscar lanches, bebidas..." 
              className="pr-10 border-gray-200 focus:border-fast-red focus:ring-fast-red/20"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-fast-red font-medium">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-fast-red font-medium">Menu</Link>
            <Link to="/promos" className="text-gray-700 hover:text-fast-red font-medium">Promoções</Link>
            <Link to="/contact" className="text-gray-700 hover:text-fast-red font-medium">Contato</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-fast-red">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-fast-red text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2 text-gray-700">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden mt-3 relative">
          <Input 
            type="search" 
            placeholder="Buscar lanches, bebidas..." 
            className="pr-10 border-gray-200 w-full"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-3 bg-white border-t">
            <Link to="/" className="block py-2 text-gray-700 hover:bg-gray-50 px-4" onClick={toggleMenu}>Home</Link>
            <Link to="/menu" className="block py-2 text-gray-700 hover:bg-gray-50 px-4" onClick={toggleMenu}>Menu</Link>
            <Link to="/promos" className="block py-2 text-gray-700 hover:bg-gray-50 px-4" onClick={toggleMenu}>Promoções</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:bg-gray-50 px-4" onClick={toggleMenu}>Contato</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
