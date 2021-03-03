import { useState } from 'react';
import styles from '../css/SearchForm.module.css';
import Filters from './Filters';
const SearchForm = () => {
  const [showFilters, setshowFilters] = useState(false);
  console.log(showFilters);
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
          <Filters />

          <span>icon</span>
        </>
      )}
    </form>
  );
};

export default SearchForm;
