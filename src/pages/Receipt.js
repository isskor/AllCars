import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
//import ReceiptCar from '../components/ReceiptCar' ;


const Receipt = () => {
    const { checkoutState } = useContext(CartContext);
    //const {cars}  = checkoutState.cars ;
    //const [form] = checkoutState.form ;
   console.log(checkoutState);

    return (
        
        <div>
            <h2>Receipt</h2>

           {/*  {checkoutState.cars.map( car => (
                    <ReceiptCar key={car.vin} car={car}/>
            ))}  */}
                            

            
            
            
        </div>
    );
}

export default Receipt ;