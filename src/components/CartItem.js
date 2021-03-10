import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styles from '../css/CartItem.module.css';
const CartItem = ({ cartItem, checkout = false }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className={styles.carCard}>
      <div className={styles.img_container}>
        <img
          src={`/assets/car-pictures/${cartItem.make}-${cartItem.model}-${cartItem.year}.jpg`}
          alt='Car picture'
        />
      </div>
      <div className={styles.car_info_container}>
        <div className={styles.car_info}>
          <p>
            {cartItem.make} {cartItem.model} {cartItem.year}
          </p>
        </div>
        <div className={styles.car_info}>
          <p className={styles.car_info_label}>Miles</p>
          <p className='car_miles'>{cartItem.miles}</p>
        </div>
        <div className={styles.car_info}>
          <p className={styles.car_info_label}>Price</p>
          <p className={styles.car_price}>{cartItem.price}</p>
        </div>
      </div>
      {!checkout && (
        <button
          className={styles.removeBtn}
          onClick={() => removeFromCart(cartItem)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default CartItem;
