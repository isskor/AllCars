import React from 'react';
import styles from '../css/SearchForm.module.css';
import Dropdown from './Dropdown';

const Filters = () => {
  return (
    <div>
      <div className={styles.form_group}>
        <label htmlFor='price'>Price</label>
        <input type='range' />
      </div>
      <div className={styles.form_group}>
        <label htmlFor='Milage'>Milage</label>
        <input type='range' />
      </div>
      <div className={styles.form_group_select}>
        <label htmlFor=''>Cars</label>
        <select name='' id=''>
          <option value=''>cars</option>
        </select>
      </div>
      <div className={styles.form_group_select}>
        <label htmlFor=''>Cars</label>
        <select name='' id=''>
          <option value=''>cars</option>
        </select>
      </div>
      <div className={styles.form_group_select}>
        <label htmlFor=''>Cars</label>
        <Dropdown />
      </div>
    </div>
  );
};

export default Filters;
