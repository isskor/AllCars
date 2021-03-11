import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Modal from './Modal';
import style from '../css/CarCard.module.css';
const AddToCartButton = ({ car }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const checkCart = (car) => {
    return cart.includes(car);
  };

  const clickHandler = (car) => {
    addToCart(car);
    setOpenModal(true);
  };

  return (
    <>
      {!checkCart(car) ? (
        <>
          <button className={style.addBtn} onClick={() => clickHandler(car)}>
            Add To Cart
          </button>
        </>
      ) : (
        <span className={style.addBtn}>In Cart</span>
      )}
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default AddToCartButton;
