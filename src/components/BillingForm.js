import React from 'react';
import { useState, useContext } from 'react';
import styles from '../css/CartForm.module.css';
import { CartContext } from '../contexts/CartContext';

const BillingForm = () => {
  const { handleCheckout } = useContext(CartContext);
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
    handleCheckout(paymentInfo);
  };

  return (
    <div className={styles.cartPage}>
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
