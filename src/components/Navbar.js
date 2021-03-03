
import { Link } from "react-router-dom";
import FooterNavbar from "./FooterNavbar"




const Navbar = () => {
  return (
    <div>
       <nav >
            <Link to="/"><span>AllCars</span></Link>
            <FooterNavbar />  
      </nav>   
    </div> 
  );
}
 
export default Navbar;