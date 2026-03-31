import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    clearCart();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-950 dark:text-white">Your Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center shadow">
          <div className="text-7xl mb-6">🛒</div>
          <h3 className="text-2xl font-medium mb-3 font-medium text-gray-950 dark:text-white">Your cart is empty</h3>
          <p className="text-gray-500">Add some products from the Products tab.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map(product => (
            <div key={product.id} className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow">
              <div className="text-5xl">{product.icon}</div>
              <div className="flex-1 font-medium text-gray-950 dark:text-white">
                <h4 className="font-semibold text-lg">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.period}</p>
              </div>
              <div className="text-2xl font-bold">${product.price}</div>
              <button
                onClick={() => removeFromCart(product)}
                className="text-red-500 hover:bg-red-50 px-5 py-2 rounded-xl transition-colors"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="bg-white rounded-3xl p-8 mt-10 shadow font-medium text-gray-950 dark:text-white">
            <div className="flex justify-between text-2xl font-semibold mb-6">
              <span className=" text-gray-950 dark:text-white">Total</span>
              
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold py-5 rounded-2xl text-lg hover:brightness-105 transition"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;