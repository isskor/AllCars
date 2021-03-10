import React from 'react';
import { useState, useContext } from 'react';
import styles from '../css/CartForm.module.css';
import { CartContext } from '../contexts/CartContext';

const CartForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    method: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    nameOnCard: '',
    dateOnCard: '',
    cvc: '',
  });

  const { handleCheckout } = useContext(CartContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handlePayment = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: [e.target.value] });
  };

  const takeInfo = (e) => {
    e.preventDefault();
    handleCheckout(form, paymentInfo);
  };

  return (
    <div className={styles.cartPage}>
      <form className={styles.cart_form} onChange={handleChange}>
        <h3>Shipping</h3>
        <div className={styles.form_group}>
          <label>Name</label>
          <input type='text' className={styles.cart_input} name='name' />
        </div>
        <div className={styles.form_group}>
          <label>Address:</label>
          <input type='text' className={styles.cart_input} name='address' />
        </div>
        <div className={`${styles.form_group} ${styles.email}`}>
          <label>E-mail:</label>
          <input type='text' className={styles.cart_input} name='email' />
        </div>
        <div className={`${styles.form_group} ${styles.phone}`}>
          <label>Phone number:</label>
          <input type='text' className={styles.cart_input} name='phone' />
        </div>

        <div className={styles.form_group}>
          <h3>Delivery Options</h3>
          <div className={styles.radio}>
            <label>Delivery</label>
            <input type='radio' value='Pick up' name='method' />
          </div>
          <div className={styles.radio}>
            <label>Express delivery</label>
            <input type='radio' value='Delivery' name='method' />
          </div>
          <div className={styles.radio}>
            <label>Pick up</label>

            <input type='radio' value='Express delivery' name='method' />
          </div>
        </div>
      </form>

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

export default CartForm;
