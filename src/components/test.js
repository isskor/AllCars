import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { CartContext } from '../contexts/CartContext';
import About from '../pages/About';
const Test = () => {
  const { cars } = useContext(CarContext);
  const { addToCart, cart } = useContext(CartContext);
  console.log(cars);
  return (
    <div>
      <About />
    </div>
  );
};

export default Test;
