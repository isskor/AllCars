import React from 'react';

const SearchForm = () => {
  return (
    <div className='search_wrapper'>
      <label htmlFor='search'>Search</label>
      <input type='text' className='search_input' />
      <label htmlFor='price'>Price</label>
      <input type='range' />
      <label htmlFor='Milage'>Milage</label>
      <input type='range' />
      <button>Filters</button>
      <span>icon</span>
    </div>
  );
};

export default SearchForm;
