import { useRef } from 'react';
import useOutsideClick from './useOutsideClick';
// styles
import styles from '../css/Dropdown.module.css';

const Dropdown = ({ filterList, setIsOpen }) => {
  const dropDownRef = useRef();

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOutsideClick(dropDownRef, handleClickOutside);

  return (
    <div className={styles.filter_list} ref={dropDownRef}>
      <ul>
        {filterList.map((item) => (
          <li className={styles.filter_item} onClick={() => setIsOpen(false)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
