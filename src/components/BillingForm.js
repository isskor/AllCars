import React from 'react';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../css/CartForm.module.css';
import { UserContext } from '../contexts/UserContext';

const BillingForm = () => {
  const history = useHistory();
  const { handleCheckout, checkoutForm, cart } = useContext(UserContext);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    nameOnCard: '',
    dateOnCard: '',
    cvc: '',
  });
  const handlePayment = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: [e.target.value] });
  };

  const takeInfo = (e) => {
    e.preventDefault();
    console.log(cart.length < 1);
    console.log(checkoutForm);
    if (cart.length < 1) {
      return;
    }

    handleCheckout(paymentInfo);
    history.push('/receipt');
  };

  const disable = () => {
    return checkoutForm.lenght > 0 && cart.length > 0;
  };

  return (
    <div className={`${styles.cartPage} ${styles.BillingForm}`}>
      <form className={styles.cart_form} onChange={handlePayment}>
        <h3>Billing</h3>

        <div className={styles.form_group}>
          <label>Card</label>

          <input type='text' placeholder='Card number' name='cardNumber' />
        </div>

        <div className={styles.form_group}>
          <label>Name</label>
          <input type='text' placeholder='Name on card' name='nameOnCard' />
        </div>

        <div className={`${styles.form_group} ${styles.card_date}`}>
          <label>Expiration Date</label>
          <input type='text' placeholder='MM/YY' name='dateOnCard' />
        </div>

        <div className={`${styles.form_group} ${styles.card_cvc}`}>
          <label>CVC</label>
          <input type='text' placeholder='CVC' name='cvc' />
        </div>
        <div className={styles.purchaseBtn}>
          <button onClick={takeInfo}> Purchase </button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
