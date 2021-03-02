import { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
const addToCartButton = ({ car }) => {
  const { addToCart } = useContext(CartContext);
  return <button onClick={() => addToCart(car)}>Add To Cart</button>;
};

export default addToCartButton;
