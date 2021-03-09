import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const { Provider } = CartContext;
  const [cart, setCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({});
  const [checkoutState, setCheckoutState] = useState({})

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((car) => car !== item));
  };

  const handleCheckout = (form, form2) => {
    setCheckoutForm({...form, ...form2})
    console.log(form , form2)
  };

  useEffect(() => {
    setCheckoutState({
      cars: cart,
      form: checkoutForm
    })

  },[checkoutForm, cart])


  
  return (
    <Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        handleCheckout,
        checkoutState,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContextProvider;
