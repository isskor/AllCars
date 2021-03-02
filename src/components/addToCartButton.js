import { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
const addToCartButton = () => {
  const { addToCart } = useContext(CartContext);
  return <div></div>;
};

export default addToCartButton;
