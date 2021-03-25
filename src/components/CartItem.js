import { useHistory } from 'react-router-dom';
import styles from '../css/CartItem.module.css';
import RemoveCarBtn from './RemoveCarBtn';

const CartItem = ({ cartItem, checkout = false }) => {
  const history = useHistory();

  function goToCarDetails(e) {
    if (e.target.tagName === 'svg' || e.target.tagName === 'path') return;
    history.push(`/car/${cartItem.vin}`);
  }

  return (
    <div className={styles.carCard} onClick={goToCarDetails}>
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
        <div className={styles.car_info_miles}>
          <p className='car_miles'>{cartItem.miles} miles</p>
        </div>
        <div className={styles.car_info_price}>
          <p className={styles.car_price}>
            $ {cartItem.price.toLocaleString()}
          </p>
        </div>
      </div>
      {checkout && <RemoveCarBtn cartItem={cartItem} />}
    </div>
  );
};

export default CartItem;
