import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Modal = ({ openModal, setOpenModal }) => {
  const history = useHistory();

  const handleModalClick = (click) => {
    setOpenModal(false);
    if (click === 'home') {
      history.push('/');
      return;
    }
    history.push('/cart');
    return;
  };

  return (
    <>
      {openModal && (
        <div>
          <p>Added To cart!</p>
          <div className='btn_container'>
            <button onClick={() => handleModalClick('home')}>Buy More</button>

            <button onClick={() => handleModalClick('cart')}>Go To Cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
