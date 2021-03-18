import { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const history = useHistory();
  const { Provider } = UserContext;

  //******** context States
  const [cart, setCart] = useState(
    localStorage.getItem('cartCars')
      ? JSON.parse(localStorage.getItem('cartCars'))
      : []
  );
  const [checkoutForm, setCheckoutForm] = useState({});
  const [checkoutState, setCheckoutState] = useState({});
  const [usersState, setUsersState] = useState([
    {
      email: 'something@hej.se',
      password: 'hejhej1',
      id: 1,
    },
    {
      email: 'some@hej.se',
      password: 'hej2',
      id: 2,
    },
    {
      email: 'thing@hej.se',
      id: 3,
      password: 'hej3',
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  //******** cart functions
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((car) => car !== item));
  };

  const handleCheckout = (form) => {
    setCheckoutForm(form);
  };

  //******** user functions

  const registerUser = (user) => {
    const userExist = usersState.filter(
      (object) => object.email === user.email
    );
    if (userExist.length > 0) {
      console.log('Already exist!');
      return;
    }
    user.id = user.email;
    setUsersState([...usersState, user]);
    setIsRegistered(true);
    history.replace('/login');
  };
  // current user dummy object
  // const ben = {
  // address name etc.
  //   ...user,
  //   userCart: cart,
  //   purchaseHistory: {
  //     id: '',
  //     cars: [],
  //     form: {},
  //   },
  // };

  //******** user logout
  // save to localstorage
  // set cart: 0
  // reset all other state?

  //******** on checkout
  useEffect(() => {
    setCheckoutState({
      timestamp: new Date().toLocaleString(),
      id: uuidv4(),
      cars: cart,
      form: checkoutForm,
    });
    // currentUser.history.push({ cars: cart, form: checkoutForm });
  }, [checkoutForm]);

  useEffect(() => {
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        purchaseHistory: { ...currentUser.purchaseHistory, checkoutState },
      });
    }
  }, [checkoutState]);

  //******** local storage

  useEffect(() => {
    localStorage.setItem('cartCars', JSON.stringify(cart));
  }, [cart]);

  //******** log users and currentuser
  useEffect(() => {
    if (currentUser) {
      const a = usersState.filter((user) => user.id !== currentUser.id);

      setUsersState([...a, currentUser]);
    }
  }, [currentUser]);
  console.log(currentUser);
  console.log(usersState);

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
        registerUser,
        isRegistered,
        currentUser,
        setCurrentUser,
        usersState,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserContextProvider;
