import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CartPage from '../pages/CartPage.js';
import { CartContext } from '../contexts/CartContext';
const Test = () => {
  const { cars } = useContext(CarContext);
    const { addToCart, cart } = useContext(CartContext);
  console.log(cars);
  return (
    <div>
      {cars.map(car=>{
        return (
          <p onClick={()=>addToCart(car)}>{car.model}</p>
        )
      })}
      <CartPage />
    </div>
  );
};

export default Test;
