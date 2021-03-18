import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/NavDropdown.module.css';
function NavDropdown() {
  return (
    <div className={styles.navDropdown}>
      <ul>
        <li>
          <Link to='/my-settings'>My settings</Link>
        </li>
        <li>
          <Link to='/my-settings'>My Purchases</Link>
        </li>
        <li className='logout'>Log Out</li>
      </ul>
    </div>
  );
}

export default NavDropdown;
