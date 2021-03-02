import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
const AddToCartButton = ({ car }) => {
  const { addToCart } = useContext(CartContext);
  return <button onClick={() => addToCart(car)}>Add To Cart</button>;
};

export default AddToCartButton;
