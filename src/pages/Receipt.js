import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ReceiptCar from '../components/ReceiptCar' ;


const Receipt = () => {
    const { checkoutState } = useContext(CartContext);
    const [ cars ] = checkoutState.cars ;
    
    return (
        
        <div>
            <h2>Receipt</h2>

            { cars.map( car => (
                <ReceiptCar key={car.vin} car={car}/>
            ))} 

            <p>{checkoutState.cars[0].make}</p>
            
            
        </div>
    );
}

export default Receipt ;