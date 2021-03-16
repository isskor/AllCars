import React from 'react';
import { useState, useContext, useEffect } from 'react';
import styles from '../css/CartForm.module.css';
import { UserContext } from '../contexts/UserContext';

const CartForm = () => {
  const { setCheckoutForm } = useContext(UserContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    method: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  useEffect(() => {
    setCheckoutForm(form);
    console.log(form);
  }, [form]);

  return (
    <div className={styles.cartPage}>
      <form className={styles.cart_form} onChange={handleChange}>
        <h3>Shipping</h3>
        <div className={styles.form_group}>
          <label>Name</label>
          <input type='text' className={styles.cart_input} name='name' placeholder="Full name" />
        </div>
        <div className={styles.form_group}>
          <label>Address:</label>
          <input type='text' className={styles.cart_input} name='address' placeholder="Address" />
        </div>
        <div className={`${styles.form_group} ${styles.email}`}>
          <label>E-mail:</label>
          <input type='text' className={styles.cart_input} name='email' placeholder="E-mail" />
        </div>
        <div className={`${styles.form_group} ${styles.phone}`}>
          <label>Phone number:</label>
          <input type='text' className={styles.cart_input} name='phone' placeholder="Phone number" />
        </div>

        <div className={styles.form_group}>
          <h3>Delivery Options</h3>
          <div className={styles.radio}>
            <label><b>Delivery</b> (1-2 weeks)</label>
            <input type='radio' value='Delivery' name='method' />
          </div>
          <div className={styles.radio}>
            <label><b>Express delivery</b> (3-5 days)</label>
            <input type='radio' value='Express delivery' name='method' />
          </div>
          <div className={styles.radio}>
            <label><b>Pick up</b> (at closest store)</label>
            <input type='radio' value='Pick up' name='method' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartForm;
