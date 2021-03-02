import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styles from '../css/CartIcon.module.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const CartIcon = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
  console.log(totalCost);
  //   console.log(cart[0].price);
  return (
    <div className={styles.cartIcon}>
      <span className={styles.cost}>${totalCost}</span>
      <ShoppingCartOutlinedIcon
        className={styles.cart}
      ></ShoppingCartOutlinedIcon>
      <span className={styles.quantity}>{cart.length}</span>
    </div>
  );
};

export default CartIcon;
