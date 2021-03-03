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
      <div className={styles.form_group}>
        <label htmlFor='search'>Search</label>
        <input type='text' className={styles.search_input} />
      </div>
      <button onClick={() => setshowFilters(!showFilters)}>Filters</button>
      {showFilters && (
        <>
          <SliderInput min={1000} max={1000000} type={'Price'} />
          <SliderInput min={1000} max={1000000} type={'Milage'} />
          <Filters />

          <span>icon</span>
        </>
      )}
    </form>
  );
};

export default SearchForm;
