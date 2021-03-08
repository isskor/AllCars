
import { Link } from "react-router-dom";
import FooterNavbar from "./FooterNavbar"
import styles from "../css/Navbar.module.css" ;
import CartIcon from './CartIcon';



const Navbar = () => {
  return (
    <div>
       <nav className={styles.mainNavbar}>
            <Link to="/"><span className={styles.logo}>AllCars</span></Link>
            <div className={styles.rightNavbar}>
              <FooterNavbar />  
              <CartIcon />
            </div>
      </nav>   
    </div> 
      
  );
};

export default Navbar;
