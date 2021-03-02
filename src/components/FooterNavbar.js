
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const FooterNavbar = () => {
  return (
    <nav >
      
      <Link to="/deals">{<LocalOfferIcon />}</Link>
      <Link to="/">{<HomeIcon/>}</Link>
      <Link to="/about">{<InfoOutlinedIcon/>}</Link>
    </nav>
  );
}
 
export default FooterNavbar;