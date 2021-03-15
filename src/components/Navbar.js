import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { Link } from 'react-router-dom';

import FooterNavbar from './FooterNavbar';
import styles from '../css/Navbar.module.css';
import CartIcon from './CartIcon';

const Navbar = () => {
  const { dispatch } = useContext(CarContext);

  const resetFilters = () => {
    dispatch({ type: 'FILTER_RESET_ACTION' });
  };

  return (
    <div>
      <nav className={styles.mainNavbar}>
        <Link to='/' onClick={resetFilters}>
          <span className={styles.logo}>AllCars</span>
        </Link>
        <div className={styles.rightNavbar}>
          <FooterNavbar />
          <CartIcon />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
