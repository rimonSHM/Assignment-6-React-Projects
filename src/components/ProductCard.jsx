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
      <div className="px-6 pb-8">
        <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">{product.description}</p>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-4xl font-bold">${product.price}</span>
          <span className="text-gray-500">/{product.period}</span>
        </div>

        <ul className="space-y-2 mb-8 text-sm">
          {product.features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-500">✓</span> {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 rounded-xl transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
     
  );
};

export default ProductCard;