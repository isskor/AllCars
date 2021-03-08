import { useState, useRef, useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import styles from '../css/SearchForm.module.css';
import ActiveFilters from './ActiveFilters';
import Filters from './Filters';
import SliderInput from './SliderInput';
import useOutsideClick from './useOutsideClick';
const SearchForm = () => {
  const filterRef = useRef();
  const [showFilters, setshowFilters] = useState(false);

  const { dispatch, filteredCarsObject } = useContext(CarContext);

  const handleClickOutside = () => {
    setshowFilters(false);
    console.log('click');
  };

  useOutsideClick(filterRef, handleClickOutside);
  return (
    <div className='' ref={filterRef}>
      <form
        className={styles.search_wrapper}
        onSubmit={(e) => e.preventDefault()}
      >
        <h3>Find Your Vintage Dream</h3>
        <div className={styles.form_group_search}>
          <span className={styles.form_group_label}>Search</span>
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

          <span className={styles.search_icon_sm}>icon</span>
        </div>
        <div className={styles.range_sliders}>
          <SliderInput min={100000} max={800000} type={'Price'} />
          <SliderInput min={0} max={70000} type={'Milage'} />
        </div>
        <div className={styles.filter_btn}>
          <button onClick={() => setshowFilters(!showFilters)}>
            {!showFilters ? 'Filters' : 'Close'}
          </button>
        </div>
        <div className={styles.search_icon_lg}>
          <span>icon</span>
        </div>
        <div
          className={`${styles.filters} ${showFilters ? styles.dropAnim : ''}`}
        >
          <div
            className={`${styles.line} ${showFilters ? styles.lineAnim : ''}`}
          ></div>
          {showFilters && (
            <>
              <div className={styles.range_sliders_sm}>
                <SliderInput min={100000} max={800000} type={'Price'} />
                <SliderInput min={0} max={70000} type={'Milage'} />
              </div>
              <Filters />
            </>
          )}
        </div>
      </form>
      <ActiveFilters />
    </div>
  );
};

export default SearchForm;
