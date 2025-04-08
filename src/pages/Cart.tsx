
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Cart = () => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();
  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    toast.success('Item removido do carrinho');
  };

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      // This would be replaced with your actual PHP API endpoint
      // Example of how it would work:
      // const response = await fetch('https://your-php-backend.com/api/order', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     items,
      //     total,
      //     couponCode
      //   }),
      // });
      
      // if (!response.ok) throw new Error('Falha ao processar o pedido');
      // const data = await response.json();
      
      // Simulate successful order for now
      setTimeout(() => {
        toast.success('Pedido realizado com sucesso!');
        clearCart();
        navigate('/');
        setLoading(false);
      }, 1500);
      
    } catch (error) {
      toast.error('Erro ao processar o pedido');
      setLoading(false);
    }
  };
  
  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'BEMVINDO') {
      toast.success('Cupom aplicado com sucesso!');
      // In real app, this would make an API call to verify the coupon
      // and apply the discount returned from the backend
    } else {
      toast.error('Cupom inválido');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <h1 className="text-2xl font-bold mb-6">Meu Carrinho</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 mb-4 text-gray-300">
              <ShoppingBag size={64} />
            </div>
            <h2 className="text-xl font-semibold mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-500 mb-6">Adicione alguns produtos para continuar</p>
            <Button onClick={() => navigate('/')} className="bg-fast-red hover:bg-fast-red/90">
              Continuar comprando
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-b last:border-0">
                    <div className="w-20 h-20 rounded-md overflow-hidden mr-4">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-fast-red font-medium">R$ {item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border rounded-md">
                        <button 
                          className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => handleRemoveItem(item.id)} 
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Resumo do pedido</h2>
                
                <div className="space-y-2 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.name}</span>
                      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex items-end gap-2 mb-4">
                    <div className="flex-grow">
                      <Label htmlFor="coupon" className="mb-1 block">Cupom de desconto</Label>
                      <Input 
                        id="coupon"
                        value={couponCode} 
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="BEMVINDO" 
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={applyCoupon}
                    >
                      Aplicar
                    </Button>
                  </div>
                  
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Subtotal</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Taxa de entrega</span>
                    <span>Grátis</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Total</span>
                    <span className="text-fast-red">R$ {total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-fast-red hover:bg-fast-red/90 gap-2" 
                  disabled={loading}
                  onClick={handleCheckout}
                >
                  {loading ? 'Processando...' : 'Finalizar pedido'} 
                  {!loading && <ArrowRight size={16} />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
