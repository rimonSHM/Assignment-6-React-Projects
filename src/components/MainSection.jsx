import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductGrid from './ProductGrid';
import Cart from './Cart';

const MainSection = () => {
  const [activeTab, setActiveTab] = useState('products');
  const { cartCount } = useCart();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow p-1.5">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-10 py-3.5 rounded-full font-semibold transition-all ${
                activeTab === 'products' 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab('cart')}
              className={`px-10 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'cart' 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cart
              {cartCount > 0 && (
                <span className="ml-1 bg-white text-purple-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Show Products or Cart */}
        {activeTab === 'products' ? <ProductGrid /> : <Cart />}
      </div>
    </div>
  );
};

export default MainSection;