import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import styles from '../css/NavDropdown.module.css';
function NavDropdown() {
  const { setCurrentUser } = useContext(UserContext);
  return (
    <div className={styles.navDropdown}>
      <ul>
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
