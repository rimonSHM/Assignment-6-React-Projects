import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const tagColors = {
    'best-seller': 'bg-amber-500',
    'popular': 'bg-purple-500',
    'new': 'bg-emerald-500'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100">
      <div className="p-6 flex justify-between items-start">
        <div className="text-6xl">{product.icon}</div>
        {product.tag && (
          <span className={`px-4 py-1.5 text-xs font-bold rounded-full text-white ${tagColors[product.tagType]}`}>
            {product.tag}
          </span>
        )}
      </div>

     
  );
};

export default ProductCard;