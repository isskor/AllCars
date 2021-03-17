import { TrendingUpRounded } from '@material-ui/icons';
import { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const history = useHistory();
  const { Provider } = UserContext;
  const [cart, setCart] = useState(
    localStorage.getItem('cartCars')
      ? JSON.parse(localStorage.getItem('cartCars'))
      : []
  );
  const [checkoutForm, setCheckoutForm] = useState({});
  // const [billingForm, setBillingForm] = useState({});
  const [checkoutState, setCheckoutState] = useState({});
  const [userState, setUserState] = useState([
    {
      email: "something@hej.se",
      password: "hejhej1"
    },
    {
      email: "some@hej.se",
      password: "hej2"
    },
    {
      email: "thing@hej.se",
      password: "hej3"
    }
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((car) => car !== item));
  };

  const handleCheckout = (form) => {
    setCheckoutForm(form);
    console.log(checkoutForm);
  };

  useEffect(() => {
    setCheckoutState({
      cars: cart,
      form: checkoutForm,
    });
  }, [checkoutForm]);

  useEffect(() => {
    localStorage.setItem('cartCars', JSON.stringify(cart));
  }, [cart]);

  const registerUser = (user) => {
    const a = userState.filter((object) => object.email === user.email);
    if (a.length > 0) {
      console.log("Already exist!");
      return;
    }
    user.id = user.email;
    setUserState([...userState, user]);
    history.replace("/login");
  };

  const loginUser = (user) => {
    userState.forEach((object) => {
      if (object.email === user.email && object.password === user.password) {
        setIsLoggedIn(true);
        console.log("Login sucessful!");
        history.goBack();
        return;
      } else {
        setIsLoggedIn(false);
        console.log("Wrong email or password...");
      };
    });
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
        loginUser
      }}
    >
      {children}
    </Provider>
  );
};

export default UserContextProvider;
