import React from 'react';
import styles from '../css/cart.module.css';

const Cart = () => {
    return (
        <div>
            <h1>Checkout</h1>
            <form >
                <label>
                    Name:<br />
                    <input  type="text" className={styles.cart_input} />
                </label> <br />
                <label>
                    Name:<br />
                    <input  type="text" className={styles.cart_input} />
                </label> <br />
                <label>
                    Name:<br />
                    <input  type="text" className={styles.cart_input} />
                </label>
                <br />
                <label>
                    Name:<br />
                    <input  type="text" className={styles.cart_input} />
                </label>
                <br />
                <br />
                <button> Purchase </button>
            </form>
        </div>
    )
}

export default Cart
