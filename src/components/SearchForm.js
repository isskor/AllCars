import { useState } from 'react';
import styles from '../css/SearchForm.module.css';
import Filters from './Filters';
import SliderInput from './SliderInput';
const SearchForm = () => {
  const [showFilters, setshowFilters] = useState(false);

  return (
    <form
      className={styles.search_wrapper}
      onSubmit={(e) => e.preventDefault()}
    >
      <h3>Find Your Vintage Dream</h3>
      <div className={styles.form_group}>
        <span className={styles.form_group_label}>Search</span>
        <input type='text' className={styles.search_input} />

        <span>icon</span>
      </div>
      <button
        className={styles.filter_btn}
        onClick={() => setshowFilters(!showFilters)}
      >
        {!showFilters ? 'Filters' : 'Close'}
      </button>
      {showFilters && (
        <>
          <SliderInput min={1000} max={1000000} type={'Price'} />
          <SliderInput min={1000} max={1000000} type={'Milage'} />
          <Filters />
        </>
      )}
    </form>
  );
};

export default SearchForm;
