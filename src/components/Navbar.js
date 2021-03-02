
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ShoppingCart from '@material-ui/icons/ShoppingCart';




const Navbar = () => {
  return (
    <div>
        
       <nav >
            <span><a href="/">AllCars</a></span>
            <Link to="/deals">{<LocalOfferIcon />}Deals</Link>
            <Link to="/">{<HomeIcon/>}Home</Link>
            <Link to="/about">{<InfoOutlinedIcon/>}About</Link>
            <Link to="/cart">{<ShoppingCart/>}Cart</Link>
      </nav>
     
    </div>
    
    
  );
}
 
export default Navbar;