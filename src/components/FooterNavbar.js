import { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/FooterNavbar.module.css';
import { UserContext } from '../contexts/UserContext';
import NavDropdown from './NavDropdown';
import useOutsideClick from './useOutsideClick';
import { HomeOutlined, TagOutlined, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

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
          {<TagOutlined />}
          <span className={styles.iconName}>Deals</span>
        </Link>
        <Link to='/' onClick={closeDropdown}>
          {<HomeOutlined />}
          <span className={styles.iconName}>Home</span>
        </Link>
        <Link to='/about' onClick={closeDropdown}>
          {<InfoCircleOutlined />}
          <span className={styles.iconName}>About</span>
        </Link>
        {currentUser ? (
          <a
            className={styles.myAccount}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            {<UserOutlined />}
            <span className={styles.iconName}>My Page</span>
          </a>
        ) : (
          <Link to='/login' id={styles.login_container}>
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
