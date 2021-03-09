import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Modal from './Modal';
const AddToCartButton = ({ car }) => {
  const { addToCart } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const clickHandler = (car) => {
    addToCart(car);
    setOpenModal(true);
  };

  return (
    <>
      <button onClick={() => clickHandler(car)}>Add To Cart</button>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default AddToCartButton;
