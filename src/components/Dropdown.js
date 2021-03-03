import styles from '../css/Dropdown.module.css';

const Dropdown = ({ filterList, setIsOpen }) => {
  console.log(filterList);
  return (
    <div className={styles.filter_list}>
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
