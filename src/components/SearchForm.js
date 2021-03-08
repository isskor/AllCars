import { useState, useRef } from 'react';
import styles from '../css/SearchForm.module.css';
import ActiveFilters from './ActiveFilters';
import CarSearchInput from './CarSearchInput';
import Filters from './Filters';
import SliderInput from './SliderInput';
import useOutsideClick from './useOutsideClick';
const SearchForm = () => {
  const filterRef = useRef();
  const [showFilters, setshowFilters] = useState(false);

  const handleClickOutside = () => {
    setshowFilters(false);
    console.log('click');
  };

  useOutsideClick(filterRef, handleClickOutside);
  return (
    <div className={styles.search_wrapper} ref={filterRef}>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>Find Your Vintage Dream</h3>
        <div className={styles.form_group_search}>
          <CarSearchInput />
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
        <div className={styles.filters}>
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
