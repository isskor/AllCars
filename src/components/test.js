import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import AddToCart from './AddToCart';
import { CartContext } from '../contexts/CartContext';
import CarDetails from '../pages/CarDetails';
const Test = () => {
  const { cars } = useContext(CarContext);
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  console.log(cars);
  return (
    <div>
      <CarDetails />
    </div>
  );
};

export default Test;
