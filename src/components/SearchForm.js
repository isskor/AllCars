import { useState, useRef } from 'react';
import styles from '../css/SearchForm.module.css';
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
    <form
      className={styles.search_wrapper}
      onSubmit={(e) => e.preventDefault()}
    >
      <h3>Find Your Vintage Dream</h3>
      <div className={styles.form_group_search}>
        <span className={styles.form_group_label}>Search</span>
        <input type='text' className={styles.search_input} />

        <span className={styles.search_icon_sm}>icon</span>
      </div>
      <div className={styles.range_sliders}>
        <SliderInput min={100000} max={800000} type={'Price'} />
        <SliderInput min={1000} max={70000} type={'Milage'} />
      </div>
      <div className={styles.filter_btn} ref={filterRef}>
        <button onClick={() => setshowFilters(!showFilters)}>
          {!showFilters ? 'Filters' : 'Close'}
        </button>
        {showFilters && (
          <>
            <div className={styles.range_sliders_sm}>
              <SliderInput min={100000} max={800000} type={'Price'} />
              <SliderInput min={1000} max={70000} type={'Milage'} />
            </div>
            <Filters />
          </>
        )}
      </div>
      <div className={styles.search_icon_lg}>
        <span>icon</span>
      </div>
    </form>
  );
};

export default SearchForm;
