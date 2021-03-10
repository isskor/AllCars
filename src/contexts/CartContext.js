import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const { Provider } = CartContext;
  const [cart, setCart] = useState([{ price: 999999999 }]);
  const [checkoutForm, setCheckoutForm] = useState({});
  const [billingForm, setBillingForm] = useState({});
  const [checkoutState, setCheckoutState] = useState({});

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((car) => car !== item));
  };

  const handleCheckout = (billing) => {
    setBillingForm(billing);
    setCheckoutForm(checkoutForm);
  };

  useEffect(() => {
    setCheckoutState({
      cars: cart,
      form: checkoutForm,
    });
  }, [checkoutForm, cart]);

  console.log(checkoutState);
  return (
    <Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        handleCheckout,
        setCheckoutForm,
        checkoutState,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContextProvider;
