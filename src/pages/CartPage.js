import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import CartItem from '../components/CartItem';
import CartForm from '../components/CartForm';
import styles from '../css/CartPage.module.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BillingForm from '../components/BillingForm';

const CartPage = () => {
  const { cart } = useContext(UserContext);
  const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
  const history = useHistory();

  return (
    <div className={styles.cart}>
      <div>
      <a onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </a>
      </div>
      <h2>Checkout</h2>
      <div className={styles.cartContainer}>
        <div className={styles.cartLeft}>
          <ul>
            {cart.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.vin} />
            ))}
          </ul>
          <div className={styles.total}>
            <h4>Total</h4>
            <h3>$ {totalCost.toLocaleString()}​​​​​</h3>
          </div>
        </div>
        <div className={styles.cartRight}>
          <CartForm />
        </div>
        <div className={styles.billingForm}>
          <BillingForm />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
