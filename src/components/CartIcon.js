import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import styles from '../css/CartIcon.module.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartIcon = () => {
  const { cart } = useContext(UserContext);
  
  const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
  
  return (
    <Link to='/cart' className={styles.cartIcon}>
      <span className={styles.cost}>${totalCost}</span>
      <span className={styles.cart}>
        <ShoppingCartOutlined />
      </span>
      <span className={styles.quantity}>{cart.length}</span>
    </Link>
  );
};

export default CartIcon;
