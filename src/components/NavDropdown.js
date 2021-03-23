import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link, useHistory } from 'react-router-dom';
import styles from '../css/NavDropdown.module.css';
function NavDropdown({ closeDropdown }) {
  const { setCurrentUser } = useContext(UserContext);
  const history = useHistory();

  const handleClick = () => {
    setCurrentUser(null);
    history.push("/");
    alert("You're logged out!");

  }

  return (
    <div className={styles.navDropdown}>
      <div className={styles.closeNav} onClick={closeDropdown}>
        <span className={styles.closeNav_line1}></span>
        <span className={styles.closeNav_line2}></span>
      </div>
      <ul onClick={closeDropdown}>
        <Link to='/user-page'>My Page</Link>
        <Link to='/my-settings'>My Settings</Link>
        <li onClick={handleClick} className='logout'>
          Log Out
        </li>
      </ul>
    </div>
  );
}

export default NavDropdown;
