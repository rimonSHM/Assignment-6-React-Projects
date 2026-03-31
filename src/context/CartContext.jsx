

import { createContext, useContext, useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find(item => item.id === action.payload.id);

      if (existing) {
        toast.info(`${action.payload.name} is already in cart!`);
        return state;
      }

      toast.success(`${action.payload.name} added to cart! 🎉`);
      return { ...state, items: [...state.items, action.payload] };
    }

    case 'REMOVE_FROM_CART': {
      toast.error(`${action.payload.name} removed from cart`);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    }

    case 'CLEAR_CART': {
      if (state.items.length === 0) return state;

      toast.success("Thank you for your purchase! 🛍️", { autoClose: 4000 });
      return { ...state, items: [] };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // ✅ Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product) =>
    dispatch({ type: 'ADD_TO_CART', payload: product });

  const removeFromCart = (product) =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  // ✅ Safer total calculation
  const totalPrice = state.items.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        cartCount: state.items.length
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Safety wrapper
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};