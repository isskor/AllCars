import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

import styles from '../css/CarSearchInput.module.css';

const CarSearchInput = () => {
  const { dispatch, filteredCarsObject } = useContext(CarContext);

  return (
    <div className={styles.search_group}>
      <span className={styles.search_label}>Search</span>
      <input
        type='text'
        className={styles.search_input}
        value={filteredCarsObject.search}
        onChange={(e) =>
          dispatch({
            type: 'FILTER_SEARCH_ACTION',
            payload: e.target.value,
          })
        }
      />
    </div>
  );
};

export default CarSearchInput;
