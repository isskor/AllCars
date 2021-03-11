import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const { Provider } = CartContext;
  const [cart, setCart] = useState(
    localStorage.getItem('cartCars')
      ? JSON.parse(localStorage.getItem('cartCars'))
      : []
  );
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
    console.log(checkoutForm);
  };

  useEffect(() => {
    setCheckoutState({
      cars: cart,
      form: checkoutForm,
    });
  setCart([])
  }, [billingForm ]);

  useEffect(() => {
    localStorage.setItem('cartCars', JSON.stringify(cart));
  }, [cart]);

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
