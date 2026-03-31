import { products } from '../data/products';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
     <div>
      <h2 className="text-4xl font-bold text-center mb-3 text-gray-950 dark:text-white">Premium Digital Tools</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Choose from our curated collection of premium digital products
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-medium text-gray-950 dark:text-white">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
   
  );
};

export default ProductGrid;