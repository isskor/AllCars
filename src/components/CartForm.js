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
    <div>
      <form onChange={handleChange}>
        <h3>Shipping</h3>
        <div className={styles.form_group}>
          <label>Name</label>
          <input type='text' className={styles.cart_input} name='name' />
        </div>
        <div className={styles.form_group}>
          <label>E-mail:</label>
          <input type='text' className={styles.cart_input} name='email' />
        </div>
        <div className={styles.form_group}>
          <label>Phone number:</label>
          <input type='text' className={styles.cart_input} name='phone' />
        </div>
        <div className={styles.form_group}>
          <label>Address:</label>
          <input type='text' className={styles.cart_input} name='address' />
        </div>
        <div className={styles.form_group}>
          <div className={styles.radiotext}>
            <label>Pick up</label>
            <label>Delivery</label>
            <label>Express delivery</label>
          </div>
          <div className={styles.radio}>
            <input type='radio' value='Pick up' name='method' />
            <input type='radio' value='Delivery' name='method' />
            <input type='radio' value='Express delivery' name='method' />
          </div>
        </div>
      </form>

      <form className={styles.form} onChange={handlePayment}>
        <h3>Billing</h3>
        <label>Card</label>
        <input
          type='text'
          placeholder='Card number'
          className={styles.half}
          name='cardNumber'
        />

        <label>Name</label>
        <input
          type='text'
          placeholder='Name on card'
          className={styles.half}
          name='nameOnCard'
        />

        <label>Expiration Date</label>
        <input
          type='text'
          placeholder='MM/YY'
          className={styles.halfinput1}
          name='dateOnCard'
        />

        <label>CVC</label>
        <input
          type='text'
          placeholder='CVC'
          className={styles.halfinput}
          name='cvc'
        />
        <br />
        <button onClick={takeInfo}> Purchase </button>
      </form>
    </div>
  );
};

export default CartForm;
