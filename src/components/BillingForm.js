import React from 'react';
import styles from '../css/CartForm.module.css';

const BillingForm = ({ errors }) => {
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
