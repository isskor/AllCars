import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ReceiptCar from '../components/ReceiptCar' ;
import styles from '../css/Receipt.module.css' ;
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Receipt = () => {
    const { checkoutState } = useContext(CartContext);
    const history = useHistory();

    const goToCart = () => {
        history.push("/cart");
    }
    console.log(checkoutState);
    console.log(checkoutState.cars); 

    return (
        
        <div className={styles.receipt}>
            <br/><br/><br/><br/><br/><br/><br/>
            <ArrowBackIcon  onClick={goToCart}/>
            <h2>Receipt</h2>
            <h3>Thank you for your purchase ! </h3><br/>
            <p>Your Order(s) :</p>
            
            {checkoutState.cars.map( car => (
                    <ReceiptCar key={car.vin} car={car}/>
            ))}  

            <div className={styles.receiptNote} >        
                <p>Hello <b>{checkoutState.form.name}</b>. We have received your order. </p><br/>
                <p>Your address is {checkoutState.form.address} and your number is {checkoutState.form.number} . </p> <br/>
                <p>You chooses {checkoutState.form.method} as a delivery methods</p>  
            </div> 
            <button>Print</button>       

        </div>
    );
}

export default Receipt ;


// this is the form
// form.name
// name: '',
// email: '',
// phone: '',
// address: '',
// method: '',