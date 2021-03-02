import { useState, createContext } from 'react';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const { Provider } = CartContext;
  const [cart, setCart] = useState([]);
  const [checkOutForm, setCheckOutForm] = useState({});
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((car) => car !== item));
  };

  const handleCheckout = (form) => {
    return {
      cart,
      checkOutForm,
    };
  };

  return (
    <Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setCheckOutForm,
        handleCheckout,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContextProvider;
