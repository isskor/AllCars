import { useState, useContext } from 'react';
import styles from '../css/Filters.module.css';
import Dropdown from './Dropdown';
import { CarContext } from '../contexts/CarContext';
const Filters = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { filters, dispatch } = useContext(CarContext);
  console.log(filters);

  return (
    <div className={styles.filter_container}>
      {filters.map((filterList, i) => (
        <div className={styles.form_group_select}>
          <span htmlFor={filterList.type}>{filterList.type}</span>
          <button
            className={styles.option_btn}
            onClick={() => setIsOpen(isOpen === i ? false : i)}
          >
            {filterList.active ? filterList.active : 'choose'}
          </button>
          {isOpen === i && (
            <Dropdown
              filterList={filterList.list}
              setIsOpen={setIsOpen}
              type={filterList.type}
            />
          )}
        </div>
      ))}
      <div className={styles.option_btn}>
        <button onClick={() => dispatch({ type: 'RESET_FILTERS_ACTION' })}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
