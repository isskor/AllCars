import { useState, useContext } from 'react';
import styles from '../css/SearchForm.module.css';
import Dropdown from './Dropdown';
import { CarContext } from '../contexts/CarContext';
const Filters = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { filters } = useContext(CarContext);
  console.log(filters);

  return (
    <div>
      {filters.map((filterList, i) => (
        <div className={styles.form_group_select}>
          <label htmlFor=''>{filterList.type}</label>
          <button onClick={() => setIsOpen(isOpen === i ? false : i)}>
            {filterList.type}
          </button>
          {isOpen === i && <Dropdown filterList={filterList.list} />}
        </div>
      ))}
    </div>
  );
};

export default Filters;
