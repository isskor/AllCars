import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import CartForm from '../components/CartForm';
import styles from '../css/CartPage.module.css' ;

const CartPage = () => {
    const { cart } = useContext(CartContext);
    const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
    return (
        <div className={styles.cartContainer}>
            <ul>
                {cart.map((cartItem) => (
                    <CartItem cartItem={cartItem} key={cartItem.vin} />
                ))}
            </ul>
            <div className='total'>
                <h4>Total</h4>
                <h3>{totalCost}​​​​​</h3>
            </div>
            <CartForm />
        </div>);
};

export default CartPage;
