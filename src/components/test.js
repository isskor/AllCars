import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import Cart from '../pages/Cart.js';
// import { CartContext } from '../contexts/CartContext';
const Test = () => {
  const { cars } = useContext(CarContext);
  //   const { addToCart, cart } = useContext(CartContext);
  console.log(cars);
  return (
    <div>
      <Cart/>
    </div>
  );
};

export default Test;
