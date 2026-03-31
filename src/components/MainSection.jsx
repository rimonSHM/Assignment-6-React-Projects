import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductGrid from './ProductGrid';
import Cart from './Cart';

const MainSection = () => {
  const [activeTab, setActiveTab] = useState('products');
  const { cartCount } = useCart();

  return (
   
  );
};

export default MainSection;