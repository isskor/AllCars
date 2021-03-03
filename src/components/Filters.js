import { useState, useContext } from 'react';
import styles from '../css/SearchForm.module.css';
import Dropdown from './Dropdown';
import { CarContext } from '../contexts/CarContext';
const Filters = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { cars } = useContext(CarContext);
  console.log(cars);

  const getFilters = (type) => {
    const filterSet = new Set(cars.map((c) => c[type]));
    const newFilters = [...filterSet].sort((a, b) => (a < b ? -1 : 1));
    return newFilters;
  };
  const makes = getFilters('make');
  const models = getFilters('model');
  const years = getFilters('year');

  console.log(makes);
  console.log(models);
  console.log(years);
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
