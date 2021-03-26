import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import styles from '../css/ActiveFilters.module.css';
import { CloseCircleOutlined } from '@ant-design/icons';

const ActiveFilters = () => {
  const { dispatch, filteredCarsObject } = useContext(CarContext);
  const { make, model, year } = filteredCarsObject.categories;

  const uniqueActiveFilters = new Set([...make, ...model, ...year]);
  const activeFilters = [...uniqueActiveFilters];

  const handleRemoveFilter = (item) => {
    dispatch({
      type: 'FILTER_REMOVE_CATEGORY_ACTION',
      payload: item,
    });
  };

  return (
    <>
      {make && (
        <div className={styles.active_filters}>
          <ul>
            {activeFilters.map((item, i) => (
              <div
                key ={i}
                className={styles.active_filter}
                onClick={() => handleRemoveFilter(item)}
              >
                <CloseCircleOutlined />
                <li key={i}>{item}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ActiveFilters;
