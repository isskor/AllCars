import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Modal from './Modal';
import style from '../css/CarCard.module.css';
const AddToCartButton = ({ car }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const checkCart = (car) => {
    return cart.find((findVin) => {
      return findVin.vin === car.vin;
    });
  };

  const clickHandler = (e, car) => {
    addToCart(car);
    setOpenModal(true);
  };

  return (
    <>
      {!checkCart(car) ? (
        <>
          <button
            data-add-btn='addBtn'
            className={style.addBtn}
            onClick={(e) => clickHandler(e, car)}
          >
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
