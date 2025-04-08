
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-fast-red text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-fast-yellow font-bold text-2xl">FastFoodFusion</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-fast-yellow font-medium">Home</Link>
            <Link to="/menu" className="hover:text-fast-yellow font-medium">Menu</Link>
            <Link to="/promos" className="hover:text-fast-yellow font-medium">Promoções</Link>
            <Link to="/contact" className="hover:text-fast-yellow font-medium">Contato</Link>
          </div>
          
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-fast-yellow text-fast-brown rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-3 bg-fast-red">
            <Link to="/" className="block py-2 hover:bg-red-700 px-4" onClick={toggleMenu}>Home</Link>
            <Link to="/menu" className="block py-2 hover:bg-red-700 px-4" onClick={toggleMenu}>Menu</Link>
            <Link to="/promos" className="block py-2 hover:bg-red-700 px-4" onClick={toggleMenu}>Promoções</Link>
            <Link to="/contact" className="block py-2 hover:bg-red-700 px-4" onClick={toggleMenu}>Contato</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
