import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ReceiptCar from '../components/ReceiptCar' ;


const Receipt = () => {
    const { checkoutState } = useContext(CartContext);
    
    console.log(checkoutState);
    console.log(checkoutState.cars); 

    


    return (
        
        <div>
            <br/><br/><br/><br/><br/><br/><br/>
            <h2>Receipt</h2>
            
           {checkoutState.cars.map( car => (
                    <ReceiptCar key={car.vin} car={car}/>
            ))}  

            <div>
                <h3>Thank you for your purchase </h3>
                <p>Hello {checkoutState.form.name}. We received your order </p>
                <p>Your address is {checkoutState.form.address} and your number is {checkoutState.form.number} . </p>
                <p>You chooses {checkoutState.form.method} as a delivery methods</p>
                
            </div>         

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