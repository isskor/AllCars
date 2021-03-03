
import { Link } from "react-router-dom";
import FooterNavbar from "./FooterNavbar"
import styles from "../css/Navbar.module.css" ;



const Navbar = () => {
  return (
    <div>
       <nav className={styles.mainNavbar}>
            <Link to="/"><span className={styles.logo}>AllCars</span></Link>
            <FooterNavbar />  
      </nav>   
    </div> 
  );
}
 
export default Navbar;