import { useState, createContext } from 'react';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const { Provider } = CartContext;
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((car) => car !== item));
  };

  return (
    <Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContextProvider;
