import { useContext, useEffect } from 'react';
import { CarContext } from '../contexts/CarContext';
import { CartContext } from '../contexts/CartContext';
import ReceiptCar from '../components/ReceiptCar';
import styles from '../css/Receipt.module.css';
import { useHistory } from 'react-router-dom';

const Receipt = () => {
  const { checkoutState, setCart } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    setCart([]);
  }, []);

  const goToHome = () => {
    history.push('/');
  };

  return (
    <div className={styles.receipt}>
      <h2>Receipt</h2>
      <h3>Thank you for your purchase ! </h3>
      <br />
      <p>Your Order(s) :</p>

      <div className={styles.receipt_content}>
        {/* <div className={styles.receipt_items}> */}
        {checkoutState.cars.map((car) => (
          <ReceiptCar key={car.vin} car={car} />
        ))}
        {/* </div> */}

        <div className={styles.receiptNote}>
          <p>
            Hello <b>{checkoutState.form.name}</b>. We have received your order.
          </p>
          <br />
          <p>
            {` Your address is ${checkoutState.form.address} and your number is
          ${checkoutState.form.phone}.`}
          </p>
          <br />
          <p>{`You chooses ${checkoutState.form.method} as a delivery methods`}</p>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={() => window.print()}>Print</button>
        <button onClick={goToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default Receipt;

// this is the form
// form.name
// name: '',
// email: '',
// phone: '',
// address: '',
// method: '',
