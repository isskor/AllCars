import { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import CartItem from '../components/CartItem';
import CartForm from '../components/CartForm';
import styles from '../css/CartPage.module.css';

import { ArrowLeftOutlined } from '@ant-design/icons';
import BillingForm from '../components/BillingForm';
import useForm from '../components/useForm';
import { validateCheckout } from '../components/FormValidationRules';
import LoginForm from '../components/LoginForm';
import { CarContext } from '../contexts/CarContext';

const CartPage = () => {
  const { cart, handleCheckout, currentUser } = useContext(UserContext);
  const { handleSoldCars } = useContext(CarContext);
  const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
  const history = useHistory();
  const { handleChange, handleSubmit, values, errors } = useForm(
    checkout,
    validateCheckout
  );

  function checkout() {
    handleSoldCars(cart);
    handleCheckout(values);
    history.push('/receipt');
  }

  return (
    <div className={styles.cart}>
      <div className={styles.backButton}>
        <a onClick={() => history.goBack()}>
          <ArrowLeftOutlined />
        </a>
      </div>
      {cart.length < 1 ? (
        <h2 className={styles.empty}>Cart is empty</h2>
      ) : (
        <>
          <h2>Checkout</h2>
          <div className={styles.cartContainer}>
            <div className={styles.cartLeft}>
              <ul>
                {cart.map((cartItem) => (
                  <div className={styles.item_container} key={cartItem.vin}>
                    <CartItem cartItem={cartItem} checkout={'true'} />
                  </div>
                ))}
              </ul>
              <div className={styles.total}>
                <h4>Total</h4>
                <h3>$ {totalCost.toLocaleString()}​​​​​</h3>
              </div>
            </div>
            {!currentUser ? (
              <div className={styles.login_form}>
                <h2>Login to purchase</h2>
                <Link to='/register'>
                  {' '}
                  Don't have an account? <br /> Register!
                </Link>
                <LoginForm onCartPage={true} />
              </div>
            ) : (
              <form
                className={styles.cart_form_container}
                onSubmit={handleSubmit}
                onChange={handleChange}
              >
                <CartForm errors={errors} />
                <BillingForm errors={errors} />
              </form>
            )}

            <div className={styles.billingForm}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
