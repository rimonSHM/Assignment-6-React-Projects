
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

  

