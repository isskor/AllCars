import { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PersonIcon from '@material-ui/icons/Person';
import styles from '../css/FooterNavbar.module.css';
import { UserContext } from '../contexts/UserContext';
import NavDropdown from './NavDropdown';
import useOutsideClick from './useOutsideClick';

const FooterNavbar = () => {
  const { currentUser } = useContext(UserContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navDropDownRef = useRef();

  const closeDropdown = (e) => {
    setOpenDropdown(false);
  };

  useOutsideClick(closeDropdown, navDropDownRef);
  return (
    <div className={styles.nav_container} ref={navDropDownRef}>
      <nav className={styles.navbar}>
        <Link to='/deals' onClick={closeDropdown}>
          {<LocalOfferIcon />}
          <span className={styles.iconName}>Deals</span>
        </Link>
        <Link to='/' onClick={closeDropdown}>
          {<HomeIcon />}
          <span className={styles.iconName}>Home</span>
        </Link>
        <Link to='/about' onClick={closeDropdown}>
          {<InfoOutlinedIcon />}
          <span className={styles.iconName}>About</span>
        </Link>
        {currentUser ? (
          <div
            className={styles.myAccount}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            {<PersonIcon />}
            <span className={styles.iconName}>My Page</span>
          </div>
        ) : (
          <Link to='/login' className={styles.login_container}>
            <span className={`${styles.iconName} ${styles.login_btn}`}>
              Log in / <span> Register </span>
            </span>
          </Link>
        )}
      </nav>
      {currentUser && (
        <>{openDropdown && <NavDropdown closeDropdown={closeDropdown} />}</>
      )}
    </div>
  );
};

export default FooterNavbar;
