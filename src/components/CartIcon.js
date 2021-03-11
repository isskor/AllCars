import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import styles from '../css/CartIcon.module.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
const CartIcon = () => {
  const { cart } = useContext(CartContext);
  
  const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
  
  //   console.log(cart[0].price);
  return (
    <div className={styles.cartIcon}>
      <span className={styles.cost}>${totalCost}</span>
      <Link to='/cart' className={styles.cart}>
        <ShoppingCartOutlined />
      </Link>
      <Link to='/cart' className={styles.quantity}>{cart.length}</Link>
    </div>
  );
};

export default CartIcon;
