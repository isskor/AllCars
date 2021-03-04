import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import AddToCart from './AddToCart';
import { CartContext } from '../contexts/CartContext';
const Test = () => {
  const { cars } = useContext(CarContext);
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  console.log(cars);
  return (
    <div>
      {/* for testing, display cart length */}
      <h2>cart items {cart.length}</h2>
      {cars.map((car) => (
        <div>
          {/* for testing, click on title to add to cart */}
          <h1>{car.make}</h1>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{`${car.discounted}`}</p>
          <AddToCart car={car} />
          <button onClick={() => removeFromCart(car)}>Remove from cart</button>
        </div>
      ))}
    </div>
  );
};

export default Test;
