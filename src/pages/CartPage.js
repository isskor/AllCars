import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import CartItem from '../components/CartItem';
import CartForm from '../components/CartForm';
import styles from '../css/CartPage.module.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BillingForm from '../components/BillingForm';
import useForm from '../components/useForm';
import { validateCheckout } from '../components/FormValidationRules';
const CartPage = () => {
  const { cart, handleCheckout } = useContext(CartContext);
  const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
  const history = useHistory();

  const { handleChange, handleSubmit, values, errors } = useForm(
    checkout,
    validateCheckout
  );

  function checkout() {
    console.log('checkout');
    console.log(values);
    handleCheckout(values);
  }

  useEffect(() => {
    console.log(values);
  }, [values]);

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
        <form
          className={styles.cart_form_container}
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <CartForm errors={errors} />
          <BillingForm errors={errors} />
        </form>

        <div className={styles.billingForm}></div>
      </div>
    </div>
  );
};

export default CartPage;
