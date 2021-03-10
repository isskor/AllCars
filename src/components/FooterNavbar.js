import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import styles from '../css/FooterNavbar.module.css';

const FooterNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/deals'>
        {<LocalOfferIcon />}
        <span className={styles.iconName}>Deals</span>
      </Link>
      <Link to='/'>
        {<HomeIcon />}
        <span className={styles.iconName}>Home</span>
      </Link>
      <Link to='/about'>
        {<InfoOutlinedIcon />}
        <span className={styles.iconName}>About</span>
      </Link>
    </nav>
  );
};

export default FooterNavbar;
