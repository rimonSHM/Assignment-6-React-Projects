
// This is the Navbar component for the DigiTools landing page.
import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount = 0, activeTab, onTabChange }) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-4xl font-bold text-purple-600">DigiTools</div>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600 transition">Products</a>
          <a href="#" className="hover:text-purple-600 transition">Features</a>
          <a href="#" className="hover:text-purple-600 transition">Pricing</a>
          <a href="#" className="hover:text-purple-600 transition">Testimonials</a>
          <a href="#" className="hover:text-purple-600 transition">FAQ</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Cart Icon */}
          <button 
            onClick={() => onTabChange('cart')}
            className="relative flex items-center gap-2 text-gray-700 hover:text-purple-600 transition"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login Button */}
          <button className="hidden md:block px-6 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-full transition">
            Login
          </button>

          {/* Get Started Button */}
          <button 
            onClick={() => onTabChange('products')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-semibold transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

