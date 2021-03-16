import { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const { Provider } = UserContext;
  const [cart, setCart] = useState(
    localStorage.getItem('cartCars')
      ? JSON.parse(localStorage.getItem('cartCars'))
      : []
  );
  const [checkoutForm, setCheckoutForm] = useState({});
  const [billingForm, setBillingForm] = useState({});
  const [checkoutState, setCheckoutState] = useState({});
  const [userState, setUserState] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  }, [billingForm]);

  useEffect(() => {
    localStorage.setItem('cartCars', JSON.stringify(cart));
  }, [cart]);

  
  const registerUser = (user) => {
    if (userState.length === 0) {
      user.id = user.email;
      setUserState([...userState, user]);
    } else {
      userState.forEach(object => {
        if (object.email === user.email) {
          console.log("Already exist!");
          return;
      } else {
        user.id = user.email;
        setUserState([...userState, user]);
      }
      });
    };

    // if (userState.length > 0) {
    //   userState.forEach(object => {
    //     if (object.email === user.email) {
    //       console.log("Already exist!");
    //     } else {
    //       user.id = user.email;
    //       setUserState([...userState, user]);
    //     };
    //   });
    // } else {
    //   user.id = user.email;
    //   setUserState([...userState, user]);
    // }
  };
  
  console.log(checkoutState);
  return (
    <Provider
      value={{
        cart,
        addToCart,
        setCart,
        removeFromCart,
        handleCheckout,
        checkoutForm,
        setCheckoutForm,
        checkoutState,
        userState,
        setUserState,
        registerUser,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserContextProvider;
