import { useContext } from 'react';
import {CartContext} from '../contexts/CartContext';
import styles from '../css/CartItem.module.css';
const CartItem = ({ cartItem }) => {
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
        <div className='car_info'>
          <p>Car</p>
          <p>
            {cartItem.make} {cartItem.model} {cartItem.year}
          </p>
        </div>
        <div className='car_miles_ctn'>
          <p>Miles</p>
          <p className='car_miles'>{cartItem.miles}</p>
        </div>
        <div className='car_price_ctn'>
          <p className={styles.car_price}>{cartItem.price}</p>
        </div>
      </div>
      <button
        className={styles.removeBtn}
        onClick={() => removeFromCart(cartItem)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
