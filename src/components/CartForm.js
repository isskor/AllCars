import React from 'react';
import { useState, useContext, useEffect } from 'react';
import styles from '../css/CartForm.module.css';
import { UserContext } from '../contexts/UserContext';

const CartForm = ({ errors }) => {
  return (
    <div className={`${styles.cart_form} ${styles.checkout_form}`}>
      <h3>Shipping</h3>
      <div className={styles.form_group}>
        <label>Name</label>
        <input
          type='text'
          className={styles.cart_input}
          name='name'
          placeholder='Full name'
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.form_group}>
        <label>Address:</label>
        <input
          type='text'
          className={styles.cart_input}
          name='address'
          placeholder='Address'
        />
        {errors.address && (
          <span className={styles.error}>{errors.address}</span>
        )}
      </div>
      <div className={`${styles.form_group} ${styles.email}`}>
        <label>E-mail:</label>
        <input
          type='text'
          className={styles.cart_input}
          name='email'
          placeholder='E-mail'
        />
        {errors.mail && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={`${styles.form_group} ${styles.phone}`}>
        <label>Phone number:</label>
        <input
          type='text'
          className={styles.cart_input}
          name='phone'
          placeholder='Phone number'
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.form_group}>
        <h3>Delivery Options</h3>
        <div className={styles.radio}>
          <label>
            <b>Delivery</b> (1-2 weeks)
          </label>
          <input type='radio' value='Delivery' name='method' />
        </div>
        <div className={styles.radio}>
          <label>
            <b>Express delivery</b> (3-5 days)
          </label>
          <input type='radio' value='Express delivery' name='method' />
        </div>
        <div className={styles.radio}>
          <label>
            <b>Pick up</b> (at closest store)
          </label>
          <input type='radio' value='Pick up' name='method' />
        </div>
        {errors.method && <span className={styles.error}>{errors.method}</span>}
      </div>
    </div>
  );
};

export default CartForm;
