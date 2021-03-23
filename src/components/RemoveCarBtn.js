import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../css/CartItem.module.css';
import { CloseCircleOutlined } from '@ant-design/icons';
function RemoveCarBtn({ cartItem }) {
  const { removeFromCart } = useContext(UserContext);
  return (
    <>
      <div
        className={styles.removeBtn}
        onClick={() => removeFromCart(cartItem)}
      >
        <CloseCircleOutlined />
      </div>
    </>
  );
}

export default RemoveCarBtn;
