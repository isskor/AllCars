import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../css/Modal.module.css';
const Modal = ({ openModal, setOpenModal }) => {
  const history = useHistory();

  const handleModalClick = (e, click) => {
    console.log('handleModal click');
    setOpenModal(false);
    if (click === 'home') {
      setOpenModal(false);
      return;
    }
    history.push('/cart');
    return;
  };

  // const modalClick = (e) => {
  //   if (e.target.classList.contains('modal')) setOpenModal(false);
  //   console.log('modal shadow click');
  // };

  return (
    <>
      {openModal && (
        <div className={`modal ${styles.modal}`}>
          <div className={styles.modal_container}>
            <p>Added To cart!</p>
            <div className={styles.btn_container}>
              <button onClick={(e) => handleModalClick(e, 'home')}>
                Buy More
              </button>

              <button onClick={(e) => handleModalClick(e, 'cart')}>
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
