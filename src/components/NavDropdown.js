import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import styles from '../css/NavDropdown.module.css';
function NavDropdown({ closeDropdown }) {
  const { setCurrentUser } = useContext(UserContext);

  return (
    <div className={styles.navDropdown}>
      <div className={styles.closeNav} onClick={closeDropdown}>
        <span className={styles.closeNav_line1}></span>
        <span className={styles.closeNav_line2}></span>
      </div>
      <ul onClick={closeDropdown}>
        <Link to='/my-settings'>My settings</Link>

        <Link to='/my-purchases'>My Purchases</Link>
        <li onClick={() => setCurrentUser(null)} className='logout'>
          Log Out
        </li>
      </ul>
    </div>
  );
}

export default NavDropdown;