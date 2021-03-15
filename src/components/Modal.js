import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../css/Modal.module.css';
const Modal = ({ openModal, setOpenModal }) => {
  const history = useHistory();

  const handleModalClick = (click) => {
    setOpenModal(false);
    if (click === 'home') {
      setOpenModal(false);
      return;
    }
    history.push('/cart');
    return;
  };

  return (
    <>
      {openModal && (
        <div className={styles.modal}>
          <div className={styles.modal_container}>
            <p>Added To cart!</p>
            <div className={styles.btn_container}>
              <button onClick={() => handleModalClick('home')}>Buy More</button>

              <button onClick={() => handleModalClick('cart')}>
                Go To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
