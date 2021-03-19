import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

import FooterNavbar from './FooterNavbar';
import styles from '../css/Navbar.module.css';
import CartIcon from './CartIcon';

const Navbar = () => {
  const { dispatch } = useContext(CarContext);
  const { currentUser } = useContext(UserContext);

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
          {!currentUser && (
            <div className={styles.login_btn}>
              <Link to='/login'>
                <span className={styles.iconName}>Login/Register</span>
              </Link>
            </div>
          )}
          <CartIcon />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
