import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


const Receipt = () => {
    const { checkoutState } = useContext(CartContext);

    return (
        <div>
            <h2>Receipt</h2>
            <p>{checkoutState.cars}</p>
        </div>
    );
}

export default Receipt ;