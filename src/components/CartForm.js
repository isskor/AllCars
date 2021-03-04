import React from 'react';
import styles from '../css/cart.module.css';

const CartForm = () => {
    return (
        <div>
            <h1>Checkout</h1>
            <form >
                <label>
                    Full name:<br />
                    <input type="text" className={styles.cart_input} />
                </label> <br />
                <label>
                    E-mail:<br />
                    <input type="text" className={styles.cart_input} />
                </label> <br />
                <label>
                    Phone number:<br />
                    <input type="text" className={styles.cart_input} />
                </label>
                <br />
                <label>
                    Address:<br />
                    <input type="text" className={styles.cart_input} />
                </label>
                <br />
                <div className={styles.radiotext}>
                    <label>Pick up</label>
                    <label>Delivery</label>
                    <label>Express delivery</label>
                </div>
                <div className={styles.radio}>
                    <input type="radio" value="Pick up" />
                    <input type="radio" value="Delivery" /> 
                    <input type="radio" value="Express delivery" /> 
                </div>
                <br />
                </form>

                <form className={styles.form}>

                <input type="text" placeholder="Card number" className={styles.half}/>
                <input type="text" placeholder="Name on card" className={styles.half} />

                <input type="text" placeholder="MM/YY" className={styles.halfinput1} />
                <input type="text" placeholder="CVC" className={styles.halfinput} />
                <br />
                <button> Purchase </button>
            </form>
        </div>
    )
}

export default CartForm
