import { useState, useContext } from 'react';
import styles from '../css/SearchForm.module.css';
import Dropdown from './Dropdown';
import { CarContext } from '../contexts/CarContext';
const Filters = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { cars } = useContext(CarContext);
  console.log(cars);

  return (
    <div>
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
