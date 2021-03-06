import { useState, useContext } from 'react';
import styles from '../css/Filters.module.css';
import Dropdown from './Dropdown';
import { CarContext } from '../contexts/CarContext';

const Filters = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { filters, dispatch } = useContext(CarContext);

  return (
    <div className={styles.filter_container}>
      {filters.map((filterList, i) => (
        <div className={styles.form_group_select} key={i}>
          <span className={styles.filterList_type}>{filterList.type}</span>
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
      <div className={styles.reset_btn}>
        <button onClick={() => dispatch({ type: 'FILTER_RESET_ACTION' })}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
