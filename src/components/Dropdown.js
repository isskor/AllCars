import React from 'react';

const Dropdown = ({ filterList }) => {
  console.log(filterList);
  return (
    <div>
      <ul>
        {filterList.map((item) => (
          <li className='filterItem'>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
