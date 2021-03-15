import { useRef, useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import useOutsideClick from './useOutsideClick';
// styles
import styles from '../css/Dropdown.module.css';

const Dropdown = ({ filterList, type, setIsOpen }) => {
  const dropDownRef = useRef();
  const { dispatch } = useContext(CarContext);
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const handleInsideClick = (item) => {
    setIsOpen(false);
    dispatch({
      type: 'FILTER_CATEGORY_ACTION',
      payload: {
        categoryType: type.toLowerCase(),
        categoryValue: item,
      },
    });
  };

  useOutsideClick(dropDownRef, handleClickOutside);

  return (
    <div className={styles.filter_list} ref={dropDownRef}>
      <ul>
        {filterList.map((item, i) => (
          <li
            key={i}
            className={styles.filter_item}
            onClick={() => handleInsideClick(item)
            }>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
