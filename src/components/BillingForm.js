import React from 'react';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../css/CartForm.module.css';
import { CartContext } from '../contexts/CartContext';

const BillingForm = ({ errors }) => {
  // const history = useHistory();
  // const { handleCheckout, checkoutForm, cart } = useContext(CartContext);
  // const [paymentInfo, setPaymentInfo] = useState({
  //   cardNumber: '',
  //   nameOnCard: '',
  //   dateOnCard: '',
  //   cvc: '',
  // });
  // const handlePayment = (e) => {
  //   setPaymentInfo({ ...paymentInfo, [e.target.name]: [e.target.value] });
  // };

  // const takeInfo = (e) => {
  //   e.preventDefault();
  //   console.log(cart.length < 1);
  //   console.log(checkoutForm);
  //   if (cart.length < 1) {
  //     return;
  //   }

  //   handleCheckout(paymentInfo);
  //   history.push('/receipt');
  // };

  return (
    <div className={`${styles.cart_form} ${styles.billing_form}`}>
      <h3>Billing</h3>

      <div className={styles.form_group}>
        <label>Card</label>

        <input type='text' placeholder='Card number' name='cardNumber' />
        {errors.cardNumber && (
          <span className={styles.error}>{errors.cardNumber}</span>
        )}
      </div>

      <div className={styles.form_group}>
        <label>Name</label>
        <input type='text' placeholder='Name on card' name='nameOnCard' />
        {errors.nameOnCard && (
          <span className={styles.error}>{errors.nameOnCard}</span>
        )}
      </div>

      <div className={`${styles.form_group} ${styles.card_date}`}>
        <label>Expiration Date</label>
        <input type='text' placeholder='MM/YY' name='dateOnCard' />
        {errors.dateOnCard && (
          <span className={styles.error}>{errors.dateOnCard}</span>
        )}
      </div>

      <div className={`${styles.form_group} ${styles.card_cvc}`}>
        <label>CVC</label>
        <input type='text' placeholder='CVC' name='cvc' />
        {errors.cvc && <span className={styles.error}>{errors.cvc}</span>}
      </div>
      <div className={styles.purchaseBtn}>
        <button type='submit'> Purchase </button>
      </div>
    </div>
  );
};

export default BillingForm;
