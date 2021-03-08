import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import CartForm from '../components/CartForm';
import styles from '../css/CartPage.module.css' ;
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const CartPage = () => {
    const { cart } = useContext(CartContext);
    const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
    return (
        <div >
            <div><a href="#Home"><ArrowBackIcon /></a></div>
            <h2>Checkout</h2>
            <div className={styles.cartContainer}>
                <div className={styles.cartLeft}>
                    <ul>
                        {cart.map((cartItem) => (
                            <CartItem cartItem={cartItem} key={cartItem.vin} />
                        ))}
                    </ul>
                    <div className={styles.total}>
                        <h4>Total</h4>
                        <h3>{totalCost}​​​​​</h3>
                    </div>
                </div>
                <div className={styles.cartRight}>
                   <CartForm />
                </div>
            </div>   
        </div>);
};

export default CartPage;
