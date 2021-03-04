import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { CartContext } from '../contexts/CartContext';
const Test = () => {
  const { cars } = useContext(CarContext);
  const { addToCart, cart } = useContext(CartContext);
  console.log(cars);
  return (
    <div>
      {/* for testing, display cart length */}
      {/* <h2>cart items {cart.length}</h2> */}
      {cars.map((car) => (
        <div>
          {/* for testing, click on title to add to cart */}
          <h1 onClick={() => addToCart(car)}>{car.make}</h1>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{`${car.discounted}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
