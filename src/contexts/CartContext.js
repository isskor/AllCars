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
  const [checkoutState, setCheckoutState] = useState({
    cars: [
      {
        make: 'Pontiac',
        model: 'Montana SV6',
        year: 2006,
        vin: 'JN1CV6FE7DM360307',
        city: 'Jāsim',
        descShort:
          'purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam',
        descLong:
          'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        price: 299379,
        miles: 12346,
      },
    ],

    form: {
      name: 'Johny Cash',
      address: 'Solgatan 21, Stockholm',
      method: 'Exspress delivery',
      number: '8768769870',
    },
  });

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
  }, [billingForm, cart]);

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
